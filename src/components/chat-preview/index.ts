import Block from '../../utils/Block';
import styles from './chat-preview.module.scss';
import template from './chat-preview.hbs';

interface ChatPreviewProps {
  title: string;
  description: string;
  time: string;
  count: string;
}

export default class ChatPreview extends Block<ChatPreviewProps> {
  constructor(props) {
    super({...props});
  }

  render() {
    return this.compile(template, {...this.props, styles});
  }
}