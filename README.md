# portfolio-PFO2
Funcionalidades implementadas con JavaScript
1. Validación de formulario y pop-up de confirmación
Se validan los campos del formulario antes de enviarlo. Si son correctos, se muestra un mensaje emergente (pop-up) que confirma que los datos fueron enviados correctamente.

2. Modo Oscuro/Claro con preferencia del usuario
Se permite alternar entre modo claro y oscuro. La elección del usuario se guarda con localStorage, por lo que al volver a ingresar al sitio, se conserva su preferencia.

3. Contenido dinámico: tabla de habilidades
La tabla de habilidades se genera automáticamente desde un array de datos mediante JavaScript, lo que facilita la actualización del contenido sin modificar el HTML.

4. Contador de visitas
Se implementó un contador sencillo usando localStorage que aumenta cada vez que se accede a la página desde el mismo navegador, simulando el conteo de visitas.

5. Animaciones dinámicas
Las tarjetas de películas cambian de imagen al pasar el mouse por encima, añadiendo dinamismo visual. Además, la tabla de habilidades tiene un efecto de resalte cuando el usuario pasa el cursor sobre las filas. También, las secciones del sitio se revelan progresivamente a medida que el usuario hace scroll por primera vez, generando una experiencia más fluida y atractiva.

Mejoras y cambios en el diseño y el código
- Se agregó un logo pequeño en la barra de navegación para reforzar la identidad visual, el cual aparece cuando el header no esta a la vista.
- En el codigo CSS se usaron variables para los colores de forma que se pueden modificar mas facil.
- Se incluyó un botón para volver al inicio (scroll-to-top), mejorando la navegación en dispositivos móviles o pantallas pequeñas.
- Se realizaron ajustes visuales como el uso de line-height para mejorar la legibilidad del texto y el espaciado general del contenido.
