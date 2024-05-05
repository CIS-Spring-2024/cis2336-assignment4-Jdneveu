const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files 
app.use(express.static('public'));

// Handle GET request to serve the order form
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/order.html');
});

// Handle POST request for form submission
app.post('/submit-order', (req, res) => {
    const { item, quantity, orderType, contactName, contactEmail, contactPhone, contactAddress } = req.body;

    // Validate form inputs
    if (!contactName || !contactEmail || !contactPhone || !contactAddress || !item || !quantity || !orderType) {
        return res.status(400).send('All fields are required.');
    }

    if (isNaN(parseInt(quantity)) || parseInt(quantity) <= 0) {
        return res.status(400).send('Quantity must be a positive number.');
    }

    // Calculate total amount based on item and quantity
    const itemPrice = getItemPrice(item);
    const totalAmount = itemPrice * parseInt(quantity);

    // Send back the total amount as JSON response
    res.status(200).json({ totalAmount });
});


function getItemPrice(item) {
    // Define item prices 
    const prices = {
        'Country Eggs Benedict': 10,
        'Halwa Puri': 8,
        'Breakfast Bahn Mi': 12,
        'Crawfish Etouffee': 10,
        'Lamb Gyro w/Fries': 9,
        'Flautas': 10,
        'Tofu Pad Thai': 8,
        'Curry w/Garlic Naan': 8,
        'Pot Roast': 12,
    };

    return prices[item] || 0; // Return item price or 0 if item not found
}

// Handle GET request for order confirmation page
app.get('/order-confirmation', (req, res) => {
    const { totalAmount } = req.query;
    res.send(`<h1>Order Confirmation</h1><p>Total Amount: $${totalAmount}</p>`);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
