import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { RegisterService } from '../register.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
	closeResult = '';
	tags: string[] = [];
	newTag: string = '';
	constructor(private modalService: NgbModal, private api:RegisterService) { }
	ngOnInit(): void {
		throw new Error('Method not implemented.');
	}
	open(content: any) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.api.registerUser(this.user).subscribe((res)=>{
					console.log(res);
					
				})
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}

	save(value:any){
		console.log(value);
	
	}

	onchangeAge(event:any){
		console.log(event);
		this.user.age = event
		
	}

	uploadImg(eve:any){
		console.log(eve.target.files[0].name);
		this.user.ImageUrl = eve.target.files[0].name;

	}

	private getDismissReason(reason: any): string {
		switch (reason) {
			case ModalDismissReasons.ESC:
				return 'by pressing ESC';
			case ModalDismissReasons.BACKDROP_CLICK:
				return 'by clicking on a backdrop';
			default:
				return `with: ${reason}`;
		}
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
