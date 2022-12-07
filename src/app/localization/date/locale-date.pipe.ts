import { Pipe, PipeTransform } from "@angular/core";
import { NgbDate } from "@ng-bootstrap/ng-bootstrap";
import { DateTime } from "luxon";
import { LocaleDateFormatEnum } from "../enums/locale-date-format.enum";
import { LocaleDateService } from "./locale-date.service";

@Pipe({
  name: "localeDate"
})
export class LocaleDatePipe implements PipeTransform {
  constructor(private localeDateService: LocaleDateService) {}

  transform(date: DateTime | NgbDate, format: LocaleDateFormatEnum = "dateShort"): string {
    return this.localeDateService.formatDate(date, format);
  }
}
