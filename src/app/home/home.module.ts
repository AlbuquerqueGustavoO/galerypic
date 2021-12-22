import { NgModule } from "@angular/core";
import { SigninComponent } from "./signin/signin.component";
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { CommonModule } from "@angular/common";
import { VMessageModule } from "../photos/shared/components/vmessage/vmessage.module";
import { RouterModule } from "@angular/router";
import { SignUpComponent } from "./signup/signup.component";

@NgModule({
    declarations: [
        SigninComponent,
        SignUpComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        VMessageModule,
        RouterModule
    ]
})

export class HomeModule { }

