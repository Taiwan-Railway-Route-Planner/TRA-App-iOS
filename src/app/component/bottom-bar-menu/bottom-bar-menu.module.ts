import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottomBarMenuComponent } from './bottom-bar-menu.component';


@NgModule({
    imports: [CommonModule],
    declarations: [BottomBarMenuComponent],
    exports: [BottomBarMenuComponent]
})
export class BottomBarMenuModule {}
