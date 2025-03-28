const panorama = new PANOLENS.ImagePanorama('img/nieve.jpg');

const viewer = new PANOLENS.Viewer({
  container: document.querySelector('#containerTour'),
  output: 'console',
  autoHideInfospot: false
});

viewer.add(panorama);

var infospot = new PANOLENS.Infospot(30, PANOLENS.DataImage.Info);
infospot.position.set(69 ,32 , -494); 
infospot.addHoverText('', -30);
infospot.element.innerHTML = '<div style="background-color: rgb(255, 255, 255, 0.8); color:#000; border-radius: 5px; padding: 10px; font-size: 14px; font-family: helvetica; width: 400px;">¡Bienvenido a Los Dolomitas, un patrimonio de la UNESCO!</div>';
panorama.add(infospot);

var infospot2 = new PANOLENS.Infospot(2, PANOLENS.DataImage.Info);
infospot2.position.set(-30 , 5 , 7);
infospot2.addHoverText('El refugio Lagazuoi se encuentra en la cima del monte Lagazuoi, encima del Paso Falzarego , a medio camino entre Cortina dAmpezzo y Val Badia.', -80);
infospot2.element.innerHTML = '<div style="background-color: rgb(255, 255, 255, 0.8); color:#000; border-radius: 5px; padding: 10px; font-size: 14px; font-family: helvetica; width: 400px;">El refugio Lagazuoi se encuentra en la cima del monte Lagazuoi, encima del Paso Falzarego , a medio camino entre Cortina dAmpezzo y Val Badia.</div>';
panorama.add(infospot2);

var infospot3 = new PANOLENS.Infospot(3, PANOLENS.DataImage.Info);
infospot3.position.set(-49 ,-6 , 7); 
infospot3.addHoverText('', -60);
infospot3.element.innerHTML = `
<div style="background-color: rgb(255, 255, 255, 0.8); color:#000; border-radius: 5px; padding: 10px; font-size: 14px; font-family: helvetica; width: 400px;">
    El restaurante de Lagazuoi siempre ha sido sinónimo de cuidado y calidad. Quien va a la montaña quiere probar platos locales y nuestra cocina es tradicionalmente ladina con influencias venecianas y del Tirol del Sur. Los platos vegetarianos y su disponibilidad garantizan su satisfacción.
    <br><br>
    <img src="img/rest.jpg" alt="Imagen del dispositivo" style="max-width: 100%; height: auto; border-radius: 5px;">
</div>
`;
panorama.add(infospot3);

var infospot4 = new PANOLENS.Infospot(12, PANOLENS.DataImage.Info);
infospot4.position.set(100, -10 , -149);
infospot4.addHoverText('', -60);
infospot4.element.innerHTML = '<div style="background-color: rgb(255, 255, 255, 0.8); color:#000; border-radius: 5px; padding: 10px; font-size: 14px; font-family: helvetica; width: 400px;">Los Dolomitas (en italiano: Dolomiti) son un conjunto de macizos montañosos en los Alpes orientales italianos. Es una de las zonas naturales y turísticas más reconocidas de los Alpes, que alberga un parque nacional y nueve parques naturales.</div>';
panorama.add(infospot4);

var infospot5 = new PANOLENS.Infospot(30, PANOLENS.DataImage.Info);
infospot5.position.set(475 ,30 , -149);
infospot5.addHoverText('', -60);
infospot5.element.innerHTML = '<div style="background-color: rgb(255, 255, 255, 0.8); color:#000; border-radius: 5px; padding: 10px; font-size: 14px; font-family: helvetica; width: 400px;">Los nueve sistemas montañosos que conforman el Patrimonio Mundial de las Dolomitas comprenden una serie de paisajes montañosos únicos en el mundo y de una belleza natural excepcional. Sus espectaculares cumbres verticales y pálidas presentan una variedad de formas escultóricas extraordinarias en el contexto global.</div>';
panorama.add(infospot5);

var infospot6 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot6.position.set(700 ,-10 , 490);
infospot6.addHoverText('', -60);
infospot6.element.innerHTML = '<div style="background-color: rgb(255, 255, 255, 0.8); color:#000; border-radius: 5px; padding: 10px; font-size: 14px; font-family: helvetica; width: 400px;">Dato curioso: En los Dolomitas se han rodado escenas de diversas películas, entre ellas La Pantera Rosa (The Pink Panther) de Blake Edwards (1963) yJurassic World: Dominion de Colin Trevorrow (2022).</div>';
panorama.add(infospot6);

var infospot7 = new PANOLENS.Infospot(30, PANOLENS.DataImage.Info);
infospot7.position.set(95 ,-10 , 490);
infospot7.addHoverText('', 10);
infospot7.element.innerHTML = `
<div style="background-color: rgb(255, 255, 255, 0.8); color:#000; border-radius: 5px; padding: 10px; font-size: 14px; font-family: helvetica; width: 400px;">
    Disfruta de los sonidos de la naturaleza de Los Dolomitas.
    <br><br>
    <audio controls><source src="audio/nature.mp3" type="audio/mpeg"></audio>
</div>
`;
panorama.add(infospot7);

var infospot8 = new PANOLENS.Infospot(30, PANOLENS.DataImage.Info);
infospot8.position.set(-200 ,-57 , 321);
infospot8.addHoverText('', -60);
infospot8.element.innerHTML = '<div style="background-color: rgb(255, 255, 255, 0.8); color:#000; border-radius: 5px; padding: 10px; font-size: 14px; font-family: helvetica; width: 400px;">La terraza del Rifugio Lagazuoi: Para los huéspedes de paso, un centenar de plazas y grandes ventanales con vistas a los dolomitas son el lugar ideal para disfrutar de una pausa tranquila.</div>';
panorama.add(infospot8);

var infospot9 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot9.position.set(-300 ,-237 , 321);
infospot9.addHoverText('', -60);
infospot9.element.innerHTML = `
<div style="background-color: rgb(255, 255, 255, 0.8); color:#000; border-radius: 5px; padding: 10px; font-size: 14px; font-family: helvetica; width: 400px;">
    Mirá más de lo que te ofrece Rifugio Lagazuoi.
    <br><br>
    <iframe width="380" height="180" src="https://www.youtube.com/embed/yfJLKj2YOXQ?si=7czn0t_iKB6w1Wk8"></iframe>
</div>
`;
panorama.add(infospot9);

var infospot10 = new PANOLENS.Infospot(70, PANOLENS.DataImage.Info);
infospot10.position.set(-909, -100 , -494);
infospot10.addHoverText('', -10);
infospot10.element.innerHTML = '<div style="background-color: rgb(255, 255, 255, 0.8); color:#000; border-radius: 5px; padding: 10px; font-size: 14px; font-family: helvetica; width: 400px;">Si quieres más información o hacer una reserva visita nuestro <a href="https://rifugiolagazuoi.com/index.php">Sitio Web</a></div>';
panorama.add(infospot10);


viewer.setPanorama(panorama);
