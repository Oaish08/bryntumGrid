import { api, LightningElement } from 'lwc';
import { ReadyEvent, ErrorEvent } from './events';
import { loadScript, loadStyle } from 'lightning/platformResourceLoader';
import GRID from '@salesforce/resourceUrl/bryntum_grid';

export default class Bryntum_grid extends LightningElement {

    @api createGrid(initialConfig) {
        initialConfig = { ...initialConfig, appendTo: this.appendTo};
        window.grid = new bryntum.grid.Grid(initialConfig);
    }

    renderedCallback() {
        if (this.bryntumInitialized) {
            return;
        }
        this.bryntumInitialized = true;

        Promise.all([
            loadScript(this, GRID + '/grid.lwc.module.js'),
            loadStyle(this, GRID + '/grid.stockholm.css')
        ]).then(() => {
            this.dispatchEvent(new ReadyEvent());
        }).catch(error => {
            this.dispatchEvent(
                new ErrorEvent('Some Error at rendering the grid')
            );
        });
    }

    get appendTo() {
        return this.template.firstChild;
    }
}