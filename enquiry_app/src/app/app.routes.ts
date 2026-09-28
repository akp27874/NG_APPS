import { Routes } from '@angular/router';
import { CategoryHome } from './components/category-home/category-home';
import { EnquiryHome } from './components/enquiry-home/enquiry-home';
import { StatusHome } from './components/status-home/status-home';
import { Login } from './components/login/login';
import { CreateEnquiry } from './components/create-enquiry/create-enquiry';

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
        path: 'creaate-enquiry',
        component: CreateEnquiry
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
