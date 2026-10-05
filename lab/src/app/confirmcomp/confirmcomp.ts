import { Component, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmcomp',
  imports: [],
  templateUrl: './confirmcomp.html',
  styleUrl: './confirmcomp.css',
})
export class Confirmcomp {
  dialogRef = inject(MatDialogRef); //tforsih mech to4horlik boite 
}
