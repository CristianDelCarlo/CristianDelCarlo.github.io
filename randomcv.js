function generarcv() {/** Utiliza la función $.ajax() de JQuery para leer los datos de RANDOM USER GENERATOR y los escribe en la página */
  $.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function (data) {
      console.log(data);
      const persona = data.results[0];
      let fechaorig = persona.dob.date.split("T")[0];
      let anio = fechaorig.split("-")[0];
      let mes = fechaorig.split("-")[1];
      let dia = fechaorig.split("-")[2];
      let fecha = dia + "/" + mes + "/" + anio;
      let genero = "Otre"/**Se usan dos if en lugar de if-else para contemplar la posibilidad de que no sea ni male ni female = "Otre" */
      if (persona.gender == "female") {
        genero = "Femenino"
      }
      if (persona.gender == "male") {
        genero = "Masculino"
      }
      document.getElementById("titulo").innerHTML = "CV de " + persona.name.title + " " + persona.name.first + " " + persona.name.last;
      document.getElementById("nombrecv").innerHTML = persona.name.title + " " + persona.name.first + " " + persona.name.last;
      document.getElementById("foto").insertAdjacentHTML('beforeend', `<img src="${persona.picture.large}" alt = "No se pudo descargar la imagen" style="float: left" height="200" width="200" hspace="50" vspace="50">`);
      document.getElementById("genero").innerHTML = "Género autopercibido: " + genero;
      document.getElementById("direccion").innerHTML = "Dirección: " + persona.location.street.name + " " + persona.location.street.number;
      document.getElementById("ciudad").innerHTML = "Ciudad: " + persona.location.city + " (Código Postal: " + persona.location.postcode + ")";
      document.getElementById("pais").innerHTML = "Estado: " + persona.location.state + "  -  País: " + persona.location.country;
      document.getElementById("correo").innerHTML = "Correo Electrónico: " + persona.email;
      document.getElementById("nacim").innerHTML = "Fecha de nacimiento: " + fecha + " (" + persona.dob.age + " años)";
      document.getElementById("tel").innerHTML = "Teléfono: " + persona.phone + "  -   Celular: " + persona.cell;
    },
  });

}

function abrirsolapa() {
  window.open("cv.html")
}

function ocultarexperiencia() {
  document.getElementById("fexperiencia").style.display = "none";
}

function mostrarexperiencia() {
  document.getElementById("fexperiencia").style.display = "block";
}

function ocultarhabilidades() {
  document.getElementById("fhabilidades").style.display = "none";
}

function mostrarhabilidades() {
  document.getElementById("fhabilidades").style.display = "block";
}
