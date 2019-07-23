import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styleUrls: ['./confirmar.component.scss']
})
export class ConfirmarComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ConfirmarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  consulta = '';
  eliminar = false;
  ngOnInit() {
    if ( this.data === 'actualizarUsuario') {
      this.consulta = 'Desea actualizar usuario?';
    } else if ( this.data === 'actualizarContraseña') {
        this.consulta = 'Desea actualizar contraseña?';
    } else if ( this.data === 'eliminarPost') {
      this.consulta = 'Desea eliminar este post?';
    }
  }
  cancelar() {
    this.dialogRef.close();
  }
  confirmar() {
    this.eliminar = true;
  }
}
