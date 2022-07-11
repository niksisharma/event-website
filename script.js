const name = document.getElementById('name');
const email = document.getElementById('email');
const nationality = document.getElementById('nationality');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) =>  {
    let messages = [];
    if (phone.value.length != 10){
        messages.push('Phone number should be 10 digits long');
    }

    if (occupation.value === 'Select Option'){
        messages.push('Select Option (Student/Professional)');
    }

    if (country.value === 'Select Country'){
        messages.push('Select Nationality');
    }

    if (messages.length > 0) {
        e.preventDefault();
        errorElement.innerText = messages.join(', ');
    }
}
)
