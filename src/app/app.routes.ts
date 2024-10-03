import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { FruitListComponent } from './fruit-list/fruit-list.component';
import { CourseListComponent } from './course-list/course-list.component';
import { BookListComponent } from './book-list/book-list.component';
import { CityListComponent } from './city-list/city-list.component';
import { MovieListComponent } from './movie-list/movie-list.component';

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
{
    title: 'Course List',
    component: CourseListComponent,
    path: 'course-list',
},
{
    title: 'Book List',
    component: BookListComponent,
    path: 'book-list',
},
{
    title: 'City List',
    component: CityListComponent,
    path: 'city-list',
},
{
    title: 'Movie List',
    component: MovieListComponent,
    path: 'movie-list',
},











];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}