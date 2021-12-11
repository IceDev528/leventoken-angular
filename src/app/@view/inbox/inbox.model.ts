export interface InboxRequest   {
    limit?:number;
    page?: number;
    keyword?: string;
}

export interface ChatRequest {
   user_with:number
   limit:number
   page_id:number
}

export interface getProfileRequest {
    id:number
}

 export interface allUserListRequest{
    limit?:number;
    page?: number;
    keyword?: string;
}

export interface delChatRequest{
    id:number
    deleted_for_me:number
}