import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
export const routes: Routes = [

    {
        path: 'CustomersList',
        loadChildren: () => import(`./magic/Samples/magic.gen.lib.module`).then(m => m.MagicSamplesModule),
    },
    {
        path: 'CustomerPage/:pCustomerID',
        loadChildren: () => import(`./magic/Samples/magic.gen.lib.module`).then(m => m.MagicSamplesModule),
    },

];

@NgModule({
    imports: [CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class MagicRoutingModule {}
