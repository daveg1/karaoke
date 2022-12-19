import {
	AfterContentInit,
	Component,
	ContentChildren,
	QueryList,
} from '@angular/core';
import { TabDirective } from './tab.directive';

@Component({
	selector: 'app-tabber',
	templateUrl: './tabber.component.html',
	styleUrls: ['./tabber.component.scss'],
})
export class TabberComponent implements AfterContentInit {
	@ContentChildren(TabDirective, {}) tabs!: QueryList<TabDirective>;

	currentTab?: TabDirective;

	ngAfterContentInit() {
		this.currentTab = this.tabs.first;
		this.currentTab.show();
	}

	switchTo(tab: TabDirective) {
		if (this.currentTab) {
			this.currentTab.hide();
		}

		this.currentTab = tab;
		this.currentTab.show();
	}
}
