import Block from '../../utils/Block';
import Button from '../button';
import template from './form.hbs';
import styles from './form.module.scss';

interface FormProps {
  title: string;
  inputs: string;
  submitButtonTitle: string;
  buttonTitle: string;
}

export default class Form extends Block<FormProps> {
  constructor(props) {
    super({...props});
  }

  init() {

    this.children.submit = new Button({
      title: 'Войти',
      type: 'submit',
      events: {
        click: (evt) => this.onSubmit(evt)
      },
    });
    this.children.button = new Button({
      title: 'Войти',
      type: 'button',
      events: {
        click: () => this.onClick()
      },
    });

  }

  onSubmit(evt) {
    evt.preventDefault()
    const obj = {}
    this.children.inputs.forEach((el) =>{ 
      obj[el.getName()] = el.getValue()
    })
    console.log(obj)
  }
  
  onClick(){
    console.log('click')
  }

  render() {
    return this.compile(template, {...this.props, styles});
  }
}