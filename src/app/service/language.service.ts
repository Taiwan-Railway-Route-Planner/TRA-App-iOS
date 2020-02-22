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
      abbr: 'en-GB'
    },
    {
      nameNative: '中文',
      name: 'Traditional Chinese',
      abbr: 'zh-TW'
    },
    {
      nameNative: '한국어',
      name: 'Korean',
      abbr: 'ko-KR'
    },
    {
      nameNative: 'Nederlands',
      name: 'Dutch',
      abbr: 'nl-BE'
    },
    {
      nameNative: 'Español',
      name: 'Spanish',
      abbr: 'es-ES'
    },
    {
      nameNative: 'Deutsch',
      name: 'German',
      abbr: 'de-DE'
    },
    {
      nameNative: 'Française',
      name: 'French',
      abbr: 'fr-FR'
    },
    {
      nameNative: 'Հայերեն',
      name: 'Armenian',
      abbr: 'hy-AM',
    },
    {
      nameNative: 'Русский',
      name: 'Russian',
      abbr: 'ru-RU'
    }
  ]);
}

