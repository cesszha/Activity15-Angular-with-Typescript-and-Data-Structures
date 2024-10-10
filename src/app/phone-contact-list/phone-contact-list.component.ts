import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import PhoneContactList from '../list/PhoneConList';
import { PhoneContactListService } from '../services/phone-contact-list/phone-contact-list.service';

@Component({
  selector: 'app-phone-contact-list',
  standalone: true,
  imports: [NgForOf, FormsModule],
  templateUrl: './phone-contact-list.component.html',
  styleUrl: './phone-contact-list.component.css'
})
export class PhoneContactListComponent {
  phoneContactList = [] as PhoneContactList[];
  constructor(private phoneContactListService: PhoneContactListService){
	this.phoneContactList = this.phoneContactListService.getPhoneContacts();
  }
	name: string = '';
	email: string = '';
	phone: string = '';

	addPhoneContact(): void {
		this.phoneContactListService.addPhoneContact(
			 this.name,
			 this.email,
			 this.phone,
		);

		this.name = '';
		this.email = '';
		this.phone = '';
	}
}
