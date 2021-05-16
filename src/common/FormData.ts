export interface FormData {
  companyName: string;
  contactName: string;
  contactMail: string;
  phone: string;
  occation: Occation;
  orgnr: string;
  delivery: string;
  deliveryAdress: string;
  comments: string;
  isduedate: boolean;
  duedate: string;
  isponumber: boolean;
  ponumber: string;

}

export type Occation = 'bedpres' | 'kurs' | 'offline' | 'online_ad' | 'techtalks' | 'excursion' | 'other';
