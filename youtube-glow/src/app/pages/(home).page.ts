import { Component } from "@angular/core";

import { AnalogWelcomeComponent } from "./analog-welcome.component";
import Search from "./search.analog";

@Component({
	selector: "youtube-glow-home",
	standalone: true,
	imports: [AnalogWelcomeComponent, Search],
	// template: ` <youtube-glow-analog-welcome /> `,
	template: ` <Search /> `,
})
export default class HomeComponent {}
