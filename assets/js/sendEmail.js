function sendMail(contactForm) {
    emailjs.send("service_cs8licn", "rosie", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCES", response)
        },
        function(error) {
            console.log("FAILED", error)
        }
    )
}