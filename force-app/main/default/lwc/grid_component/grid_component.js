/* globals bryntum : true */
import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { columns, data } from './data';

export default class Grid_component extends LightningElement {

    handleGridReady({ target }) {
        target.createGrid(this.initialConfig);
    }
  
    handleGridError(event) {
        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Error loading Bryntum Grid',
                message: event.detail,
                variant: 'error'
            })
        );
    }

    get initialConfig() {
        return {
            features: {
                rowReorder: true,
                search: true
            },
            store : {
                data
            },
            columns
        };
    }
}
