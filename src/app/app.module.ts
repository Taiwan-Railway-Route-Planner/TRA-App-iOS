import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { MissingTranslationHandler, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { HttpBackend } from '@angular/common/http';
import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';

import { AppRoutingModule } from './app-routing.module';
import { httpLoaderFactory } from '~/factories/http-loader.factory';
import { CustomTranslationHandler } from '~/class/custom-translation.handler';

import { AppComponent } from './app.component';
import { StartUpComponent } from './container/start-up/start-up.component';

import { BottomBarMenuModule } from './component/bottom-bar-menu/bottom-bar-menu.module';
import { AppSandbox } from './app.sandbox';
import { LanguageService } from './service/language.service';
import { HomeMenuComponent } from './container/home-menu/home-menu.component';
import { FormStationComponent } from './component/form-station/form-station.component';

@NgModule({
    bootstrap: [
        AppComponent,
        StartUpComponent,
        HomeMenuComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptHttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: httpLoaderFactory,
                deps: [HttpBackend]
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
        StartUpComponent,
        HomeMenuComponent,
        FormStationComponent
    ],
    providers: [
        AppSandbox,
        LanguageService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule {}
