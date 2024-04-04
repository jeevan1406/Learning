import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-pratice2';
  log=[];

  showSecret=false;

  onToggleDetails(){
    this.showSecret=!this.showSecret;
    //this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }


}
