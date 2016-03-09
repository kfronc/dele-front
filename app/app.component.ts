/// <reference path="../typings/main.d.ts"/>
import {Component, Injectable, provide} from "angular2/core";
import {bootstrap} from "angular2/platform/browser";
import {TranslateService, TranslatePipe, TRANSLATE_PROVIDERS, TranslateLoader, TranslateStaticLoader} from "ng2-translate/ng2-translate";
import {HTTP_PROVIDERS, Http} from "angular2/http";

@Injectable()
@Component({
    selector: "my-app",
    template: `
        <h1>{{ 'HELLO' | translate }}</h1>
        Change language:
        <select (change)="translate.use($event.target.value)">
            <option *ngFor="#lang of ['pl', 'en']" [selected]="lang === translate.currentLang">{{lang}}</option>
        </select>
    `,
    pipes: [TranslatePipe]
})
export class AppComponent {

    constructor(public translate: TranslateService) {
        let userLang = navigator.language.split("-")[0];
        userLang = /(pl|en)/gi.test(userLang) ? userLang : "en";
        translate.use(userLang);
    }
}

bootstrap(AppComponent, [
    HTTP_PROVIDERS,
    provide(TranslateLoader, {
        useFactory: (http: Http) => new TranslateStaticLoader(http, "i18n", ".json"),
        deps: [Http]
    }), TranslateService
]);