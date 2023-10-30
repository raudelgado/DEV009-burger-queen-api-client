export interface LoginAuth {
    accessToken: string;
    user: {
      email: string;
      role: string;
      id: number;
    };
}
