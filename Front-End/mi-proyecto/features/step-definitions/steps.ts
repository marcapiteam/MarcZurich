import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals';

//Feature: Validación del inicio de sesión
//Scenario: Imposibilidad de hacer login con usuario y contraseña erróneos

import HomePage from '../pageobjects/home.page';

Given(/^el usuario accede a la página de Zurich Empresas$/, async () => {
    await HomePage.open();
});

When(/^acepta todas las cookies si el botón está presente$/, async () => {
    await HomePage.btnAceptar.click();   
});

When(/^hace clic en el botón tu cuenta$/, async () => {
    await HomePage.btnTuCuenta.click();
});

When(/^introduce el dni "([^"]*)"$/, async (dni: string) => {
    await HomePage.inputUsername.setValue(dni);
});

When(/^introduce la Contraseña "([^"]*)"$/, async (password: string) => {
    await HomePage.inputPassword.setValue(password);
});

When(/^hace clic en el botón Iniciar sesión$/, async () => {
    await HomePage.loginButton.click();
});

Then(/^debería ver un mensaje de error que dice "([^"]*)"$/, async (message: string) => {
     console.log(message);
});

Then(/^debería mostrarse la caja contraseña en rojo$/, async () => {
    await expect(HomePage.cajaRoja).toBeDisplayed();
});

When(/^hace clic en el botón buscar agente$/, async () => {
    await HomePage.btnAgente.click();   
});