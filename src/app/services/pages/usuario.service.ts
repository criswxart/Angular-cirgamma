import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Usuario} from '../../pages/usuario/Usuario';
import {map, catchError} from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Injectable()

export class UsuarioService {

  private urlEndPoint = "http://localhost:8080/api/usuario";
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient, private router: Router){

  }
  getUsuarios(): Observable<Usuario[]>{
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as Usuario[])
    );
  }
  createUsuario(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(this.urlEndPoint, usuario, {headers:this.httpHeaders}).pipe(
      map((response: any) => response.usuario as Usuario),
      catchError( e => {
        Swal.fire('Error al crear el usuario', e.error.mensaje, 'error');
        return throwError(e);
      })
    );

  }
  viewUsuario(id): Observable<Usuario>{
    return this.http.get<Usuario>(`${this.urlEndPoint}/${id}`).pipe(
      catchError( e => {
        this.router.navigate(['/usuarios']);
        Swal.fire('Error al editar', e.error.mensaje, 'error');
        return throwError(e);
      
      })
    )
  }

  //HTTP PUT se usa para actualizar atos en el servidor RES. A diferencia de POST que es para crear

  update(usuario: Usuario):Observable<Usuario>{
    return this.http.put<Usuario>(`${this.urlEndPoint}/${usuario.id}`, usuario, {headers:this.httpHeaders}).pipe(
      map((response: any) => response.usuario as Usuario),
      catchError( e => {
        Swal.fire('Error al editar el usuario', e.error.mensaje, 'error');
        return throwError(e);
      })
    );

  }
  delete(id: number): Observable<Usuario>{
    return this.http.delete<Usuario>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders}).pipe(
      map((response: any) => response.usuario as Usuario),
      catchError( e => {
        Swal.fire('Error al eliminar el usuario', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }
}