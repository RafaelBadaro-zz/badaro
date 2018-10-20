import { Component, OnInit } from "@angular/core";
import { BasketService } from "../basket.service";

@Component({
  selector: "app-court-counter",
  templateUrl: "./court-counter.page.html",
  styleUrls: ["./court-counter.page.scss"]
})
export class CourtCounterPage implements OnInit {
  constructor(public basket: BasketService) {}

  ngOnInit() {}
}
