import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.page.html',
  styleUrls: ['./newpost.page.scss'],
})
export class NewpostPage implements OnInit {
  publicacion = {
    tituloP: '',
    subtituloP: '',
    descripcionP: '',
    fechaP: '',
    //imagen: null,
  };

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {}

  publicar() {
    const data = {
    titulopublicacion: this.publicacion.tituloP,
    subtitulopublicacion: this.publicacion.subtituloP,
    descripcionpublicacion: this.publicacion.descripcionP,
    fechapublicacion: this.publicacion.fechaP,
    //formData.append('imagen', this.publicacion.imagen)
    }

    this.http.post('http://localhost:3000/publicar', data).subscribe(
      (response) => {

        console.log(response);
        // Redirigir a la página deseada después de publicar
        this.router.navigate(['/publicaciones']);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  //handleFileInput(files: FileList) {
    // Manejar la selección de archivos
    //this.publicacion.imagen = files.item(0);
  //}
}
