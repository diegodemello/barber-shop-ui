import { Component, Inject, OnDestroy } from '@angular/core';
import { SERVICES_TOKEN } from '../../services/service.token';
import { IClientService } from '../../services/api-client/clients/iclients.service';
import { ClientsService } from '../../services/api-client/clients/clients.service';
import { ClientModelForm } from '../client.models';
import { ClientFormComponent } from "../components/client-form/client-form.component";
import { Subscription } from 'rxjs';
import { SnackbarManagerService } from '../../services/snackbar-manager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-client',
  imports: [ClientFormComponent],
  templateUrl: './new-client.component.html',
  styleUrl: './new-client.component.css',
  providers: [
    { provide: SERVICES_TOKEN.HTTP.CLIENT, useClass: ClientsService },
    { provide: SERVICES_TOKEN.SNACKBAR, useClass: SnackbarManagerService}
  ]
})
export class NewClientComponent implements OnDestroy{

  private httpSubscription?: Subscription;

  constructor(
    @Inject(SERVICES_TOKEN.HTTP.CLIENT) private readonly httpService: IClientService,
    @Inject(SERVICES_TOKEN.SNACKBAR) private readonly snackBarManager: SnackbarManagerService,
    private readonly router: Router
  ){

    }

  ngOnDestroy(): void {
    if(this.httpService){
      this.httpSubscription?.unsubscribe();
    }
  }

  onSubmitClient(value: ClientModelForm){
    const {id, ...request} = value;
    this.httpService.save(request).subscribe(_ => {
      this.snackBarManager.show('Usuário cadastrado com sucesso.');
      this.router.navigate(['clients/list'])
    })
  }
}
