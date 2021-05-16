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
  isDuedate: boolean;
  duedate: string;
  isPonumber: boolean;
  ponumber: string;

}

export type Occation = 'bedpres' | 'kurs' | 'offline' | 'online_ad' | 'techtalks' | 'excursion' | 'other';
