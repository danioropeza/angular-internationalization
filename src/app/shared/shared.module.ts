import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LocalizationModule } from "../localization/localization.module";

@NgModule({
  imports: [CommonModule, LocalizationModule],
  declarations: [],
  exports: [LocalizationModule]
})
export class SharedModule {}
