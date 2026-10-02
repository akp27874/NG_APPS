import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { EnquiryService } from '../../services/enquiry.service';

@Component({
  imports: [DatePipe],
  selector: 'app-enquiry-home',
  styleUrl: './enquiry-home.css',
  templateUrl: './enquiry-home.html',
})
export class EnquiryHome implements OnInit {
  http = inject(HttpClient);
  enqSvc = inject(EnquiryService);
  enquiryList = signal<any[]>([]);

  ngOnInit(): void {
    this.getAllData();
  }
  getAllData(){
    this.enqSvc.getAllEnquiry().subscribe({
      next: (res:any)=>{
        this.enquiryList.set(res.data);
      }
    })
  }
}
