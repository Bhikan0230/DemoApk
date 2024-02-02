import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  demoApk: any = {
    1: {
      "cssClass": 'blue',
      "value1": ''
    },
    2: {
      "cssClass": 'blue',
      "value2": ''
    },
    3: {
      "cssClass": 'blue',
      "value3": ''
    },
    4: {
      "cssClass": 'blue',
      "value4": ''
    },
    5: {
      "cssClass": 'blue',
      "value5": ''
    },
  }
  count: number = 0
  otp: any = '';
  hidBtn: boolean = false;
  generatedOTP: any;
  title = 'DempApp';
  ngOnInit(): void {
    this.getPageData();
    let ele = document.getElementById('data');
    ele?.focus();
  }

  keyEvent(event: string, id: number) {
    console.log(event);
    let ids = id == 1 ? id : id - 1;
    if (event === 'click') {
      this.demoApk[ids]['cssClass'] = 'pink';
    } else if (event === 'Tab') {
      this.demoApk[id]['cssClass'] = 'pink';
    }
    console.log(this.demoApk);

  }

  getPageData() {
    let ele = document.getElementById('pageData');
    ele?.addEventListener('click', (e) => {
      if (e.type == 'click' && this.count!=100) {
        this.count+=2;
      }
    })
  }

  generateOtp() {
    this.hidBtn = true;
    let num = "01234567890";
    let otpLength = 4;
    let OTP = '';
    for (let i = 1; i <= otpLength; i++) {
      var index = Math.floor(Math.random() * num.length)
      OTP = OTP + num[index]
    }
    console.log(OTP);
    this.generatedOTP = OTP;
  }

  valodateOtp() {
    if (+this.otp == this.generatedOTP) {
      console.log("Otp match");
    } else {
      console.log("Otp not match");

    }
  }

  tags: string[] = [];
  newTag: string = '';

  addTag() {
    if (this.newTag && this.tags.indexOf(this.newTag) === -1) {
      this.tags.push(this.newTag);
      this.newTag = '';
    }
  }

  removeTag(index: number) {
    this.tags.splice(index, 1);
  }
}
