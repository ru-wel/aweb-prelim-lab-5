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
      pic: 'dean.png',
      fullname: 'Dr. Marlon I. Tayag',
      position: 'Dean',
      email: 'mtayag@hau.edu.ph',
      gender: 'Male',
      status: 'Employed',
      salary: 'PHP 100,000',
    },
    {
      pic: 'caro.png',
      fullname: 'Asst. Prof. Carisma A. Caro',
      position: 'IT Program Chair',
      email: 'ccarisma@hau.edu.ph',
      gender: 'Female',
      status: 'Employed',
      salary: 'PHP 80,000',
    },
    {
      pic: 'salenga.png',
      fullname: 'Ma. Louella M. Salenga',
      position: 'CS Program Chair',
      email: 'mlsalenga@hau.edu.ph',
      gender: 'Female',
      status: 'Employed',
      salary: 'PHP 60,000',
    },
    {
      pic: 'mendez.png',
      fullname: 'Asst. Prof. Jeanky S. Mendez',
      position: 'EMC Program Chair',
      email: 'jmendez@hau.edu.ph',
      gender: 'Female',
      status: 'Employed',
      salary: 'PHP 60,000',
    },
    {
      pic: 'esquivel.png',
      fullname: 'Dr. Joseph A. Esquivel',
      position: 'Cisco Coordinator / Cisco ASC Contact',
      email: 'jesquivel@hau.edu.ph',
      gender: 'Male',
      status: 'Employed',
      salary: 'PHP 80,000',
    },
    {
      pic: 'chua.png',
      fullname: 'Dr. Everly Chua',
      position: 'Graduate School of IT Program Coordinator',
      email: 'echua@hau.edu.ph',
      gender: 'Female',
      status: 'Employed',
      salary: 'PHP 60,000',
    },  
    {
      pic: 'almocera.png',
      fullname: 'Mr. Chris Almocera',
      position: 'Practicum Coordinator',
      email: 'calmocera@hau.edu.ph',
      gender: 'Male',
      status: 'Employed',
      salary: 'PHP 50,000',
    },
    {
      pic: 'monsale.png',
      fullname: 'Mr. Ulysses Raymond F. Monsale',
      position: 'Professor',
      email: 'urmonsale@hau.edu.ph',
      gender: 'Male',
      status: 'Employed',
      salary: 'PHP 50,000',
    },
    {
      pic: 'rivera.png',
      fullname: 'Dr. Raquel B. Rivera',
      position: 'Professor',
      email: 'rbrivera@hau.edu.ph',
      gender: 'Female',
      status: 'Employed',
      salary: 'PHP 50,000',
    },
  ];
  isShown = false;
  showdetails(){
    this.isShown = !this.isShown;
  }
}
