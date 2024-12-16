export interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  fill?: string;
}

type Rating = {
  count: number;
  rate: number;
};

export type Item = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: Rating;
  title: string;
};
