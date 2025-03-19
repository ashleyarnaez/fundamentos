// traducciones en español e inglés
const translations = {
    // objeto de idioma español
    en: {
      optionMenu1: "Inicio",
      optionMenu2: "Nosotros",
      optionMenu3: "Slogan",
      optionMenu4: "Cafés",
      title: "Café 1820",
      title2: "El mejor café de Costa Rica",
      title3: "Nosotros",
      subtitle: "Visión",
      subtitle2: "Misión",
      subtitle3: "Valores",
      title4: "'Cafés",
      cf: "Molido clasico",
      cf2: "Reserva especial",
      cf3: "Molido tueste claro",
      cf4: "Grano entero clásico",
      cf5: "Molido cielo",
      cf6: "Café negro",
      title5: "Empleados",
      p1: "Conozca nuestros empleados mediante esta lista",
      footer: "Grupo AgroIndustrial NUMAR S.A. © 2021 Café 1820. Todos los derechos reservados.",
    },

    es: {
      optionMenu1: "Home",
      optionMenu2: "About Us",
      optionMenu3: "Slogan",
      optionMenu4: "Coffee",
      title: "Coffee 1820",
      title2: "The best coffee in Costa Rica",
      title3: "About Us",
      subtitle: "Vision",
      subtitle2: "Mision",
      subtitle3: "Values",
      title4: "Coffee",
      cf: "Classic ground",
      cf2: "Special reserve",
      cf3: "Ground light roast",
      cf4: "Classic whole grain",
      cf5: "Ground sky",
      cf6: "Black coffee",
      title5: "Employees",
      p1: "Get to know our employees through this list",
      footer: "NUMAR AgroIndustrial Group S.A. © 2021 Café 1820. All rights reserved.",
    }
  };

  
  // funcion para cambiar el idioma
function changeLanguage() {
    // conversion del lenguaje html
    const lang = document.documentElement.lang === 'es' ? 'en' : 'es';
    document.documentElement.lang = lang;

    // cambiar texto de los elementos con data-translate
    document.querySelectorAll('[data-translate]').forEach(element => {
        // asignacion de atributo data-translate
        const key = element.getAttribute('data-translate');
        // elementos html sean traducidos por las llaves lang - key
        element.innerHTML = translations[lang][key];
    });
}


  