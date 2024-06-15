import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SenaliMainPageComponent } from './layout/senali-main-page/senali-main-page.component';
import { HomeModule } from '@module/home/home.module';
import { AboutUsModule } from '@module/about-us/about-us.module';
import { ContactUsModule } from '@module/contact-us/contact-us.module';

const routes: Routes = [
  {
    path: '',
    component: SenaliMainPageComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('@module/home/home.module').then((m):typeof HomeModule => m.HomeModule)
      },
      {
        path: 'about-us',
        loadChildren: () => import('@module/about-us/about-us.module').then((m):typeof AboutUsModule => m.AboutUsModule)
      },
      {
        path: 'contact-us',
        loadChildren: () => import('@module/contact-us/contact-us.module').then((m):typeof ContactUsModule => m.ContactUsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
