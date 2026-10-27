import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CourseupdatesComponent } from './components/courseupdates/courseupdates.component';
import { HomealertComponent } from './components/homealert/homealert.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

@NgModule({
  declarations: [
    CarouselComponent,
    CourseupdatesComponent,
    HomealertComponent,
    NotfoundComponent
  ],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [
    CarouselComponent,
    CourseupdatesComponent,
    HomealertComponent,
    NotfoundComponent
  ]
})
export class SharedModule {}
