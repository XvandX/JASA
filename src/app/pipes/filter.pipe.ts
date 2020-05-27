import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === "") return value;
    const resultSongs = [];
    for (const cancion of value) {
      if (cancion.title.toUpperCase().indexOf(arg.toUpperCase()) > -1) {
        console.log("input de entrada activo")
        resultSongs.push(cancion)
      } else if (cancion.author.toUpperCase().indexOf(arg.toUpperCase()) > -1) {
        resultSongs.push(cancion)
      } else if (cancion.album.toUpperCase().indexOf(arg.toUpperCase()) > -1) {
        resultSongs.push(cancion)
      }
    }
    return resultSongs;
  }

}
