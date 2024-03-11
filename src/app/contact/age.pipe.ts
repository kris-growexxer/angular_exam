import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name:'age'
})

export class AgePipe implements PipeTransform{
  transform(birthDate:Date): number {
    const today=new Date();
    let age=today.getFullYear()-birthDate.getFullYear();
    let month:number=today.getMonth()-birthDate.getMonth();

    if(month<0 || (month==0 && today.getDate()<birthDate.getDate())) age--;
    return age;
  }

}
