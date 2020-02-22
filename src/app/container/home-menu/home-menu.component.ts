import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'ns-home-menu',
    styleUrls: ['./home-menu.component.scss'],
    template: `
        <DockLayout>
            <FlexboxLayout class="container-column">
                <Label class="title" text="TRA Route Planner"></Label>
                <FlexboxLayout dock="top">
                    <FlexboxLayout class="station-input">
                        <FlexboxLayout class="station-forms">
                            <ns-form-station
                                    [tc]="tc"
                                    [hintText]="'START-STATION-HINT'"
                                    [labelText]="'START-STATION'"
                                    [model]="null"
                            >
                            </ns-form-station>
                            <ns-form-station
                                    [tc]="tc"
                                    [hintText]="'END-STATION-HINT'"
                                    [labelText]="'END-STATION'"
                                    [model]="null">
                            </ns-form-station>
                        </FlexboxLayout>
                    </FlexboxLayout>
                </FlexboxLayout>
                <FlexboxLayout dock="bottom">
                    <ns-bar-bottom-menu></ns-bar-bottom-menu>
                </FlexboxLayout>
            </FlexboxLayout>
        </DockLayout>
    `
})
export class HomeMenuComponent implements OnInit {
    tc = 'HOME-MENU';

    constructor(private translateService: TranslateService) {
    }

    ngOnInit(): void {
        this.translateService.setDefaultLang('nl-BE');
    }

}
