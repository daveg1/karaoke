import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-infobar',
	templateUrl: './infobar.component.html',
	styleUrls: ['./infobar.component.scss'],
})
export class InfobarComponent {
	@Input() title = '';
	editButtonText = 'Edit lyrics';

	constructor(
		private readonly router: Router,
		private readonly route: ActivatedRoute
	) {}

	toggleEditor(): void {
		this.router.navigate(['edit'], { relativeTo: this.route });
	}

	goHome(): void {
		this.router.navigate(['/']);
	}
}
