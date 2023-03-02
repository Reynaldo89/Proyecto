document.addEventListener("click", function () {
    document
      .getElementById("formulario")
      .addEventListener("submit", validarFormulario);
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();
    let expresion = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3,4})+$/;
    var usuario = document.getElementById("usuario").value;
    if (usuario.length == 0) {
      console.log("No has escrito nada en el usuario");
      return;
    }
    var email = document.getElementById("email").value;
    if ( !expresion.test(email)){
      console.log("No has escrito nada en el email");
      return;
    }
    var clave = document.getElementById("clave").value;
    if (clave.length < 8) {
      console.log("La clave no es válida");
      return;
    }  
    this.submit();
  }