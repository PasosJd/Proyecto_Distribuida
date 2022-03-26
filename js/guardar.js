function guardarInformacionPersonal() {
    db.collection("Usuario").add(
        {
            nombre: document.getElementById('name').value,
            apellido: document.getElementById('last').value,
            celular: document.getElementById('phoneNumber').value,
            correo: document.getElementById('email').value,
            departamento: document.getElementById('depto').value,
            direccion: document.getElementById('address').value,
            edad: document.getElementById('age').value,
            fechaNacimiento: document.getElementById('dateBirth').value,
            genero: document.getElementById('gender').value,
            municipio: document.getElementById('mpio').value,
            nacionalidad: document.getElementById('nationality').value,
            numeroIdentificacion: document.getElementById('idNumber').value,
            telefono: document.getElementById('phone').value,
            tipoIdentificacion: document.getElementById('idType').value
        });
}

function guardarInformacionLaboral() {
    db.collection("Experiencia laboral").add(
        {
            cargo: document.getElementById('cargo').value,
            ciudad: document.getElementById('cityEmpresa').value,
            contacto: document.getElementById('contactoEmpresa').value,
            nombreEmpresa: document.getElementById('nameEmpresa').value,
            pais: document.getElementById('countryEmpresa').value
        });
}

function guardarInformacionAcademica() {
    db.collection("Información académica").add(
        {
            añoTitulo: document.getElementById('anioTitulo').value,
            ciudad: document.getElementById('cityInstitucion').value,
            idioma: document.getElementById('language').value,
            institucion: document.getElementById('institucion').value,
            pais: document.getElementById('countryInstitucion').value
        });
}

function guardar(){
    try{
        guardarInformacionPersonal();
        guardarInformacionAcademica();
        guardarInformacionLaboral();
    }catch(error){
        alert("No se guardó la información " + error);
    }
}