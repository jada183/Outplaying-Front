import { Injectable, Inject } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
@Injectable({
  providedIn: 'root'
})
export class StorageAppService {
  constructor(@Inject(LOCAL_STORAGE) private storageService: StorageService) {}

  guardarValor(nombre: string, valor: any) {
    this.storageService.set(nombre, valor);
  }

  obtenerValor(nombre: string): any {
    return this.storageService.get(nombre);
  }

  eliminarValor(nombre: string): void {
    this.storageService.remove(nombre);
  }

}
