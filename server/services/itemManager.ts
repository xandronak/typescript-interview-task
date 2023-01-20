import {getPasswordsList} from '../data';
import {PasswordData, PasswordDataWithMeta} from '../types';
import {checkIsPasswordOld} from '../utils/checkIsPasswordOld';
import {checkIsPasswordWeak} from '../utils/checkIsPasswordWeak';
import {checkIsPasswordReused} from '../utils/checkIsPasswordReused';
import passwordManager from '../services/passwordManager';

class ItemManager {
  private items: Array<PasswordData> = [];

  constructor(initialData: Array<PasswordData>) {
    this.items = initialData;
  }

  getItems(): Array<PasswordDataWithMeta> {
    const decryptedPasswordList = this.items.map(({password}) => (
      passwordManager.decryptPassword(password))
    );
    
    return this.items.map((item) => {
      const decryptedPassword = passwordManager.decryptPassword(item.password);
  
      return ({
        id: item.id,
        description: item.description,
        title: item.title,
        isPasswordOld: checkIsPasswordOld(item.createdAt),
        isPasswordReused: checkIsPasswordReused(decryptedPassword, decryptedPasswordList),
        isPasswordWeak: checkIsPasswordWeak(decryptedPassword),
      });
    });
  }

  updateItemPasswordById(id: string, password: string) {
    this.items = this.items.map((oldItem) => {
      if (oldItem.id === id) {
        return {
          ...oldItem,
          password: passwordManager.encryptPassword(password),
          createdAt: new Date().toISOString(),
        };
      }

      return oldItem;
    });
  }
}

export default new ItemManager(getPasswordsList());
