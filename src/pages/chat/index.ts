import Block from '../../utils/Block';
import template from './chat.hbs';
 import ChatPreview from '../../components/chat-preview';
// import { Input } from '../../components/Input/input';
import styles from './chat.module.scss';
// import { Link } from '../../components/Link';
// import { SignupData } from '../../api/AuthAPI';
// import AuthController from '../../controllers/AuthController';

export default class ChatPage extends Block {
  constructor() {
    super({});
  }

  init() {
    this.children.chatPreview = new ChatPreview({
      title: 'login',
      description: 'text',
      time: 'Логин',
      count: '123'
    });

    // this.children.password = new Input({
    //   name: 'password',
    //   type: 'password',
    //   placeholder: 'Пароль'
    // });

    // this.children.button = new Button({
    //   label: 'Войти',
    //   events: {
    //     click: () => this.onSubmit()
    //   },
    // });

    // this.children.link = new Link({
    //   label: 'Регистрация',
    //   to: '/register'
    // });
  }

  // onSubmit() {
  //   const values = Object
  //     .values(this.children)
  //     .filter(child => child instanceof Input)
  //     .map((child) => ([(child as Input).getName(), (child as Input).getValue()]))

  //   const data = Object.fromEntries(values);

  //   AuthController.signin(data as SignupData);
  // }

  render() {
    return this.compile(template, {...this.props, styles});
  }
}