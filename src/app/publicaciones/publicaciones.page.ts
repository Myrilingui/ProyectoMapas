import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.page.html',
  styleUrls: ['./publicaciones.page.scss'],
})
export class PublicacionesPage implements OnInit {
  publicaciones: any[] = []; // Variable para almacenar las publicaciones

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.obtenerPublicaciones();
  }

  obtenerPublicaciones() {
    this.http.get('http://localhost:3000/obtenerPublicaciones').subscribe(
      (data: any) => {
        this.publicaciones = data; // Asignar los datos obtenidos a la variable
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
