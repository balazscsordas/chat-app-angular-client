import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { environment } from 'src/environments/environment';

interface IMessage {
  id: number;
  message: string;
  sender_id: number;
  receiver_id: number;
}

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor(private http: HttpClient, private socket: Socket) {}

  messages: IMessage[] = [];
  partnerFullName: string | null = null;

  getMessages(partner_id: number) {
    const params = { partner_id };
    this.http
      .get<IMessage[]>(`${environment.apiBaseURL}message`, { params })
      .subscribe((res) => {
        this.messages = res;
      });
  }

  sendMessage(partner_id: number, message: string | null, token: string) {
    this.socket.emit('send-message', { partner_id, message, token });
  }

  connectToReceiveMessages() {
    console.log('connected to receive messages');
    this.socket.on('received-message', (message: IMessage) => {
      console.log(message);
      this.messages.push(message);
    });
  }
}
