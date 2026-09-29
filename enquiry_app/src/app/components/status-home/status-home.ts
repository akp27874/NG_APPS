import { Component, inject, OnInit, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { Status } from '../../services/status';
import { IResponse } from '../../models/response.model';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ToasterService } from '../../services/toaster.service';
import { StatusModel } from '../../models/status.model';

@Component({
  imports: [ReactiveFormsModule, NgClass],
  selector: 'app-status-home',
  styleUrl: './status-home.css',
  templateUrl: './status-home.html',
})
export class StatusHome implements OnInit {
  statusSvc = inject(Status);
  toasterSvc = inject(ToasterService);
  statusForm!: FormGroup;
  statusList = signal<StatusModel[]>([]);
  constructor() {
    this.initializeForm();
  }
  initializeForm() {
    this.statusForm = new FormGroup({
      statusId: new FormControl(0),
      statusName: new FormControl(''),
      isActive: new FormControl(false),
    });
  }
  ngOnInit(): void {
    this.getAllStatus();
  }
  getAllStatus() {
    this.statusSvc.getAllStatus().subscribe({
      next: (res: IResponse) => {
        this.statusList.set(res.data);
      },
    });
  }
  onSaveStatus() {
    const payload = this.statusForm.value;
    this.statusSvc.createStatus(payload).subscribe({
      next: (res: IResponse) => {
        if (res.data) {
          this.getAllStatus();
          this.toasterSvc.show(res.message, 'success', 'Success');
        } else {
          this.toasterSvc.show(res.message, 'error', 'Error');
        }
      },
    });
  }
  onEditStatus(data: StatusModel) {
    this.statusForm.setValue(data);
  }
  onUpdateStatus() {
    const payload = this.statusForm.getRawValue() as StatusModel;
    this.statusSvc.updateStatus(payload).subscribe({
      next: (res: IResponse) => {
        if (res.data) {
          this.getAllStatus();
          this.onReset();
          this.toasterSvc.show(res.message, 'success', 'Success');
        } else {
          this.toasterSvc.show(res.message, 'error', 'Error');
        }
      },
    });
  }
  onDeleteStatus(id: number) {
    const isDelete = confirm("Do you really want to delete this status?");
    if(isDelete){
      this.statusSvc.deleteStatus(id).subscribe({
        next: (res: IResponse) => {
          if (res.data === null) {
            this.getAllStatus();
            this.toasterSvc.show(res.message, 'success', 'Success');
          } else {
            this.toasterSvc.show(res.message, 'error', 'Error');
          }
        },
      });
    }
  }
  onReset() {
    this.statusForm.reset();
  }
}
