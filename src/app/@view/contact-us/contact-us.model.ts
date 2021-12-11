export interface ContactUsRequest {
    email: string;
    first_name: string;
    last_name: string;
    phone_number: number;
    country_code: string;
    message: string;
    recaptcha: string;
}
