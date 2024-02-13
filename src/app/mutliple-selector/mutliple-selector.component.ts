import { MutlipleSelectorMdel } from './multiple';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mutliple-selector',
  templateUrl: './mutliple-selector.component.html',
  styleUrl: './mutliple-selector.component.css'
})
export class MutlipleSelectorComponent {
select(item: MutlipleSelectorMdel,index: number) {
this.SelectedItems.push(item);
this.NonSelectedItems.splice(index,1)
}
deselect(item: MutlipleSelectorMdel,index: number) {
  this.NonSelectedItems.push(item);
  this.SelectedItems.splice(index,1)
}
  @Input()
  SelectedItems:MutlipleSelectorMdel[]=[];

  @Input()
  NonSelectedItems:MutlipleSelectorMdel[]=[];
  
onSelelct() {
this.SelectedItems.push(...this.NonSelectedItems);
this.NonSelectedItems=[];
}
onDeselelct(){
  this.NonSelectedItems.push(...this.SelectedItems);
  this.SelectedItems=[];
}
}
