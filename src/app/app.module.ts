import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { EventsComponent } from './events/events.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { NgClassDirComponent } from './ng-class-dir/ng-class-dir.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { TemplateReferenceComponent } from './template-reference/template-reference.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    EventsComponent,
    PropertyBindingComponent,
    ClassBindingComponent,
    NgClassDirComponent,
    StyleBindingComponent,
    TemplateReferenceComponent,
    TwoWayBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule               // added for ngModel (two way binding)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
