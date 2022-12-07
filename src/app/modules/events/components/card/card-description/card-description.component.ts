import { Component } from "@angular/core";
import { I18NEXT_NAMESPACE, I18NextPipe } from "angular-i18next";

@Component({
  selector: "card",
  template: "<p>This is the Card Description component</p>",
  providers: [{ provide: I18NEXT_NAMESPACE, useValue: "events/card" }, I18NextPipe]
})
export class CardDescriptionComponent {
  constructor(private i18nextPipe: I18NextPipe) {
    // i18nextPipe has the prefix "events/card". This works in html and typescript.
  }
}
