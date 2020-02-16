import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Language } from '../../types/language.type';
import { AppSandbox } from '../../app.sandbox';

@Component({
  selector: 'ns-start-up',
  styleUrls: ['./start-up.component.scss'],
  template: `
      <DockLayout class="page">
        <FlexboxLayout dock="top" class="main-menu">
          <Label class="title" text="TRA Route Planner"></Label>
        </FlexboxLayout>
        <FlexboxLayout dock="bottom" class="menu-bottom">
          <Button *ngIf="languageSelected" class="btn" text=""></Button>
        </FlexboxLayout>
        <FlexboxLayout class="menu-center">
          <ng-container *ngFor="let item of (availableLanguages$ | async)">
            <FlexboxLayout class="element">
              <Label class="top-text" [text]="item.nameNative"></Label>
            </FlexboxLayout>
          </ng-container>
        </FlexboxLayout>
      </DockLayout>
  `
})
export class StartUpComponent implements OnInit {

  // presentation streams
  languageSelected = false;
  availableLanguages$: Observable<Language[]> = this.sb.availableLanguages$;

  constructor(private sb: AppSandbox) { }


  ngOnInit(): void {
  }

}
