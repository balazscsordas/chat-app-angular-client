import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

interface IMessage {
  id: number;
  message: string;
  sender_id: number;
  receiver_id: number;
}

@Component({
  selector: 'app-chat-block',
  templateUrl: './chat-block.component.html',
})
export class ChatBlockComponent implements OnInit {
  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  @ViewChild('scrollableSection') scrollableSection!: ElementRef;
  partner_id: number | null = null;
  messages: IMessage[] = [];
  messageForm = new FormGroup({
    messageInput: new FormControl<string | null>(null, Validators.required),
  });

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const newPartnerId = Number(params['partner_id']);
      if (newPartnerId !== this.partner_id) {
        this.partner_id = params['partner_id'];
        if (this.partner_id) {
          this.getMessages(this.partner_id);
        } else {
          this.messages = [];
        }
      }
    });
  }

  handleSubmit() {
    if (this.messageForm.valid && this.partner_id) {
      this.sendMessage(
        this.partner_id,
        this.messageForm.getRawValue().messageInput
      );
      this.messageForm.reset();
    }
  }

  private getMessages(partner_id: number) {
    const params = { partner_id };
    this.http
      .get<IMessage[]>(`${environment.apiBaseURL}message`, { params })
      .subscribe((res) => {
        this.messages = res;
      });
  }

  private sendMessage(partner_id: number, message: string | null) {
    this.scrollToBottom();
    this.http
      .post<IMessage>(`${environment.apiBaseURL}message/send`, {
        partner_id,
        message,
      })
      .subscribe((res) => this.messages.push(res));
  }

  private scrollToBottom() {
    const sectionElement = this.scrollableSection.nativeElement;
    sectionElement.scrollTop = sectionElement.scrollHeight;
  }
}
