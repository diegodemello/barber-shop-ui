import { Injectable } from '@angular/core';
import { ISnackBarManagerService } from './isnackbar-manager.service';
import { MatSnackBar } from '@angular/material/snack-bar'

@Injectable({
  providedIn: 'root'
})
export class SnackbarManagerService implements ISnackBarManagerService{

  constructor(private readonly snackBar: MatSnackBar) { }
  show(message: string, action: string = 'fechar', duration?: 3000): void {
    this.snackBar.open(message, action, {duration, verticalPosition: 'top', horizontalPosition: 'right'})
  }
}
