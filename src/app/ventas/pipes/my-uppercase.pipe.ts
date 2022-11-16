import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'myUppercase'
})
export class MyUppercasePipe implements PipeTransform {

  transform(value: string, inUpperCase: boolean = true): string {
    return inUpperCase 
      ? value.toUpperCase()
      : value.toLowerCase()
  }

}