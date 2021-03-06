import { Directive,Renderer2, ElementRef, Input, OnInit } from "@angular/core";

import { Photo } from "../../photo/photo";
import { UserService } from "src/app/core/user/user.service";

@Directive({
    selector: '[photoOwnerOnly]'
})
export class PhotoOwnerOnlyDirective implements OnInit {

   @Input() ownedPhoto: Photo;
   constructor(
    private element: ElementRef<any>,
    private renderer: Renderer2,
    private UserService: UserService
) {}

ngOnInit() : void {
    this.UserService
        .getUser()
        .subscribe(user => {
             if(!user || user.id != this.ownedPhoto.userId) 
                this.renderer.setStyle(this.element.nativeElement, 'display', 'none');
            }
        )
    }
        
}
