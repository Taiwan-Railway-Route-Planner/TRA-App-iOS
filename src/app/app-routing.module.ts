import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { AppComponent } from './app.component';
import { StartUpComponent } from './container/start-up/start-up.component';
import { HomeMenuComponent } from './container/home-menu/home-menu.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/test',
        pathMatch: 'full'
    },
    {
        path: 'test',
        component: HomeMenuComponent
    },
    {
        path: 'start',
        component: HomeMenuComponent
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {
}
