import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForOf } from '@angular/common';
import FrameworkList from '../list/FrameworkList';
@Component({
  selector: 'app-framework-list',
  standalone: true,
  imports: [FormsModule, NgForOf],
  templateUrl: './framework-list.component.html',
  styleUrl: './framework-list.component.css'
})
export class FrameworkListComponent {
  frameworks: FrameworkList[] = [];

	name: string = '';
	developedBy: string = '';
	firstRelease: string = '';
	latestRelease: string = '';

	addFramework() {
		this.frameworks.push({
			name: this.name,
			developedBy: this.developedBy,
			firstRelease: this.firstRelease,
			latestRelease: this.latestRelease,
		});

		this.name = '';
		this.developedBy = '';
		this.firstRelease = '';
		this.latestRelease = '';
	}
}
