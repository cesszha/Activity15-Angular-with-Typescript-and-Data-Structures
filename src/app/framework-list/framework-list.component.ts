import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForOf } from '@angular/common';
import FrameworkList from '../list/FrameworkList';
import { FrameworkListService } from '../services/framework-list/framework-list.service';
@Component({
  selector: 'app-framework-list',
  standalone: true,
  imports: [FormsModule, NgForOf],
  templateUrl: './framework-list.component.html',
  styleUrl: './framework-list.component.css'
})
export class FrameworkListComponent {
  frameworks = [] as FrameworkList[];
  constructor(private frameworkService: FrameworkListService) {
	this.frameworks = this.frameworkService.getFrameworks();
  }
	name: string = '';
	developedBy: string = '';
	firstRelease: string = '';
	latestRelease: string = '';

	addFramework() {
		this.frameworkService.addFramework(
			this.name,
			this.developedBy,
			this.firstRelease,
			this.latestRelease,
		);

		this.name = '';
		this.developedBy = '';
		this.firstRelease = '';
		this.latestRelease = '';
	}
}
