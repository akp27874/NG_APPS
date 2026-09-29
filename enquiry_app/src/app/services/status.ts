import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { StatusModel } from '../models/status.model';
import { IResponse } from '../models/response.model';
import { Observable } from 'rxjs';

@Service()
export class Status {
    http = inject(HttpClient);
    getAllStatus(): Observable<IResponse>{
      return this.http.get<IResponse>("https://api.freeprojectapi.com/api/Enquiry/get-statuses")
    }
    createStatus(data:StatusModel): Observable<IResponse>{
        return this.http.post<IResponse>("https://api.freeprojectapi.com/api/Enquiry/create-status", data);
    }
    updateStatus(data:StatusModel): Observable<IResponse>{
        return this.http.put<IResponse>("https://api.freeprojectapi.com/api/Enquiry/update-status/"+data.statusId, data);
    }
    deleteStatus(id:number): Observable<IResponse>{
        return this.http.delete<IResponse>("https://api.freeprojectapi.com/api/Enquiry/delete-status/"+id);
    }

}
