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

// Rango de celdas para almacenar la sucursal y la fecha
var sucursalCelda = 'C8';
var fechaCelda = 'C10';

// Inicializa la API de Google Sheets
function initClient() {
  gapi.client.init({
    apiKey: '4206dfbc8aa2f39be81db405119dcaf177483056',
    clientId: '100495741847459020315',
    discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
    scope: 'https://www.googleapis.com/auth/spreadsheets'
  }).then(function() {
    console.log('API de Google Sheets inicializada correctamente.');
    enviarDatosASpreadsheet();
  }, function(reason) {
    console.error('Ha ocurrido un error al inicializar la API de Google Sheets:', reason);
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
    console.log('La sucursal se ha almacenado correctamente.');
  }, function(reason) {
    console.error('Ha ocurrido un error al almacenar la sucursal:', reason);
  });

  // Actualiza el valor de la celda de la fecha
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
    console.error('Ha ocurrido un error al almacenar la fecha:', reason);
  });

  // Ejecuta la macro de Apps Script
  ejecutarMacro();
}

// Ejecuta la macro de Apps Script
function ejecutarMacro() {
  // URL de la macro de Apps Script
  var macroUrl = 'https://script.google.com/macros/s/AKfycbwYn4D6jNlqfXzIgXeJkHvJlR5Nn9g8zK2uXyWYVg/exec?functionName=crearInforme';

  // Parámetros para la macro de Apps Script
  var params = {
    spreadsheetId: spreadsheetId,
    sucursalCelda: sucursalCelda,
    fechaCelda: fechaCelda
  };

  // Realiza una petición GET a la URL de la macro de Apps Script con los parámetros
  gapi.client.request({
    path: macroUrl,
    method: 'GET',
    params: params
  }).then(function(response) {
    console.log('La macro se ha ejecutado correctamente.');
  }, function(reason) {
    console.error('Ha ocurrido un error al ejecutar la macro:', reason);
  });
}

// Inicia sesión en Google al cargar la página
gapi.load('client:auth2', initClient);



// Almacena los datos al enviar el formulario
document.getElementById('formulario').addEventListener('submit', function(event) {
  event.preventDefault();
  almacenarDatos();
});
