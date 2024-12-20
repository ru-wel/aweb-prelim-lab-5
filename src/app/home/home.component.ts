import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Partners {
  logo: string;
  fullname: string;
  abbrv: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  partners: Partners[] = [
    {
      logo: 'PAASCU.svg.png',
      fullname: 'PHILIPPINE ACCREDITING ASSOCIATION OF SCHOOLS, COLLEGES AND UNIVERSITIES',
      abbrv: '(PAASCU)'
    },
    {
      logo: 'ACPI.png',
      fullname: 'Animation Council of the Philippines',
      abbrv: '(ACPI)'
    },
    {
      logo: 'CSP.png',
      fullname: 'Computing Society of the Philippines',
      abbrv: '(CSP)'
    },
    {
      logo: 'MICT.jpeg',
      fullname: 'Metro Clark ICT Council',
      abbrv: '(MCICTC)'
    },
    {
      logo: 'PSITE.png',
      fullname: 'Philippine Society of Information Technology Educators',
      abbrv: '(PSITE)'
    },
    {
      logo: 'ACED.PH.jpeg',
      fullname: 'Association of Computing Education Deans and Program Heads',
      abbrv: '(ACED.PH)'
    },
    {
      logo: 'CNA.png',
      fullname: 'Cisco Networking Academy',
      abbrv: '(CNA)'
    },
    {
      logo: 'AWS.jpg',
      fullname: 'Amazon Web Services',
      abbrv: '(AWS)'
    },
  ];
}
