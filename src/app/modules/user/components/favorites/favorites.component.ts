import { Component } from "@angular/core";
import { I18NEXT_NAMESPACE, I18NextPipe } from "angular-i18next";

@Component({
  selector: "favorites",
  template: "<p>This is the Favorites component</p>",
  providers: [{ provide: I18NEXT_NAMESPACE, useValue: "user/favorites" }, I18NextPipe]
})
export class FavoritesComponent {
  constructor(private i18nextPipe: I18NextPipe) {
    // i18nextPipe has the prefix "user/favorites". This works in html and typescript.
  }
}
