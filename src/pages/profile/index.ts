import Block from '../../utils/Block';
import template from './profile.hbs';
import styles from './profile.module.scss';
import ProfileSetting from '../../components/profile-setting';

const profileSettings = [
  {
    title: 'Почта',
    value: 'pochta@yandex.ru',
  },
  {
    title: 'Почта',
    value: 'pochta@yandex.ru',
  },
  {
    title: 'Почта',
    value: 'pochta@yandex.ru',
  },
  {
    title: 'Почта',
    value: 'pochta@yandex.ru',
  },
  {
    title: 'Почта',
    value: 'pochta@yandex.ru',
  },
  {
    title: 'Почта',
    value: 'pochta@yandex.ru',
  },
]

export default class ProfilePage extends Block {
  constructor() {
    super({});
  }

  init() {
    this.children.profileSettings = profileSettings.map((el) => new ProfileSetting(el))
  }

  render() {
    return this.compile(template, {...this.props, styles});
  }
}