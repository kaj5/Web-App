import { Component } from '@angular/core';
import { ApiGatewayService } from "./aws-api-gateway.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private apiGateWayService : ApiGatewayService) { }

  getMakeRequest(){
    this.apiGateWayService.apiGateWayMethod();
  }
}
