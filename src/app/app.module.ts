import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppContainer } from "./container/app/app.container";

@NgModule({
    bootstrap: [
        AppContainer
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule
    ],
    declarations: [
        AppContainer
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
