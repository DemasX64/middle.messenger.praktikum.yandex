import Block from '../../utils/Block';
import template from './error.hbs';
import styles from './error.module.scss';
import Button from '../../components/button';

interface ErrorPageProps {
  code: string;
  message: string;
}

export default class ErrorPage extends Block<ErrorPageProps> {
  constructor(props) {
    super({...props});
  }

  init() {
    this.children.button = new Button({
      title: 'Назад к чатам',
      type: 'button',
      inline: true,
    });

  }

  render() {
    return this.compile(template, {...this.props, styles});
  }
}