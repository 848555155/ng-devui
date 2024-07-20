import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'd-avatar',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
  preserveWhitespaces: false,
})
export class AvatarComponent {
  isNobody = computed(() => {
    const userName = this.customText() ?? this.name();
    if (userName) {return false;}
    else if (userName === '') {return false;}
    else {return true;}
  });
  isErrorImg = signal(false);
  /**
   * 自定义头像显示文字
   */
  gender = input<'male' | 'female' | string>();
  /**
   * avatar宽度
   */
  width = input(36);
  /**
   * avatar高度
   */
  height = input(36);
  /**
   * 是否是圆形n
   */
  isRound = input(true, {
    transform: coerceBooleanProperty,
  });
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
  fontSize = computed(() => {
    const minNum = Math.min(this.width(), this.height());
    const size = minNum / 4 + 3;
    return size < this.MINIMUM_FONT_SIZE ? this.MINIMUM_FONT_SIZE : size;
  });
  code = computed(() => {
    const name = this.nameDisplay();
    return this.getBackgroundColor(name.substring(0, 1));
  });
  nameDisplay = computed(() => {
    const userName = this.customText() ?? this.name();
    if (userName) {
      const minNum = Math.min(this.width(), this.height());
      return this.setDisplayName(userName, minNum);
    } else if (userName === '') {
      return '';
    }
  });

  showErrAvatar() {
    this.isErrorImg.set(true);
  }

  setDisplayName(name: string, width: number) {
    let result = "";
    if (this.customText()) {
      result = this.customText();
    }
    if (name.length < 2) {
      result =  name;
    } else {
      // 以中文开头显示后两个字符
      if (/^[\u4e00-\u9fa5]/.test(name)) {
        result =  name.substr(name.length - 2, 2);
        // 以英文开头
      } else if (/^[A-Za-z]/.test(name)) {
        // 含有两个及以上，包含空格，下划线，中划线分隔符的英文名取前两个字母的首字母
        if (/[_ -]/.test(name)) {
          const str_before = name.split(/_|-|\s+/)[0];
          const str_after = name.split(/_|-|\s+/)[1];
          result =  str_before.substring(0, 1).toUpperCase() + str_after.substring(0, 1).toUpperCase();
        } else {
          // 一个英文名的情况显示前两个字母
          result =  name.substring(0, 2).toUpperCase();
        }
      } else {
        // 非中英文开头默认取前两个字符
        result =  this.name().substring(0, 2);
      }
    }
    if (width < 30) {
      if (/^[\u4e00-\u9fa5]/.test(name)) {
        result =  name.substring(name.length - 1, name.length);
      } else {
        result =  this.name().substring(0, 1).toUpperCase();
      }
    }
    return result;
  }

  getBackgroundColor(char: string) {
    if (this.gender()) {
      if (this.gender().toLowerCase() === 'male') {
        return 1;
      } else if (this.gender().toLowerCase() === 'female') {
        return 0;
      } else {
        throw new Error('gender must be "Male" or "Female"');
      }
    }
    const unicode = char.charCodeAt(0);
    return unicode % 2;
  }
}
