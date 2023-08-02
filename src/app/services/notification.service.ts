import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { HubConnectionBuilder } from '@microsoft/signalr/dist/esm/HubConnectionBuilder';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private connection: signalR.HubConnection;
  public notificationSubject: BehaviorSubject<boolean>;


  constructor(){
    this.notificationSubject = new BehaviorSubject(false);
  }
   
  initWebSocket() {
    this.connection = new HubConnectionBuilder()
    .configureLogging(signalR.LogLevel.Information)
    .withUrl('http://localhost:7081/hub/notifications')
    .build();


    this.connection.on('message_received', (body: any) => {
      //This code will be executed upon receiving a message with the name 'message_received' from the server.
      console.log(body);
      this.notificationSubject.next(true);
    });


    this.connection.start().then( () => {
      // Here we can configure what to do upon starting the connection
      }
    );
  }

  sendMessage(methodName: string, parameters?: any[]){
    this.connection.send(methodName, parameters);
  }
}
