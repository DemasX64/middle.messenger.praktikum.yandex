import Block from '../../utils/Block';
import template from './login.hbs';
import styles from './login.module.scss';
import Form from '../../components/form';
import Input from '../../components/input';

const loginInputs = [
  {
    title: 'Логин',
    type: 'text',
    name:'login',
    error:'dsasd'
  },
  {
    title: 'Пароль',
    type: 'text',
    name:'password',
    error:'dsasd'
  },
]

export default class LoginPage extends Block {
  constructor() {
    super({});
  }

  init() {
    this.children.form = new Form(
      {
        title: 'Вход',
        inputs: loginInputs.map((el) => new Input(el)), 
      }
    )
  }

  render() {
    return this.compile(template, {...this.props, styles});
  }
}