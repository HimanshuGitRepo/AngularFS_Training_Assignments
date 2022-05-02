import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salaryFilter'
})
export class SalaryFilterPipe implements PipeTransform {

  transform(inputData:any[], minimumSalary: number, maximumSalary: number): any[]
  {
    return inputData.filter(item => item.sal >= minimumSalary && item.sal <= maximumSalary);
  }
}
