import { Component } from "@angular/core";
import { I18NEXT_NAMESPACE, I18NextPipe } from "angular-i18next";

@Component({
  selector: "stars",
  template: "<p>This is the Stars component</p>",
  providers: [{ provide: I18NEXT_NAMESPACE, useValue: "user/stars" }, I18NextPipe]
})
export class StarsComponent {
  constructor(private i18nextPipe: I18NextPipe) {
    console.log("i18nextPipe")
    console.log(i18nextPipe)
    console.log(i18nextPipe)
    // i18nextPipe has the prefix "user/stars". This works in html and typescript.
  }
}
