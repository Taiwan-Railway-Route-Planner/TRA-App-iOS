import { NgModule } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { MissingTranslationHandler, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';

import { AppRoutingModule } from './app-routing.module';
import { httpLoaderFactory } from '~/factories/http-loader.factory';
import { CustomTranslationHandler } from '~/class/custom-translation.handler';

import { AppComponent } from './app.component';
import { StartUpComponent } from './container/start-up/start-up.component';

import { BottomBarMenuModule } from './component/bottom-bar-menu/bottom-bar-menu.module';
import { AppSandbox } from './app.sandbox';
import { LanguageService } from './service/language.service';

@NgModule({
    bootstrap: [
        AppComponent,
        StartUpComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptHttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: httpLoaderFactory,
                deps: [HttpClient]
            },
            missingTranslationHandler: {
                provide: MissingTranslationHandler,
                useClass: CustomTranslationHandler
            }
        }),
        BottomBarMenuModule,
        CommonModule,
    ],
    declarations: [
        AppComponent,
        StartUpComponent
    ],
    providers: [
        AppSandbox,
        LanguageService
    ]
})
export class AppModule {}
