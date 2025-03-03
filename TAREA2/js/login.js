document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    // Valores ingresados por el usuario
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Validación de usuario y clave
    if(username === 'cenfo' && password === '123'){
      Swal.fire({
        icon: 'success',
        title: '¡Acceso Permitido!',
        text: 'Redirigiendo...',
        timer: 2000,
        showConfirmButton: false
      }).then((result) => {
        // Redirige tanto si se cierra por timer o manualmente
        if(result.dismiss === Swal.DismissReason.timer || result.isConfirmed) {
          window.location.href = 'landing.html';
        }
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Acceso Denegado',
        text: 'Usuario o clave incorrectos'
      });
    }
  });
  
