import { Directive, Input } from '@angular/core';

@Directive({
  selector: 'img[default]',
  host: {
    '(error)':'updateUrl()',
    '[src]':'src'
   }
})
export class DefaultImageDirective {
  @Input() src:string;

  updateUrl() {
    this.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png';
  }
}