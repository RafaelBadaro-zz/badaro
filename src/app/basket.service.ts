import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class BasketService {
  placarTeamA = 0;
  placarTeamB = 0;

  constructor() {}

  addTimeA(pontos) {
    this.placarTeamA = this.placarTeamA + pontos;
  }
  addTimeB(pontos) {
    this.placarTeamB = this.placarTeamB + pontos;
  }
  reset() {
    this.placarTeamA = 0;
    this.placarTeamB = 0;
  }
  resultado() {
    if (this.placarTeamA == this.placarTeamB) {
      return "Empate(mas como?)";
    }
    if (this.placarTeamA > this.placarTeamB) {
      return "Time A !!";
    } else {
      return "Time B !!";
    }
  }
}
