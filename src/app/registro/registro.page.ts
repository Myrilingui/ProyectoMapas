import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  usuario = {
    nombreU: '',
    nombreC: '',
    correoElectronico: '',
    contrasena: '',
  };

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {}

  registrarUsuario() {
    const data = {
      nombreUsuario: this.usuario.nombreU,
      nombreCompleto: this.usuario.nombreC,
      correo: this.usuario.correoElectronico,
      contraseña: this.usuario.contrasena,
    };

    this.http.post('http://localhost:3000/registrar', data).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.error(error);
      }
    );
            this.router.navigate(['/inicio']);
  }

}


