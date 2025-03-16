import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ClientModelForm } from '../../client.models';
import { FormsModule, NgForm } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-client-form',
  imports: [
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  templateUrl: './client-form.component.html',
  styleUrl: './client-form.component.css'
})
export class ClientFormComponent {
  @Input() client: ClientModelForm = { id: 0, name: '', email: '', phone: ''}

  @Output() clientSubmited = new EventEmitter<ClientModelForm>();
invalid: any;

  onSubmit(_: NgForm){
    this.clientSubmited.emit(this.client);
  }
}
