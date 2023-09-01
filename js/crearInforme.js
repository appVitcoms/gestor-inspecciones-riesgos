//inicializar api de google
// Inicializar API de Google/
/*
function initGoogleApi() {
    gapi.load('client', async () => {
      try {
        await gapi.client.init({
          apiKey: 'AIzaSyDRmpYn8Umm5t6s99-GGrNjM8DYZOO8Zuc',
          clientId: '100495741847459020315',
          scope: 'https://www.googleapis.com/auth/script.external_request https://www.googleapis.com/auth/spreadsheets',
        });
  
        // Cargar la API de Google Sheets
        await gapi.client.load('sheets', 'v4');
        console.log('API de Google Sheets cargada e inicializada correctamente');
      } catch (error) {
        console.error('Error al inicializar la API de Google:', error);
      }
    });
  }*/

  async function ejecutarMacro() {
    const sucursal = document.getElementById('sucursal').value;
    const fecha = document.getElementById('fecha').value;
    const spreadsheetId = '1MsVVVYR0iIlRwDQYC7ZeZ5ho8l7xk9N4FXKev2kbHsY';
    const sheetName = 'GENERAR ACTA SUP';
  
    try {
      // Verificar si gapi.client.sheets está definido
      if (!gapi.client.sheets) {
        console.error('Error: gapi.client.sheets no está definido. Asegúrate de que la API de Google Sheets esté cargada e inicializada correctamente.');
        return;
      }
  
      // Actualizar las celdas C7 y C9 con los valores de sucursal y fecha
      await gapi.client.sheets.spreadsheets.values.batchUpdate({
        spreadsheetId: spreadsheetId,
        resource: {
          valueInputOption: 'RAW',
          data: [
            { range: `${sheetName}!C9`, values: [[sucursal]] },
            { range: `${sheetName}!C7`, values: [[fecha]] },
          ],
        },
      });
  
      // Ejecutar la función 'crearInforme' en Google Apps Script
      await gapi.client.script.scripts.run({
        scriptId: '1NEk8ka7TEa0SNnqFc2QeUvKCTrHVnH56HaxhB7PR2orHpofAVBzbjEFm',
        resource: {
          function: 'crearInforme',
          parameters: [], // Agrega aquí los parámetros necesarios para la macro, si los hay
        },
      });
  
      console.log('Macro ejecutada con éxito');
    } catch (error) {
      console.error('Error al ejecutar la macro:', error);
    }
  }
  
  
  /*document.getElementById('ejecutarMacro').addEventListener('click', () => {
      gapi.auth2.getAuthInstance().signIn().then(() => {
          ejecutarMacro(); // Llama la funcion
      });
    });*/
  
  document.addEventListener('DOMContentLoaded', () => {
      const boton = document.getElementById('ejecutarMacro');  
       // Agregar el evento 'click' al botón
       boton.addEventListener('click', () => {
          const auth2 = gapi.auth2.getAuthInstance();
          if (!auth2.isSignedIn.get()) {
              auth2.signIn().then(() => {
                  ejecutarMacro(); // Llama la función
              });
          } else {
              ejecutarMacro(); // Llama la función
          }
      });
  });
  
  
     
    