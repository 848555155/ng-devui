import { NgModule } from '@angular/core';
import { CarouselItemComponent } from './carousel-item.component';
import { CarouselComponent } from './carousel.component';

@NgModule({
  imports: [CarouselComponent, CarouselItemComponent],
  exports: [CarouselComponent, CarouselItemComponent],
})
export class CarouselModule {}
