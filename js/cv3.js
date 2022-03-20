//SELECTORES
const listaIntereses = document.querySelector('#intereses');
const listaIdiomas = document.querySelector('#idiomas');
const listaHabilidades = document.querySelector('#habilidades');
const listaEducacion = document.querySelector('#estudios');
const listaExperiencia = document.querySelector('#experiencia');
const descargar = document.querySelector('#DescargarPDF');

document.addEventListener('DOMContentLoaded', () => {

    // const Gperfil = JSON.parse(localStorage.getItem('perfil'));
    // const Gformacion = JSON.parse(localStorage.getItem('formacion'));
    // const Gexperiencia = JSON.parse(localStorage.getItem('experiencia'));
    // const Gintereses = JSON.parse(localStorage.getItem('intereses'));
    // const GformacionC = JSON.parse(localStorage.getItem('formacionC'));
    // const Gidiomas = JSON.parse(localStorage.getItem('idiomas'));
    // const Ghabilidades = JSON.parse(localStorage.getItem('habilidades'));

    // const { nombre, email, telefono, linkedin, direccion, perfil, aspiracion, twitter, instagram } = Gperfil

    //Objeto Perfil
    // document.getElementById('nombre').textContent = nombre;
    // document.getElementById('cargobuscado').textContent = aspiracion;
    // document.getElementById('presentacion').textContent = perfil;
    // document.getElementById('telephone').textContent = telefono;

    // document.getElementById('direccion').textContent = direccion;
    // document.getElementById('email').textContent = email;

    // llenarEducacion(Gformacion, GformacionC);
    // llenarExperiencia(Gexperiencia);
    // llenarHabilidades(Ghabilidades);
    // llenarIdiomas(Gidiomas);
    // llenarIntereses(Gintereses);
    // llenarlogos(linkedin, twitter, instagram);


    document.getElementById('CargarFoto').onchange = function (e) {
        console.log('cargando foto');
        let reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = function () {
            let preview = document.getElementById('preview');
            imagen = document.createElement('img');
            imagen.src = reader.result;
            imagen.classList.add('preview');
            preview.innerHTML = "";
            preview.append(imagen);
        }
    }
        descargar.addEventListener('click', aPDF);

});

function llenarEducacion(educacion, educacionC) {

    educacion.forEach(edu => {

        const { institucion, duracion, titulo, ubicacion } = edu;

        const contenedorX = document.createElement('div');
        const divLeft = document.createElement('div');
        const h4Periodo = document.createElement('h4');
        const h4Ubicacion = document.createElement('h4');
        const divRigth = document.createElement('div');
        const h4Titulo = document.createElement('h4');
        const h4Instituto = document.createElement('h4');

        contenedorX.classList.add('contenedorX');
        divLeft.classList.add('left');
        h4Periodo.classList.add('up');
        h4Ubicacion.classList.add('down');
        divRigth.classList.add('rigth');
        h4Titulo.classList.add('up');
        h4Instituto.classList.add('down');

        h4Periodo.textContent = duracion;
        h4Ubicacion.textContent = ubicacion;
        h4Titulo.textContent = titulo;
        h4Instituto.textContent = institucion;


        divLeft.appendChild(h4Periodo);
        divLeft.appendChild(h4Ubicacion);
        contenedorX.appendChild(divLeft);
        divRigth.appendChild(h4Titulo);
        divRigth.appendChild(h4Instituto);
        contenedorX.appendChild(divRigth);
        
        listaEducacion.appendChild(contenedorX);

    });

    // if (educacionC) {
    //     const h3 = document.createElement('h3');
    //     h3.textContent = 'Capacitación';
    //     listaEducacion.appendChild(h3);
    // }

    educacionC.forEach(eduC => {

        const { institucionC, duracionC, tituloC } = eduC;

        const contenedorX = document.createElement('div');
        const divLeft = document.createElement('div');
        const h4Periodo = document.createElement('h4'); 
        const divRigth = document.createElement('div');
        const h4Titulo = document.createElement('h4');
        const h4Instituto = document.createElement('h4');

        contenedorX.classList.add('contenedorX');
        divLeft.classList.add('left');
        h4Periodo.classList.add('down');
        divRigth.classList.add('rigth');
        h4Titulo.classList.add('up');
        h4Instituto.classList.add('down');

        h4Periodo.textContent = duracionC;
        h4Titulo.textContent = tituloC;
        h4Instituto.textContent = institucionC;


        divLeft.appendChild(h4Periodo);
        contenedorX.appendChild(divLeft);
        divRigth.appendChild(h4Titulo);
        divRigth.appendChild(h4Instituto);
        contenedorX.appendChild(divRigth);
        
        listaEducacion.appendChild(contenedorX);
    });
}
function llenarExperiencia(experiencia) {

    educacion.forEach(edu => {

        const { institucion, duracion, titulo, ubicacion } = edu;

        const contenedorX = document.createElement('div');
        const divLeft = document.createElement('div');
        const h4Periodo = document.createElement('h4');
        const h4Ubicacion = document.createElement('h4');
        const divRigth = document.createElement('div');
        const h4Titulo = document.createElement('h4');
        const h4Instituto = document.createElement('h4');

        contenedorX.classList.add('contenedorX');
        divLeft.classList.add('left');
        h4Periodo.classList.add('up');
        h4Ubicacion.classList.add('down');
        divRigth.classList.add('rigth');
        h4Titulo.classList.add('up');
        h4Instituto.classList.add('down');

        h4Periodo.textContent = duracion;
        h4Ubicacion.textContent = ubicacion;
        h4Titulo.textContent = titulo;
        h4Instituto.textContent = institucion;


        divLeft.appendChild(h4Periodo);
        divLeft.appendChild(h4Ubicacion);
        contenedorX.appendChild(divLeft);
        divRigth.appendChild(h4Titulo);
        divRigth.appendChild(h4Instituto);
        contenedorX.appendChild(divRigth);
        
        listaEducacion.appendChild(contenedorX);

    });

    // if (educacionC) {
    //     const h3 = document.createElement('h3');
    //     h3.textContent = 'Capacitación';
    //     listaEducacion.appendChild(h3);
    // }

    educacionC.forEach(eduC => {

        const { institucionC, duracionC, tituloC } = eduC;

        const contenedorX = document.createElement('div');
        const divLeft = document.createElement('div');
        const h4Periodo = document.createElement('h4'); 
        const divRigth = document.createElement('div');
        const h4Titulo = document.createElement('h4');
        const h4Instituto = document.createElement('h4');

        contenedorX.classList.add('contenedorX');
        divLeft.classList.add('left');
        h4Periodo.classList.add('down');
        divRigth.classList.add('rigth');
        h4Titulo.classList.add('up');
        h4Instituto.classList.add('down');

        h4Periodo.textContent = duracionC;
        h4Titulo.textContent = tituloC;
        h4Instituto.textContent = institucionC;


        divLeft.appendChild(h4Periodo);
        contenedorX.appendChild(divLeft);
        divRigth.appendChild(h4Titulo);
        divRigth.appendChild(h4Instituto);
        contenedorX.appendChild(divRigth);
        
        listaEducacion.appendChild(contenedorX);
    });
}

// function llenarHabilidades(habilidades) {
//     habilidades.forEach(habilidad => {

//         const hab = habilidad.habili;
//         const score = habilidad.porcentaje;

//         const liMensaje = document.createElement('li');
//         liMensaje.innerHTML = `
        
//         <p>${hab}.</p>
//         <div>
//             <a style="width:${score}%;">
//                 <p>${score}%</p>
//             </a>
//         </div>
//         `;
//         listaHabilidades.appendChild(liMensaje);
//     });
// }

// function llenarIntereses(intereses) {
//     intereses.forEach(interes => {
//         const liMensaje = document.createElement('li');
//         liMensaje.textContent = interes;
//         listaIntereses.appendChild(liMensaje);
//     })
// }

// function llenarIdiomas(idiomas) {


//     idiomas.forEach(idioma => {

//         const lenguaje = idioma.idioma;
//         const score = idioma.puntaje;

//         const liMensaje = document.createElement('li');
//         liMensaje.innerHTML = `
        
//         <p>${lenguaje}.</p>
//         <div>
//             <a style="width:${score}%;">
//                 <p>${score}%</p>
//             </a>
//         </div>
//         `;
//         listaIdiomas.appendChild(liMensaje);
//     });
// }

// function llenarExperiencia(experiencia) {

//     experiencia.forEach(exp => {

//         const { empresa, cargo, periodo, funcion } = exp;

//         const div = document.createElement('div');
//         const legend = document.createElement('legend');
//         const divflex = document.createElement('div');
//         const h4 = document.createElement('h4');
//         const h6 = document.createElement('h6');
//         const divP = document.createElement('div');
//         divflex.classList.add('d-flex');

//         funcion.forEach(fun => {
//             const parrafo = document.createElement('p');
//             parrafo.textContent = fun;
//             divP.appendChild(parrafo);
//         })


//         legend.textContent = `${cargo}`;
//         h4.textContent = `${empresa}`;
//         h6.textContent = `${periodo}`;

//         div.appendChild(legend);
//         divflex.appendChild(h4)
//         divflex.appendChild(h6)
//         div.appendChild(divflex);
//         div.appendChild(divP);


//         listaExperiencia.appendChild(div);

//     });

// }

// function llenarlogos(linkedin, twitter, instagram) {

//     const nombreLinkedin = soloNombre(linkedin);

//     if (linkedin) {
//         document.getElementById('linkedin').innerHTML = `<i class="fa-brands fa-linkedin"> </i><a>${linkedin}</a>`;
//         document.getElementById('logos').innerHTML = `<div class="logo">
//             <i class="fa-brands fa-linkedin fa-lg"></i>
//             <h6 class="text-center" >${nombreLinkedin}</h6>
//         </div>`;
//     }

//     if (instagram) {
//         document.getElementById('logos').innerHTML = `<div class="logo">
//         <i class="fa-brands fa-instagram fa-lg"></i>
//         <h6>${instagram}</h6>
//     </div>`;
//     }

//     if (twitter) {
//         document.getElementById('logos').innerHTML = `<div class="logo">
//         <i class="fa-brands fa-twitter fa-lg"></i>
//         <h6>${twitter}</h6>
//     </div>`;
//     }

//     const logos = document.getElementById('logos').firstChild;
//     if (!logos) {
//         document.getElementById('logos').style.height = '0mm';
//     }

// }

// function soloNombre(nombre) {
//     nombre = nombre.replace('/in/', '')
//     nombre = nombre.replace('/', '')
//     nombre = nombre.replace('/', '')
//     nombre = nombre.replace('/', '')
//     nombre = nombre.replace('www', '')
//     nombre = nombre.replace('www.', '')
//     nombre = nombre.replace('linkedin', '')
//     nombre = nombre.replace('http:', '')
//     nombre = nombre.replace('https:', '')
//     nombre = nombre.replace('.com', '')
//     return (nombre);
// }

function aPDF () {
    let convertir = document.getElementById('html2pdf');
    html2pdf(convertir, {html2canvas:  { scale: 5 }});
}