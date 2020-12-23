import { CoursesService } from './courses.service';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Course } from './course.interface';

@Injectable()
export class CourseResolver implements Resolve<Course> {

    constructor(private service: CoursesService) { }

    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Course> { 

        const id = route.params.id;

        if (id) {
            return Promise.resolve(this.service.getItemById(id));
        } else {
            return Promise.resolve({
                id: 0,
                name: 'string',
                date: new Date(),
                length: 0,
                description: 'string'
            });
        }
    }
}
