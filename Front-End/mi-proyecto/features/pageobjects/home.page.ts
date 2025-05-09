import { $ } from '@wdio/globals';
import Page from './page';

/**
 * Sub página que contiene selectores y métodos específicos para una página concreta
 */
class HomePage extends Page {
    /**
     * Define los selectores usando métodos getter
     */
    public get btnAceptar() {
        return $('#onetrust-accept-btn-handler');
    }

    public get btnTuCuenta() {
        return $('a[href="https://infoweb.zurichspain.com/mizurich/app/sec/login"]');
    }

    public get inputUsername() {
        return $('#j_username');
    }

    public get inputPassword() {
        return $('#j_password');
    }

    public get loginButton() {
        return $('#loginButton');
    }

    public get cajaRoja(){
        return $('.error');
    }

    public get btnAgente() {
        return $('#MTgzNjcwMjc4X2h0dHBzJTNBJTJGJTJGd3d3Lnp1cmljaC5lcyUyRmJ1c2Nhci1hZ2VudGVz');
    }
    
    /**
     * Método para automatizar la interacción con la página
     */
    public async login(dni: string, password: string, cp: string) {
        await this.btnAceptar.click();
        await this.btnTuCuenta.click();
        await this.inputUsername.setValue(dni);
        await this.inputPassword.setValue(password);
        await this.loginButton.click();

        await this.btnAgente.click();

    }

    /**
     * Sobreescribe opciones específicas para adaptarlas al objeto de página
     */
    public open() {
        return super.open();
    }
}

export default new HomePage();
