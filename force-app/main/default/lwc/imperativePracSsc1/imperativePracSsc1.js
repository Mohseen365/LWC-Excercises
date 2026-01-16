import { LightningElement } from 'lwc';
import createStudent from '@salesforce/apex/RecordClass.createStudent';
export default class ImperativePracSsc1 extends LightningElement {
    name;
    mobileNo;
    age;

    handleNameChange(event) {
        this.name = event.target.value;
    }

    handleMobileNoChange(event) {
        this.mobileNo = event.target.value;
    }

    handleAgeChange(event) {
        this.age = Number(event.target.value);
    }
    handleSaveClick(){
        createStudent({
            name: this.name, 
            mobileNo: this.mobileNo,
            age: this.age
        })
        .then(result => {alert('student record is created' + result.Id);})
        .catch(error => {alert('Student Record Created failed due to '+  error.body.message);})
    }
}