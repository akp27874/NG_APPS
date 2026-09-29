import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { ICategory } from '../../models/category.model';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  imports: [FormsModule, NgClass],
  selector: 'app-category-home',
  styleUrl: './category-home.css',
  templateUrl: './category-home.html',
})
export class CategoryHome implements OnInit{
  http = inject(HttpClient);
  categoryList = signal<ICategory[]>([]);
  newCategory : ICategory = {
    categoryId:0,
    categoryName:'',
    isActive:false
  }
  ngOnInit(){
    this.getAllCategory()
  }
  getAllCategory(){
    this.http.get("https://api.freeprojectapi.com/api/Enquiry/get-categories").subscribe({
      next: (res:any)=>{
        this.categoryList.set(res.data)
        console.log(this.categoryList())
      }
    })
  }

  addCategory(){
    this.http.post("https://api.freeprojectapi.com/api/Enquiry/create-category", this.newCategory).subscribe({
      next: (res: any) =>{
        this.getAllCategory();
        alert(res.message);
      }
    })
  }

  onEdit(data: any){
    const strObj = JSON.stringify(data);
    const obj = JSON.parse(strObj)
    this.newCategory = obj;
  }

  updateCategory(){
    this.http.put("https://api.freeprojectapi.com/api/Enquiry/update-category/"+this.newCategory.categoryId, this.newCategory).subscribe({
      next: (res:any)=>{
        this.getAllCategory();
        this.onClear();
        alert(res.message)
      }
    })
  }

  onDelete(id:any){
    const isDelete = confirm("Do you want to delete ? "+ id);
    if(isDelete){
      this.http.delete("https://api.freeprojectapi.com/api/Enquiry/delete-category/"+id).subscribe({
        next:(res:any)=>{
          this.getAllCategory();
          alert(res.message)
        }
      })
    }
  }

  onClear(){
    this.newCategory = {
    categoryId:0,
    categoryName:'',
    isActive:false
    }
  }
}
