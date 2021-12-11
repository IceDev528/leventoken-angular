export interface LoginRequest {
  email: string;
  fcm_id: string;
  device_id: string;
  device_type: number;
  first_name?: string;
  last_name?: string;
  password?: string;
  image?: any;
  fb_id?: string;
  google_id?: string;
}
