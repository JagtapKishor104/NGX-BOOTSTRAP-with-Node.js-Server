import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, Validators } from '@angular/forms';
import { BsComponentRef } from 'ngx-bootstrap/component-loader';
import { BsModalRef } from "ngx-bootstrap/modal";
import { range } from 'rxjs';
import Swal from 'sweetalert2'
import { ApiService } from "../Service/api.service";

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopupComponents implements OnInit {

  title?: string;
  closeBtnName: string = "Close";
  btn?: string;
  value?: string;
  list: any[] = [];
  editlist: any[] = [];
  ID: any;
  showimg: boolean = false;
  empdata: any;
  message: string = "";
  imgFile!: any;
  imageSrc: any;
  logoimage!: string;
  image!: string;
  submitted = false;

  constructor(
    public bsModalRef: BsModalRef,
    private fb: FormBuilder,
    public api: ApiService
  ) {

  }

  ngOnInit(): void {
    if (this.empdata) {
      console.log(this.empdata);
      localStorage.setItem("_id", this.empdata._id);

      this.image = this.empdata.uimage

      this.myform.controls["id"].setValue(this.empdata._id);
      this.myform.controls["fname"].setValue(this.empdata.ufname);
      this.myform.controls["lname"].setValue(this.empdata.ulname);
      this.myform.controls["email"].setValue(this.empdata.uemail);
      this.myform.controls["mobile"].setValue(this.empdata.umobile);
      this.myform.controls["salary"].setValue(this.empdata.usalary);
      this.myform.controls["image"].setValue(this.empdata.uimage);

      // this.myform.controls["avatar"].setValue(this.empdata.avatar);
    }
    let closebtn = document.getElementById('close');
    closebtn.addEventListener('click', () => {
      localStorage.clear();
      console.log('Window Closed');


      this.bsModalRef.hide();

    })
  }




  onFileChanged(e: any) {

    if (e.target.files && e.target.files.length) {
      const reader = new FileReader();
      const [file] = e.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.imgFile = reader.result;
        this.myform.patchValue({
          image: reader.result,
        });

        // for image load or preview
        const reader1 = new FileReader();

        const image = e.target.files[0];
        reader1.onload = e => this.imageSrc = reader1.result;
        reader1.readAsDataURL(image);

        // 


      };
    }
  }


  myform = this.fb.group(
    {
      id: new FormControl(""),
      fname: new FormControl("", [Validators.required, Validators.minLength(2), Validators.maxLength(10)]),
      lname: new FormControl("", [Validators.required, Validators.minLength(2), Validators.maxLength(10)]),
      //  dob: ['', [Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
      email: new FormControl("", [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      mobile: new FormControl("", [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      salary: new FormControl("", [Validators.required, Validators.min(100), Validators.max(500000)]),

      image: new FormControl("", [Validators.required]),

    }
  );


  get f(): { [key: string]: AbstractControl } {
    return this.myform.controls;
  }

  saveData() {
    this.submitted = true;
    if (this.myform.invalid) {

    }
    if (!this.empdata) {
      if (this.myform.valid) {

        this.api.postusers(this.myform.value).subscribe({
          next: (res) => {
            console.log(res);
            if (res.msg == "Mobile number and Email already exists") {
              alert("Mobile number and Email already exists");
            }
            else if (res.msg == "mobile number already exits") {
              alert("mobile number already exits");
            }
            else if (res.msg == "email id already exits") {
              alert("email id already exits");
            }
            else {

              const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,

              })
              Toast.fire({
                icon: 'success',
                title: 'Value Added successfully'
              })
              this.myform.reset();
              this.bsModalRef.hide();

            }

          }

        })






      }


      else {
        this.message = "All Values Are Required";

        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,

        })

        Toast.fire({
          icon: 'error',
          title: 'All Values Are Required'
        })
      }
    }
    else {
      this.update();
    }
  }

  update() {
    if (this.myform.valid) {
      console.log("update works=>");
      console.log("Updated Values in form", this.myform.value);

      // alert("Updated");
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        // didOpen: (toast) => {
        //   toast.addEventListener('mouseenter', Swal.stopTimer)
        //   toast.addEventListener('mouseleave', Swal.resumeTimer)
        // }
      })


      const _id = this.api.get_id();
      console.log(_id);

      this.api.updateusers(_id, this.myform.value).subscribe({
        next: (res) => {
          Toast.fire({
            icon: 'success',
            title: 'Updated successfully',

          })
          this.bsModalRef.content.closeBtnName = "Update";


        }
      })
      this.myform.reset();
      this.bsModalRef.hide();

      localStorage.clear();

    }
  }


}
