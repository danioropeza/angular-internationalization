import { NgModule, Optional, SkipSelf } from "@angular/core";
import { LocalizationModule } from "../localization/localization.module";
import { throwIfAlreadyLoaded } from "./guards/module-import.guard";

@NgModule({
  declarations: [],
  imports: [LocalizationModule.forRoot()],
  providers: [
    // Other providers here
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, "CoreModule");
  }
}
