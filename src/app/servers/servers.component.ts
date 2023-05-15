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
  serverCreated = false;
  servers = ['Server 1', 'Server 2'];
  showSecret = false;
  arrClicks = [];

  constructor(){
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onServerCreation(){
    this.servers.push(this.serverName);
    this.serverCreated = true;
    this.serverCreateStatus = "Server created ! Name is " + this.serverName;
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  toggleDisplay(){
    this.showSecret = !this.showSecret;
    this.arrClicks.push(new Date());
  }
}
