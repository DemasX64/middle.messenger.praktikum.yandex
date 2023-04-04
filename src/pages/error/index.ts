import Block from '../../utils/Block';
import template from './error.hbs';
import styles from './error.module.scss';
import Button from '../../components/button';
import ChatPage from '../chat';
import link from '../../utils/Link';

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
      events: {
        click: () => {
          link(new ChatPage())
        }
      }
    });
  }

  render() {
    return this.compile(template, {...this.props, styles});
  }
}