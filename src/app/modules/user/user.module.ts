import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { FavoritesComponent } from "./components/favorites/favorites.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { StarsComponent } from "./components/stars/stars.component";

@NgModule({
  declarations: [FavoritesComponent, ProfileComponent, StarsComponent],
  imports: [SharedModule],
})
export class UserModule {}
