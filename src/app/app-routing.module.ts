import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';;
import { PipesComponent } from './pipes/pipes.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { EventsComponent } from './events/events.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { RoutingEmployeesComponent } from './routing-employees/routing-employees.component';
import { RoutingEmployeeDetailsComponent } from './routing-employee-details/routing-employee-details.component';
import { RoutingParentComponent } from './routing-parent/routing-parent.component';
import { RoutingChild1Component } from './routing-child1/routing-child1.component';
import { RoutingChild2Component } from './routing-child2/routing-child2.component';
import { StudentDataComponent } from './student-data/student-data.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';

const routes: Routes = [
  // 48. configuring routs
  { path: 'home', component: HomeComponent},
  { path: 'pipe', component: PipesComponent},
  { path: 'interpolation', component: InterpolationComponent},
  { path: 'event', component: EventsComponent},

  // 50. Route parameter | Dynamic Routing in Angular
  { path: 'routing-employees', component: RoutingEmployeesComponent },
  { path: 'routing-employee-details/:id', component: RoutingEmployeeDetailsComponent },
  //{ path: 'routing-employee-details/:id/:name', component: RoutingEmployeeDetailsComponent },     // for multiple route parameter

  // 55. Child Routes Or Nested Routes in Angular Routes
  {
    path: 'routing-parent',
    component: RoutingParentComponent,
    children: [
      {path: 'child1', component: RoutingChild1Component},        // url if click this path: "http://localhost:54165/routing-parent/child1"
      {path: 'child2', component: RoutingChild2Component},         // url if click this path: "http://localhost:54165/routing-parent/child2"
      { path: '**', component: PageNotFoundComponent}             // child not found
    ]
  },

  // 57. Auxiliary Routes | Named Routes | Multiple Routes
  // url if all Routes are open : "http://localhost:54165/home(outlet2:student-data//outlet3:class-binding)"
  {
    path: 'student-data',
    outlet: 'outlet2',
    component: StudentDataComponent
  },
  {
    path: 'class-binding',
    outlet: 'outlet3',
    component: ClassBindingComponent
  },





  // 49. Page Not Found, Whildcards, pathMatch in Angular Routing
  { path: '', redirectTo: '/home', pathMatch: 'full'},             // if url is empty run home route
  // Note: this Whildcard('**') will always comes at last
  { path: '**', component: PageNotFoundComponent}                 //   '**' ==> Whildcard => runs if no routs/URL founds
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
