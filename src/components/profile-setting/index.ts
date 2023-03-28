import Block from '../../utils/Block';
import styles from './profile-setting.module.scss';
import template from './profile-setting.hbs';

interface ProfileSettingProps {
  title: string;
  value: string;
}

export default class ProfileSetting extends Block<ProfileSettingProps> {
  constructor(props) {
    super({...props});
  }

  render() {
    return this.compile(template, {...this.props, styles});
  }
}