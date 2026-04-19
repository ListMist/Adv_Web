import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseService {
    getAllCourses() {
        return "Get all courses - from Service";
    }
    getCourseById(id: string) {
        return `Get course with id ${id} - from Service`;
    }
    createCourse() {
        return "Create course - from Service";
    }
    updateCourse(id: string) {
        return `Update course with id ${id} - from Service`;
    }
    patchCourse(id: string) {
        return `Patch course with id ${id} - from Service`;
    }
    deleteCourse(id: string) {
        return `Delete course with id ${id} - from Service`;
    }
}
