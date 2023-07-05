import { Pipe, PipeTransform } from '@angular/core';
import { Iric } from './iric/iric.model';

@Pipe({
  name: 'studentFilter'
})
export class StudentFilterPipe implements PipeTransform {

  transform(students: Iric[], args: string = ''): Iric[] {
    let filter: string = args.toLowerCase();
    return students.filter(student => student.name.toLowerCase().startsWith(filter));
  }

}
