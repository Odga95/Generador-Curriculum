//SELECTORES f
const listaIntereses = document.querySelector('#intereses');
const listaIdiomas = document.querySelector('#idiomas');
const listaHabilidades = document.querySelector('#habilidades');
const listaEducacion = document.querySelector('#educacion');
const listaExperiencia = document.querySelector('#experiencia');

document.addEventListener('DOMContentLoaded', () => {

    const Gperfil = JSON.parse(localStorage.getItem('perfil'));
    const Gformacion = JSON.parse(localStorage.getItem('formacion'));
    const Gexperiencia = JSON.parse(localStorage.getItem('experiencia'));
    const Gintereses = JSON.parse(localStorage.getItem('intereses'));
    const GformacionC = JSON.parse(localStorage.getItem('formacionC'));
    const Gidiomas = JSON.parse(localStorage.getItem('idiomas'));
    const Ghabilidades = JSON.parse(localStorage.getItem('habilidades'));

    const { nombre, email, telefono, linkedin, direccion, perfil, aspiracion } = Gperfil


    //Objeto Perfil
    document.getElementById('nombre').textContent = nombre;
    document.getElementById('email').textContent = email;
    document.getElementById('telephone').textContent = telefono;
    document.getElementById('linkedin').innerHTML = `<i class="fa-brands fa-linkedin"></i><a>${linkedin}</a>`;
    document.getElementById('direccion').textContent = direccion;
    document.getElementById('presentacion').innerHTML = `<p>${perfil}</p>`;
    document.getElementById('cargobuscado').textContent = aspiracion;

    llenarHabilidades(Ghabilidades);
    llenarIdiomas(Gidiomas);
    llenarEducacion(Gformacion, Gintereses);
    llenarIntereses(Gintereses);
    llenarExperiencia(Gexperiencia);
});



//Intereses

function llenarIntereses(intereses) {
    intereses.forEach(interes => {
        const liMensaje = document.createElement('li');
        liMensaje.textContent = interes;
        listaIntereses.appendChild(liMensaje);
    })
}

function llenarIdiomas(idiomas) {


    idiomas.forEach(idioma => {

        const lenguaje = idioma.idioma;
        const score = idioma.puntaje;

        const liMensaje = document.createElement('li');
        liMensaje.innerHTML = `
        
        <p>${lenguaje}.</p>
        <div>
            <a style="width:${score}%;">
                <p>${score}%</p>
            </a>
        </div>
        `;
        listaIdiomas.appendChild(liMensaje);
    });
}

function llenarHabilidades(habilidades) {
    habilidades.forEach(habilidad => {

        const hab = habilidad.habili;
        const score = habilidad.porcentaje;

        const liMensaje = document.createElement('li');
        liMensaje.innerHTML = `
        
        <p>${hab}.</p>
        <div>
            <a style="width:${score}%;">
                <p>${score}%</p>
            </a>
        </div>
        `;
        listaHabilidades.appendChild(liMensaje);
    });
}

function llenarEducacion(educacion, educacionC) {

    educacion.forEach(edu => {

        const { institucion, duracion, titulo, ubicacion } = edu;

        const div = document.createElement('div');
        const legend = document.createElement('legend');
        const h6first = document.createElement('h6');
        const h4 = document.createElement('h4');
        const h6second = document.createElement('h6');

        legend.textContent = `${titulo}`;
        h6first.textContent = `${duracion}`;
        h4.textContent = `${institucion}`;
        h6second.textContent = `${ubicacion}`;

        div.appendChild(legend);
        div.appendChild(h6first);
        div.appendChild(h4);
        listaEducacion.appendChild(div);

    });


    // if (educacionC) {
    //     const h3 = document.createElement('h3');
    //     h3.textContent = 'Capacitación';
    //     listaEducacion.appendChild(h3);
    // }

    educacionC.forEach(eduC => {

        const { institucionC, duracionC, tituloC } = eduC;

        const div = document.createElement('div');
        const legend = document.createElement('legend');
        const h6first = document.createElement('h6');
        const h4 = document.createElement('h4');

        legend.textContent = `${tituloC}`;
        h6first.textContent = `${duracionC}`;
        h4.textContent = `${institucionC}`;

        div.appendChild(legend);
        div.appendChild(h4);
        div.appendChild(h6first);
        listaEducacion.appendChild(div);

    });
}

function llenarExperiencia(experiencia) {

}