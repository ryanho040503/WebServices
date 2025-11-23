import { Routes } from '@angular/router';
import { AceHohoanComponent } from './components/ace-hohoan/ace-hohoan.component';
import { KingHohoanComponent } from './components/king-hohoan/king-hohoan.component';
import { QueenHohoanComponent } from './components/queen-hohoan/queen-hohoan.component';
import { JackHohoanComponent } from './components/jack-hohoan/jack-hohoan.component';

export const routes: Routes = [
    
    {
        path : '',
        redirectTo : '/ace',
        pathMatch : 'full' 
    },
    {
        path : 'ace',
        component : AceHohoanComponent
    },
    {
        path : 'king',
        component : KingHohoanComponent
    },
    {
        path : 'queen',
        component : QueenHohoanComponent
    },
    {
        path : 'jack',
        component : JackHohoanComponent
    },
    {   // In case nothing match
        path : '**',
        redirectTo : '/ace'
    }

];
