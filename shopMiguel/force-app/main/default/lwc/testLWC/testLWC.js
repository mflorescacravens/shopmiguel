import { LightningElement } from 'lwc';

export default class TestLWC extends LightningElement {

    
    handleClick() {
        this.message = 'message changed by javascript';
    }

    get messageInUpperCase() {
        return this.message.toUpperCase();
    }
}