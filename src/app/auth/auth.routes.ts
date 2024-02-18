import { Route } from "@angular/router";
import { LoginComponent } from "./views/components/login/login.component";
import { AuthService } from "@shared/services/auth.service";
import { isUnauthenticatedGuard } from "@shared/guards/is-unauthenticated.guard";

export default [
    { 
        path: '', 
        providers: [ AuthService ],
        canActivate: [ isUnauthenticatedGuard ],
        component: LoginComponent 
    }
] satisfies Route[];