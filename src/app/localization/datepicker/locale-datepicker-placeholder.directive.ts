import { Directive, ElementRef, OnInit } from "@angular/core";
import { LocaleDateService } from "../date/locale-date.service";

@Directive({
  selector: "[ngbDatepicker]"
})
export class LocaleDatepickerPlaceholderDirective implements OnInit {
  constructor(private element: ElementRef, private localeDateService: LocaleDateService) {}

  ngOnInit() {
    this.element.nativeElement.setAttribute("placeholder", this.localeDateService.dateFormat);
  }
}
