

$(document).on("pagecreate", "#home", function() {
    $("#login-form").on("submit", function() {
        // Obtener valores de usuario y contraseña
        var username = $("#username").val();
        var password = $("#password").val();
        
        // Validar usuario y contraseña
        if (username === "vitcoms2017" && password === "VITCOMS/2023") {
            // Si son válidos, redireccionar a la página de opciones
            $("#username").val("");
            $("#password").val("");
            //$.mobile.changePage("#opciones");
            $.mobile.pageContainer.pagecontainer("change", "#opciones", {
              transition: "pop",
              showLoadMsg: false,
              reverse: false,
              changeHash: false,
              transitionDuration: 2000,
              beforeShow: function() {
                    // Código a ejecutar antes de la transición
                $("#opciones").css("opacity", "0");
            },
            show: function() {
                    // Código a ejecutar durante la transición
                $("#opciones").animate({ opacity: 1 }, 2000);
            },
            done: function() {
                // Código a ejecutar después de la transición
            }
        });
        } else {
            // Si no son válidos, mostrar mensaje de error
            alert("Usuario o contraseña incorrectos");
        }
        
        return false;
    });
});

//cambiar contraseña a texto para ayuda al usuario
document.querySelector('.password-toggle').addEventListener('click', function() {
    var passwordInput = document.getElementById("password");
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      this.classList.remove('fa-eye-slash');
      this.classList.add('fa-eye');
    } else {
      passwordInput.type = "password";
      this.classList.remove('fa-eye');
      this.classList.add('fa-eye-slash');
    }
  });



$(document).on("pagecreate", "#opciones", function() {
    // Manejar el evento click en el botón de inspección de servicio - bodega electrónica
 $("#btnBodega").on("click", function() {
        // Obtener el ID del formulario de Google correspondiente
    var formularioId = "1FAIpQLScOOg9Ln1zqQs-iQGr_3qB0eR97Al_VUrjRdUTn4JAMvdRCoQ";

        // Actualizar el src del iframe con la URL del formulario de Google correspondiente
    $("#formulario-inspeccion-servicio-bodega-electro iframe").attr("src", "https://docs.google.com/forms/d/e/" + formularioId + "/viewform?embedded=true");

        // Abrir la página de formulario en un diálogo
    $.mobile.changePage("#forms", {transition: "pop", role: "dialog"});
    return false;
});
 $("#btnElectro").on("click", function() {
        // Obtener el ID del formulario de Google correspondiente
    var formularioId = "1FAIpQLSczoEVxCiAJJCXRhrQZ-9AnwNG8EI2SDudjWHJsM4VsSJ2zbA";

        // Actualizar el src del iframe con la URL del formulario de Google correspondiente
    $("#formulario-inspeccion-servicio-bodega-electro iframe").attr("src", "https://docs.google.com/forms/d/e/" + formularioId + "/viewform?embedded=true");

        // Abrir la página de formulario en un diálogo
    $.mobile.changePage("#forms", {transition: "pop", role: "dialog"});
    return false;
});

 $("#btnRecorredor").on("click", function() {
        // Obtener el ID del formulario de Google correspondiente
    var formularioId = "1FAIpQLSduEqJHvbgUuivoYrO1j5X7UhCp488_4BisiB7C21KK6teMvQ";

        // Actualizar el src del iframe con la URL del formulario de Google correspondiente
    $("#formulario-inspeccion-servicio-bodega-electro iframe").attr("src", "https://docs.google.com/forms/d/e/" + formularioId + "/viewform?embedded=true");

        // Abrir la página de formulario en un diálogo
    $.mobile.changePage("#forms", {transition: "pop", role: "dialog"});
    return false;
});



$("#btnGenerarInforme").on("click", function() {
  // Obtener el ID del formulario de Google correspondiente
  // Actualizar el src del iframe con la URL del formulario de Google correspondiente
  var sheetId = "2PACX-1vQRDgXVUumUZC1hKIvvfbAX4JDKiD_7IlrPMXSszwBoQCy2AJlfwFflBwpy5znZZ_RAFInIePjIdtNG"; // Reemplaza esto con el ID de la hoja que deseas mostrar
  var range = "B5:h40";
  var url = "https://docs.google.com/spreadsheets/d/e/"  + sheetId + "/pubhtml?gid=1702039537&amp;single=true&amp;widget=true&amp;headers=false" + range;
  
  $("#formulario-inspeccion-servicio-bodega-electro iframe").attr("src", url);

  // Abrir la página de formulario en un diálogo
  $.mobile.changePage("#forms", {transition: "pop", role: "dialog"});

  return false;
});

//funcion mostrar formulario de tienda y fecha para informe
function mostrarFormulario() {
    $('#formulario').fadeIn('slow');
  }
  $('#mostrarFormulario').on('click', mostrarFormulario);


 $("#btnVisitaCliente").on("click", function() {
        // Obtener el ID del formulario de Google correspondiente
    var formularioId = "1FAIpQLScwKUCcrr6ImxTGwyX_bJcrXfPhLJJVx6P5p3vMzpR-65U9PQ";

        // Actualizar el src del iframe con la URL del formulario de Google correspondiente
    $("#formulario-inspeccion-servicio-bodega-electro iframe").attr("src", "https://docs.google.com/forms/d/e/" + formularioId + "/viewform?embedded=true");

        // Abrir la página de formulario en un diálogo
    $.mobile.changePage("#forms", {transition: "pop", role: "dialog"});
    return false;
});


 $(document).on('mobileinit', function() {
    $.mobile.initializePage();
});


});    
