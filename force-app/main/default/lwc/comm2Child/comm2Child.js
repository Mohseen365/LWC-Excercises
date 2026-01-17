import { LightningElement } from 'lwc';

export default class Comm2Child extends LightningElement {
    handleDecrement(){
        this.dispatchEvent(new CustomEvent('decrement', {detail: 'volume is increased to'}));
    }
    handleIncrement(){
        this.dispatchEvent(new CustomEvent('increment', {detail: 'volume is decreased to'}));
    }
}