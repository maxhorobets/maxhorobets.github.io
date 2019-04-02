import { Component, Prop, Vue } from 'vue-property-decorator';
import CardComponent from '../card/card.component.vue';
import WelcomeComponent from '../welcome/welcome.component.vue';
import MustReadsComponent from '../must-reads/must-reads.component.vue';

@Component({
    components: {
        CardComponent,
        WelcomeComponent,
        MustReadsComponent
    }
})
export default class MainComponent extends Vue {
    public cards: Array<{ img: String, title: String, link: String }> = [
        {
            img: require('../../assets/card1.svg'), 
            title: 'Employee turnover is the highest it’s been in 10 years', 
            link: 'forbes.com'
        },
        {
            img: require('../../assets/card2.svg'), 
            title: 'Nearly 3/4 of Americans are unhappy at work', 
            link: 'forbes.com'
        },
        {
            img: require('../../assets/card3.svg'), 
            title: 'When employees talk and managers don’t listen', 
            link: 'forbes.com'
        }
    ]
}