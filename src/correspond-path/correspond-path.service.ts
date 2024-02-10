// crypto.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class CorrespondPathService {
  convertToHex(str: string): string {
    return str.split('').reduce((hex, char) => hex + char.charCodeAt(0).toString(16), '');
  }

  getHash(timestamp: string): string {
    if (!timestamp) {
      return null;
    }
    const convertedTimestamp = parseInt(timestamp);
    if (isNaN(convertedTimestamp)) {
      return null;
    }
    const hexString = this.convertToHex(`refresh_${timestamp}`);
    // 此处可加入生成哈希的逻辑，例如使用 SHA256 算法
    return hexString; // 这里暂时返回转换后的十六进制字符串作为示例
  }
}
