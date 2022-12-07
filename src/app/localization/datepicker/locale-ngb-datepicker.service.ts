import { Injectable } from "@angular/core";
import { NgbDatepickerI18n } from "@ng-bootstrap/ng-bootstrap";
import { I18NextPipe } from "angular-i18next";

@Injectable()
export class LocaleNgbDatepicker extends NgbDatepickerI18n {
  LOCALE_DATE_VALUES: any;
  constructor(private i18nextPipe: I18NextPipe) {
    super();
    this.LOCALE_DATE_VALUES = this.i18nextPipe.transform("common:date-picker", { returnObjects: true });
  }

  private getDayName = (weekday: number): string =>
    ({
      1: "monday",
      2: "tuesday",
      3: "wednesday",
      4: "thursday",
      5: "friday",
      6: "saturday",
      7: "sunday"
    }[weekday]);

  private getMonthName = (month: number): string =>
    ({
      1: "january",
      2: "february",
      3: "march",
      4: "april",
      5: "may",
      6: "june",
      7: "july",
      8: "august",
      9: "september",
      10: "october",
      11: "november",
      12: "december"
    }[month]);

  getWeekdayShortName(weekday: number): string {
    const dayName = this.getDayName(weekday);
    return this.LOCALE_DATE_VALUES.weekdays[dayName];
  }
  getMonthShortName(month: number): string {
    console.log("month")
    console.log(month)
    const monthName = this.getMonthName(month);
    return this.LOCALE_DATE_VALUES.months[monthName];
  }
  getMonthFullName(month: number): string {
    return this.getMonthShortName(month);
  }
  getDayAriaLabel(): any {} // Need this function to support NgbDatepickerI18n. Also aria-label is not being displayed.
  getWeekdayLabel(): any {}
}
