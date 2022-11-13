import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './common/header/header.component';
import { MenuComponent } from './common/menu/menu.component';
import { WidgetComponent } from './common/widget/widget.component';
import { SavingWidgetComponent } from './ui/widget/saving-widget/saving-widget.component';
import { SavingSvgComponent } from './ui/widget/saving-widget/saving-svg/saving-svg.component';
import {InOutWidgetComponent} from "./ui/widget/in-out-widget/in-out-widget.component";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    MenuComponent,
    WidgetComponent,
    SavingWidgetComponent,
    SavingSvgComponent,
    InOutWidgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
