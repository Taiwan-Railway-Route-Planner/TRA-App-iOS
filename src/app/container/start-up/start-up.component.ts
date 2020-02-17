import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Language } from '../../types/language.type';
import { AppSandbox } from '../../app.sandbox';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'ns-start-up',
  styleUrls: ['./start-up.component.scss'],
  template: `
      <DockLayout class="page">
        <FlexboxLayout dock="top" class="main-menu">
          <Label class="title" text="TRA Route Planner"></Label>
        </FlexboxLayout>
        <FlexboxLayout dock="bottom" class="menu-bottom">
          <Button *ngIf="languageSelected" class="btn" text="{{ tc + '.CONFIRM' | translate }}"></Button>
        </FlexboxLayout>
        <FlexboxLayout class="menu-center">
          <ng-container *ngFor="let item of (availableLanguages$ | async)">
            <FlexboxLayout class="element">
              <Label class="top-text" [text]="item.nameNative" (tap)="showConfirmButton(item)"></Label>
            </FlexboxLayout>
          </ng-container>
        </FlexboxLayout>
      </DockLayout>
  `
})
export class StartUpComponent implements OnInit {
  tc = 'START-UP';

  // presentation streams
  languageSelected = true;
  availableLanguages$: Observable<Language[]> = this.sb.availableLanguages$;

  constructor(
      private translateService: TranslateService,
      private sb: AppSandbox
  ) {}

  showConfirmButton(item: Language): void {
    this.languageSelected = true;
    this.translateService.use(item.abbr);
  }

  ngOnInit(): void {
    this.translateService.setDefaultLang('nl-BE');
  }

}
