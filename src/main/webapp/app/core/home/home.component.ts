import Component from 'vue-class-component';
import { Inject, Vue } from 'vue-property-decorator';
import LoginService from '@/account/login.service';
import JhiFooter from '@/core/jhi-footer/jhi-footer.vue';
import JhiNavbar from '@/core/jhi-navbar/jhi-navbar.vue';
import HeroContent from '@/core/hero/HeroContent.vue';
import SideBar from '@/core/sidebar/SideBar.vue';
import LoginForm from '@/account/login-form/login-form.vue';
import Merchant from '@/core/merchants/merchant.vue';

@Component({
  components: {
    'jhi-navbar': JhiNavbar,
    'login-form': LoginForm,
    HeroContent: HeroContent,
    SideBar: SideBar,
    'jhi-footer': JhiFooter,
    merchant: Merchant
  },
})
export default class Home extends Vue {
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
