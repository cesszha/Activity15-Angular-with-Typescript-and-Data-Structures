import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { FruitListComponent } from './fruit-list/fruit-list.component';
import { CourseListComponent } from './course-list/course-list.component';
import { BookListComponent } from './book-list/book-list.component';
import { CityListComponent } from './city-list/city-list.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { CarModelListComponent } from './car-model-list/car-model-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { CountryListComponent } from './country-list/country-list.component';
import { SportsListComponent } from './sports-list/sports-list.component';
import { VegetableListComponent } from './vegetable-list/vegetable-list.component';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { ToolListComponent } from './tool-list/tool-list.component';
import { LanguageListComponent } from './language-list/language-list.component';
import { GameListComponent } from './game-list/game-list.component';





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
{
    title: 'Car Model List',
    component: CarModelListComponent,
    path: 'car-model-list',
},
{
    title: 'Product List',
    component: ProductListComponent,
    path: 'product-list',
},
{
    title: 'Subject List',
    component: SubjectListComponent,
    path: 'subject-list',
},
{
    title: 'Country List',
    component: CountryListComponent,
    path: 'country-list',
},
{
    title: 'Sports List',
    component: SportsListComponent,
    path: 'sports-list',
},
{
    title: 'Vegetable List',
    component: VegetableListComponent,
    path: 'vegetable-list',
},
{
    title: 'Animal List',
    component: AnimalListComponent,
    path: 'animal-list',
},
{
    title: 'Tool List',
    component: ToolListComponent,
    path: 'tool-list',
},
{
    title: 'Language List',
    component: LanguageListComponent,
    path: 'language-list',
},
{
    title: 'Game List',
    component: GameListComponent,
    path: 'game-list',
},















];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}