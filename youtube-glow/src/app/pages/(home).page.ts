import { Component } from '@angular/core';

import { AnalogWelcomeComponent } from './analog-welcome.component';

@Component({
	selector: 'youtube-glow-home',
	standalone: true,
	imports: [AnalogWelcomeComponent],
	template: ` <youtube-glow-analog-welcome /> `,
})
export default class HomeComponent {}
