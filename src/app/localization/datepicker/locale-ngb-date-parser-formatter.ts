import { Injectable } from "@angular/core";
import { NgbDateParserFormatter, NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";
import { DateTime } from "luxon";
import { LocaleDateService } from "../date/locale-date.service";

@Injectable()
export class LocaleNgbDateParserFormatter extends NgbDateParserFormatter {
  constructor(private localeDateService: LocaleDateService) {
    super();
  }

  parse(date: string): NgbDateStruct {
    if (!date) {
      return null;
    }
    const parsedDate = this.localeDateService.parseDate(date);
    if (!parsedDate.isValid) {
      return null;;
    }
    return {
      year: parsedDate.year,
      month: parsedDate.month,
      day: parsedDate.day
    };
  }

  format(date: NgbDateStruct): string {
    if (!date) {
      return null;;
    }
    const formatedDate = DateTime.fromObject(date);
    if (!formatedDate.isValid) {
      return null;;
    }
    return this.localeDateService.formatDate(formatedDate, "dateShort");
  }
}
