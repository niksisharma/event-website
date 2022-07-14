function validation()
{
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const nationality = document.getElementById('country');
    const form = document.getElementById('form');
    const day1 = document.getElementById('day1');
    const day2 = document.getElementById('day2');
    const day3 = document.getElementById('day3');
    
    if(!name.value)
    {
        alert('Please enter your name')
        name.focus();
    }

    if (phone.value.length != 10 )
    {
        alert('Phone number should be 10 digits long');
        phone.focus();
        return false;
    }

    if (nationality.value == '0'){
        alert('Select Country');
        nationality.focus();
        return false;
    }

    if (occupation.value == '0'){
        alert('Select an option(Student/Professional)');
        occupation.focus();
        return false;
    }

    if(!day1.checked && !day2.checked && !day3.checked)
{
    alert('Select at least 1 day');
    return false;
}
    
    return true;
}
