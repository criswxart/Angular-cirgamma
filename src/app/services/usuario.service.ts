import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Usuario} from '../pages/usuario/Usuario';
import {map} from 'rxjs/operators';

@Injectable()

export class UsuarioService {

  private urlEndPoint = "http://localhost:8080/api/usuario";
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient){

  }
  getUsuarios(): Observable<Usuario[]>{
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as Usuario[])
    );
  }
  createUsuario(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(this.urlEndPoint, usuario, {headers:this.httpHeaders})

  }
  viewUsuario(id): Observable<Usuario>{
    return this.http.get<Usuario>(`${this.urlEndPoint}/${id}`)
  }

  //HTTP PUT se usa para actualizar atos en el servidor RES. A diferencia de POST que es para crear

  update(usuario: Usuario):Observable<Usuario>{
    return this.http.put<Usuario>(`${this.urlEndPoint}/${usuario.id}`, usuario, {headers:this.httpHeaders})

  }
  delete(id: number): Observable<Usuario>{
    return this.http.delete<Usuario>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders})
  }
}