import { NgModule } from "@angular/core";
import { PhotoDatailsComponent } from "./photo-details.component";
import { CommonModule } from "@angular/common";
import { PhotoModule } from "../photo/photo.module";

import { RouterModule } from "@angular/router";
import { PhotoCommentsComponent } from "./photo-comments/photo-comments.component";
import { ReactiveFormsModule } from "@angular/forms";
import { VMessageModule } from "../shared/components/vmessage/vmessage.module";

@NgModule({
    declarations: [
        PhotoDatailsComponent, 
        PhotoCommentsComponent
    ],
    exports: [
        PhotoDatailsComponent, 
        PhotoCommentsComponent],
    imports: [
        CommonModule,
        PhotoModule,
        RouterModule,
        ReactiveFormsModule,
        VMessageModule
    ]
})
export class PhotoDetailsModule { }