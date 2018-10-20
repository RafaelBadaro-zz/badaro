import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "CourtCounter", pathMatch: "full" },
  { path: "home", loadChildren: "./home/home.module#HomePageModule" },
  {
    path: "message",
    loadChildren: "./message/message.module#MessagePageModule"
  },
  {
    path: "CourtCounter",
    loadChildren: "./court-counter/court-counter.module#CourtCounterPageModule"
  },
  { path: "Result", loadChildren: "./result/result.module#ResultPageModule" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
