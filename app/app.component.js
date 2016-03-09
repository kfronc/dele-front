System.register(["angular2/core", "angular2/platform/browser", "ng2-translate/ng2-translate", "angular2/http"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, browser_1, ng2_translate_1, http_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (ng2_translate_1_1) {
                ng2_translate_1 = ng2_translate_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(translate) {
                    this.translate = translate;
                    var userLang = navigator.language.split("-")[0];
                    userLang = /(pl|en)/gi.test(userLang) ? userLang : "en";
                    translate.use(userLang);
                }
                AppComponent = __decorate([
                    core_1.Injectable(),
                    core_1.Component({
                        selector: "my-app",
                        template: "\n        <h1>{{ 'HELLO' | translate }}</h1>\n        Change language:\n        <select (change)=\"translate.use($event.target.value)\">\n            <option *ngFor=\"#lang of ['pl', 'en']\" [selected]=\"lang === translate.currentLang\">{{lang}}</option>\n        </select>\n    ",
                        pipes: [ng2_translate_1.TranslatePipe]
                    }), 
                    __metadata('design:paramtypes', [ng2_translate_1.TranslateService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
            browser_1.bootstrap(AppComponent, [
                http_1.HTTP_PROVIDERS,
                core_1.provide(ng2_translate_1.TranslateLoader, {
                    useFactory: function (http) { return new ng2_translate_1.TranslateStaticLoader(http, "i18n", ".json"); },
                    deps: [http_1.Http]
                }), ng2_translate_1.TranslateService
            ]);
        }
    }
});
//# sourceMappingURL=app.component.js.map