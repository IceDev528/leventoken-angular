import {
  Component,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute
} from '@angular/router';
import {
  Subscription,
  Subject
} from 'rxjs';
import {
  CustomAuthService
} from 'src/app/@auth/auth-module.service';
import {
  CustomApiService
} from 'src/app/@core/@services/api.service';
import {
  CommonService
} from 'src/app/@core/@services/common.service';
import {
  CustomToastService
} from 'src/app/@core/@services/toast.service';
import {
  FETCH_CHAT_GET,
  PROFILE_GET
} from 'src/app/@core/@utills/api-constant';
import {
  ProfileService
} from '../profile/profile.service';
import {
  ChatRequest,
  InboxRequest,
  getProfileRequest,
  delChatRequest
} from './inbox.model';
import {
  ChatService
} from './inbox.service';
import {
  debounceTime,
  distinctUntilChanged
} from 'rxjs/operators';
import {
  MEDIA_URL
} from 'src/app/@core/@utills/constant';
import {
  NgbDropdownConfig
} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss'],
  providers: [NgbDropdownConfig]
})

export class InboxComponent implements OnInit {
  newMessage: string;
  currentMsg: string;
  showMessage = false;
  currentChat: any = [];

  imgUrl = MEDIA_URL;

  status = true;
  pageId = 1;
  page: number = 1;
  messageList: string[] = [];
  subscriptions: Subscription[] = [];
  chats: any = [];
  count: any;
  page_id;
  result: any;
  bookingId: any;
  keywordSearch: any = []
  chat_id: any;
  searchUpdate = new Subject < string > ();
  isToggle = false;
  user: any;
  token: string;
  user_to: any;
  chatItem: any;
  user_from: any;
  current_user = {
    profile: null,
    name: null,
    image: null,
    location: null,
    review: null,
    service: null,
    is_online: 0,
    status: 0,
    user_from: null,
    user_to: null,
    id: null,
    email: null,
    avg_rating: null,
    phone: null,
    is_blocked: null
  };
  profile: any;
  id: any;
  search: "";
  profiles: any = [];
  to_id;
  allUser: any = [];
  value: string;
  userQuestionUpdate = new Subject < string > ();
  keywordArray = [];
  keyword: any = '';
  deleteAll: any;
  currentChatRes: any;
  constructor(
    private profileService: ProfileService,
    private chatService: ChatService,
    config: NgbDropdownConfig,
    private toastService: CustomToastService,
    private route: ActivatedRoute,
    private cs: CommonService,
    private customAuthService: CustomAuthService,
    private apiService: CustomApiService) {
    this.route.paramMap
      .subscribe((res: any) => {
        config.placement = 'top-right';
        config.autoClose = true;
        if (res.params.id) {
          this.to_id = res.params.id;
        }
        this.user = this.cs.getJsonCookie("user");
        this.token = this.cs.getCookie("bearer");
      })

    let subs = this.searchUpdate
      .pipe(debounceTime(400), distinctUntilChanged())
      .subscribe((value) => {
        this.getAllChats(value);
      });

    this.subscriptions.push(subs);
    let users = this.userQuestionUpdate.pipe(
        debounceTime(400),
        distinctUntilChanged())
      .subscribe(value => {
        this.getAllUser(value);


      });
    this.subscriptions.push(users);
  }

  ngOnInit(): void {
    this.chatService.isOnline({
      status: 1,
      user_from: this.user.id,
      token: this.token,
    });
    if (this.to_id) {
      this.getUserProfile(this.to_id)
    }

    this.getAllChats();
    this.getAllUser();
    this.getMsg();
  }

  setvalue(item, id) {
    this.allUser = [];
    this.current_user = item;
    this.keywordSearch = item.first_name + " " + item.last_name;
    this.isToggle = true;
    this.current_user.user_to = this.current_user.id
    this.current_user.user_from = this.user.id
    this.displayMsgs(0, this.current_user)
  }
  toggle() {
    this.isToggle = false
  }
  addKeyword() {
    let deleteKeyword = this.keywordSearch;
    this.keywordArray.push(deleteKeyword);
    this.keywordSearch = null;

    console.log(deleteKeyword)
  }

  removeKeyword(id) {
    this.keywordArray.splice(id, 1);
  }
  getAllUser(keywordSearch ? ) {
    this.keyword = keywordSearch || "";
    const request: InboxRequest = {
      keyword: keywordSearch
    }

    if (this.keyword && this.keyword.trim() != '')
      request.keyword = keywordSearch;

    const getChat = this.chatService.getListMsg(request).subscribe(
      (res) => {
        this.allUser = res;
        this.value = "Select a Service to Continue";

      },
      (err) => {
        if (err.error) {
          this.toastService.showError(err.error.error_description, 'Error');
        }
      }
    );
    this.subscriptions.push(getChat);
  }
  getAllChats(keyword ? ) {
    const request: InboxRequest = {
      limit: 10,
      page: this.page,
    }

    if (keyword && keyword.trim() != '')
      request.keyword = keyword;

    const getChat = this.chatService.getChat(request).subscribe(
      (res) => {
        this.chats = res;
        this.count = res.count;

        // this.displayMsgs(0, this.chats[0])
      },
      (err) => {
        if (err.error) {
          this.toastService.showError(err.error.error_description, 'Error');
        }
      }
    );
    this.subscriptions.push(getChat);
  }

  clearAllChat(userId: any) {
    const request = {
      id: userId,
    }

    const delChat = this.chatService.clearChat(request).subscribe(

      (res) => {
        this.currentChat = [];

      },
      (err) => {
        if (err.error) {
          this.toastService.showError(err.error.error_description, 'Error');
        }
      }
    );
    this.subscriptions.push(delChat);

  }

  deleteChat(msgId: any, val) {
    const request = {
      id: msgId,
      deleted_for_me: val
    }

    const delChat = this.chatService.deleteChat(request).subscribe(

      (res) => {
        this.currentChat = this.currentChat.filter((item) => {
          if (item.id == msgId) {
            return;
          } else
            return item;
        })
      },
      (err) => {
        if (err.error) {
          this.toastService.showError(err.error.error_description, 'Error');
        }
      }
    );
    this.subscriptions.push(delChat);

  }
  index(index: any, arg1: number) {
    throw new Error("Method not implemented.");
  }
  onlineStatus(val) {
    this.chatService.isOnline({
      status: val,
      user_from: this.user.id,

      token: this.token,
    });
  }
  blockChat() {
    const request = {
      id: this.user.id == this.chatItem.user_to ? this.chatItem.user_from : this.chatItem.user_to,
    }

    const delChat = this.chatService.blockChat(request).subscribe(

      (res) => {
        this.fetchChatMsgs(this.user.id);
      },
      (err) => {
        this.toastService.showError(err.error.message, 'Error');
        if (err.status === 0) {
          this.toastService.showWentWrong();
        } else if (err.status === 400) {
          this.toastService.showError(err.error.message, 'Error');
        } else {
          this.toastService.showWentWrong(err.error.message);
        }
      }
    );
    this.subscriptions.push(delChat);

  }
  setCurrentUser(chat) {
    this.current_user.email =
      parseInt(chat.from_me) == 1 ?
      chat.to_user_email :
      chat.from_user_email;
    this.current_user.location =
      parseInt(chat.from_me) == 1 ?
      chat.to_user_address :
      chat.from_user_address;
    this.current_user.phone =
      parseInt(chat.from_me) == 1 ?
      chat.to_user_phone_no :
      chat.from_user_phone_no;
    this.current_user.service = chat.pro_service_name;
    this.current_user.image =
      parseInt(chat.from_me) == 1 ?
      chat.to_user_profile_image :
      chat.from_user_profile_image;
    this.current_user.id =
      parseInt(chat.from_me) == 1 ? chat.to_user_id : chat.from_user_id;
    this.current_user.name =
      parseInt(chat.from_me) == 1 ?
      (chat.to_user_first_name || "") +
      " " +
      (chat.to_user_last_name || "") :
      (chat.from_user_first_name || "") +
      " " +
      (chat.from_user_last_name || "");
  }



  onKeyDown(e) {
    var key = e.which;
    if (key === 13) {
      this.sendMsg()
      e.preventDefault();
      return false;
    }
  }


  sendMsg() {
    let send;
    this.newMessage = this.newMessage.trim();
    if (this.newMessage) {
      send = {
        token: this.token,
        user_to: this.user.id == this.chatItem.user_to ? this.chatItem.user_from : this.chatItem.user_to,
        user_from: this.user.id,
        media: "null",
        message: this.newMessage,

      };

      let msg = {
        message: send.message,
        user_to: this.user.id == this.chatItem.user_to ? this.chatItem.user_from : this.chatItem.user_to,
        user_from: this.user.id,
        created_at: new Date(),
        from_me: send.user_from == this.user.id ? 1 : 0,
      };
      if (send.user_to) {

        this.currentChat.push(msg);
        this.chatService.sendMessage(send);
        this.getAllChats();
        send = null;
        this.newMessage = "";
      }
    }
  }
  randomString(length) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * charactersLength)
      );
    }
    return result;
  }

  getMsg() {
    let getSub = this.chatService.getMessages().subscribe((res) => {
      let msg = {
        token: this.token,
        to_user_id: res.to_user_id,
        local_identifier: res.local_identifier,
      };
      if (msg.to_user_id == this.user.id) {
        this.chatService.isRead(msg);
      }
      let currentMsg = {
        message: res.message,
        local_identifier: res.local_identifier,
        to_user_id: res.to_user_id,
        from_user_id: res.from_user_id,
        created_at: res.date,
        from_me: res.from_user_id == this.user.id ? 1 : 0,
      };
      if (this.currentChat.length > 0) {
        this.currentChat.push(currentMsg);
        this.scrollDown();
      }
      this.scrollDown();
    });
    this.subscriptions.push(getSub);
  }
  scrollDown() {
    if (this.cs.isBrowser()) {
      var objDiv = document.getElementById("bubbles");
      setTimeout(() => {
        objDiv.scrollTop = objDiv.scrollHeight;
      }, 50);
    }
  }




  getChatMsg() {
    const fetchChat = this.apiService.httpRequest(FETCH_CHAT_GET, {}).subscribe(
      (res) => {
        this.result = res;
      },
      (err) => {
        if (err.error) {
          this.toastService.showError(err.error.error_description, 'Error');
        }
      }
    );
    this.subscriptions.push(fetchChat);
  }

  displayMsgs(index, chatItem) {
    let i = index
    this.chatItem = chatItem;
    this.status = !this.status;
    this.isToggle = true;
    this.user_to = this.user.id == this.chatItem.user_to ? this.chatItem.user_from : this.chatItem.user_to;
    console.log(this.chats[index])

    this.getUserProfile(this.user_to);
    this.chat_id = chatItem.id;
    this.user_from = this.user.id;
    this.to_id =
      parseInt(chatItem.from_me) == 1 ? chatItem.to_user_id : chatItem.from_user_id;
    this.fetchChatMsgs(this.user_to);
  }
  ngOnDestroy() {
    this.chatService.isOnline({
      status: 0,
      user_from: this.user.id,

      token: this.token,
    });
    this.subscriptions.forEach((x) => x.unsubscribe());
  }

  fetchChatMsgs(userId ? ) {
    new Promise < any > ((resolve) => {
      const request: ChatRequest = {
        // userId
        user_with: this.user.id == this.chatItem.user_to ? this.chatItem.user_from : this.chatItem.user_to,
        limit: 10,
        page_id: this.pageId,
      }
      const fetchchat = this.chatService.getChatMsg(request).subscribe(

        (res) => {

          this.currentChat = res.message;
          this.currentChatRes = res
          this.showMessage = true;

        },
        (err) => {
          this.toastService.showError(err.error.message, 'Error');
          console.log(err);
          if (err.status === 0) {
            this.toastService.showWentWrong();
          } else if (err.status === 400) {
            this.toastService.showError(err.error.message, 'Error');
          } else {
            this.toastService.showWentWrong(err.error.message);
          }
        }
      );
      this.subscriptions.push(fetchchat);
    });
  }
  getUserProfile(userId: any) {
    const request: getProfileRequest = {
      id: userId
    }
    const getProfile = this.chatService.getUserProfile(request).subscribe(

      (res) => {
        this.current_user = res
        this.current_user.id = res.id;
        this.current_user.name =
          (res.first_name || "") + " " + (res.last_name || "");
        this.current_user.image = res.profile_image;

        this.current_user.email = res.email;
        this.current_user.is_online = res.status;
        this.current_user.location = res.address;
        this.current_user.phone = res.phone_number;

      },
      (err) => {
        if (err.error) {
          this.toastService.showError(err.error.error_description, 'Error');
        }
      }
    );
    this.subscriptions.push(getProfile);
  }

}
