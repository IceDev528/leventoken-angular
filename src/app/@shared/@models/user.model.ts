import { DataMaping } from './data-maping.model';

export class User implements DataMaping {
  private id?: number;
  private user_type?: number;
  private email?: string;
  private first_name?: string;
  private last_name?: string;
  private password?: string;
  private image?: any;
  private fb_id?: string;
  private google_id?: string;
  private apple_id?: string;
  private phone_number?: number;
  private country_code?: number;
  private country_abbr?: string;
  private address?: string;
  private lat?: number;
  private lng?: number;
  private city?: string;
  private state?: string;
  private country?: string;
  private zip?: string;
  private email_verify_token?: string;
  private reset_pass_token?: string;
  private is_email_verify?: number;
  private is_deactivated?: number;
  private is_profile_completed?: number;
  private deactivate_reason?: string;
  private created_at?: Date;
  private updated_at?: Date;
  constructor(userObj: any) {
    this.mapObject(userObj);
  }

  mapObject(input: any) {
    Object.assign(this, input);
    return this;
  }
}

export class AuthResponse implements DataMaping {
  public message?: string;
  public token?: string;
  public user?: User;
  constructor(authResponse: any) {
    this.mapObject(authResponse);
  }

  mapObject(input:any) {
    const loginResponse = Object.assign(this, input);
    this.user = new User(input.user);
    return loginResponse;
  }
}
