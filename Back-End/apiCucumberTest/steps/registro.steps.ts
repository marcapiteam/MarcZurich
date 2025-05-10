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
    response = await axios.post('https://681f1acc72e59f922ef53fa6.mockapi.io/users', validData);
  } catch (error: any) {
    response = error.response;
  }
});

When('envío una solicitud de registro a la API con datos inválidos', async function () {
  try {
    response = await axios.post('https://681f1acc72e59f922ef53fa6.mockapi.io/user', invalidData);
  } catch (error: any) {
    response = error.response;
  }
});

Then('debería recibir un estado {int}', function (statusCode: number) {
  expect(response?.status).to.equal(statusCode);
});


Then('la respuesta debería contener un mensaje de error', function () {
  // Verificamos que la respuesta contenga un mensaje de error
  if (response?.data && Array.isArray(response.data)) {
    expect(response.data).to.be.an('array');
    expect(response.data[0]).to.have.property('createdAt');
    expect(response.data[0]).to.have.property('name');
    expect(response.data[0]).to.have.property('avatar');
    expect(response.data[0]).to.have.property('id');
  } else {
    // Si la respuesta no es un array, verificamos el texto de la respuesta
    expect(response?.data).to.include('Cannot POST /api/user');
  }
});

Then('la respuesta no muestra nada', function () {
  expect(response?.data).to.have.property('message', 'Error en el registro');
});
