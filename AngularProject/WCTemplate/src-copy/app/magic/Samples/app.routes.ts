import { Routes, RouterModule } from '@angular/router';
import { RouterContainerMagicComponent } from "@magic-xpa/angular";
import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
export const routes: Routes = [

    {
        path: '',
        component: RouterContainerMagicComponent,
        children: [


        ]
    }
];

@NgModule({
    imports: [CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class MagicRoutingModule {}