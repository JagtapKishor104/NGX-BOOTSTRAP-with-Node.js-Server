import { Component, OnInit } from '@angular/core';
import { PopupComponents } from './pop-up/pop-up.component';
import { BsModalRef, BsModalService, ModalOptions } from "ngx-bootstrap/modal";
import { ApiService } from './Service/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  bsModalRef?: BsModalRef;
  Data?: any;
  searchString!: any;
  rotate = true;
  maxSize = 5;
  status = "ON";
  totalItems = 150;
  config: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [3, 6, 9, 12];
  ufname="";
  str: any;
  first_name: any;
  datalength!: number;
  constructor(
    private modalService: BsModalService,
    private api: ApiService


  ) {
    console.log(this.Data1);


  }


  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getusers();
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.getusers();

  }
  ngOnInit(): void {
    this.getusers();
    
  }



  getusers() {
    this.api.getuser().subscribe({
      next: (res) => {
        this.Data = res.result;
        // console.log(this.Data);
        
        this.datalength = res.result.length;

      }
    })
  }


  openModalWithComponent() {
    const initialState: ModalOptions = {
      initialState: {
        list: [
          'Open a modal with component',
          'Pass your data',
          'Do something else',
          '...'
        ],
        title: 'Add A Employee',
        btn: "Submit",
        showimg: true,
      }
    };
    this.bsModalRef = this.modalService.show(PopupComponents, initialState);
    this.bsModalRef.content.closeBtnName = 'Close';
    this.bsModalRef.onHide!.subscribe(() => {
      this.getusers();
    })

  }


  openEditComponent(d: any) {

    const initialState: ModalOptions = {
      initialState: {


        editlist: [
          'Open beacuse of call edit method',
        ],


        title: 'Update Data',
        btn: "Update",
        empdata: d,


      }
    };
    this.bsModalRef = this.modalService.show(PopupComponents, initialState);
    // this.bsModalRef.content.closeBtnName = 'Close';
    this.bsModalRef.onHide!.subscribe(() => {
      this.getusers();
    })
  }



  deleteData(id: any) {

    this.api.deleteuser(id).subscribe({
      next: (res) => {
        Swal.fire({
          title: 'Do You Want Delete',
          text: "",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, Delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
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
            Toast.fire({
              icon: 'success',
              title: 'Employee Deleted'
            })

            this.getusers();
            console.log(id);




          }
          else {

          }


        })



      }
    })

  }
  Data1: any[] = [
    {
      ufname: "kishor",
      ulname: "jagtap",
      uemail: "kishor104@gmail.com",
      umobile: 1234567890,
      usalary: 32000,
      avatar: ""
    },
    {
      ufname: "kishor",
      ulname: "jagtap",
      uemail: "kishor104@gmail.com",
      umobile: 1234567890,
      usalary: 32000,
      avatar: ""
    },
    {
      ufname: "kishor",
      ulname: "jagtap",
      uemail: "kishor104@gmail.com",
      umobile: 1234567890,
      usalary: 32000,
      avatar: ""
    },
    {
      ufname: "kishor",
      ulname: "jagtap",
      uemail: "kishor104@gmail.com",
      umobile: 1234567890,
      usalary: 32000,
      avatar: ""
    },
    {
      ufname: "kishor",
      ulname: "jagtap",
      uemail: "kishor104@gmail.com",
      umobile: 1234567890,
      usalary: 32000,
      avatar: ""
    },
    {
      ufname: "kishor",
      ulname: "jagtap",
      uemail: "kishor104@gmail.com",
      umobile: 1234567890,
      usalary: 32000,
      avatar: ""
    },
    {
      ufname: "kishor",
      ulname: "jagtap",
      uemail: "kishor104@gmail.com",
      umobile: 1234567890,
      usalary: 32000,
      avatar: ""
    },
    {
      ufname: "kishor",
      ulname: "jagtap",
      uemail: "kishor104@gmail.com",
      umobile: 1234567890,
      usalary: 32000,
      avatar: ""
    },
    {
      ufname: "kishor",
      ulname: "jagtap",
      uemail: "kishor104@gmail.com",
      umobile: 1234567890,
      usalary: 32000,
      avatar: ""
    },
    {
      ufname: "kishor",
      ulname: "jagtap",
      uemail: "kishor104@gmail.com",
      umobile: 1234567890,
      usalary: 32000,
      avatar: ""
    },
    {
      ufname: "kishor",
      ulname: "jagtap",
      uemail: "kishor104@gmail.com",
      umobile: 1234567890,
      usalary: 32000,
      avatar: ""
    },
    {
      ufname: "kishor",
      ulname: "jagtap",
      uemail: "kishor104@gmail.com",
      umobile: 1234567890,
      usalary: 32000,
      avatar: ""
    },
    {
      ufname: "kishor",
      ulname: "jagtap",
      uemail: "kishor104@gmail.com",
      umobile: 1234567890,
      usalary: 32000,
      avatar: ""
    },
    {
      ufname: "kishor",
      ulname: "jagtap",
      uemail: "kishor104@gmail.com",
      umobile: 1234567890,
      usalary: 32000,
      avatar: ""
    },
    {
      ufname: "kishor",
      ulname: "jagtap",
      uemail: "kishor104@gmail.com",
      umobile: 1234567890,
      usalary: 32000,
      avatar: ""
    },
    {
      ufname: "kishor",
      ulname: "jagtap",
      uemail: "kishor104@gmail.com",
      umobile: 1234567890,
      usalary: 32000,
      avatar: ""
    },
    {
      ufname: "kishor",
      ulname: "jagtap",
      uemail: "kishor104@gmail.com",
      umobile: 1234567890,
      usalary: 32000,
      avatar: ""
    },
    {
      ufname: "kishor",
      ulname: "jagtap",
      uemail: "kishor104@gmail.com",
      umobile: 1234567890,
      usalary: 32000,
      avatar: ""
    },
    {
      ufname: "kishor",
      ulname: "jagtap",
      uemail: "kishor104@gmail.com",
      umobile: 1234567890,
      usalary: 32000,
      avatar: ""
    },
    {
      ufname: "kishor",
      ulname: "jagtap",
      uemail: "kishor104@gmail.com",
      umobile: 1234567890,
      usalary: 32000,
      avatar: ""
    },
    {
      ufname: "kishor",
      ulname: "jagtap",
      uemail: "kishor104@gmail.com",
      umobile: 1234567890,
      usalary: 32000,
      avatar: ""
    },
    {
      ufname: "kishor",
      ulname: "jagtap",
      uemail: "kishor104@gmail.com",
      umobile: 1234567890,
      usalary: 32000,
      avatar: ""
    },
    {
      ufname: "kishor",
      ulname: "jagtap",
      uemail: "kishor104@gmail.com",
      umobile: 1234567890,
      usalary: 32000,
      avatar: ""
    },
    {
      ufname: "kishor",
      ulname: "jagtap",
      uemail: "kishor104@gmail.com",
      umobile: 1234567890,
      usalary: 32000,
      avatar: ""
    },
    {
      ufname: "kishor",
      ulname: "jagtap",
      uemail: "kishor104@gmail.com",
      umobile: 1234567890,
      usalary: 32000,
      avatar: ""
    },

    {
      ufname: "kishor",
      ulname: "jagtap",
      uemail: "kishor104@gmail.com",
      umobile: 1234567890,
      usalary: 32000,
      avatar: ""
    },
    {
      ufname: "kishor",
      ulname: "jagtap",
      uemail: "kishor104@gmail.com",
      umobile: 1234567890,
      usalary: 32000,
      avatar: ""
    },
    {
      ufname: "kishor",
      ulname: "jagtap",
      uemail: "kishor104@gmail.com",
      umobile: 1234567890,
      usalary: 32000,
      avatar: ""
    },
    {
      ufname: "kishor",
      ulname: "jagtap",
      uemail: "kishor104@gmail.com",
      umobile: 1234567890,
      usalary: 32000,
      avatar: ""
    },
    {
      ufname: "kishor",
      ulname: "jagtap",
      uemail: "kishor104@gmail.com",
      umobile: 1234567890,
      usalary: 32000,
      avatar: ""
    },
    {
      ufname: "rahul",
      ulname: "jagtap",
      uemail: "kishor104@gmail.com",
      umobile: 1234567890,
      usalary: 32000,
      avatar: ""
    },

  ]
  datalength1 = this.Data1.length;

}
