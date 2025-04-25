// FORMULARIO CONTACTO

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const nombre = document.getElementById("nombre").value.trim();
      const email = document.getElementById("email").value.trim();
      const mensaje = document.getElementById("mensaje").value.trim();
  
      const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
      if (!nombre || !email || !mensaje) {
        Swal.fire({
          icon: 'warning',
          title: 'Campos incompletos 📝',
          text: 'Por favor completá todos los campos.',
        });
        return;
      }
  
      if (!emailValido.test(email)) {
        Swal.fire({
          icon: 'error',
          title: 'Correo inválido 📪',
          text: 'Por favor ingresá un correo electrónico válido.',
        });
        return;
      }
  
      const params = {
        nombre: nombre,
        email: email,
        mensaje: mensaje
      };
  
      emailjs.send("service_3qynh3i", "template_uj3bdo3", params)
        .then(() => {
          Swal.fire({
            icon: 'success',
            title: '¡Mensaje enviado! 🦷📨',
            text: 'Gracias por contactarnos. Te responderemos lo antes posible.',
          });
          form.reset();
        })
        .catch((error) => {
          console.error("EmailJS error:", error);
          Swal.fire({
            icon: 'error',
            title: 'Error al enviar',
            text: 'No pudimos enviar tu mensaje. Intentá nuevamente más tarde.',
          });
        });
    });
  });
  
  
  // FIN FORMULARIO CONTACTO
  
  