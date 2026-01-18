import { LightningElement } from 'lwc';

export default class IteratorList extends LightningElement {
    contacts = [
        {
            Id: 1,
            Name: 'Mohseen',
            Title: 'Salesforce Dev'
        },
        {
            Id: 2,
            Name: 'Ali',
            Title: 'Salesforce Admin'
        },
        {
            Id: 3,
            Name: 'Aini',
            Title: 'Salesforce Consultant'
        },
    ];
    
}