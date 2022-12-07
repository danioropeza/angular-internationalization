import { APP_INITIALIZER, ModuleWithProviders, NgModule } from "@angular/core";
import {
  I18NextModule,
  ITranslationService,
  I18NEXT_SERVICE,
  defaultInterpolationFormat,
  I18NextLoadResult
} from "angular-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { NgbDateParserFormatter, NgbDatepickerI18n } from "@ng-bootstrap/ng-bootstrap";
import { LocaleNgbDatepicker } from "./datepicker/locale-ngb-datepicker.service";
import { LocaleNgbDateParserFormatter } from "./datepicker/locale-ngb-date-parser-formatter";
import { LocaleDatepickerPlaceholderDirective } from "./datepicker/locale-datepicker-placeholder.directive";
import { LocaleDatePipe } from "./date/locale-date.pipe";
import { localeIdProvider } from "./providers/locale-id.service.provider";
import { LocaleDateService } from "./date/locale-date.service";

@NgModule({
  imports: [I18NextModule.forRoot()],
  declarations: [LocaleDatePipe, LocaleDatepickerPlaceholderDirective],
  exports: [I18NextModule, LocaleDatePipe, LocaleDatepickerPlaceholderDirective]
})
export class LocalizationModule {
  private static translationFactory(i18next: ITranslationService): () => Promise<I18NextLoadResult> {
    return () =>
      i18next
        .use(HttpApi)
        .use(LanguageDetector)
        .init({
          supportedLngs: false,
          lowerCaseLng: false,
          fallbackLng: "en",
          debug: true,
          returnEmptyString: false,
          ns: ["common"],
          defaultNS: "common",
          interpolation: {
            format: I18NextModule.interpolationFormat(defaultInterpolationFormat)
          },
          backend: {
            loadPath: "/assets/localization/{{-ns}}/{{lng}}.i18n.json"
          },
          detection: {
            order: ["navigator"],
            caches: ["localStorage"],
            cookieMinutes: 1
          }
        });
  }

  static forRoot(): ModuleWithProviders<LocalizationModule> {
    return {
      ngModule: LocalizationModule,
      providers: [
        localeIdProvider,
        {
          provide: APP_INITIALIZER,
          useFactory: this.translationFactory,
          deps: [I18NEXT_SERVICE],
          multi: true
        },
        { provide: NgbDateParserFormatter, useClass: LocaleNgbDateParserFormatter },
        { provide: NgbDatepickerI18n, useClass: LocaleNgbDatepicker },
        LocaleDateService
      ]
    };
  }
}
