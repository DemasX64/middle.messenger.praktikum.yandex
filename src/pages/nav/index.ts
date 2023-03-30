import Block from '../../utils/Block';
import template from './nav.hbs';
import Button from '../../components/button';
import ChatPage from '../chat';
import ErrorPage from '../error';

import link from '../../utils/Link';
import LoginPage from '../login';
import RegistrationPage from '../registration';

const buttons = [
  {
    title: 'Чат',
    type: 'button',
    inline: true,
    events: {
      click: () => {
        link(new ChatPage())
      }
    }
  },
  {
    title: 'Ошибка',
    type: 'button',
    inline: true,
    events: {
      click: () => {
        link(new ErrorPage({code:'404',message:'Ошибка'}))
      }
    }
  },
  {
    title: 'Логин',
    type: 'button',
    inline: true,
    events: {
      click: () => {
        link(new LoginPage())
      }
    }
  },
  {
    title: 'Регистрация',
    type: 'button',
    inline: true,
    events: {
      click: () => {
        link(new RegistrationPage({}))
      }
    }
  },
  {
    title: 'Профиль',
    type: 'button',
    inline: true,
    events: {
      click: () => {
        link(new ChatPage())
      }
    }
  },
  {
    title: 'Смена пароля',
    type: 'button',
    inline: true,
    events: {
      click: () => {
        link(new ChatPage())
      }
    }
  },
  {
    title: 'Редактирование профиля',
    type: 'button',
    inline: true,
    events: {
      click: () => {
        link(new ChatPage())
      }
    }
  },
]


export default class NavPage extends Block {
  constructor(props) {
    super({...props});
  }

  init() {
    this.children.buttons = buttons.map((el) => new Button(el));
  }

  render() {
    return this.compile(template, {...this.props});
  }
}