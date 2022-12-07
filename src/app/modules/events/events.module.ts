import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { CardComponent } from "./components/card/card.component";
import { EventsListComponent } from "./components/events-list/events-list.component";

@NgModule({
  declarations: [CardComponent, EventsListComponent],
  imports: [SharedModule],
})
export class EventsModule {}
