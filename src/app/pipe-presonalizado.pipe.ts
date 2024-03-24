import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipePresonalizado'
})
export class PipePresonalizadoPipe implements PipeTransform {

  transform(valor: string | undefined): string {
    return valor?.toLocaleUpperCase() || "";
  }

}
