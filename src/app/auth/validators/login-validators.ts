import { FormControl, RequiredValidator, Validators } from "@angular/forms";

export class LoginValidators {
    username: FormControl = new FormControl('', [
        Validators.required,
        Validators.email
    ]);
    password: FormControl = new FormControl('', [ 
        Validators.required,
        Validators.min(5),
    ]);

}