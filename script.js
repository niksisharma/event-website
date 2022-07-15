function validation()
{
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const nationality = document.getElementById('country');
    const form = document.getElementById('form');
    const day1 = document.getElementById('day1');
    const day2 = document.getElementById('day2');
    const day3 = document.getElementById('day3');
    const emailRegexp = new RegExp(/^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i)
    
    if(!name.value)
    {
        alert('Please enter your name');
        name.focus();
        return false;
    }

    if(!emailRegexp.test(email.value))
    {
        alert('Please enter valid email');
        email.focus();
        return false;
    }
      
    if (phone.value.length != 10 )
    {
        alert('Please enter valid (10 digits long) phone number');
        phone.focus();
        return false;
    }

    if (nationality.value == '0'){
        alert('Please Select Country');
        nationality.focus();
        return false;
    }

    if (occupation.value == '0'){
        alert('Please Select an option(Student/Professional)');
        occupation.focus();
        return false;
    }

    if(!day1.checked && !day2.checked && !day3.checked)
    {
    alert('Please Select at least 1 day');
    return false;
    }
    
    return true;
}
