import { NgModule } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { httpLoaderFactory } from '~/app/factories/http-loader.factory';

import { AppComponent } from './app.component';
import { StartUpComponent } from './container/start-up/start-up.component';

import { BottomBarMenuModule } from '~/app/component/bottom-bar-menu/bottom-bar-menu.module';

@NgModule({
    bootstrap: [
        AppComponent,
        StartUpComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: httpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        BottomBarMenuModule,
    ],
    declarations: [
        AppComponent,
        StartUpComponent
    ]
})
export class AppModule {
}
