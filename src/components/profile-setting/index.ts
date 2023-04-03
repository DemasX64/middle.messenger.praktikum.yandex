import Block from '../../utils/Block';
import styles from './profile-setting.module.scss';
import template from './profile-setting.hbs';

interface ProfileSettingProps {
  title: string;
  value: string;
  type: string;
  name: string;
  disabled: boolean;
  validate: (value: string) => boolean;
}

export default class ProfileSetting extends Block<ProfileSettingProps> {
  constructor(props) {
    const events = {
      focusin: (e) => {
        if(this.props?.validate)

          if(!this.props.validate(e.target.value)) {
            this.getContent()?.children[1].classList.remove(styles["input-error-visible"])
          } else {
            let el =  this.getContent()?.children[1];
            el.textContent = this.props.validate(e.target.value)
            this.getContent()?.children[1].classList.add(styles["input-error-visible"])
          }
      },
      focusout: (e) => {
        if(this.props?.validate)
          if(!this.props.validate(e.target.value)) {
            this.getContent()?.children[1].classList.remove(styles["input-error-visible"])
          } else {
            let el =  this.getContent()?.children[1];
            el.textContent = this.props.validate(e.target.value)
            this.getContent()?.children[1].classList.add(styles["input-error-visible"])
          }
      }
    } 
    super({...props, events});
  }

  render() {
    return this.compile(template, {...this.props, styles});
  }
}