import Block from '../../utils/Block';
import styles from './button.module.scss';
import template from './button.hbs';

interface ButtonProps {
  title: string;
  type: 'button' | 'submit';
  inline: boolean;
  events: {
    click: () => void;
  };
}



export default class Button extends Block<ButtonProps> {
  constructor(props) {
    super({...props});
  }

  render() {
    return this.compile(template, {...this.props, styles});
  }
}