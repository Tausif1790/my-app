import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';   // 
import { Employee } from './employee';

@Component({
  selector: 'app-routing-employee-details',
  templateUrl: './routing-employee-details.component.html',
  styleUrl: './routing-employee-details.component.css'
})
export class RoutingEmployeeDetailsComponent implements OnInit  {
  employee: Employee | undefined;
  employees: Employee[] = [
    new Employee(1, 'John Doe', 'Software Engineer'),
    new Employee(2, 'Jane Smith', 'Project Manager'),
    new Employee(3, 'Sam Johnson', 'Product Owner')
  ];
 
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // getting route parameter values using `snapshot`
    // ==> stores all route data
    // 1st way to get route data from paramMap 
    // const id = Number(this.route.snapshot.paramMap.get('id'));
    // this.employee = this.employees.find(e => e.id === id);

    // getting name by 
    // const name = this.route.snapshot.paramMap.get('name');  
    // this.employee = this.employees.find(e => e.name === name);      // 51. Multiple route parameter 

    // 2nd way to get route data from paramMap (prefered way to get value from route)
    this.route.paramMap.subscribe((params: ParamMap) => {             // 52. ParamMap Observable in Angular Routing
      let id = Number(params.get('id')); 
      this.employee = this.employees.find(e => e.id === id);
    })
  }

  // 53. Optional route parameter 
  goToEmployees(){
    let selectedId : any;
    this.route.paramMap.subscribe((params: ParamMap) => { 
      let id = Number(params.get('id')); 
      selectedId = id;
    })
    // http://localhost:54165/routing-employees;id=1 (give url like this)
    this.router.navigate(['/routing-employees', {id: selectedId}])      // passing selectedId as key-value pair in route
  }
}
