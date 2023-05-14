import { Component } from '@angular/core';

@Component({
  selector: '.app-servers',
  templateUrl:'./servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

  allowNewServer = false;
  serverCreateStatus = 'No server created!';
  serverName = 'InitServer';
  userName = '';

  constructor(){
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onServerCreation(){
    this.serverCreateStatus = "Server created ! Name is " + this.serverName;
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
