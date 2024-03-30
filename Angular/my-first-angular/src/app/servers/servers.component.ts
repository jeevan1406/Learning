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

  constructor(){
    setTimeout(()=>{
      this.allowServer=true;
    },2000)
  }

  ngOnInit(): void {
    
  }

  onServerCreate(){
    this.serverCreationStatus='Server Created! Server Name is ' + this.serverName;
  }

  onServerNameUpdate(event: Event){
    this.serverName=(<HTMLInputElement>event.target).value;
  }
}
