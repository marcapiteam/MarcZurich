import { Given, When, Then } from '@cucumber/cucumber';
import axios, { AxiosResponse } from 'axios';
import { expect } from 'chai';

let response: AxiosResponse | undefined;

const validData = {
  username: "testuser",
  password: "testpassword"
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
    response = await axios.post('https://mockapi.io/api/register', validData);
  } catch (error: any) {
    response = error.response;
  }
});

When('envío una solicitud de registro a la API con datos inválidos', async function () {
  try {
    response = await axios.post('https://mockapi.io/api/register', invalidData);
  } catch (error: any) {
    response = error.response;
  }
});

Then('debería recibir un estado {int}', function (statusCode: number) {
  expect(response?.status).to.equal(statusCode);
});

Then('la respuesta debería contener un mensaje de éxito', function () {
  expect(response?.data).to.have.property('message', 'Registro exitoso');
});

Then('la respuesta debería contener un mensaje de error', function () {
  expect(response?.data).to.have.property('message', 'Error en el registro');
});
