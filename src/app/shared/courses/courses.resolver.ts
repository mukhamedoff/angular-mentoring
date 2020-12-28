import { CoursesService } from './courses.service';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Course } from './course.interface';

@Injectable()
export class CourseResolver implements Resolve<Course> {

    constructor(private service: CoursesService) { }

    public async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Course> { 

        const id = route.params.id;

        if (id) {
            // const course = await this.service.getItemById(id).first().toPromise();
            // console.log({course});
            return Promise.resolve({
                id,
                name: 'string',
                date: new Date(),
                length: 0,
                description: 'string'
            });
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
