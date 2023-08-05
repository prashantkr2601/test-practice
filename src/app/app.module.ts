import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchFilterModule } from './components/search-filter/search-filter.module';
import { HiringSectionCarouselComponent } from './components/hiring-section-carousel/hiring-section-carousel.component';
import { DeviceTypeService } from './device-type.service';

@NgModule({
  declarations: [AppComponent, HiringSectionCarouselComponent],
  imports: [BrowserModule, AppRoutingModule, SearchFilterModule],
  providers: [DeviceTypeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
