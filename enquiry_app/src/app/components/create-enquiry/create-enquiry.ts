import { Component, inject, OnInit, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { EnquiryService } from '../../services/enquiry.service';
import { ICategory } from '../../models/category.model';

@Component({
  imports: [FormField],
  selector: 'app-create-enquiry',
  styleUrl: './create-enquiry.css',
  templateUrl: './create-enquiry.html',
})
export class CreateEnquiry implements OnInit {
  ngOnInit(): void {
    this.getAllCategories();
  }
  categoryList = signal<ICategory[]>([])
  newEnquiry = signal({
    enquiryId: 0,
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    message: '',
    categoryId: '',
    statusId: 334,
    enquiryType: '',
    isConverted: false,
    enquiryDate: new Date(),
    followUpDate: new Date(),
    feedback: '',
  });

  enqForm = form(this.newEnquiry);
  enqSvc = inject(EnquiryService);

  onCreateEnquiry(){
    const formValue = this.enqForm().value();
    this.enqSvc.createNewEnquiry(formValue).subscribe({
      next:(res:any)=>{
        if(res.result){
          alert("Enquiry Created Successfully!");
        }else{
          alert(res.message)
        }
      }
    })
  }

  getAllCategories(){
    this.enqSvc.getAllCategories().subscribe({
      next:(res: any)=>{
        this.categoryList.set(res.data);
      }
    })
  }
}
