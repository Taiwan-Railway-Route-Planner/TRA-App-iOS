import { MissingTranslationHandler, MissingTranslationHandlerParams } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators';


export class CustomTranslationHandler implements MissingTranslationHandler {
    handle(params: MissingTranslationHandlerParams): string | Observable<string> {
        const defaultContext = '@COMMON';
        const missingContext = 'TRANSLATE:';
        const translationKeyArray = params.key.split('.');

        if (
            translationKeyArray[0] === defaultContext ||
            translationKeyArray[1] === missingContext
        ) {
            return params.key;
        }

        translationKeyArray[0] = defaultContext;
        const newTranslationKey = translationKeyArray.join('.');
        return params.translateService
            .get(newTranslationKey, params.interpolateParams)
            .pipe(
                map(v => (v === newTranslationKey ? missingContext + params.key : v))
            );
    }
}
