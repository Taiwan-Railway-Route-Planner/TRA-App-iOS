import { Component } from "@angular/core";

@Component({
    selector: "ns-app",
    styleUrls: ['./app.container.scss'],
    template: `
        <Label class="test" text="hello welcome {{ title }}"></Label>
    `
})
export class AppContainer {

    title: string = 'Angular'
}
