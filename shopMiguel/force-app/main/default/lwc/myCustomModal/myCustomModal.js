import { LightningElement } from 'lwc';
import LightningModal from 'lightning/modal';

export default class MyCustomModal extends LightningModal {

    handleOkay() {
        this.close('okay');
    }
}