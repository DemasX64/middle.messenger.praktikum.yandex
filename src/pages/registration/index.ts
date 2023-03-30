import Block from '../../utils/Block';
import template from './registration.hbs';
import styles from './registration.module.scss';
import Form from '../../components/form';
import Input from '../../components/input';
import link from '../../utils/Link';
import LoginPage from '../login';

const registrationInputs = [
  {
    title: 'Почта',
    type: 'text',
    name:'email',
    error:'dsasd'
  },
  {
    title: 'Логин',
    type: 'text',
    name:'login',
    error:'dsasd'
  },
  {
    title: 'Имя',
    type: 'text',
    name:'first_name',
    error:'dsasd'
  },
  {
    title: 'Фамилия',
    type: 'text',
    name:'second_name',
    error:'dsasd'
  },
  {
    title: 'Телефон',
    type: 'text',
    name:'phone',
    error:'dsasd'
  },
  {
    title: 'Пароль',
    type: 'text',
    name:'password',
    error:'dsasd'
  },
  {
    title: 'Пароль (еще раз)',
    type: 'text',
    name:'password',
    error:'dsasd'
  },
]

export default class RegistrationPage extends Block {
  constructor(props) {
    super({...props});
  }

  init() {
    this.children.form = new Form(
      {
        title: 'Регистрация',
        inputs: registrationInputs.map((el) => new Input(el)), 
        submitButtonTitle: "Зарегистрироваться",
        buttonTitle: 'Войти',
        onButtonClick: () => link(new LoginPage())
      }
    )
  }

  render() {
    return this.compile(template, {...this.props, styles});
  }
}