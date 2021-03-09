import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titolo',
  templateUrl: './titolo.component.html',
  styleUrls: ['./titolo.component.scss']
})
export class TitoloComponent implements OnInit {

  constructor(private dataService: AuthService, private routes: Router) { }

  dettaglioSoluzione: object[];
  titolo: string;
  descrizione: string;

  ngOnInit(): void {
    this.dataService.getSoluzioniDettaglio(sessionStorage.getItem('soluzione'))
    .subscribe((response: object[]) => {
      if (response['message'] === null) {
        this.dettaglioSoluzione = response;
      } else {
        alert('Session Expired');
        this.routes.navigate(['login']);
      }
    } );
    this.dataService.getSoluzioniDettaglio(sessionStorage.getItem('soluzione'))
    .subscribe((response: object[]) => {
      if (response['message'] === null) {
        this.titolo = response['testo'];
      } else {
        alert('Session Expired');
        this.routes.navigate(['login']);
      }
    });
    this.dataService.getSoluzioniDettaglio(sessionStorage.getItem('soluzione'))
    .subscribe((response: object[]) => {
      if (response['message'] === null) {
        this.descrizione = response['descrizione'];
      } else {
        alert('Session Expired');
        this.routes.navigate(['login']);
      }
    } );
  }

}
