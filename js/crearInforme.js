var apiKey = 'AIzaSyClIaTgdPvLtYhaGHYGLNZdO_6-5h7HERU '; // Reemplace esto con su clave API
var spreadsheetId = '1MsVVVYR0iIlRwDQYC7ZeZ5ho8l7xk9N4FXKev2kbHsY'; // Reemplace esto con el ID de su hoja de cálculo
var sheetName = 'GENERAR ACTA'; // Reemplace esto con el nombre de la hoja que desea leer

$.ajax({
  url: 'https://sheets.googleapis.com/v4/spreadsheets/' + spreadsheetId + '/values/' + sheetName + '!A1:f30?key=' + apiKey,
  type: 'GET',
  dataType: 'json',
  success: function(response) {
    console.log(response.values);
  },
  error: function(error) {
    console.error('Error al leer datos de la hoja de cálculo:', error);
  }
});
