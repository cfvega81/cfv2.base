import { Route } from "@angular/router";
import { LoginComponent } from "./views/components/login/login.component";
import { isUnauthenticatedGuard } from "@shared/guards/is-unauthenticated.guard";

export default [
    { 
        path: '', 
        canActivate: [ isUnauthenticatedGuard ],
        component: LoginComponent 
    }
] satisfies Route[];