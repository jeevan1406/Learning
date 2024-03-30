import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent implements OnInit {
  allowServer=false;
  serverCreationStatus='No server Created!'

  constructor(){
    setTimeout(()=>{
      this.allowServer=true;
    },2000)
  }

  ngOnInit(): void {
    
  }

  onServerCreate(){
    this.serverCreationStatus='Server Created!'
  }
}
