import { MatInput, MatLabel, MatHint, MatError, MatFormField} from "@angular/material/input";
import { MatCard, MatCardHeader, MatCardFooter, MatCardContent, MatCardActions, MatCardTitle, MatCardSubtitle, MatCardAvatar, MatCardImage } from '@angular/material/card';
import { MatButton, MatIconButton, MatIconAnchor, MatFabButton, MatFabAnchor, MatMiniFabAnchor, MatMiniFabButton } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

export const forms = [
    FormsModule,
    ReactiveFormsModule,
    MatInput,
    MatLabel,
    MatHint,
    MatError,
    MatFormField,
];

export const cards = [
    MatCard, 
    MatCardHeader, 
    MatCardFooter, 
    MatCardContent, 
    MatCardActions,
    MatCardTitle, 
    MatCardSubtitle, 
    MatCardAvatar, 
    MatCardImage
];

export const controls = [
    MatButton, 
    MatIconButton, 
    MatIconAnchor, 
    MatFabButton, 
    MatFabAnchor, 
    MatMiniFabAnchor, 
    MatMiniFabButton
];