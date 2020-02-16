import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {NativeScriptModule} from "nativescript-angular/nativescript.module";
import {NativeScriptHttpModule} from "nativescript-angular/http";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpClient} from '@angular/common/http';

import {AppRoutingModule} from "./app-routing.module";
import {AppContainer} from "./container/app/app.container";
import {httpLoaderFactory} from "~/app/factories/http-loader.factory";

@NgModule({
    bootstrap: [
        AppContainer
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptHttpModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: httpLoaderFactory,
                deps: [HttpClient]
            }
        })
    ],
    declarations: [
        AppContainer
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule {
}
