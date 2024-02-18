import { Route } from "@angular/router";
import { isAuthenticatedGuard } from "@shared/guards/is-authenticated.guard";
import { AuthService } from "@shared/services/auth.service";
import { HomeComponent } from "./views/components/home/home.component";

export default [
    { path: '', providers: [ AuthService ], canActivate: [ isAuthenticatedGuard ], component: HomeComponent }
] satisfies Route[];
