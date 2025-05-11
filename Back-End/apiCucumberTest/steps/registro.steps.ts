import { Given, When, Then } from '@cucumber/cucumber';
import axios from 'axios';
import { expect } from 'chai';

let apiResponse: any;

const validData = {
  username: "marc",
  password: "fonolleda"
};

const invalidData = {
  username: "",
  password: "short"
};

Given('que tengo los datos de registro válidos', function () {
  // Los datos ya están definidos arriba
});

Given('que tengo los datos de registro inválidos', function () {
  // Los datos ya están definidos arriba
});

When('envío una solicitud de registro a la API', async function () {
  try {
    apiResponse = await axios.post('https://681f1acc72e59f922ef53fa6.mockapi.io/users', validData);
  } catch (error: any) {
    apiResponse = error.response;
  }
});

When('envío una solicitud de registro a la API con datos inválidos', async function () {
  try {
    apiResponse = await axios.post('https://681f1acc72e59f922ef53fa6.mockapi.io/user', invalidData);
  } catch (error: any) {
    apiResponse = error.response;
  }
});

Then('debería recibir un estado {int}', function (statusCode: number) {
  expect(apiResponse?.status).to.equal(statusCode);
});

Then('la respuesta contiene un JSON válido', function () {
  // Verificamos que el objeto JSON tenga las propiedades esperadas
  expect(apiResponse?.data).to.have.all.keys('createdAt', 'name', 'avatar', 'id', 'password');
});

Then('la respuesta no muestra nada', function () {
  expect(apiResponse?.data).to.equal('Invalid request');
});

Then('la respuesta debería contener un json válido', function () {
  // Verificamos que la respuesta sea un objeto JSON válido
  expect(apiResponse?.data).to.be.an('object');
});