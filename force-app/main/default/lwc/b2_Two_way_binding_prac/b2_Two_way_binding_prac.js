import { LightningElement } from 'lwc';

export default class B2_Two_way_binding_prac extends LightningElement {
    name = 'Mohseen';
    handleChange(event){
        this.name = event.target.value;
    }
}