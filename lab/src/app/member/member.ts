import { Component, OnInit, signal } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Member } from '../Models/Member';
import { Memberservice } from '../services/memberservice';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-member',
  imports: [MatTableModule, MatIconModule, RouterLink],
  templateUrl: './member.html',
  styleUrl: './member.css',
})
export class MemberComponent implements OnInit {

  displayedColumns: string[] = [
    'id',
    'name',
    'cin',
    'type',
    'createDate',
    'symbol'
  ];

  dataSource = signal<Member[]>([]);

  constructor(private memberService: Memberservice) {}

  ngOnInit() {

    // Récupérer les membres depuis le backend
    this.memberService.getAllMembers().subscribe((data) => {

      // Mettre les données dans le signal
      this.dataSource.set(data);

    });

  } // ← FIN de ngOnInit()

  deleteMember(id: string): void {

    let dialogRef =this.dialogRef.open(Confirmcomp )

    this.memberService.deleteMember(id).subscribe(() => {
      this.ngOnInit();
    });
    //ouvrir la boite 
    //attendre le click 
    //si le user click sur 

  } // ← FIN de deleteMember()

}