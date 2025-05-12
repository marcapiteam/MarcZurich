import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals';

import HomePage from '../pageobjects/home.page';

Given('que estoy en la página de inicio de Zurich Seguros', async function () {
  await HomePage.open();
});

When(/^acepto todas las cookies si se me solicita$/, async () => {
    await HomePage.aceptarCookies.click();   
});

When(/^hago clic en "Saber más" en la sección "Seguro de Coche"$/, async () => {
    await HomePage.hacerClicSaberMas.click();
  });

When(/^hago clic en el botón "Te llamamos"$/, async () => {
    await HomePage.hacerClicLlamamos.click();
  });

When(/^relleno el campo "Nombre y apellidos" con "([^"]+)"$/, async (nombre) => {
    const input = await $('[name*="nameInput"]');
    await input.setValue(nombre);
});

When(/^selecciono "([^"]+)" en "¿Eres cliente\?"$/, async (opcion) => {
  if (opcion === "Sí") {
      const radioSi = await $('[id*="soycliente"]');
      await radioSi.click();
  }
});

When(/^relleno el campo "NIF" con "([^"]+)"$/, async (nif) => {
  const input = await $('[id*="nifInput"]');
  await input.setValue(nif);
});

When(/^relleno el campo "Teléfono" con "([^"]+)"$/, async (telefono) => {
  const inputTelefono = await $('[name*="phoneInput"]');
  await inputTelefono.setValue(telefono);
});

When(/^hago clic en el horario "([^"]+)"$/, async (hora) => {
  await HomePage.botonHorario[0].click();   
});

When(/^relleno el campo "Email" con "([^"]+)"$/, async (email) => {
  const input = await $('[id*="emailInput"]'); 
  await input.setValue(email); 
});

When(/^relleno el campo "Código Postal" con "([^"]+)"$/, async (codigoPostal) => {
  const input = await $('[id*="postalCodeInput"]'); 
  await input.setValue(codigoPostal);  
});

When(/^no marco la casilla "Acepto los términos legales"$/, async () => {
  const checkbox = await $('#_com_zurich_callmeback_corporate_ZurichCallmebackCorporatePortlet_INSTANCE_erbe7JfhSi1o_legalInput');
  const isChecked = await checkbox.isSelected();
  expect(isChecked).toBe(false); 
});

When(/^hago clic en el botón "Enviar"$/, async () => {
  await HomePage.botonEnviarTeLlamamos.click();

});

Then(/^debería ver un mensaje de error "Debes aceptar los términos legales para continuar"$/, async () => {
  const errorMessage = await $('.errorLegal.errorInputForm');
  const text = await errorMessage.getText();
  // Verifica que el texto del mensaje sea el esperado
  expect(text).toBe('Debes aceptar los términos legales para continuar');
});
