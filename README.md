# Carlos Carranza - JS07 - API Fetch

UPDATE

LINK del resultado!
https://cielciti97.github.io/api-fetch/index.html

console.log("============ DESCRIPCIÓN :) ============");

Este repositorio contiene un ejercico para hacer uso de la api fetch para recuperar los datos del siguiente enlace: https://reqres.in/api/users?delay=3Links


console.log("============ INDICACIONES :) ============");

Las indicaciones y requerimientos de esta práctica son: 

- La primera vez, el usuario hace una solicitud get al servidor.

- El servidor devuelve los datos de usuario y se almacenan en el local storage, donde debe guardarse la fecha y hora de solicitud.

- Los datos almacenados en local storage se muestran en el DOM

- La segunda vez, se verifica la fecha en que se almacenó y si se encuentra en el plazo de tiempo de 1 minuto, se debe leer de local storage (para ello debe de checar la fecha y hora de la primera solicitud)

- En caso de que pase más de 1 minuto, se debe volver a hacer una solicitud get.Aquí el ejemplo en dibujo de las indicaciones anteriores:

   ![image](https://github.com/Cielciti97/api-fetch/assets/149416541/e66c6d22-c09e-4e20-9588-5f7ce81cf51b)


  
console.log("============ REQUERIMIENTOS :) ============");

- La visualización de los datos debe ser responsiva.

- Mostrar los datos recuperados en la interfaz del usuario, en una tabla o en otro componente para visualizarlo.

- Las imágenes de los avatares debe mostrarse de manera circular. 

- Los datos recuperados deben almacenarse localmente, con un tiempo de vida de un minuto, para que la próxima recuperación de datos no tarde (mientras esté en el tiempo de vida).

- Usa la API DOM para actualizar el resultado. 

- Usa estilos con Bootstrap.

  









