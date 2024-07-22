import { LightningElement, wire, api } from 'lwc';
import getAllDeveloperSkills from '@salesforce/apex/SkillRetriever.getAllDeveloperSkills';

export default class MiguelAboutMeContainer extends LightningElement {

    developerSkills;
    error;

    @wire(getAllDeveloperSkills)
    allWiredSkills({ error, data }) {
        if (data) {
            this.developerSkills = data;
            console.log(data);
        } else if (error) {
            console.log('ERROR: ', error);
        }
    }

    connectedCallback() {
        // console.log('Connected')
    }


}