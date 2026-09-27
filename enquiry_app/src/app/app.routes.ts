import { Routes } from '@angular/router';
import { CategoryHome } from './components/category-home/category-home';
import { EnquiryHome } from './components/enquiry-home/enquiry-home';
import { StatusHome } from './components/status-home/status-home';
import { Login } from './components/login/login';

export const routes: Routes = [
    {
        path:'',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: Login
    },
    {
        path: 'category',
        component: CategoryHome
    },
    {
        path: 'enquiry',
        component: EnquiryHome
    },
    {
        path: 'status',
        component: StatusHome
    }
];
