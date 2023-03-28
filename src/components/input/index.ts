import Block from '../../utils/Block';
import styles from './input.module.scss';
import template from './input.hbs';

interface InputProps {
  title: string;
  type: string;
  name: string;
  error: string;
}

export default class Input extends Block<InputProps> {
  constructor(props) {
    super({...props});
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