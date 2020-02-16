import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Language } from '../types/language.type';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  availableLanguages$: Observable<Language[]> = of([
    {
      nameNative: 'English',
      name: 'English',
      abbr: 'EN'
    },
    {
      nameNative: '中文',
      name: 'Traditional Chinese',
      abbr: 'ZH'
    },
    {
      nameNative: '한국어',
      name: 'Korean',
      abbr: 'KO'
    },
    {
      nameNative: 'Nederlands',
      name: 'Dutch',
      abbr: 'NL'
    },
    {
      nameNative: 'Español',
      name: 'Spanish',
      abbr: 'ES'
    },
    {
      nameNative: 'Deutsch',
      name: 'German',
      abbr: 'DE'
    },
    {
      nameNative: 'Française',
      name: 'French',
      abbr: 'FR'
    },
    {
      nameNative: 'Հայերեն',
      name: 'Armenian',
      abbr: 'AR',
    },
    {
      nameNative: 'Русский',
      name: 'Russian',
      abbr: 'RU'
    }
  ]);
}

