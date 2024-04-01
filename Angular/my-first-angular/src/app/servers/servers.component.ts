import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent implements OnInit {
  allowServer=false;
  serverCreationStatus='No server Created!'
  serverName='Jeeva';
  serverCreated=false;
  servers=['TestServer','TestServer 2']

  constructor(){
    setTimeout(()=>{
      this.allowServer=true;
    },2000)
  }

  ngOnInit(): void {
    
  }

  onServerCreate(){
    this.serverCreated=true;
    this.servers.push(this.serverName);
    this.serverCreationStatus='Server was created! server name is' + this.serverName;

  }

  onServerNameUpdate(event: Event){
    this.serverName=(<HTMLInputElement>event.target).value;
  }
}
