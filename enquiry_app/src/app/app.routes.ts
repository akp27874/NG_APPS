import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadComponent: () => import('./components/login/login').then((m) => m.Login)
    },
    {
        path: 'category',
        loadComponent: () => import('./components/category-home/category-home').then((m) => m.CategoryHome)
    },
    {
        path: 'create-enquiry',
        loadComponent: () => import('./components/create-enquiry/create-enquiry').then((m) => m.CreateEnquiry)
    },
    {
        path: 'enquiry',
        loadComponent: () => import('./components/enquiry-home/enquiry-home').then((m) => m.EnquiryHome)
    },
    {
        path: 'status',
        loadComponent: () => import('./components/status-home/status-home').then((m) => m.StatusHome)
    }
];
