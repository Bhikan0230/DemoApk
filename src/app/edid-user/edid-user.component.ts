import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-edid-user',
  templateUrl: './edid-user.component.html',
  styleUrls: ['./edid-user.component.css']
})
export class EdidUserComponent implements OnInit {
  userData:any|undefined[]=[];
  user: any = {
		ImageUrl:'',
		firstName: '',
		lastName: '',
		email: '',
		mobile: '',
		age: '',
		address: '',
		newTag:[]

	}
  tags: string[] = [];
	newTag: string = '';
  constructor(private route:ActivatedRoute, private register:RegisterService, private router:Router){}
  ngOnInit(): void {
   this.getSpecificProductId();
  }

  getSpecificProductId() {
    let productId = this.route.snapshot.paramMap.get('id');
    productId && this.register.getSpecificUser(productId).subscribe((data) => {
      this.user = data;
      // console.log(this.userData);
      
    })
  }

  onchangeAge(eve:any){

  }

  uploadImg(file:any){

  }

  updateUser(){
    console.log(this.user);
    this.register.updateUser(this.user).subscribe((result) => {
      console.log(result);
      
    })
    setTimeout(() => {
      this.router.navigateByUrl('/profile')
    }, 20);

  }

  addTag() {
		if (this.newTag && this.tags.indexOf(this.newTag) === -1) {
		  this.user.newTag.push(this.newTag);
		  this.tags.push(this.newTag);
		  this.newTag = '';
		}
	  }
	
	  removeTag(index: number) {
		this.tags.splice(index, 1);
	  }


}
