import { Component, Prop, Vue, Emit, Watch } from 'vue-property-decorator';

@Component
export default class HeaderComponent extends Vue {    
    public isOpenSidebar: boolean = false;   
    @Prop(Boolean) readonly closeSidebar!: boolean 
    @Emit('sidebarChange') changeSidebar(isChange: boolean) { }

    @Watch('closeSidebar')
    onChanged(val: boolean) {
        console.log(val)
        this.closeMenu()
    }

    openMenu() {
        let sidebar: HTMLElement = document.querySelector('.menu') as HTMLElement
        sidebar.classList.add('open-sidebar')
        this.isOpenSidebar = true     
        this.changeSidebar(true) 
    }

    closeMenu() {
        let sidebar: HTMLElement = document.querySelector('.menu') as HTMLElement
        sidebar.classList.remove('open-sidebar')
        this.isOpenSidebar = false
        this.changeSidebar(false) 
    }
}