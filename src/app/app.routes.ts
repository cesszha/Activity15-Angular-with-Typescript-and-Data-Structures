import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { FruitListComponent } from './fruit-list/fruit-list.component';





export const routes: Routes = [
{
    title: 'Student List',
    component: StudentListComponent,
    path: 'student-list',
},
{
    title: 'Employee List',
    component: EmployeeListComponent,
    path: 'employee-list',
},
{
    title: 'Fruit List',
    component: FruitListComponent,
    path: 'fruit-list',
},












];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}