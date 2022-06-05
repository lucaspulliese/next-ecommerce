export type PunctuationType = {
  id: string;
  value: number;
}

export type ReviewType = {
  name: string;
  avatar: string;
  description: string;
  punctuation: number;
}

export type ProductType = {
  id: string;
  name: string;
  thumb: string;
  price: string;
  count: number;
  color: string;
  size: string;
  images: any[];
  discount?: string;
  currentPrice?: string;
  punctuationReview?: PunctuationType[];
  reviews?: ReviewType[];
}

export type ProductStoreType = {
  id: string;
  name: string;
  thumb: string;
  price: string | undefined;
  count: number;
  color: string;
  size: string;
}