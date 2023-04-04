import Block from '../../utils/Block';
import template from './login.hbs';
import styles from './login.module.scss';
import Form from '../../components/form';
import Input from '../../components/input';
import link from '../../utils/Link';
import RegistrationPage from '../registration';

const loginInputs = [
  {
    title: 'Логин',
    type: 'text',
    name:'login',
    validate: (value) => {
      return value.includes('@') ? true : false
    }
  },
  {
    title: 'Пароль',
    type: 'text',
    name:'password',
    validator: (value) => {
      console.log(value, value.includes('@') ? true : false)
      value.includes('@') ? true : false
    }
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
        submitButtonTitle: "Войти",
        buttonTitle: 'Зарегистрироваться',
        onButtonClick: () => link(new RegistrationPage({}))
      }
    )
  }

  render() {
    return this.compile(template, {...this.props, styles});
  }
}