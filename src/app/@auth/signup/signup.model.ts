export interface SignupRequest {
  email: string;
  // first_name: string;
  name: string;
  password: string;
  // fcm_id: string;
  // device_id: string;
  // device_type: number;
  phone_no: number;
  country_code: string;
  referred_by:string
}

export interface VerifyPhoneRequest {
  code: string;
}
