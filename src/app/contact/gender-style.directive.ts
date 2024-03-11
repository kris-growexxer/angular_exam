import {Directive, ElementRef, Input, Renderer2} from "@angular/core";

@Directive({
  selector:'[genderStyle]'
})

export class GenderStyleDirective{

  @Input() set genderStyle(gender:string){
    this.setStyle(gender);
  }

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  private setStyle(gender:string){
    if(gender){

      gender=gender.toLowerCase();

      if(gender==='male'){
        this.renderer.setStyle(this.elRef.nativeElement,'background-color', 'lightblue');
        this.renderer.setStyle(this.elRef.nativeElement,'color', 'darkblue');
      }
      else if(gender==='female'){
        this.renderer.setStyle(this.elRef.nativeElement,'background-color', 'lightpink');
        this.renderer.setStyle(this.elRef.nativeElement,'color', 'pink');
      }
      else{
        this.renderer.setStyle(this.elRef.nativeElement,'background-color', 'transparent');
        this.renderer.setStyle(this.elRef.nativeElement,'color', 'black');
      }
    }
  }
}
