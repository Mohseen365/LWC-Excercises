import { LightningElement } from 'lwc';

export default class ShadDomParent extends LightningElement {
    renderedCallback(){
        let h1Content = this.template.querySelector('h1');
        h1Content.innerHTML = 'Changed from parent';
        
    }
}