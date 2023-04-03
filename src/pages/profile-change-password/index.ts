import Block from '../../utils/Block';
import template from './profile-change-password.hbs';
import styles from '../profile/profile.module.scss';
import ProfileSetting from '../../components/profile-setting';
import Button from '../../components/button';
import link from '../../utils/Link';
import ProfilePage from '../profile';
import { isPassword } from '../../utils/Validators';

const profileSettings = [
  {
    title: 'Новый пароль',
    value: 'pochta@yandex.ru',
    type: 'password',
    disabled: false,
    name: 'oldPassword',
    validate: (value) => {
      return isPassword(value)
    }
  },
  {
    title: 'Повторите новый пароль',
    value: 'pochta@yandex.ru',
    type: 'password',
    disabled: false,
    name: 'newPassword',
    validate: (value) => {
      return isPassword(value)
    }
  },
]

export default class ProfileChangePasswordPage extends Block {
  constructor() {
    super({});
  }
  
  init() {
    this.children.profileSettings = profileSettings.map((el) => new ProfileSetting(el))

    this.children.saveButton = new Button({title:'Сохранить', type: 'submit', inline: true, events: { click: (e) => {
      e.preventDefault();
      link(new ProfilePage())
    }}})
  }

  render() {
    return this.compile(template, {...this.props, styles});
  }
}