import { isPlatformBrowser } from "@angular/common";
import { Inject, Injectable, PLATFORM_ID } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class PlatformDetectorService { 
    constructor(@Inject(PLATFORM_ID) private platformid: string){ }

    isplatformBrowser(){
        return isPlatformBrowser(this.platformid);
    }
}