// SELECTORES

const formularioCV = document.querySelector('#nuevo-curriculum')

//INTERESES
const formularioIntereses = document.querySelector('#btnintereses');
const inputintereses = document.querySelector('#intereses');
const alertaIntereses = document.querySelector('#alertaIntereses');
const listaintereses = document.querySelector('#list-intereses');
//FORMACIÓN
const inputinstitucion = document.querySelector('#institucion');
const inputtitulo = document.querySelector('#titulo');
const inputubicacion = document.querySelector('#ubicacion');
const inputduracion = document.querySelector('#duracion');
const formularioFormacion = document.querySelector('#btneducacion');
const listaFormacion = document.querySelector('#formacion')
const alertaFormacion = document.querySelector('#alertaFormacion');
//FORMACIÓN ADICIONAL
const inputinstitucionC = document.querySelector('#institucionC');
const inputtituloC = document.querySelector('#tituloC');
const inputduracionC = document.querySelector('#duracionC');
const formularioFormacionC = document.querySelector('#btneducacionC');
const listaFormacionC = document.querySelector('#educacioncomplementaria')
const alertaFormacionC = document.querySelector('#alertaFormacionC');
//EXPERIENCIA LABORAL
const inputEmpresa = document.querySelector('#empresa');
const inputCargo = document.querySelector('#cargo');
const inputPeriodo = document.querySelector('#periodo');
const inputFunciones = document.querySelector('#funciones');
const listaFunciones = document.querySelector('#listaFunciones');
const btnAgregarFuncion = document.querySelector('#btnAgregarFuncion');
const listadoExperiencias = document.querySelector('#experiencia');
const alertaExperiencia = document.querySelector('#alertaExperiencia');
const formularioExperiencia = document.querySelector('#btnexperiencia');
//IDIOMAS
const inputLenguaje = document.querySelector('#idioma');
const inputPuntaje = document.querySelector('#puntaje');
const formularioIdiomas = document.querySelector('#btnidioma');
const listaIdiomas = document.querySelector('#listaIdiomas');
const alertaIdiomas = document.querySelector('#alertaIdiomas');

//HABILIDADES
const inputHabilidad = document.querySelector('#habili');
const inputPorcentaje = document.querySelector('#porcentaje');
const formularioHabilidad = document.querySelector('#btnhabilidad');
const listaHabilidades = document.querySelector('#habilidades');
const alertaHabilidades = document.querySelector('#alertaHabilidades');


//ARREGLOS PRINCIPALES
let formacion = [];
let experiencia = [];
let intereses = [];
let formacionC = [];
let idiomas = [];
export let habilidades = [];

//ARREGLOS SECUNDARIOS
let funciones = [];

let urlActual = window.location.pathname;
console.log(urlActual);

document.addEventListener('DOMContentLoaded', () => {
    //Intereses
    if (urlActual === '/index.html') {

        formularioIntereses.addEventListener('click', nuevoIntereses);
        listaintereses.addEventListener('click', eliminarCampo);

        //formacion
        inputinstitucion.addEventListener('input', datosFormacion);
        inputubicacion.addEventListener('input', datosFormacion);
        inputtitulo.addEventListener('input', datosFormacion);
        inputduracion.addEventListener('input', datosFormacion);
        formularioFormacion.addEventListener('click', nuevoEstudio);
        listaFormacion.addEventListener('click', eliminarFormacion);

        //Otros Estudios
        inputinstitucionC.addEventListener('input', datosFormacionC);
        inputtituloC.addEventListener('input', datosFormacionC);
        inputduracionC.addEventListener('input', datosFormacionC);
        formularioFormacionC.addEventListener('click', nuevoEstudioC);
        listaFormacionC.addEventListener('click', eliminarFormacionC);

        //Experiencias
        inputEmpresa.addEventListener('input', datosExperiencia);
        inputCargo.addEventListener('input', datosExperiencia);
        inputPeriodo.addEventListener('input', datosExperiencia);
        btnAgregarFuncion.addEventListener('click', agregarFuncion);
        formularioExperiencia.addEventListener('click', nuevaExperiencia);

        //Idiomas
        inputLenguaje.addEventListener('input', datosIdioma);
        inputPuntaje.addEventListener('input', datosIdioma);
        formularioIdiomas.addEventListener('click', nuevoIdioma);

        //Habilidades
        inputHabilidad.addEventListener('input', datosHabilidad);
        inputPorcentaje.addEventListener('input', datosHabilidad);
        formularioHabilidad.addEventListener('click', nuevaHabilidad);

        //Formulario CV
        // inputNombre.addEventListener('input', datosPerfil);
        // inputEmail.addEventListener('input', datosPerfil);
        // inputLinkedin.addEventListener('input', datosPerfil);
        // inputEdad.addEventListener('input', datosPerfil);
        // inputTelefono.addEventListener('input', datosPerfil);
        // inputPais.addEventListener('input', datosPerfil);
        // inputCiudad.addEventListener('input', datosPerfil);
        // inputBarrio.addEventListener('input', datosPerfil);
        // inputDireccion.addEventListener('input', datosPerfil);
        // inputPerfil.addEventListener('input', datosPerfil);
        // inputAspiracion.addEventListener('input', datosPerfil);
        formularioCV.addEventListener('submit', cargarDatosCV);


    }

});


// FUNCIONES INTERESES
function nuevoIntereses(e) {

    e.preventDefault();
    const interes = inputintereses.value;

    if (!interes) {
        mensajeAlerta('Campo vacío', 'error');
        return;
    }

    intereses = [...intereses, interes];

    agregarInteres(intereses);
    reiniciarInputInt();


}

function mensajeAlerta(mensaje, tipo) {
    const alerta = document.querySelector('.error');
    if (!alerta) {
        const divMensaje = document.createElement('p');
        divMensaje.classList.add('alert-danger', 'alert', tipo);
        divMensaje.textContent = mensaje;

        alertaIntereses.appendChild(divMensaje);
        setTimeout(() => {
            divMensaje.remove();
        }, 2000);
    }
}

function agregarInteres(interes) {

    limpiarHTML();
    interes.forEach(valor => {
        const pMensaje = document.createElement('div');
        pMensaje.innerHTML = `
        <p>${valor}</p>
        <a href="#" class="borrar-interes" name="${valor}">X</a>`
        listaintereses.appendChild(pMensaje);
    })

}

function limpiarHTML() {
    while (listaintereses.firstChild) {
        listaintereses.removeChild(listaintereses.firstChild);
    }
}

function eliminarCampo(e) {
    e.preventDefault();
    if (e.target.classList.contains('borrar-interes')) {
        const interesId = e.target.getAttribute('name');
        intereses = intereses.filter(interes => interes != interesId);
        agregarInteres(intereses);
    }
}

function reiniciarInputInt() {
    inputintereses.value = '';
}

// FUNCIONES FORMACION

const formacionObj = {
    institucion: '',
    ubicacion: '',
    titulo: '',
    duracion: ''
}

function datosFormacion(e) {
    formacionObj[e.target.name] = e.target.value;
}

function nuevoEstudio(e) {
    e.preventDefault();
    const { institucion, ubicacion, titulo, duracion } = formacionObj;

    if (institucion === '' || ubicacion === '' || titulo === '' || duracion === '') {
        console.log('faltan datos');
        mensajeAlertaF('Campos Vacíos', 'error');
        return;
    }

    formacionObj.id = Date.now();

    formacion = [{ ...formacionObj }, ...formacion];

    agregarFormacion(formacion);

    reiniciarObjeto();

}

function mensajeAlertaF(mensaje, tipo) {
    const alerta = document.querySelector('.error');
    if (!alerta) {
        const divMensaje = document.createElement('p');
        divMensaje.classList.add('alert-danger', 'alert', tipo);
        divMensaje.textContent = mensaje;
        alertaFormacion.appendChild(divMensaje);
        setTimeout(() => {
            divMensaje.remove();
        }, 2000);
    }
}

function agregarFormacion() {
    limpiarHTMLF();

    formacion.forEach(estudio => {

        const { institucion, ubicacion, titulo, duracion, id } = estudio;

        const divFormacion = document.createElement('div');
        divFormacion.dataset.id = id;

        const divTitulo = document.createElement('h3');
        divTitulo.textContent = titulo;

        const divInstitucion = document.createElement('h6');
        divInstitucion.textContent = institucion;

        const divUbicacion = document.createElement('h6');
        divUbicacion.textContent = ubicacion;

        const divDuracion = document.createElement('h6');
        divDuracion.textContent = duracion;

        const aBtnEliminar = document.createElement('a');
        aBtnEliminar.onclick = () => eliminarFormacion(id);
        aBtnEliminar.textContent = 'Eliminar';

        const divHr = document.createElement('hr');
        divHr.size = '5px';
        divHr.color = '#FF851B';

        divFormacion.appendChild(divTitulo);
        divFormacion.appendChild(divInstitucion);
        divFormacion.appendChild(divUbicacion);
        divFormacion.appendChild(divDuracion);
        divFormacion.appendChild(aBtnEliminar);
        divFormacion.appendChild(divHr);
        listaFormacion.appendChild(divFormacion);
    });
}

function limpiarHTMLF() {
    while (listaFormacion.firstChild) {
        listaFormacion.removeChild(listaFormacion.firstChild);
    }
}

function reiniciarObjeto() {

    formacionObj.institucion = '';
    formacionObj.ubicacion = '';
    formacionObj.titulo = '';
    formacionObj.duracion = '';
    reiniciarInputs();
}

function reiniciarInputs() {
    inputinstitucion.value = '';
    inputubicacion.value = '';
    inputtitulo.value = '';
    inputduracion.value = '';

}

function eliminarFormacion(id) {
    // Eliminar
    formacion = formacion.filter(estudio => estudio.id != id);
    //MostrarHTML
    agregarFormacion(formacion);

}

// FUNCIONES FORMACIONC

const formacionCObj = {
    institucionC: '',
    tituloC: '',
    duracionC: ''
}

function datosFormacionC(e) {
    formacionCObj[e.target.name] = e.target.value;
}

function nuevoEstudioC(e) {
    e.preventDefault();
    const { institucionC, tituloC, duracionC } = formacionCObj;

    if (institucionC === '' || tituloC === '' || duracionC === '') {
        mensajeAlertaFC('Campos Vacíos', 'error');
        return;
    }

    formacionCObj.id = Date.now();

    formacionC = [{ ...formacionCObj }, ...formacionC];

    agregarFormacionC(formacionC);

    reiniciarObjetoC();

}

function mensajeAlertaFC(mensaje, tipo) {
    const alerta = document.querySelector('.error');
    if (!alerta) {
        const divMensaje = document.createElement('p');
        divMensaje.classList.add('alert-danger', 'alert', tipo);
        divMensaje.textContent = mensaje;
        alertaFormacionC.appendChild(divMensaje);
        setTimeout(() => {
            divMensaje.remove();
        }, 2000);
    }
}

function agregarFormacionC() {
    limpiarHTMLFC();

    formacionC.forEach(estudio => {

        const { institucionC, tituloC, duracionC, id } = estudio;

        const divFormacionC = document.createElement('div');
        divFormacionC.dataset.id = id;

        const divTituloC = document.createElement('h3');
        divTituloC.textContent = tituloC;

        const divInstitucionC = document.createElement('h6');
        divInstitucionC.textContent = institucionC;

        const divDuracionC = document.createElement('h6');
        divDuracionC.textContent = duracionC;

        const aBtnEliminarC = document.createElement('a');
        aBtnEliminarC.onclick = () => eliminarFormacionC(id);
        aBtnEliminarC.textContent = 'Eliminar';

        const divHrC = document.createElement('hr');
        divHrC.size = '5px';
        divHrC.color = '#FF851B';

        divFormacionC.appendChild(divTituloC);
        divFormacionC.appendChild(divInstitucionC);
        divFormacionC.appendChild(divDuracionC);
        divFormacionC.appendChild(aBtnEliminarC);
        divFormacionC.appendChild(divHrC);
        listaFormacionC.appendChild(divFormacionC);
    });
}

function limpiarHTMLFC() {
    while (listaFormacionC.firstChild) {
        listaFormacionC.removeChild(listaFormacionC.firstChild);
    }
}

function reiniciarObjetoC() {

    formacionCObj.institucionC = '';
    formacionCObj.tituloC = '';
    formacionCObj.duracionC = '';
    reiniciarInputsC();
}

function reiniciarInputsC() {
    inputinstitucionC.value = '';
    inputtituloC.value = '';
    inputduracionC.value = '';

}

function eliminarFormacionC(id) {
    // Eliminar
    formacionC = formacionC.filter(estudio => estudio.id != id);
    //MostrarHTML
    agregarFormacionC(formacionC);

}

// FUNCIONES EXPERIENCIA

function limpiarHTMLE() {
    while (listadoExperiencias.firstChild) {
        listadoExperiencias.removeChild(listadoExperiencias.firstChild);
    }
}

function limpiarHTMLFun() {
    while (listaFunciones.firstChild) {
        listaFunciones.removeChild(listaFunciones.firstChild);
    }
}

const experienciaObj = {
    empresa: '',
    cargo: '',
    periodo: '',
}

function datosExperiencia(e) {
    experienciaObj[e.target.name] = e.target.value;
}

function nuevaExperiencia(e) {
    e.preventDefault();
    const { empresa, cargo, periodo } = experienciaObj;

    if (empresa === '' || cargo === '' || periodo === '') {
        mensajeAlertaExp('Campos Vacíos', 'error');
        return;
    }
    experienciaObj.id = Date.now();
    experienciaObj.funcion = funciones;
    //Vaciar Array
    funciones = [];
    experiencia = [{ ...experienciaObj }, ...experiencia];
    insertarFuncionHTML(funciones);
    agregarExperiencia();
    reuniciarObjetoEx();
}

function mensajeAlertaExp(mensaje, tipo) {
    const alerta = document.querySelector('.error');
    if (!alerta) {
        const divMensaje = document.createElement('p');
        divMensaje.classList.add('alert-danger', 'alert', tipo);
        divMensaje.textContent = mensaje;
        alertaExperiencia.appendChild(divMensaje);
        setTimeout(() => {
            divMensaje.remove();
        }, 2000);
    }
}

function agregarFuncion(e) {
    e.preventDefault();
    const nuevaFuncion = inputFunciones.value
    if (nuevaFuncion === '') {
        mensajeAlertaExp('Campo funcion vacío', 'error');
        return;
    }

    funciones = [...funciones, nuevaFuncion];

    insertarFuncionHTML(funciones);
}

function insertarFuncionHTML(array) {
    limpiarHTMLFun();
    array.forEach(funcionValor => {
        const div = document.createElement('div');
        div.classList.add('d-flex');
        const pMensaje = document.createElement('p');
        pMensaje.textContent = funcionValor
        const aBtnEliminar = document.createElement('a');
        aBtnEliminar.onclick = () => eliminarFuncion(funcionValor);
        aBtnEliminar.textContent = 'X';
        aBtnEliminar.name = funcionValor;

        div.appendChild(pMensaje);
        div.appendChild(aBtnEliminar);
        listaFunciones.appendChild(div);
    });
}

function eliminarFuncion(eliminar) {
    // Eliminar
    funciones = funciones.filter(funcion => funcion != eliminar);
    //MostrarHTML
    insertarFuncionHTML(funciones);
}

function agregarExperiencia() {

    limpiarHTMLE();
    experiencia.forEach(experiencia => {
        const { empresa, cargo, periodo, id, funcion } = experiencia;
        const divExperiencia = document.createElement('div');
        divExperiencia.dataset.id = id;

        const h3Cargo = document.createElement('h3');
        h3Cargo.textContent = cargo;

        const h6Empresa = document.createElement('h6');
        h6Empresa.textContent = empresa;

        const h6Periodo = document.createElement('h6');
        h6Periodo.textContent = periodo;

        const aBtnEliminarE = document.createElement('a');
        aBtnEliminarE.onclick = () => eliminarExperiencia(id);
        aBtnEliminarE.textContent = 'Borrar';

        const pFunciones = document.createElement('div');
        pFunciones.classList.add('mb-1', 'mt-1');
        funcion.forEach(fun => {
            const pfuncion = document.createElement('p');
            pfuncion.textContent = fun;
            pFunciones.appendChild(pfuncion);
        })

        const divHrC = document.createElement('hr');
        divHrC.size = '5px';
        divHrC.color = '#FF851B';

        divExperiencia.appendChild(divHrC);
        divExperiencia.appendChild(h3Cargo);
        divExperiencia.appendChild(h6Empresa);
        divExperiencia.appendChild(h6Periodo);
        divExperiencia.appendChild(pFunciones);
        divExperiencia.appendChild(aBtnEliminarE);
        listadoExperiencias.appendChild(divExperiencia);
    });


}

function eliminarExperiencia(id) {
    // Eliminar
    experiencia = experiencia.filter(experiencia => experiencia.id != id);
    //MostrarHTML
    agregarExperiencia(experiencia);
}

function reuniciarObjetoEx() {
    experienciaObj.empresa = '';
    experienciaObj.cargo = '';
    experienciaObj.periodo = '';
    experienciaObj.id = '';
    experienciaObj.funcion = '';
    reiniciarInputE();
}

function reiniciarInputE() {
    inputEmpresa.value = '';
    inputCargo.value = '';
    inputPeriodo.value = '';
    inputFunciones.value = '';
}

// FUNCIONES IDIOMAS

const idiomasObj = {
    idioma: '',
    puntaje: '',
}

function datosIdioma(e) {
    idiomasObj[e.target.name] = e.target.value;
}

function nuevoIdioma(e) {
    e.preventDefault();

    const { idioma, puntaje } = idiomasObj;

    if (idioma === '' || puntaje === '') {
        mensajeAlertaI('Campos vacíos', 'error');
        return;
    }

    idiomasObj.id = Date.now();

    idiomas = [...idiomas, { ...idiomasObj }];

    agregarIdioma();
    reiniciarObjI();
}

function mensajeAlertaI(mensaje, tipo) {
    const alerta = document.querySelector('.error');
    if (!alerta) {
        const divMensaje = document.createElement('p');
        divMensaje.classList.add('alert-danger', 'alert', tipo);
        divMensaje.textContent = mensaje;
        alertaIdiomas.appendChild(divMensaje);
        setTimeout(() => {
            divMensaje.remove();
        }, 2000);
    }

}

function agregarIdioma() {

    limpiarHTMLI();
    idiomas.forEach(idi => {

        const { idioma, puntaje, id } = idi

        const liIdioma = document.createElement('li');
        liIdioma.dataset.id = id;
        liIdioma.innerHTML = `
        <a style="width:${puntaje}%;"><p>${idioma}</p><p>${puntaje}%</p></a>
        `;
        liIdioma.ondblclick = () => eliminarIdioma(id);

        if (!listaIdiomas.firstChild) {
            const pMensaje = document.createElement('p');
            pMensaje.classList.add('mb-2');
            pMensaje.style.color = "#6e6e6e";
            pMensaje.textContent = 'Doble click para eliminar';
            listaIdiomas.appendChild(pMensaje);
            listaIdiomas.appendChild(liIdioma);
            return;
        }
        listaIdiomas.appendChild(liIdioma);

    });
}

function limpiarHTMLI() {
    while (listaIdiomas.firstChild) {
        listaIdiomas.removeChild(listaIdiomas.firstChild);
    }
}

function eliminarIdioma(id) {
    // Eliminar
    idiomas = idiomas.filter(idioma => idioma.id != id);
    //MostrarHTML
    agregarIdioma(idiomas);
}

function reiniciarObjI() {
    idiomasObj.idioma = '';
    idiomasObj.puntaje = '';
    resetearInputsI();
}

function resetearInputsI() {
    inputLenguaje.value = '';
    inputPuntaje.value = '';
}


// FUNCIONES HABILIDADES


const HabilidadObj = {
    habili: '',
    porcentaje: '',
}

function datosHabilidad(e) {
    HabilidadObj[e.target.name] = e.target.value;
}

function nuevaHabilidad(e) {
    e.preventDefault();

    const { habili, porcentaje } = HabilidadObj;

    if (habili === '' || porcentaje === '') {
        mensajeAlertaH('Campos vacíos', 'error');
        return;
    }

    HabilidadObj.id = Date.now();

    habilidades = [...habilidades, { ...HabilidadObj }];

    agregarHabilidad();
    reiniciarObjH();
}

function mensajeAlertaH(mensaje, tipo) {
    const alerta = document.querySelector('.error');
    if (!alerta) {
        const divMensaje = document.createElement('p');
        divMensaje.classList.add('alert-danger', 'alert', tipo);
        divMensaje.textContent = mensaje;
        alertaHabilidades.appendChild(divMensaje);
        setTimeout(() => {
            divMensaje.remove();
        }, 2000);
    }

}

function agregarHabilidad() {

    limpiarHTMLH();
    habilidades.forEach(hab => {

        const { habili, porcentaje, id } = hab

        const liHab = document.createElement('li');
        liHab.dataset.id = id;
        liHab.innerHTML = `
        <a style="width:${porcentaje}%;"><p>${habili}</p><p>${porcentaje}%</p></a>
        `;
        liHab.ondblclick = () => eliminarHabilidad(id);

        if (!listaHabilidades.firstChild) {
            const pMensaje = document.createElement('p');
            pMensaje.classList.add('mb-2');
            pMensaje.style.color = "#6e6e6e";
            pMensaje.textContent = 'Doble click para eliminar';
            listaHabilidades.appendChild(pMensaje);
            listaHabilidades.appendChild(liHab);
            return;
        }
        listaHabilidades.appendChild(liHab);

    });
}

function limpiarHTMLH() {
    while (listaHabilidades.firstChild) {
        listaHabilidades.removeChild(listaHabilidades.firstChild);
    }
}

function eliminarHabilidad(id) {
    // Eliminar
    habilidades = habilidades.filter(habilidad => habilidad.id != id);
    //MostrarHTML
    agregarHabilidad(habilidades);
}

function reiniciarObjH() {
    HabilidadObj.habili = '';
    HabilidadObj.porcentaje = '';
    resetearInputsH();
}

function resetearInputsH() {

    inputHabilidad.value = '';
    inputPorcentaje.value = '';
}

//CARGAR DATOS

const perfilObj = {
    nombre: '',
    email: '',
    linkedin: '',
    edad: '',
    telefono: '',
    pais: '',
    ciudad: '',
    barrio: '',
    direccion: '',
    perfil: '',
    aspiracion: '',
}

function datosPerfil(e) {
    perfilObj[e.target.name] = e.target.value;
}


function cargarDatosCV(e) {
    e.preventDefault();
    let nombre = document.getElementById('#nombre').value;
    let email = document.getElementById('#email').value;
    let linkedin = document.getElementById('#linkedin').value;
    let edad = document.getElementById('#edad').value;
    let telefono = document.getElementById('#telefono').value;
    let pais = document.getElementByIdF('#pais').value;
    let ciudad = document.getElementById('#ciudad').value;
    let barrio = document.getElementById('#barrio').value;
    let direccion = document.getElementById('#direccion').value;
    let prefil = document.getElementById('#perfilprofesional').value;
    let aspiracion = document.getElementById('#cargobuscado').value;

    if (nombre === '' || email === '' || linkedin === '' || edad === '' || telefono === '' || pais === '' || ciudad === '' || barrio === '' || direccion === '' || perfil === '' || aspiracion) {
        Swal.fire(
            'Ohh no!',
            'Faltan campos por llenar!'
        );
        return;
    }

    const verify = verificar();

    window.open(`cv${verify}.html`, "_self");
}

function verificar() {
    let number;
    if (document.getElementById('sbutton1').checked) {
        return number = 1;
    }
    if (document.getElementById('sbutton2').checked) {
        return number = 2;
    }
    if (document.getElementById('sbutton3').checked) {
        return number = 3;
    }
}