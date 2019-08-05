import { Injectable } from '@angular/core';
import { StorageAppService } from '../storage-app.service';
import { LinkerService } from '../linker.service';
import { Observable } from 'rxjs';
import { HttpEvent } from '@angular/common/http';
import { GenericRequest } from '../../model/generic-model-request';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {
  constructor(
    private linkerService: LinkerService,
    private storage: StorageAppService
  ) {}

  pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    const formData = new FormData();
    formData.append('file', file);
    const genericRequest = new GenericRequest(
      Object.assign(`file`, {}),
      null,
      formData
    );
    return this.linkerService.postFile(genericRequest);
  }
}
