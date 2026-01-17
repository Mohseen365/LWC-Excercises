import { LightningElement } from 'lwc';

export default class Comm1Child extends LightningElement {
    message;
    name = 'mohseen';
    age = 26;

    handleChange(event) {
        this.message = event.target.value;        
    }

    handleClick(){
        this.dispatchEvent(new CustomEvent('messagesend', {detail: {name : this.name, age: this.age, message: this.message}}))
        console.log('message' + this.message);
    }
}