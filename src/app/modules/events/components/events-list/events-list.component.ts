import { Component } from "@angular/core";
import { I18NEXT_NAMESPACE, I18NextPipe } from "angular-i18next";

@Component({
  selector: "events-list",
  template: "<p>This is the Events List component</p>",
  providers: [{ provide: I18NEXT_NAMESPACE, useValue: "events/events-list" }, I18NextPipe]
})
export class EventsListComponent {
  constructor(private i18nextPipe: I18NextPipe) {
    // i18nextPipe has the prefix "events/events-list". This works in html and typescript.
  }
}
