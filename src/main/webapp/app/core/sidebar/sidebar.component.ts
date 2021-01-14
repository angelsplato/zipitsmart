import Vue from 'vue';
import LoginService from '@/account/login.service';
import { Component, Prop, Inject } from 'vue-property-decorator';

@Component
export default class SideBarView extends Vue {
  @Inject('loginService')
  private loginService: () => LoginService;

  public openLogin(): void {
    this.loginService().openLogin((<any>this).$root);
  }

  public get authenticated(): boolean {
    return this.$store.getters.authenticated;
  }

  public get username(): string {
    return this.$store.getters.account ? this.$store.getters.account.login : '';
  }
}
