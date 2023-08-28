/*var spreadsheetId = '1MsVVVYR0iIlRwDQYC7ZeZ5ho8l7xk9N4FXKev2kbHsY';
var sucursalCelda = 'C8';
var fechaCelda = 'C10';

function mostrarFormulario() {
  document.getElementById('formulario').style.display = 'block';
}

function almacenarDatos() {
  var sucursal = document.getElementById('sucursal').value;
  var fecha = document.getElementById('fecha').value;

  gapi.client.sheets.spreadsheets.values.update({
    spreadsheetId: spreadsheetId,
    range: sucursalCelda,
    valueInputOption: 'USER_ENTERED',
    resource: {
      values: [[sucursal]]
    }
  }).then(function(response) {
    console.log('La sucursal se ha almacenado correctamente.');
  }, function(reason) {
    if (reason.result.error !== undefined) {
      console.error('Ha ocurrido un error al almacenar la sucursal:', reason.result.error.message);
    } else {
      console.error('Ha ocurrido un error al almacenar la sucursal:', reason);
    }
  });

  gapi.client.sheets.spreadsheets.values.update({
    spreadsheetId: spreadsheetId,
    range: fechaCelda,
    valueInputOption: 'USER_ENTERED',
    resource: {
      values: [[fecha]]
    }
  }).then(function(response) {
    console.log('La fecha se ha almacenado correctamente.');
  }, function(reason) {
    if (reason.result.error !== undefined) {
      console.error('Ha ocurrido un error al almacenar la fecha:', reason.result.error.message);
    } else {
      console.error('Ha ocurrido un error al almacenar la fecha:', reason);
    }
  });

  ejecutarMacro();
}

function ejecutarMacro() {
  gapi.client.request({
    path: 'https://script.google.com/macros/s/AKfycbwYn4D6jNlqfXzIgXeJkHvJlR5Nn9g8zK2uXyWYVg/exec',
    method: 'post',
    body: {
      action: 'crearInforme'
    }
  }).then(function(response) {
    console.log('La macro se ha ejecutado correctamente.');
  }, function(reason) {
    if (reason.result.error !== undefined) {
      console.error('Ha ocurrido un error al ejecutar la macro:', reason.result.error.message);
    } else {
      console.error('Ha ocurrido un error al ejecutar la macro:', reason);
    }
  });
}

gapi.load('client', function() {
  gapi.client.init({
    apiKey: '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'
  }).then(function() {
    console.log('La API de Google Sheets se ha cargado correctamente.');
  }, function(reason) {
    if (reason.result.error !== undefined) {
      console.error('Ha ocurrido un error al cargar la API:', reason.result.error.message);
    } else {
      console.error('Ha ocurrido un error al cargar la API:', reason);
    }
  });
});*/




/*
var spreadsheetId = '11MsVVVYR0iIlRwDQYC7ZeZ5ho8l7xk9N4FXKev2kbHsY';
var sucursalCelda = 'C8';
var fechaCelda = 'C10';

gapi.load('client', function() {
  gapi.client.init({
    apiKey: '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',
    discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4']
  }).then(function() {
    console.log('API de Google Sheets inicializada correctamente.');
  }, function(reason) {
    console.error('Ha ocurrido un error al inicializar la API de Google Sheets:', reason);
  });
});

function mostrarFormulario() {
  document.getElementById('formulario').style.display = 'block';
}

function almacenarDatos() {
  var sucursal = document.getElementById('sucursal').value;
  var fecha = document.getElementById('fecha').value;

  gapi.client.sheets.spreadsheets.values.update({
    spreadsheetId: spreadsheetId,
    range: sucursalCelda,
    valueInputOption: 'USER_ENTERED',
    resource: {
      values: [[sucursal]]
    }
  }).then(function(response) {
    console.log('La sucursal se ha almacenado correctamente.');
  }, function(reason) {
    if (reason.result.error !== undefined) {
      console.error('Ha ocurrido un error al almacenar la sucursal:', reason.result.error.message);
    } else {
      console.error('Ha ocurrido un error al almacenar la sucursal:', reason);
    }
  });

  gapi.client.sheets.spreadsheets.values.update({
    spreadsheetId: spreadsheetId,
    range: fechaCelda,
    valueInputOption: 'USER_ENTERED',
    resource: {
      values: [[fecha]]
    }
  }).then(function(response) {
    console.log('La fecha se ha almacenado correctamente.');
  }, function(reason) {
    if (reason.result.error !== undefined) {
      console.error('Ha ocurrido un error al almacenar la fecha:', reason.result.error.message);
    } else {
      console.error('Ha ocurrido un error al almacenar la fecha:', reason);
    }
  });

  ejecutarMacro();
}

function ejecutarMacro() {
  gapi.client.request({
    path: 'https://script.google.com/macros/s/AKfycbwYn4D6jNlqfXzIgXeJkHvJlR5Nn9g8zK2uXyWYVg/exec',
    method: 'GET'
  }).then(function(response) {
    console.log('La macro se ha ejecutado correctamente.');
  }, function(reason) {
    console.error('Ha ocurrido un error al ejecutar la macro:', reason);
  });
}

*/

/*
var spreadsheetId = '1MsVVVYR0iIlRwDQYC7ZeZ5ho8l7xk9N4FXKev2kbHsY';
var sucursalCelda = 'C8';
var fechaCelda = 'C10';

gapi.load('client:auth2', function() {
  gapi.client.init({
    clientId: '558490154225-2babaauq90aomftro5h8ddmj4i7nh4g8.apps.googleusercontent.com',
    discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
    scope: 'https://www.googleapis.com/auth/spreadsheets'
  }).then(function() {
    console.log('API de Google Sheets inicializada correctamente.');
  }, function(reason) {
    console.error('Ha ocurrido un error al inicializar la API de Google Sheets:', reason);
  });
});

function mostrarFormulario() {
  document.getElementById('formulario').style.display = 'block';
}

function almacenarDatos() {
  var sucursal = document.getElementById('sucursal').value;
  var fecha = document.getElementById('fecha').value;

  gapi.client.sheets.spreadsheets.values.update({
    spreadsheetId: spreadsheetId,
    range: sucursalCelda,
    valueInputOption: 'USER_ENTERED',
    resource: {
      values: [[sucursal]]
    }
  }).then(function(response) {
    console.log('La sucursal se ha almacenado correctamente.');
  }, function(reason) {
    if (reason.result.error !== undefined) {
      console.error('Ha ocurrido un error al almacenar la sucursal:', reason.result.error.message);
    } else {
      console.error('Ha ocurrido un error al almacenar la sucursal:', reason);
    }
  });

  gapi.client.sheets.spreadsheets.values.update({
    spreadsheetId: spreadsheetId,
    range: fechaCelda,
    valueInputOption: 'USER_ENTERED',
    resource: {
      values: [[fecha]]
    }
  }).then(function(response) {
    console.log('La fecha se ha almacenado correctamente.');
  }, function(reason) {
    if (reason.result.error !== undefined) {
      console.error('Ha ocurrido un error al almacenar la fecha:', reason.result.error.message);
    } else {
      console.error('Ha ocurrido un error al almacenar la fecha:', reason);
    }
  });

  ejecutarMacro();
}

function ejecutarMacro() {
  gapi.client.request({
    path: 'https://script.google.com/macros/s/AKfycbwYn4D6jNlqfXzIgXeJkHvJlR5Nn9g8zK2uXyWYVg/exec',
    method: 'GET'
  }).then(function(response) {
    console.log('La macro se ha ejecutado correctamente.');
  }, function(reason) {
    console.error('Ha ocurrido un error al ejecutar la macro:', reason);
  });
}
*/

// ID de la hoja de cálculo de Google Sheets
var spreadsheetId = '1MsVVVYR0iIlRwDQYC7ZeZ5ho8l7xk9N4FXKev2kbHsY';

// ID del proyecto de Google Apps Script
var scriptId = '1NEk8ka7TEa0SNnqFc2QeUvKCTrHVnH56HaxhB7PR2orHpofAVBzbjEFm';
gapi.load('client', initClient);

// Inicializa la API de Google Sheets y Google Apps Script
function initClient() {
  gapi.client.init({
    clientId: '558490154225-096rra1s21dr3ln05j9j13jjbvk07gc2.apps.googleusercontent.com',
    clientSecret: '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',
    discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4', 'https://script.googleapis.com/$discovery/rest?version=v1'],
    scope: 'https://www.googleapis.com/auth/spreadsheets https://www.googleapis.com/auth/script.projects'
  }).then(function() {
    console.log('API de Google Sheets y Google Apps Script inicializadas correctamente.');
    enviarDatosASpreadsheet();
  }, function(reason) {
    console.error('Ha ocurrido un error al inicializar las API:', reason);
  });
}

// Ejecuta la función crearInforme en Google Apps Script
function ejecutarCrearInforme() {
  gapi.client.script.scripts.run({
    scriptId: scriptId,
    resource: {
      function: 'crearInforme'
    }
  }).then(function(resp) {
    if (resp.result.error) {
      console.error('Ha ocurrido un error al ejecutar la función crearInforme:', resp.result.error);
    } else {
      console.log('Función crearInforme ejecutada correctamente.');
    }
  }, function(reason) {
    console.error('Ha ocurrido un error al ejecutar la función crearInforme:', reason);
  });
}

// Muestra el formulario para ingresar la sucursal y la fecha
function mostrarFormulario() {
  var formulario2 = document.getElementById("formulario");
  var formularioIframe = document.getElementById("mi-iframe");
  formulario2.style.display = 'block'; // Mostrar el formulario
  formularioIframe.write(formulario2.outerHTML);
  $.mobile.changePage("#forms", {transition: "pop", role: "dialog"});
}

// Almacena la sucursal y la fecha en la hoja de cálculo
function almacenarDatos() {
  var sucursal = document.getElementById('sucursal').value;
  var fecha = document.getElementById('fecha').value;

  // Actualiza el valor de la celda de la sucursal
  gapi.client.sheets.spreadsheets.values.update({
    spreadsheetId: spreadsheetId,
    range: sucursalCelda,
    valueInputOption: 'USER_ENTERED',
    resource: {
      values: [[sucursal]]
    }
  }).then(function(response) {
    console.log('Sucursal almacenada correctamente.');

    // Actualiza el valor de la celda de la fecha
    gapi.client.sheets.spreadsheets.values.update({
      spreadsheetId: spreadsheetId,
      range: fechaCelda,
      valueInputOption: 'USER_ENTERED',
      resource: {
        values: [[fecha]]
      }
    }).then(function(response) {
      console.log('Fecha almacenada correctamente.');

      // Ejecuta la función crearInforme en Google Apps Script
      ejecutarCrearInforme();
    }, function(reason) {
      console.error('Ha ocurrido un error al almacenar la fecha:', reason);
    });
  }, function(reason) {
    console.error('Ha ocurrido un error al almacenar la sucursal:', reason);
  });
}

// Función para enviar los datos a la hoja de cálculo
function enviarDatosASpreadsheet() {
  // Aquí puedes agregar el código para mostrar y validar el formulario
  // ...
  mostrarFormulario();
}

// ... Resto de tu código ...
