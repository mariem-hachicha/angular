
import { Component, OnInit } from '@angular/core';

import { MatFormFieldModule } from '@angular/material/form-field';

import { MatInputModule } from '@angular/material/input';

import { MatIconModule } from '@angular/material/icon';

import { MatButtonModule } from '@angular/material/button';

import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { Memberservice } from '../services/memberservice';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscriber } from 'rxjs';


@Component({

  selector: 'app-member-form',

  imports: [

    MatFormFieldModule,

    MatInputModule,

    MatIconModule,

    MatButtonModule,

    ReactiveFormsModule

  ],

  templateUrl: './member-form.html',

  styleUrl: './member-form.css'

})

export class MemberForm implements OnInit {

  //injection de dépendance 

  constructor(private memberService: Memberservice, private router: Router, private activateRoute : ActivatedRoute) { }

  // FormGroup : permet de regrouper plusieurs champs de formulaire
  // dans un seul objet formulaire.
  // Ici, le FormGroup contient les champs du Member :
  // id, name, cin, type et createDate.

  // formgroup formulaire mouch bi databinding ;

  memberForm!: FormGroup; idCourant !:string 


  ngOnInit() {

    //recuperer la route active 
    this.idCourant =this.activateRoute.snapshot.params['id'] //activateRoute tekhrjlik url  // snapchpt ta3ml captur de écran
    //recuperer id 
    //si id existe => je suis dans edit / getMemberByid 
    if(this.idCourant){
      this.memberService.getMemberById(this.idCourant).subscribe((Member)=>{
        this.memberForm = new FormGroup({

        id: new FormControl(Member.id),
      

      name: new FormControl(Member.name),

      cin: new FormControl(Member.cin),

      type: new FormControl(Member.type),

      createDate: new FormControl(Member.createDate)

    });

      })
    }
    else {
    // sinon =>> je suis dans create 

    this.memberForm = new FormGroup({

      id: new FormControl(null),
      // initialisation de la valeur du champ id à null
      // FormControl c'est un champ de formulaire qui va contenir la valeur du champ id

      name: new FormControl(null),

      cin: new FormControl(null),

      type: new FormControl(null),

      createDate: new FormControl(null)

    });

  }
}


  onSubmit() {

    if (this.idCourant) {
  // update member
  this.memberService.updateMemberById(
    this.idCourant,
    this.memberForm.value
  ).subscribe(() => {
    this.router.navigate(['']);
  });
}


    
    else{
    
    console.log('Form submitted');
    // ici on va récupérer les données du formulaire et les envoyer au backend
    // pour créer un nouveau membre

    console.log(this.memberForm.value);
    //injecter le service et appeler la fonction addMember() pour envoyer les données du formulaire au backend
    this.memberService.AddMember(this.memberForm.value).subscribe(() => {
      this.router.navigate(['']);
      ;
    });
    //signluton il gére un seul service un seul instace dans le cache 


  }
}

}

