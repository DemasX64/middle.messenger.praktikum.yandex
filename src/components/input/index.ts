import Block from '../../utils/Block';
import styles from './input.module.scss';
import template from './input.hbs';

interface InputProps {
  title: string;
  type: string;
  name: string;
  error: string;
  isError: boolean;
  validate: (value: string) => boolean;
}

export default class Input extends Block<InputProps> {
  constructor(props) {
     const events = {
      focusin: (e) => {
        if(this.props?.validate)
          if(this.props.validate(e.target.value)) {
            this.getContent()?.children[3].classList.remove(styles.input__error_visible)
          } else {
            this.getContent()?.children[3].classList.add(styles.input__error_visible)
          }
      },
      focusout: (e) => {
        if(this.props?.validate)
          if(this.props.validate(e.target.value)) {
            this.getContent()?.children[3].classList.remove(styles.input__error_visible)
          } else {
            this.getContent()?.children[3].classList.add(styles.input__error_visible)
          }
      }
    } 
    super({...props, events}) 
  }

  public getName() {
    return (this.element.children[1] as HTMLInputElement).name;
  }

  public getValue() {
    return (this.element.children[1] as HTMLInputElement).value;
  }

  render() {
    return this.compile(template, {...this.props, styles});
  }
}