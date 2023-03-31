import Block from '../../utils/Block';
import template from './profile-change-password.hbs';
import styles from '../profile/profile.module.scss';
import ProfileSetting from '../../components/profile-setting';
import Button from '../../components/button';
import link from '../../utils/Link';
import ProfilePage from '../profile';

const profileSettings = [
  {
    title: 'Новый пароль',
    value: 'pochta@yandex.ru',
    type: 'password',
    disabled: false,
    name: 'oldPassword'
  },
  {
    title: 'Повторите новый пароль',
    value: 'pochta@yandex.ru',
    type: 'password',
    disabled: false,
    name: 'newPassword'
  },
]

export default class ProfileChangePasswordPage extends Block {
  constructor() {
    super({});
  }
  
  init() {
    this.children.profileSettings = profileSettings.map((el) => new ProfileSetting(el))

    this.children.saveButton = new Button({title:'Сохранить', type: 'button', inline: true, events: { click: () => {link(new ProfilePage())}}})
  }

  render() {
    return this.compile(template, {...this.props, styles});
  }
}