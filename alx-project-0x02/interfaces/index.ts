export interface CardProps {
    title: string;
    content: string;
}


export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonShape = 'rounded-sm' | 'rounded-md' | 'rounded-full';

export interface ButtonProps {
  children: React.ReactNode; 
  size?: ButtonSize;
  shape?: ButtonShape;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  [key: string]: any;
}

export interface PostProps {
  id: number; 
  userId: number; 
  title: string; 
  content: string; 
}

export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}