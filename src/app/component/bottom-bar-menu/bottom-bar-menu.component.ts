import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({
    selector: 'ns-bar-bottom-menu',
    styleUrls: ['./bottom-bar-menu.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <FlexboxLayout class="bottom-menu">
            <FlexboxLayout class="menu-choose">
                <Label class="fas" text="\uf3c5"></Label>
            </FlexboxLayout>
            <FlexboxLayout class="menu-choose">
                <Label class="fas" text="\uf005"></Label>
            </FlexboxLayout>
            <FlexboxLayout class="menu-choose">
                <Label class="fas" text="\uf509"></Label>
            </FlexboxLayout>
        </FlexboxLayout>
    `
})
export class BottomBarMenuComponent {}
