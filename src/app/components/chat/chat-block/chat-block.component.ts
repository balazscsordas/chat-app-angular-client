import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Socket } from 'ngx-socket-io';
import { AuthService } from 'src/app/services/auth/auth.service';
import { MessageService } from 'src/app/services/message/message.service';

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
  constructor(
    private route: ActivatedRoute,
    public messageService: MessageService,
    private auth: AuthService
  ) {}

  @ViewChild('scrollableSection') scrollableSection!: ElementRef;
  partner_id: number | null = null;
  messageForm = new FormGroup({
    messageInput: new FormControl<string | null>(null, Validators.required),
  });

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const newPartnerId = Number(params['partner_id']);
      if (newPartnerId !== this.partner_id) {
        this.partner_id = newPartnerId;
        if (this.partner_id) {
          this.messageService.getMessages(this.partner_id);
        } else {
          this.messageService.messages = [];
        }
      }
    });

    this.messageService.connectToReceiveMessages();
  }

  handleSubmit() {
    if (this.messageForm.valid && this.partner_id && this.auth.userToken) {
      this.messageService.sendMessage(
        this.partner_id,
        this.messageForm.getRawValue().messageInput,
        this.auth.userToken
      );
      this.messageForm.reset();
      this.scrollToBottom();
    }
  }

  private scrollToBottom() {
    const sectionElement = this.scrollableSection.nativeElement;
    sectionElement.scrollTop = sectionElement.scrollHeight;
    console.log('scrolled');
  }
}
