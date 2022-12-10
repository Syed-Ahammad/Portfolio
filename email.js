 document.getElementById('contact_form').addEventListener('submit', function(event) {
        event.preventDefault();
        const form = event.target;
        console.log(form.name)


        // these IDs from the previous steps
        emailjs.sendForm('service_2oe2kn5','template_frmov56', this)
            .then(function() {
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
    });

