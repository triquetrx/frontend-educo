import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: String): any[] {
    if (!searchText) return items;

    if (items.length <= 0) return items;

    // return items.filter((item) => {
    //   return Object.keys(item).some((key) => {
    //     return String(item[key])
    //       .toLowerCase()
    //       .includes(searchText.toLowerCase());
    //   });
    // });

    return items.filter((item) =>
      item.toLowerCase().includes(searchText.toLowerCase())
    );
  }
}
