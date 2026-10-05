import { Routes } from '@angular/router';
import { MemberForm } from './member-form/member-form';
import { MemberComponent } from './member/member';

export const routes: Routes = [
    {
    path: 'create',
    component: MemberForm,
    },
    {
        path: '',
        component: MemberComponent,
    },
    {
        path: ':id/edit', //na3mlo : khater contenu dynamique 
        component:    MemberForm,  
    }

];
