import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vocalsToSymbols',
})
export class VocalsToSymbolsPipe implements PipeTransform {
  transform(value: string): string {
    let formatedText =value
      .replaceAll('a', '4')
      .replaceAll('A', '4')
      .replaceAll('e', '3')
      .replaceAll('E', '3')
      .replaceAll('i', '1')
      .replaceAll('I', '1')
      .replaceAll('o', '0')
      .replaceAll('O', '0')
      .replaceAll('u', 'μ')
      .replaceAll('U', 'μ');
    console.log('pipe: ', formatedText);

    return formatedText;
  }
}
