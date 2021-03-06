import { NgModule } from "@angular/core";
import { SigninComponent } from "./signin/signin.component";
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { CommonModule } from "@angular/common";
import { VMessageModule } from "../photos/shared/components/vmessage/vmessage.module";
import { RouterModule } from "@angular/router";
import { SignUpComponent } from "./signup/signup.component";
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home.routing.module";
import { SignUpService } from "./signup/signup.service";

@NgModule({
    declarations: [
        SigninComponent,
        SignUpComponent,
        HomeComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        VMessageModule,
        RouterModule,
        HomeRoutingModule
    ],
    providers: [
        SignUpService
    ]
})

export class HomeModule { }

