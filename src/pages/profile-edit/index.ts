import Block from '../../utils/Block';
import template from './profile-edit.hbs';
import styles from '../profile/profile.module.scss';
import ProfileSetting from '../../components/profile-setting';
import Button from '../../components/button';
import link from '../../utils/Link';
import ProfilePage from '../profile';

const profileSettings = [
  {
    title: 'Почта',
    value: 'pochta@yandex.ru',
    type: 'text',
    disabled: false,
    name: 'email'
  },
  {
    title: 'Логин',
    value: 'pochta@yandex.ru',
    type: 'text',
    disabled: false,
    name: 'login'
  },
  {
    title: 'Имя',
    value: 'pochta@yandex.ru',
    type: 'text',
    disabled: false,
    name: 'first_name'
  },
  {
    title: 'Фамилия',
    value: 'pochta@yandex.ru',
    type: 'text',
    disabled: false,
    name: 'second_name'
  },
  {
    title: 'Имя в чате',
    value: 'pochta@yandex.ru',
    type: 'text',
    disabled: false,
    name: 'display_name'
  },
  {
    title: 'Телефон',
    value: 'pochta@yandex.ru',
    type: 'text',
    disabled: false,
    name: 'phone'
  },
]

export default class ProfileEditPage extends Block {
  constructor() {
    super({});
  }
  
  init() {
    this.children.profileSettings = profileSettings.map((el) => new ProfileSetting(el))
    this.children.saveButton = new Button({title:'Сохранить', type: 'submit', inline: true, events: { click: (e) => {
      e.preventDefault()
      link(new ProfilePage())
    }}})
  }

  render() {
    return this.compile(template, {...this.props, styles});
  }
}