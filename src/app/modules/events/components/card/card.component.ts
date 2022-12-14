import { Component } from "@angular/core";
import { I18NEXT_NAMESPACE, I18NextPipe } from "angular-i18next";

@Component({
  selector: "card",
  template: "<p>This is the Card component</p>",
  providers: [{ provide: I18NEXT_NAMESPACE, useValue: "events/card" }, I18NextPipe]
})
export class CardComponent {
  constructor(private i18nextPipe: I18NextPipe) {
    // i18nextPipe has the prefix "events/card". This works in html and typescript.
    // With this provider it is possible to call the pipe in this way:
    let textOne = i18nextPipe.transform("text-one");
    // instead of:
    textOne = i18nextPipe.transform("events/card:text-one");
  }
}
