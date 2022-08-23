import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username : string = "Felipe J.";

  userdata = {
    email: 'felipejunges@yahoo.com.br',
    role: 'admin'
  };

  title = 'teste';
}
