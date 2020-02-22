import { Injectable } from '@angular/core';
import { LanguageService } from './service/language.service';


@Injectable()
export class AppSandbox {

    availableLanguages$ = this.languageService.availableLanguages$;

    constructor(private languageService: LanguageService) {}
}
