import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'ns-app',
    styleUrls: ['./app.component.scss'],
    template: `
        <Label class="test" text="hello welcome {{ title }}"></Label>
    `
})
export class AppComponent implements OnInit {

    title = 'Angular';

    ngOnInit(): void {}
}
