import {Routes, RouterModule} from '@angular/router';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

export const routes: Routes = [

];


@NgModule({
  imports: [CommonModule,RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MagicRoutingModule { }
