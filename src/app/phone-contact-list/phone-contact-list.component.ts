import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import PhoneContactList from '../list/PhoneConList';

@Component({
  selector: 'app-phone-contact-list',
  standalone: true,
  imports: [NgForOf, FormsModule],
  templateUrl: './phone-contact-list.component.html',
  styleUrl: './phone-contact-list.component.css'
})
export class PhoneContactListComponent {
  phoneContactList: PhoneContactList[] = [];
	name: string = '';
	email: string = '';
	phone: string = '';

	addPhoneContact(): void {
		this.phoneContactList.push({
			name: this.name,
			email: this.email,
			phone: this.phone,
		});

		this.name = '';
		this.email = '';
		this.phone = '';
	}
}
