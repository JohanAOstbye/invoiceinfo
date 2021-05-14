export interface FormData {
  companyName: string;
  contactName: string;
  contactMail: string;
  phone: string;
  interests: Interest[];
  comments: string;
}

export type Interest = 'bedpres' | 'offline' | 'online_ad' | 'techtalks' | 'excursion';
