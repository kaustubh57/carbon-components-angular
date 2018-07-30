import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DialogService } from "./../../../src/dialog/dialog.service";
import { Component, OnInit, ViewEncapsulation, AfterViewInit } from "@angular/core";

@Component({
	selector: "app-icon-demo",
	template: `
	<h1 class="p-demo-heading">Iconography</h1>

	<svg class="icon" width="30" height="30"><use href="#alert_30"></use></svg>

	<h2>n-icon tests</h2>

	<ibm-icon icon="alert" size="xs"></ibm-icon>
	<ibm-icon icon="alert" size="sm"></ibm-icon>
	<ibm-icon icon="alert" size="md"></ibm-icon>
	<ibm-icon icon="alert" size="lg"></ibm-icon>

	<div style="display: inline-block; background-color: aquamarine; padding: 2px">
		<ibm-icon icon="alert" color="blue"></ibm-icon>
		<ibm-icon icon="alert" color="light"></ibm-icon>
		<ibm-icon icon="alert" color="dark"></ibm-icon>
		<ibm-icon icon="alert" color="white"></ibm-icon>
	</div>

	<ibm-icon icon="alert" color="blue" size="xs"></ibm-icon>
	<ibm-icon icon="alert" color="blue" size="sm"></ibm-icon>
	<ibm-icon icon="alert" color="blue" size="md"></ibm-icon>
	<ibm-icon icon="alert" color="blue" size="lg"></ibm-icon>

	<ibm-icon icon="alert" color="light" size="xs"></ibm-icon>
	<ibm-icon icon="alert" color="light" size="sm"></ibm-icon>
	<ibm-icon icon="alert" color="light" size="md"></ibm-icon>
	<ibm-icon icon="alert" color="light" size="lg"></ibm-icon>

	<div style="display: inline-block; background-color: aquamarine; padding: 2px">
		<ibm-icon icon="alert" color="white" size="xs"></ibm-icon>
		<ibm-icon icon="alert" color="white" size="sm"></ibm-icon>
		<ibm-icon icon="alert" color="white" size="md"></ibm-icon>
		<ibm-icon class="test-custom-class foo" icon="alert" color="white" size="lg"></ibm-icon>
	</div>

	<h2>peretz-icon tests</h2>

	<peretz-icon set="core_set" icon="alert" size="sm"></peretz-icon>
	<peretz-icon set="core_set" icon="alert" size="md"></peretz-icon>
	<peretz-icon set="core_set" icon="alert" size="lg"></peretz-icon>

	<div style="display: inline-block; background-color: aquamarine; padding: 2px">
		<peretz-icon class="icon" set="core_set" icon="alert" color="blue" size="md"></peretz-icon>
		<peretz-icon class="icon" set="core_set" icon="alert" color="light" size="md"></peretz-icon>
		<peretz-icon class="icon" set="core_set" icon="alert" color="dark" size="md"></peretz-icon>
		<peretz-icon class="icon" set="core_set" icon="alert" color="white" size="md"></peretz-icon>
	</div>

	<peretz-icon set="core_set" icon="alert" color="blue" size="sm"></peretz-icon>
	<peretz-icon set="core_set" icon="alert" color="blue" size="md"></peretz-icon>
	<peretz-icon set="core_set" icon="alert" color="blue" size="lg"></peretz-icon>

	<peretz-icon set="core_set" icon="alert" color="light" size="sm"></peretz-icon>
	<peretz-icon set="core_set" icon="alert" color="light" size="md"></peretz-icon>
	<peretz-icon set="core_set" icon="alert" color="light" size="lg"></peretz-icon>

	<div style="display: inline-block; background-color: aquamarine; padding: 2px">
		<peretz-icon class="icon--sm" set="core_set" icon="alert" color="white" size="sm"></peretz-icon>
		<peretz-icon class="icon" set="core_set" icon="alert" color="white" size="md"></peretz-icon>
		<peretz-icon class="test-custom-class foo icon--lg" set="core_set" icon="alert" color="white" size="lg"></peretz-icon>
	</div>

	<!--<div style="display: flex;">
		<label class="search_group" style="width: calc(70% - 20px); margin-right: 20px;">
			<svg class="search_icon" aria-hidden="true">
				<use href="#search_16"></use>
			</svg>
			<input
				#filter
				(keyup)="search($event)"
				type="search"
				placeholder="Search"
				tabindex="0"
				(focus)="filterFocus = true"
				(blur)="filterFocus = filter.value?true:false"
				[disabled]="waitingForLoad">
			<button
				class="close"
				type="reset"
				aria-label="Reset search"
				[ngClass]="{
					visible: filter.value.trim()
				}"
				(click)="filter.value = ''; search($event); filterFocus = false">
				<svg class="close_icon">
					<use href="#x_16"></use>
			  	</svg>
			</button>
		</label>
		<ibm-dropdown
			placeholder="Select a set"
			style="width: 30%; margin-bottom: 0;"
			type="multi"
			(select)="onSelect()"
			[(ngModel)]="selected"
			[disabled]="waitingForLoad">
			<ibm-dropdown-list [items]="sets"></ibm-dropdown-list>
		</ibm-dropdown>
	</div>
	<div
		class="loading"
		[ngClass]="{hide: !waitingForLoad}">
	</div>
	<div [ngClass]="{hide: waitingForLoad}">
		<div
			*ngFor="let set of iconMeta"
			[ngClass]="{hide: !set.visible}">
			<h2>{{ formatName(set.sprite) }}
				(<a
					href="{{formatURL(set.sprite)}}"
					download="{{formatFileName(set.sprite)}}">download</a>)
			</h2>
			<div class="set">
				<span
					*ngFor="let icon of set.icons"
					class="set-icon"
					[ngClass]="{hide: !icon.visible}">
					<h3>{{ icon.name }}</h3>
					<ibm-icon [icon]="icon.name" size="lg"></ibm-icon>
				</span>
			</div>
		</div>
	</div>-->
	`,
	styles: [`
		.hide {
			visibility: hidden;
			height: 0;
			position: absolute;
		}
		h2 {
			position: relative;
			width: 100%;
			padding: 10px 0px;
		}
		.set {
			display: grid;
			justify-content: center;
			grid-gap: 10px;
		}
		.set .set-icon {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-content: center;
			align-items: center;
			border: 4px solid grey;
		}
		.set h3 {
			text-align: center;
			word-wrap: break-word;
			overflow-wrap: break-word;
			position: relative;
			width: 100%;
			padding-left: 5px;
			padding-right: 5px;
		}
		.set .icon svg {
			display: block;
			margin: 0 auto;
		}
		.svgs {
			display: none;
			height: 0;
			width: 0;
		}
		.loading {
			height: 500px;
			display: flex;
			align-content: center;
			align-items: center;
			justify-content: center;
		}
		.loading:after {
			content: "";
			display: block;
			height: 200px;
			width: 200px;
			border-radius: 200px;
			border-top: 4px solid #2d74da;
			border-left: 4px solid #2d74da;
			border-bottom: 4px solid transparent;
			border-right: 4px solid transparent;
			transform: rotate(0deg);
			animation-name: load;
			animation-iteration-count: infinite;
			animation-duration: 0.8s;
			animation-timing-function: linear;
		}

		@keyframes load {
			from {
				transform: rotate(0deg);
			}
			to {
				transform: rotate(360deg);
			}
		}

		@media (min-width: 0px) {
			.set {
				grid-template-columns: 160px 160px;
			}
			.set span {
				height: 160px;
			}
		}

		@media (min-width: 576px) {
		}

		@media (min-width: 768px) {
			.set {
				grid-template-columns: 200px 200px 200px;
			}
			.set span {
				height: 200px;
			}
		}

		@media (min-width: 1200px) {
		}
	`],
	encapsulation: ViewEncapsulation.None
})
export class IconDemo /* implements AfterViewInit */ {
	iconMeta;
	sets = [];
	selected = [];
	waitingForLoad = true;

	// async ngAfterViewInit() {
	// 	this.iconMeta = await fetch("https://peretz-icons.mybluemix.net/meta.json").then(res => res.json());
	// 	// gather and nest the available icons sizes into set.icons[].sizes[]
	// 	this.iconMeta.forEach(set => set.icons = set.icons.filter(icon => icon.size === 30));
	// 	this.iconMeta.sort((a, b) => {
	// 		if (b.sprite.includes("core")) { return 1; }
	// 		return a.sprite.localeCompare(b.sprite);
	// 	});
	// 	let newSets = [];
	// 	for (let set of this.iconMeta) {
	// 		newSets.push({
	// 			content: this.formatName(set.sprite),
	// 			sprite: set.sprite,
	// 			selected: false
	// 		});
	// 		set.visible = true;
	// 		set.icons.forEach(icon => {
	// 			icon.visible = true;
	// 		});
	// 	}
	// 	this.sets = newSets;
	// 	this.waitingForLoad = false;
	// }

	formatName(name) {
		return name.slice(0, 1).toUpperCase() + name.slice(1).replace("_", " ");
	}

	formatURL(name) {
		return `http://peretz-icons.mybluemix.net/${name}.svg`;
	}

	formatFileName(name) {
		return `${name}.svg`;
	}

	onSelect(ev) {
		console.log(ev);
		this.iconMeta.forEach(sprite => {
			if (this.selected === null || (this.selected.length === 0)) {
				sprite.visible = true;
			} else if ((this.selected && this.selected.find(item => item.sprite.includes(sprite.sprite)))) {
				sprite.visible = true;
			} else {
				sprite.visible = false;
			}
		});
	}

	search(ev) {
		this.iconMeta.forEach(sprite => {
			if (this.selected === null || (this.selected.length === 0)) {
				sprite.visible = true;
			} else if ((this.selected && this.selected.find(item => item.sprite.includes(sprite.sprite)))) {
				sprite.visible = true;
			} else {
				sprite.visible = false;
			}
			sprite.icons.forEach(icon => {
				if (ev.target.value) {
					if (icon.name.includes(ev.target.value)) {
						icon.visible = true;
					} else {
						icon.visible = false;
					}
				} else {
					icon.visible = true;
				}
			});
		});
	}
}
