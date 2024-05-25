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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';               // 35 (template driven form)  // 42 (reactive form)
import { StructureDirectivesComponent } from './structure-directives/structure-directives.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { PipesComponent } from './pipes/pipes.component';
import { CustomPipe } from './pipes/custom.pipe';
import { AlternateCaseCustomPipe } from './pipes/alternate-case-custom.pipe';
import { StudentDataComponent } from './student-data/student-data.component';
import { StudentService } from './services/student.service';
import { HttpClientModule } from '@angular/common/http';          // 33 (api)
import { UsersComponent } from './users/users.component'         // 33 (api)
import { UserService } from './services/user.service';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { HighlightDirective } from './shared/highlight.directive';
import { TextTransformDirective } from './shared/text-transform.directive';
import { RoutingComponent } from './routing/routing.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { RoutingEmployeesComponent } from './routing-employees/routing-employees.component';
import { RoutingEmployeeDetailsComponent } from './routing-employee-details/routing-employee-details.component';
import { RoutingParentComponent } from './routing-parent/routing-parent.component';
import { RoutingChild1Component } from './routing-child1/routing-child1.component';
import { RoutingChild2Component } from './routing-child2/routing-child2.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { NgContentCourseComponent } from './ng-content-course/ng-content-course.component';

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
    TwoWayBindingComponent,
    StructureDirectivesComponent,
    BootstrapComponent,
    ParentComponent,
    ChildComponent,
    PipesComponent,
    CustomPipe,
    AlternateCaseCustomPipe,
    StudentDataComponent,
    UsersComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    CustomDirectiveComponent,
    HighlightDirective,
    TextTransformDirective,
    RoutingComponent,
    PageNotFoundComponent,
    HomeComponent,
    RoutingEmployeesComponent,
    RoutingEmployeeDetailsComponent,
    RoutingParentComponent,
    RoutingChild1Component,
    RoutingChild2Component,
    NgContentComponent,
    NgContentCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,               // added for ngModel (two way binding), // 35 (template driven form)
    HttpClientModule,            // 33 (api)
    ReactiveFormsModule         // 42 (reactive form)
  ],
  providers: [
    StudentService,
    UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
