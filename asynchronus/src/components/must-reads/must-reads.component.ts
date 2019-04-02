import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class MustReadsComponent extends Vue {
    public mustReadItems: Array<{ image: string, title: string }> = [
        {
            image: require('../../assets/must-read1.svg'),
            title: 'Now trending'
        },
        {
            image: require('../../assets/must-read1.svg'),
            title: 'Expert insight'
        }
    ]
}