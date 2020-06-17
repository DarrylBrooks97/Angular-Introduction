import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './Components/app-routing.module';
import { AppComponent } from './Components/app.component';
import { PortfolioHeader } from './Components/portfolio-header.component';

@NgModule({
  declarations: [AppComponent, PortfolioHeader],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent, PortfolioHeader],
})
export class AppModule {}
