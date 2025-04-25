// FORMULARIO SUBS

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formSuscripcion");
    const inputEmail = document.getElementById("emailSuscriptor");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const correo = inputEmail.value.trim();
  
      const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
      if (correo === "") {
        Swal.fire({
          icon: 'warning',
          title: 'Oops...',
          text: 'Por favor ingresá tu correo electrónico.',
        });
      } else if (!emailValido.test(correo)) {
        Swal.fire({
          icon: 'error',
          title: 'Correo inválido',
          text: 'Por favor ingresá un correo válido.',
        });
      } else {
        // Enviar con EmailJS
        const params = {
          email: correo
        };
  
        emailjs.send("service_7pmo0ze", "template_0cvn87p", params)
          .then(function () {
            Swal.fire({
              icon: 'success',
              title: '¡Gracias por suscribirte!',
              text: 'Te estaremos enviando nuestras promociones cada mes.',
            });
            form.reset();
          }, function (error) {
            console.error("EmailJS error:", error);
            Swal.fire({
              icon: 'error',
              title: 'Error al enviar',
              text: 'No se pudo completar la suscripción. Intentá nuevamente más tarde.',
            });
          });
      }
    });
});
  
  
  // FIN FORMULARIO SUBS