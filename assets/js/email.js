function sendMail()
{
    var templateParams = {
        from_name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("subject").value
    }
    emailjs.send(service_flpofzf, template_mctvtds, templateParams, user_6wV3npovXhIWDPBmLQDUT).then(function (res) 
    {
        console.log(res.status);
    });
}

// service_flpofzf
// template_mctvtds