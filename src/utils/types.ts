export interface AuthRequestData {
  email: string;
  password: string;
}

export interface AuthResponseData {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}

// User Profile Types
export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface UpdateProfileData {
  name: string;
  email: string;
  avatar?: string;
}
