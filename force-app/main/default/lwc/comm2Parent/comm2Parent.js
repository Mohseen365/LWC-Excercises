import { LightningElement } from 'lwc';

export default class Comm2Parent extends LightningElement {
    label;
    volume = 0;

    handleInc(event){
        if(this.volume >= 0 && this.volume < 100) {
            this.volume += 1;
        }
        this.label = event.detail + this.volume;
    }

    handleDec(event){
        if(this.volume > 0 && this.volume <= 100) {
            this.volume -= 1;
        }
        this.label = event.detail + this.volume;
    }
}