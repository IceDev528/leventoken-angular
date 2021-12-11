import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import * as io from "socket.io-client";
import { CustomApiService } from 'src/app/@core/@services/api.service';
import { CHATLIST_GET, CHATMSG_GET, USERPROFILE_GET, ALLUSERLIST_GET, CLEAR_CHAT, BLOCK_CHAT, DELETE_CHAT } from 'src/app/@core/@utills/api-constant';
import { InboxRequest, ChatRequest, getProfileRequest, allUserListRequest, delChatRequest } from './inbox.model';
import { CommonService } from 'src/app/@core/@services/common.service';
import { SOCKET_BASE_URL } from 'src/app/@core/@utills/constant';

@Injectable({
  providedIn: "root",
})
export class ChatService {
  socket;
  constructor(private cs: CommonService, private apiService: CustomApiService) {

    this.socket = io(SOCKET_BASE_URL, {
      forceNew: false,
    });

  }

  delAllChat(request: delChatRequest) {
    return this.apiService.httpRequest(CLEAR_CHAT, request);
  }

  clearChat(request) {
    return this.apiService.httpRequest(CLEAR_CHAT, request);
  }

  deleteChat(request) {
    return this.apiService.httpRequest(DELETE_CHAT, request);
  }

  blockChat(request) {
    return this.apiService.httpRequest(BLOCK_CHAT, request);
  }

  getChat(request: InboxRequest) {
    return this.apiService.httpRequest(CHATLIST_GET, request);
  }

  getUserProfile(request: getProfileRequest) {
    return this.apiService.httpRequest(USERPROFILE_GET, request);
  }

  getChatMsg(request: ChatRequest) {
    return this.apiService.httpRequest(CHATMSG_GET, request);
  }

  getListMsg(request: allUserListRequest) {
    return this.apiService.httpRequest(ALLUSERLIST_GET, request);
  }

  getMessages = () => {
    return Observable.create((observer) => {
      this.socket.on("message_received", function (msg) {
        console.log(msg)
        observer.next(msg);
      });
    });
  };

  sendMessage(msg) {
    this.socket.emit("message_sent", msg);
  }

  isOnline(msg) {
    this.socket.emit("init", msg);
  }

  isOffline(msg) {
    this.socket.emit("disconnect", msg);
  }

  isRead(data) {
    this.socket.emit("readMessage", data);
  }


  checkIsRead() {
    return Observable.create((observer) => {
      this.socket.on("readMessage", (data) => {
        observer.next(data);
      });
    });
  }

  deleteMessage(data) {
    this.socket.emit("deleteMessage", data);
  }


}