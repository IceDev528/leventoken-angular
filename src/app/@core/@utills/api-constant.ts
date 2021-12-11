import { API_TYPE } from './api-type';
export const LOGIN = {
    method: API_TYPE.POST,
    endpoint: 'User/login',
    isFake: false,
    fakeResponsePath: 'assets/json/login'
};
export const SIGNUP = {
    method: API_TYPE.POST,
    endpoint: 'User/signup',
    isFake: false,
    fakeResponsePath: 'assets/json/login'
};

// profile

export const PERSONAL_INFO_PROFILE_PUT = {
  method: API_TYPE.PUT,
  endpoint: 'User/edit_profile',
  isFake: false,
  fakeResponsePath: 'assets/json/login'
};

export const PROFILE_GET = {
  method: API_TYPE.GET,
  endpoint: 'User/view_my_profile',
  isFake: false,
  fakeResponsePath: 'assets/json/login'
};
export const CHANGE_PASSWORD_PUT = {
  method: API_TYPE.PUT,
  endpoint: 'User/change_password',
  isFake: false,
  fakeResponsePath: 'assets/json/login'
};

export const VERIFY_OTP = {
  method: API_TYPE.POST,
  endpoint: 'User/verify_otp',
  isFake: false,
  fakeResponsePath: 'assets/json/login'
};
export const EMAIL_VERIFICATION_OTP = {
  method: API_TYPE.POST,
  endpoint: 'User/resend_otp',
  isFake: false,
  fakeResponsePath: 'assets/json/login'
};
export const EMAIL_VERIFICATION = {
  method: API_TYPE.POST,
  endpoint: 'User/email_verification',
  isFake: false,
  fakeResponsePath: 'assets/json/login'
};
export const CONTACT_US = {
  method: API_TYPE.POST,
  endpoint: 'User/contact_us',
  isFake: false,
  fakeResponsePath: 'assets/json/login'
};
export const SHARE_REFREL_BY_EMAIL = {
  method: API_TYPE.POST,
  endpoint: 'User/share_referral',
  isFake: false,
  fakeResponsePath: 'assets/json/login'
};
export const GET_CITY = {
  method: API_TYPE.GET,
  endpoint: 'User/list_cities',
  isFake: false,
  fakeResponsePath: 'assets/json/login'
};


// export const CONTACTUS = {
//     method: API_TYPE.POST,
//     endpoint: 'contact-us',
//     isFake: false,
//     fakeResponsePath: 'assets/json/login'
// };

// export const PERSONALINFO = {
//     method: API_TYPE.PUT,
//     endpoint: 'profile',
//     isFake: false,
//     fakeResponsePath: 'assets/json/login'
// };

export const FORGOT_PASSWORD = {
    method: API_TYPE.PUT,
    endpoint: 'User/forgot_password',
    isFake: false,
    fakeResponsePath: 'assets/json/login'
};
export const CHANGE_PASSWORD = {
    method: API_TYPE.POST,
    endpoint: 'User/set_new_password',
    fake: true,
    fakeResponsePath: 'assets/json/login'
};
export const GET_TOTAL_REFFERALS = {
  method: API_TYPE.GET,
  endpoint: 'User/my_total_refferals',
  fake: true,
  fakeResponsePath: 'assets/json/login'
};
// export const VERIFY_EMAIL = {
//     method: API_TYPE.POST,
//     endpoint: 'verify/email',
//     isFake: false,
//     fakeResponsePath: 'assets/json/login'
// };

// export const VERIFY_PHONE = {
//     method: API_TYPE.POST,
//     endpoint: 'verify/phone',
//     isFake: false,
//     fakeResponsePath: 'assets/json/login'
// };

// export const RESET_NOTIFICATION = {
//     method: API_TYPE.POST,
//     endpoint: 'reset/notifications',
//     isFake: false,
//     fakeResponsePath: 'assets/json/login'
// };

// export const RESEND_VERIFY_PHONE = {
//     method: API_TYPE.POST,
//     endpoint: 'resend/verification-phone',
//     isFake: false,
//     fakeResponsePath: 'assets/json/login'
// };


// export const RESET_PASSWORD = {
//     method: API_TYPE.POST,
//     endpoint: 'reset/password',
//     isFake: false,
//     fakeResponsePath: 'assets/json/login'
// };

// export const PROFILE = {
//     method: API_TYPE.PUT,
//     endpoint: 'profile',
//     isFake: false,
//     fakeResponsePath: 'assets/json/login'
// };

// export const FETCH_CHAT_GET = {
//     method: API_TYPE.GET,
//     endpoint: 'profile',
//     isFake: false,
//     fakeResponsePath: 'assets/json/login'
// };
// export const NOTIFICATION_LIST = {
//     method: API_TYPE.GET,
//     endpoint: 'notification',
//     isFake: false,
//     fakeResponsePath: 'assets/json/login'
// };
// export const BLOCK_CHAT = {
//     method: API_TYPE.POST,
//     endpoint: 'block/user',
//     isFake: false,
//     fakeResponsePath: 'assets/json/login'
// };

// export const CLEAR_CHAT = {
//     method: API_TYPE.DELETE,
//     endpoint: 'chat/conversation',
//     isFake: false,
//     fakeResponsePath: 'assets/json/login'
// };
// export const DELETE_CHAT = {
//     method: API_TYPE.DELETE,
//     endpoint: 'chat/message',
//     isFake: false,
//     fakeResponsePath: 'assets/json/login'
// };
// export const CHATLIST_GET = {
//     method: API_TYPE.GET,
//     endpoint: 'chat/listing',
//     isFake: false,
//     fakeResponsePath: 'assets/json/login'
// };
// export const ALLUSERLIST_GET = {
//     method: API_TYPE.GET,
//     endpoint: 'user/listing',
//     isFake: false,
//     fakeResponsePath: 'assets/json/login'
// };
// export const USERPROFILE_GET = {
//     method: API_TYPE.GET,
//     endpoint: 'user/profile',
//     isFake: false,
//     fakeResponsePath: 'assets/json/login'
// };

// export const CHATMSG_GET = {
//     method: API_TYPE.GET,
//     endpoint: 'chat/messages',
//     isFake: false,
//     fakeResponsePath: 'assets/json/login'
// };


// export const PROFILE_PUT = {
//     method: API_TYPE.PUT,
//     endpoint: 'profile',
//     isFake: false,
//     fakeResponsePath: 'assets/json/login'
// };

// export const CONTENT_GET = {
//     method: API_TYPE.GET,
//     endpoint: 'content',
//     isFake: false,
//     fakeResponsePath: 'assets/json/login'
// };

// export const RESEND_VERIFY_EMAIL = {
//     method: API_TYPE.POST,
//     endpoint: 'resend/verification-email',
//     isFake: false,
//     fakeResponsePath: 'assets/json/login'
// };
// export const PROFILE_DEACTIVATE = {
//     method: API_TYPE.DELETE,
//     endpoint: 'user',
//     isFake: false,
//     fakeResponsePath: 'assets/json/login'
// };


export const DYNAMIC_CONTENT_PAGE ={
  method: API_TYPE.GET,
  endpoint: 'User/list_countries',
  isFake: false,
  fakeResponsePath: 'assets/json/login'
}

