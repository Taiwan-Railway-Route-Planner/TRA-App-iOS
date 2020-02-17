import { HttpBackend, HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function httpLoaderFactory(http: HttpBackend): TranslateHttpLoader {
    return new TranslateHttpLoader(new HttpClient(http));
}
