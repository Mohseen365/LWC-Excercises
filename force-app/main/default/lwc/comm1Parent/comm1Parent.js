import { LightningElement } from 'lwc';

export default class Comm1Parent extends LightningElement {
    
    receivedMessage;
    age;
    name;
    
    handleMessage(event){
        this.receivedMessage = event.detail.message;
        this.name = event.detail.name;
        this.age = event.detail.age;
        console.log('receivedMessage' + this.receivedMessage);

    }
}