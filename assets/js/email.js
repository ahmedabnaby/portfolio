function sendMail()
{
    var templateParams = {
        from_name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    }
    emailjs.send('service_flpofzf', 'template_mctvtds', templateParams).then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
     }, function(error) {
        console.log('FAILED...', error);
     });
}

// service_flpofzf
// template_mctvtds