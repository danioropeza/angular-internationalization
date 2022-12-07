import { Injectable } from "@angular/core";
import { NgbDate } from "@ng-bootstrap/ng-bootstrap";
import { DateTime } from "luxon";
import { LocaleDateFormatEnum } from "../enums/locale-date-format.enum";

@Injectable({
  providedIn: 'root',
})
export class LocaleDateService {
  private _dateFormat: string;

  constructor() {
    this._dateFormat = this.getDateFormat();
  }

  private getDigitsFormat(digit: string, datePart: string): string {
    return digit.repeat(datePart.length);
  }

  private getDateFormat(): string {
    // Luxon toLocaleParts uses Intl API from behind.
    const intlDateFormat: any[] = DateTime.fromObject({ year: 2021, month: 1, day: 1 }).toLocaleParts({
      year: "numeric",
      month: "numeric",
      day: "numeric"
    });
    return intlDateFormat
      .map(object => {
        switch (object.type) {
          case "day":
            return this.getDigitsFormat("d", object.value);
          case "month":
            return this.getDigitsFormat("M", object.value);
          case "year":
            return this.getDigitsFormat("y", object.value);
          default:
            return object.value; // separator
        }
      })
      .join("");
  }

  private getTokenFormat(format: LocaleDateFormatEnum = "dateShort"): Intl.DateTimeFormatOptions {
    switch (format) {
      case "datetimeShort":
        return DateTime.DATETIME_SHORT;
      case "datetimeShortWithSeconds":
        return DateTime.DATETIME_SHORT_WITH_SECONDS;
      case "dateShort":
        return DateTime.DATE_SHORT;
      default:
        throw new Error("invalid date format parameter");
    }
  }

  public formatDate(date: DateTime | NgbDate, format: LocaleDateFormatEnum = "dateShort"): string {
    if (date instanceof NgbDate) {
      const dateObject = {
        year: date.year,
        month: date.month,
        day: date.day
      };
      date = DateTime.fromObject(dateObject);
    }
    if (!date || !date.isValid) {
      return null;
    }
    const TOKEN_FORMAT = this.getTokenFormat(format);
    return date.toLocaleString(TOKEN_FORMAT);
  }

  public parseDate(date: string): DateTime {
    return DateTime.fromFormat(date, this._dateFormat);
  }

  get dateFormat(): string {
    return this._dateFormat;
  }
}
