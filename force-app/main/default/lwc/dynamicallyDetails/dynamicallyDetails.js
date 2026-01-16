import { LightningElement } from 'lwc';

export default class DynamicallyDetails extends LightningElement {
    name = '';
    message = 'Welcome';
    hasName = false;

    handleName(event){
        this.name = event.target.value;
    }
    handleAll(){
        if(this.name.trim() !== ''){
            this.hasName = true;
        } else {
            this.hasName = false;
        }
    }
}