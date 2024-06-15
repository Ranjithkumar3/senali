import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { SharedModule } from '@shared/shared.module';
import { SenaliMainPageComponent } from './layout/senali-main-page/senali-main-page.component';
import { SenaliHeaderComponent } from './layout/senali-header/senali-header.component';
import { SenaliFooterComponent } from './layout/senali-footer/senali-footer.component';
import { CommonModule, LocationStrategy, PathLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    SenaliMainPageComponent,
    SenaliHeaderComponent,
    SenaliFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    NgbModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
