import { $ } from '@wdio/globals';
import Page from './page';

/**
 * Sub página que contiene selectores y métodos específicos para una página concreta
 */
class HomePage extends Page {
    /**
     * Define los selectores usando métodos getter
     */
    public get aceptarCookies() {
        return $('#onetrust-accept-btn-handler');
    }

    public get hacerClicSaberMas() {
        return $('#DH_1_coche');
    }

    public get hacerClicLlamamos() {
        return $('a[title="HB_1_Marca"]');
    }

    public get botonHorario() {
        return $$('div.buttonHorario[name="17"]');
    }

    public get botonEnviarTeLlamamos() {
        return $('#_com_zurich_callmeback_corporate_ZurichCallmebackCorporatePortlet_INSTANCE_erbe7JfhSi1o_btnSubmit');
    }
    
    /**
     * Método para automatizar la interacción con la página
     */
    public async login() {
        await this.aceptarCookies.click();
        await this.hacerClicSaberMas.click();
        await this.hacerClicLlamamos.waitForDisplayed({ timeout: 5000 });
        await this.hacerClicLlamamos.click();
        await this.botonHorario[0].click();
        await this.botonEnviarTeLlamamos.click();

    }

    /**
     * Sobreescribe opciones específicas para adaptarlas al objeto de página
     */
    public open() {
        return super.open();
    }
}

export default new HomePage();
