// additional information for menu items
const additionalInfo = {
    'Country Eggs Benedict':{
        title: 'Coutry Eggs Benedict',
        description: ' A delicious breakfst dish made with poached eggs, sausage, and hollandaise sauce served over and fluffy biscuit'
    },
     'Halwa Puri':{
        title: 'Halwa Puri',
        description: 'A traditional Pakastani breakfast dish consisting of halwa (sweet semolina pudding) and puri (deep-fried bread).'
     },
     'Breakfast Bahn Mi':{
        title: 'Breakfast Bahn Mi',
        description: 'A Vietnamese-inspired breakfast sandwich filled with eggs, pickled vegetables, and savory toppings.'
     },
     'Crawfish Etouffee':{
        title: 'Crawfish Etouffee',
        description: 'Crawfish simmered in a creamy sauce made from a light or blond roux, served over rice.'
     },
     'Lamb Gyro w/ Fries':{
        title: 'Lamb Gyro w/ Fries',
        description: 'Roasted lamb, tomato, onion, and tzatziki served in pita with a side of seasoned fries.'
     },
     'Flautas':{
        title: 'Flauts',
        description: 'Chicken or beef rolled in a corn tortilla and deep-fried until golden brown. Served with a side of rice and beans.'
     },
     'Tofu Pad Thai':{
        title: 'Tofu Pad Thai',
        description: 'Thai noodle stir fry with a sweet and savory sour sauce topped with crushed penauts and crispy tofu.'
     },
     'Curry w/ Garlic Naan':{
        title: 'Curry w/ Garlic Naan',
        description: 'Creamy masala sauce over chicken and vegetables with fluffy garlic naan on the side.'
     },
     'Pot Roast':{
        title: 'Pot Roast',
        description: 'Slow cooked beef and vegetables served with a side of mashed potatoes and carrots.'
     }
     
};

// Function that displays pop up info

function displayAdditionalInfo(menuItem, container) {
    const infoContainer = document.createElement('div');
    infoContainer.classList.add('image-info');

    const titleElement = document.createElement('h3');
    titleElement.textContent = additionalInfo[menuItem].title;

    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = additionalInfo[menuItem].description;

    infoContainer.appendChild(titleElement);
    infoContainer.appendChild(descriptionElement);

    container.appendChild(infoContainer);
}

// event listeners to each image container

const imageContainers = document.querySelectorAll('[id="image"]');
imageContainers.forEach(container => {
    const menuItem =
    container.nextElementSibling.querySelector('h4').textContent.trim();

    container.addEventListener('mouseenter', () => {
        displayAdditionalInfo(menuItem, container.parentElement);
    });
    container.addEventListener('mouseleave', () => {
        const info = container.parentElement.querySelector('.image-info');
        if (info){
            info.remove();
        }
    });
});


//functions to validate input details.//
var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var phoneError = document.getElementById('phone-error');
var addressError = document.getElementById('address-error');

function validateName(){
    var name = document.getElementById('contact-name').value;

    if(name.length == 0){
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write first & last name';
        return false;
    }
    nameError.innerHTML = '<i class="fas fa-check-circle"></i>'; 
    return true;
}

function validatePhone(){
    var phone = document.getElementById('contact-phone').value;
    
    if(phone.length == 0){
        phoneError.innerHTML = 'Phone # is required';
        return false;
    }
    if(phone.length !== 10){
        phoneError.innerHTML = 'Phone # should be 10 digits';
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = 'Only digits please';
        return false;
    }

    phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}    

function validateEmail(){
    var email = document.getElementById('contact-email').value;

    if(email.length == 0){
        emailError.innerHTML = 'Email is required';
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
            emailError.innerHTML = 'Email Invalid'
            return false;
    }

    emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateAddress(){
    var address = document.getElementById('contact-address').value;

    if(address.length == 0){
        addressError.innerHTML = 'Address is required'
        return false;
    }

    addressError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}
//alert message & confirmation that all inputs are valid//
function alertMessage() {
    var nameValid = validateName();
    var emailValid = validateEmail();
    var phoneValid = validatePhone();
    var addressValid = validateAddress();

    if (nameValid && emailValid && phoneValid && addressValid) {
        alert("Order has been submitted!");
    }
}