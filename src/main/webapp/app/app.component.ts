import Vue from 'vue';
import Component from 'vue-class-component';
import Ribbon from '@/core/ribbon/ribbon.vue';
import JhiFooter from '@/core/jhi-footer/jhi-footer.vue';
import JhiNavbar from '@/core/jhi-navbar/jhi-navbar.vue';
import HeroContent from '@/core/hero/HeroContent.vue';
import SideBar from '@/core/sidebar/SideBar.vue';
import LoginForm from '@/account/login-form/login-form.vue';
import Merchant from '@/core/merchants/merchant.vue';
import ResetPasswordFinish from './account/reset-password/finish/reset-password-finish.vue';

@Component({
  components: {
    ribbon: Ribbon,
    'jhi-navbar': JhiNavbar,
    'login-form': LoginForm,
    HeroContent: HeroContent,
    SideBar: SideBar,
    'jhi-footer': JhiFooter,
    merchant: Merchant,
    ResetPasswordFinish: ResetPasswordFinish,
  },
})
export default class App extends Vue {
  public get authenticated(): boolean {
    return this.$store.getters.authenticated;
  }
}
