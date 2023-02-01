export interface InitialUser {
  isAuthenticated: false;
  accessToken: string;
  refreshToken: string;
  user: {
    email: string;
    user_id: string;
  };
}
