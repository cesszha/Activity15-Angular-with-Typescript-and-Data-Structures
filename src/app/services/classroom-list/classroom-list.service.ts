import { Injectable } from '@angular/core';
import ClassroomList from '../../list/ClassroomList';
@Injectable({
  providedIn: 'root'
})
export class ClassroomListService {
    private classrooms: ClassroomList[] = [];
  constructor() { }
      addClassroom(
        section: string,
        professor: string,
        studentCount: number,
      ): void {
        this.classrooms.push({
           section: section,
           professor: professor,
           studentCount: studentCount,
        });
      }

        getClassrooms(): ClassroomList[]{
          return this.classrooms;
        }

}
