import { Component, OnInit } from '@angular/core';
import {Usuario} from './Usuario';
import {UsuarioService} from '../../services/usuario.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {

  usuarios: Usuario[];

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuarioService.getUsuarios().subscribe(
       usuarios => this.usuarios = usuarios
    );
  }

  delete(usuario: Usuario): void{
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false,
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Estás seguro?',
      text: `¿Seguro que desea eliminar al usuario ${usuario.nombre} ${usuario.apellidos}?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.usuarioService.delete(usuario.id).subscribe(
          response => {
            //metodo filter() permite filtrar solo los elementos que deseamos y devolvernos en un nuevo arrary
            this.usuarios = this.usuarios.filter(user => user != usuario)
            swalWithBootstrapButtons.fire(
              'Usuario eliminado!',
              `Usuario ${usuario.nombre} eliminado con éxito.`,
              'success'
            )

          }
        )
      
      }
    })
  }
}
