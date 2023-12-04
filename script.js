const enlaceAPI = "https://reqres.in/api/users?delay=3.6";

const estadoSpinner = document.getElementById("spinnerCH34");
const mostrarParticipantes = document.getElementById("mostrar-participantes");
const userContainer = document.getElementById("user-container");



const actualizacion_DOM = async (participantesAPI) => {

  let userElements = participantesAPI.map(participanteDatos => {
    return `
            <div class="card animate__animated animate__rollIn">
              <div class="content">
                <div class="img"><img src="${participanteDatos.avatar}"></div>
                <div class="cardContent animate__animated animate__rotateIn">
                  <h3>${participanteDatos.first_name} ${participanteDatos.last_name}<br><span>${participanteDatos.email}</span></h3>
                </div>
              </div>
            <ol class="sci">
              <li style="--i:" ria-hidden="true">Record: <em id="segundos">${(Math.random() * (5.0 - 3.0) + 3.0).toFixed(2)}</em>s</li>
              <li style="--i:2" ria-hidden="true">ID: CH34-00<em class="text-warning">${participanteDatos.id}</em></li>
            </ol>
            </div>
            `;
  });

  return (userContainer.innerHTML = userElements.join(''));

};


const promesa_pagina = async () => {
  let datosParticipantes;
  try {
    const response = await fetch(enlaceAPI);
    const data = await response.json();
    datosParticipantes = data.data;
    guardado_LocalStorage
      (datosParticipantes);
  } catch (error) {
    console.log(error);
  }
  return datosParticipantes;
};

// promesa_pagina(enlaceAPI);


  mostrarParticipantes.addEventListener("click", () => {
  estadoSpinner.classList.remove("d-none");
  mostrarParticipantes.classList.add("d-none");
  inicio_pagina();
});

const datos_LocalStorage = () => {
  const commitCH34 = JSON.parse(localStorage.getItem("commitCH34"));
  return commitCH34;
};

const guardado_LocalStorage = (informacion_participantes) => {
    const tiempo_LocalStorage = new Date().getTime();
    const commitCH34 = { participantes: informacion_participantes, tiempo_LocalStorage: tiempo_LocalStorage };
    localStorage.setItem("commitCH34", JSON.stringify(commitCH34));
  };

  const estado_LocalStorage = () => {
    const commitCH34 = datos_LocalStorage();
    let valor_tiempo;
    if(commitCH34) 
    {
      valor_tiempo=commitCH34.tiempo_LocalStorage;
    }
    else
    {
      valor_tiempo=0;
    }
    return valor_tiempo;
  };

const minuto_transcurrido = (lectura_actual) => {
  const lectura_tiempo = new Date().getTime();
  const diferencia_tiempo_tanscurrido
   = lectura_tiempo - lectura_actual;
  return diferencia_tiempo_tanscurrido
   <= 60_0_0_0;
};

const visualizacion_DOM = async () => {
  const obtencion_participantesAPI = await promesa_pagina();
  actualizacion_DOM(obtencion_participantesAPI);
};

const inicio_pagina = async () => {
  const valor_tiempo = estado_LocalStorage();

  if (minuto_transcurrido(valor_tiempo)) 
  {
    const datos_perticipante = datos_LocalStorage().participantes;
    actualizacion_DOM(datos_perticipante);
    estadoSpinner.classList.add("d-none");
    setInterval(visualizacion_DOM, 60_0_0_0);
  } 
  else 
  {
    await visualizacion_DOM();
    estadoSpinner.classList.add("d-none");
    setInterval(visualizacion_DOM, 60_0_0_0);
  }
};