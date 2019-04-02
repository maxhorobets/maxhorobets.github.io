import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class CardComponent extends Vue {
    @Prop(Object) readonly content!: Object
}