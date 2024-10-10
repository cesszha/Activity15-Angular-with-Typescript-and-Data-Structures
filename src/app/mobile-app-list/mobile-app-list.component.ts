import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import MobileAppList from '../list/MobileAppList';
import { MobileAppListService } from '../services/mobile-app-list/mobile-app-list.service';
@Component({
  selector: 'app-mobile-app-list',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './mobile-app-list.component.html',
  styleUrl: './mobile-app-list.component.css'
})
export class MobileAppListComponent {
  mobileApps = [] as MobileAppList[];
	constructor(private mobileAppService: MobileAppListService){
		this.mobileApps = this.mobileAppService.getMobileApps();
	}
	name: string = '';
	description: string = '';
	price: number = 0;
	rating: number = 0;

	addMobileApp() {
		this.mobileAppService.addMobileApp(
			this.name,
		    this.description,
			this.price,
			this.rating,
		);

		this.name = '';
		this.description = '';
		this.price = 0;
		this.rating = 0;
	}
}
