import { AppContainerComponent } from './core/components/app-container/app-container.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AppContainerComponent,
    children: [
      // {
      //   path: '',
      //   redirectTo: '/',
      //   pathMatch: 'full',
      // },
      {
        path: '',
        loadChildren: () =>
          import('./modules/home/home.module').then((m) => m.HomeModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
