import { booleanAttribute, ChangeDetectionStrategy, Component, computed, input, numberAttribute, signal } from '@angular/core';

@Component({
  selector: 'd-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarComponent {
  isErrorImg = signal(false);
  /**
   * 自定义头像显示文字
   */
  gender = input<'male' | 'female' | string>();
  /**
   * avatar宽度
   */
  width = input(36, { transform: numberAttribute });
  /**
   * avatar高度
   */
  height = input(36, { transform: numberAttribute });
  /**
   * 是否是圆形n
   */
  isRound = input(true, { transform: booleanAttribute });
  /**
   * 是否是图片
   */
  imgSrc = input<string>();
  /**
   * 用户名称
   */
  name = input<string>();
  /**
   * 自定义头像显示文字
   */
  customText = input<string>();
  /**
   * 头像中间文字最小尺寸
   */
  MINIMUM_FONT_SIZE = 12;
  userName = computed(() => (this.customText() ? this.customText() : this.name()));
  fontSize = computed(() => {
    const minNum = Math.min(this.width(), this.height());
    const size = minNum / 4 + 3;
    return Math.max(size, this.MINIMUM_FONT_SIZE);
  });
  nameDisplay = computed(() => {
    const userName = this.userName();
    const minNum = Math.min(this.width(), this.height());
    if (userName) {
      return this.setDisplayName(userName, minNum);
    } else if (userName === '') {
      return '';
    }
  });

  isNobody = computed(() => {
    const userName = this.userName();
    if (userName) {
      return false;
    } else if (userName === '') {
      return false;
    } else {
      return true;
    }
  });
  code = computed(() => {
    const gender = this.gender();
    if (gender) {
      if (gender.toLowerCase() === 'male') {
        return 1;
      } else if (gender.toLowerCase() === 'female') {
        return 0;
      } else {
        throw new Error('gender must be "Male" or "Female"');
      }
    }
    const unicode = this.userName().substring(0, 1).charCodeAt(0);
    return unicode % 2;
  });

  setDisplayName(name: string, width: number) {
    if (this.customText()) {
      return this.customText();
    }
    if (width < 30) {
      if (/^[\u4e00-\u9fa5]/.test(name)) {
        return name.substring(name.length - 1, 1);
      } else {
        return this.name().substring(0, 1).toUpperCase();
      }
    }
    if (name.length < 2) {
      return name;
    } else {
      // 以中文开头显示后两个字符
      if (/^[\u4e00-\u9fa5]/.test(name)) {
        return name.substring(name.length - 2, 2);
        // 以英文开头
      } else if (/^[A-Za-z]/.test(name)) {
        // 含有两个及以上，包含空格，下划线，中划线分隔符的英文名取前两个字母的首字母
        if (/[_ -]/.test(name)) {
          const str_before = name.split(/_|-|\s+/)[0];
          const str_after = name.split(/_|-|\s+/)[1];
          return str_before.substring(0, 1).toUpperCase() + str_after.substring(0, 1).toUpperCase();
        } else {
          // 一个英文名的情况显示前两个字母
          return name.substring(0, 2).toUpperCase();
        }
      } else {
        // 非中英文开头默认取前两个字符
        return this.name().substring(0, 2);
      }
    }
  }
}
