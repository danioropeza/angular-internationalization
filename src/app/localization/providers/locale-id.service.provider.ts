import { LOCALE_ID } from "@angular/core";
import { I18NEXT_SERVICE, I18NextTitle, ITranslationService } from "angular-i18next";
import { Settings } from "luxon";

const dynamicLocaleIdFactory = (i18next: ITranslationService, titleService: I18NextTitle) => {
  titleService.setTitle("common:document-title");
  Settings.defaultLocale = i18next.language;
  return i18next.language;
};

export const localeIdProvider = {
  provide: LOCALE_ID,
  useFactory: dynamicLocaleIdFactory,
  deps: [I18NEXT_SERVICE, I18NextTitle]
};
