import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Employees {
  pic: string;
  fullname: string;
  position: string;
  email: string;
  gender: string;
  status: string;
  salary: string;
}

@Component({
  selector: 'app-emplist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './emplist.component.html',
  styleUrl: './emplist.component.css'
})

export class EmplistComponent {
  employees: Employees[] = [
    {
      pic: 'dean.jpg',
      fullname: 'Dr. Marlon I. Tayag',
      position: 'Dean',
      email: 'mtayag@hau.edu.ph',
      gender: 'Male',
      status: 'Employed',
      salary: 'PHP ',
    },
    {
      pic: 'caro.png',
      fullname: 'Asst. Prof. Carisma A. Caro',
      position: 'IT Program Chair',
      email: 'ccarisma@hau.edu.ph',
      gender: 'Female',
      status: 'Employed',
      salary: 'PHP ',
    },
    {
      pic: 'salenga.jpg',
      fullname: 'Ma. Louella M. Salenga',
      position: 'CS Program Chair',
      email: 'mlsalenga@hau.edu.ph',
      gender: 'Female',
      status: 'Employed',
      salary: 'PHP ',
    },
    {
      pic: 'mendez.jpg',
      fullname: 'Asst. Prof. Jeanky S. Mendez',
      position: 'EMC Program Chair',
      email: 'jmendez@hau.edu.ph',
      gender: 'Female',
      status: 'Employed',
      salary: 'PHP ',
    },
    {
      pic: 'esquivel.jpg',
      fullname: 'Dr. Joseph A. Esquivel',
      position: 'Cisco Coordinator / Cisco ASC Contact',
      email: 'jesquivel@hau.edu.ph',
      gender: 'Male',
      status: 'Employed',
      salary: 'PHP ',
    },
    {
      pic: 'chua.jpg',
      fullname: 'Dr. Everly Chua',
      position: 'Graduate School of IT Program Coordinator',
      email: 'echua@hau.edu.ph',
      gender: 'Female',
      status: 'Employed',
      salary: 'PHP ',
    },  
    {
      pic: 'almocera.jpg',
      fullname: 'Mr. Chris Almocera',
      position: 'Practicum Coordinator',
      email: 'calmocera@hau.edu.ph',
      gender: 'Male',
      status: 'Employed',
      salary: 'PHP ',
    },
    {
      pic: 'monsale.jpg',
      fullname: 'Mr. Ulysses Raymond F. Monsale',
      position: 'Professor',
      email: 'urmonsale@hau.edu.ph',
      gender: 'Male',
      status: 'Employed',
      salary: 'PHP ',
    },
    {
      pic: 'rivera.png',
      fullname: 'Dr. Raquel B. Rivera',
      position: 'Professor',
      email: 'rbrivera@hau.edu.ph',
      gender: 'Female',
      status: 'Employed',
      salary: 'PHP ',
    },
  ];
  isShown = false;
  showdetails(){
    this.isShown = !this.isShown;
  }
}
