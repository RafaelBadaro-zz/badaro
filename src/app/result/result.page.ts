import { Component, OnInit } from "@angular/core";
import { BasketService } from "../basket.service";

@Component({
  selector: "app-result",
  templateUrl: "./result.page.html",
  styleUrls: ["./result.page.scss"]
})
export class ResultPage implements OnInit {
  constructor(public basket: BasketService) {}

  ngOnInit() {}
}
