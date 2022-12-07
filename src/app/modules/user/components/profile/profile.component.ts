import { Component } from "@angular/core";
import { I18NEXT_NAMESPACE, I18NextPipe } from "angular-i18next";

@Component({
  selector: "profile",
  template: "<p>This is the Profile component</p>",
  providers: [{ provide: I18NEXT_NAMESPACE, useValue: "user/profile" }, I18NextPipe]
})
export class ProfileComponent {
  constructor(private i18nextPipe: I18NextPipe) {
    // i18nextPipe has the prefix "user/profile". This works in html and typescript.
  }
}
