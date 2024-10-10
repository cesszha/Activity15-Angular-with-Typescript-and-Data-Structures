import { Injectable } from '@angular/core';
import PhoneContactList from '../../list/PhoneConList';
@Injectable({
  providedIn: 'root'
})
export class PhoneContactListService {
 private phoneContacts: PhoneContactList[] = [];

  constructor() { }

  addPhoneContact(
    name: string,
	  email: string,
	  phone: string,
  ): void {
    this.phoneContacts.push({
      name: name,
      email: email,
      phone: phone,
    });
  }

  getPhoneContacts(): PhoneContactList[]{
    return this.phoneContacts;
  }
}
