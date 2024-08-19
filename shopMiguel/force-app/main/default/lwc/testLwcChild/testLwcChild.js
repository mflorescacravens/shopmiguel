import { LightningElement } from 'lwc';

export default class TestLwcChild extends LightningElement {
    handleClick(event) {
        console.log('EVENT DETAILS: ', JSON.stringify(event.detail));
    }
}