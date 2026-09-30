import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';

@Service()
export class EnquiryService {
  http = inject(HttpClient);
  getAllEnquiry() {
    return this.http.get('https://api.freeprojectapi.com/api/Enquiry/get-enquiries');
  }
  createNewEnquiry(data: any) {
    return this.http.post('https://api.freeprojectapi.com/api/Enquiry/create-enquiry', data);
  }
  updateEnquiry(id: number, data: any){
    return this.http.put("https://api.freeprojectapi.com/api/Enquiry/update-enquiry/"+id, data);
  }
  deleteEnquiry(id: number){
    return this.http.delete("https://api.freeprojectapi.com/api/Enquiry/delete-enquiry/"+id);
  }
  getAllCategories(){
    return this.http.get("https://api.freeprojectapi.com/api/Enquiry/get-categories");
  }
}
