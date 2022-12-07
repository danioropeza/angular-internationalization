import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { I18NextService } from 'angular-i18next';
import { DateObject, DateTime } from 'luxon';
import { LocaleDateService } from './localization/date/locale-date.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public dateFormat: string;
  public language: string;
  public dateForm: FormGroup;

  constructor(
    private localeDateService: LocaleDateService,
    i18NextService: I18NextService,
    calendar: NgbCalendar,
    formBuilder: FormBuilder
  ) {
    this.dateFormat = this.localeDateService.dateFormat;
    this.language = i18NextService.language;
    this.dateForm = formBuilder.group({
      date: [calendar.getToday()]
    });
  }

  private getDateText(dateObject: DateObject): string {
    return this.localeDateService.formatDate(DateTime.fromObject(dateObject), "dateShort")
  }

  get date() {
    return this.dateForm.get("date");
  }

  public getValidDateTexts(): string {
    const dateTextOne = this.getDateText({ month: 3, day: 1, year: 1996 });
    const dateTextTwo = this.getDateText({ month: 12, day: 15, year: 2009 });
    const dateTextThree = this.getDateText({ month: 6, day: 18, year: 2023 });
    return `${dateTextOne}, ${dateTextTwo}, ${dateTextThree}`;
  }
}
