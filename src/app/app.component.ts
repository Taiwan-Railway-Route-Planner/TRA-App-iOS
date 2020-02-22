import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'ns-app',
    styleUrls: ['./app.component.scss'],
    template: `
        <DockLayout>
            <FlexboxLayout>
            </FlexboxLayout>
            <FlexboxLayout dock="bottom" class="bottom-menu">
                <ns-bar-bottom-menu></ns-bar-bottom-menu>
            </FlexboxLayout>
        </DockLayout>
    `
})
export class AppComponent implements OnInit {

    title = 'Angular';

    ngOnInit(): void {}
}
