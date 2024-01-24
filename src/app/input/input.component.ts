import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { toBase64 } from './util';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent implements OnInit {
  imageBase64 !:string;
@Input()
urlCurrentImage !: string

@Output()
onImageSelected= new EventEmitter<File>();

ngOnInit(): void {
 
}
onChange($event: Event) {
  if ($event.target instanceof HTMLInputElement && $event.target.files) {
    const files = $event.target.files;
    if (files.length > 0) {
      const file: File = files[0];
      toBase64(file).then((value: unknown) => {
        // Explicitly cast the value to string if you are sure it's a string
        this.imageBase64 = value as string;
        this.onImageSelected.emit(file);
      });
    }
  }

}}
