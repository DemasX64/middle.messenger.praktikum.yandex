import Block from '../../utils/Block';
import template from './profile.hbs';
import styles from './profile.module.scss';
import ProfileSetting from '../../components/profile-setting';
import Button from '../../components/button';
import link from '../../utils/Link';
import ProfileEditPage from '../profile-edit';
import ProfileChangePasswordPage from '../profile-change-password';
import NavPage from '../nav';

const profileSettings = [
  {
    title: 'Почта',
    value: 'pochta@yandex.ru',
    type: 'text',
    disabled: true,
    name: 'email'
  },
  {
    title: 'Почта',
    value: 'pochta@yandex.ru',
    type: 'text',
    disabled: true,
    name: 'email'
  },
  {
    title: 'Почта',
    value: 'pochta@yandex.ru',
    type: 'text',
    disabled: true,
    name: 'email'
  },
  {
    title: 'Почта',
    value: 'pochta@yandex.ru',
    type: 'text',
    disabled: true,
    name: 'email'
  },
  {
    title: 'Почта',
    value: 'pochta@yandex.ru',
    type: 'text',
    disabled: true,
    name: 'email'
  },
  {
    title: 'Почта',
    value: 'pochta@yandex.ru',
    type: 'text',
    disabled: true,
    name: 'email'
  },
]

export default class ProfilePage extends Block {
  constructor() {
    super({});
  }
  
  init() {
    this.children.profileSettings = profileSettings.map((el) => new ProfileSetting(el))
    this.children.editButton = new Button({title:'Редактировать профиль', type: 'button', inline: true, events: { click: () => {link(new ProfileEditPage())}}})
    this.children.changePasswordButton = new Button({title:'Поменять пароль', type: 'button', inline: true, events: { click: () => {link(new ProfileChangePasswordPage())}}})
    this.children.exitButton = new Button({title:'Выйти', type: 'button', inline: true, events: { click: () => {link(new NavPage({}))}}})
  }

  render() {
    return this.compile(template, {...this.props, styles});
  }
}