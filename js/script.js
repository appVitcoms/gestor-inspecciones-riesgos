

$(document).on("pagecreate", "#home", function() {
    $("#login-form").on("submit", function() {
        // Obtener valores de usuario y contraseña
        var username = $("#username").val();
        var password = $("#password").val();
        
        // Validar usuario y contraseña
        if (username === "supervisor" && password === "vitcoms$2023") {
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

$(document).on("pagecreate", function() {
      // Aplicar la clase .btn-menu-salir a los botones
      $(".btn-menu-salir").buttonMarkup();
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
 $(document).on('mobileinit', function() {
    $.mobile.initializePage();
});


});    
