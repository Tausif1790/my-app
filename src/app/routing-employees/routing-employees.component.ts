import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Employee } from './employee';


@Component({
  selector: 'app-routing-employees',
  templateUrl: './routing-employees.component.html',
  styleUrl: './routing-employees.component.css'
})
export class RoutingEmployeesComponent implements OnInit  {
  public name : string = '';
  public selectedId : number = 0;
  employees: Employee[] = [
    new Employee(1, 'John Doe', 'Software Engineer'),
    new Employee(2, 'Jane Smith', 'Project Manager'),
    new Employee(3, 'Sam Johnson', 'Product Owner')
  ];

  constructor(private router: Router, private route: ActivatedRoute) {}

  // if we click on any employee then navigate by id to below path
  onSelect(employee: Employee): void {
    this.router.navigate(['/routing-employee-details', employee.id]);   // http://localhost:54165/routing-employee-details/3

    // if we click on any employee then navigate by name to below path
    // this.router.navigate(['/routing-employee-details', employee.name]);  // 51. Multiple route parameter 
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {             // 53. Optional route parameter 
      let id = Number(params.get('id'));                              // get optional parameter 'id'
      this.selectedId = id;
    })
  }
}
