import { Component } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { By	} from "@angular/platform-browser";
import { DropdownTree } from "./tree.component";
import { TreeWrapper } from "./tree-wrapper.component";
import { TreeItem } from "./tree-item.component";
import { ListItem } from "./../list-item.interface";
import { StaticIconModule } from "./../../icon/static-icon.module";
import { TranslateModule, TranslateLoader, TranslateFakeLoader } from "@ngx-translate/core";
import { ScrollableList } from "./../scrollable-list.directive";

@Component({
	template: `<n-dropdown-tree [items]="items" (select)="onSelect($event)"></n-dropdown-tree>`
})
class TreeTestComponent {
	items = [{content: "one", selected: false}, {content: "two", selected: false}];
	selected: ListItem;
	onSelect(ev) {
		this.selected = ev.item;
	}
}

@Component({
	template: `<n-dropdown-tree [items]="items" (select)="onSelect($event)" type="multi"></n-dropdown-tree>`
})
class TestMultiComponent {
	items = [
		{
			content: "one",
			selected: false
		},
		{
			content: "two",
			selected: false
		},
		{
			content: "three",
			selected: false,
			items: [
				{
					content: "one",
					selected: false
				},
				{
					content: "two",
					selected: false
				}
			]
		}
	];
	selected: ListItem[];
	onSelect(ev) {
		this.selected = ev;
	}
}

// ????? without this karma blows up?????
describe("wtf", () => {});

describe("Dropdown tree", () => {
	let fixture, wrapper;
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [
				DropdownTree,
				TreeItem,
				TreeWrapper,
				TreeTestComponent,
				ScrollableList
			],
			imports: [
				StaticIconModule,
				TranslateModule.forRoot({
					loader: {
						provide: TranslateLoader, useClass: TranslateFakeLoader
					}
				})
			]
		});
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(TreeTestComponent);
		wrapper = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should work", () => {
		fixture = TestBed.createComponent(DropdownTree);
		fixture.detectChanges();
		expect(fixture.componentInstance instanceof DropdownTree).toBe(true);
	});

	it("should select an item", () => {
		let itemEl = fixture.debugElement.query(By.css("[role=option]"));
		itemEl.triggerEventHandler("click", null);
		expect(wrapper.selected.content).toBe("one");
	});

	it("should select and change selection", () => {
		let itemEls = fixture.debugElement.queryAll(By.css("[role=option]"));
		itemEls[0].triggerEventHandler("click", null);
		expect(wrapper.selected.content).toBe("one");
		itemEls[1].triggerEventHandler("click", null);
		expect(wrapper.selected.content).toBe("two");
	});
});

describe("tree multi list", () => {
	let fixture, wrapper;
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [
				DropdownTree,
				TreeItem,
				TreeWrapper,
				TestMultiComponent,
				ScrollableList
			],
			imports: [
				StaticIconModule,
				TranslateModule.forRoot({
					loader: {
						provide: TranslateLoader, useClass: TranslateFakeLoader
					}
				})
			]
		});
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(TestMultiComponent);
		wrapper = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should work", () => {
		fixture = TestBed.createComponent(DropdownTree);
		fixture.type = "multi";
		fixture.detectChanges();
		expect(fixture.componentInstance instanceof DropdownTree).toBe(true);
	});

	it("should multi select", () => {
		let itemEls = fixture.debugElement.queryAll(By.css("[role=option]"));
		itemEls[0].triggerEventHandler("click", null);
		itemEls[1].triggerEventHandler("click", null);
		expect(wrapper.selected.length).toBe(2);
		expect(wrapper.selected[0].content).toBe("one");
		expect(wrapper.selected[1].content).toBe("two");
	});

	xit("should expand the selection and not emit the item", () => {
		let itemEls = fixture.debugElement.queryAll(By.css("[role=option]"));
		itemEls[2].triggerEventHandler("click", null);
		expect(wrapper.selected).toBe(null);
	});
});
