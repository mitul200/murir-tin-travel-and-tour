interface ITour {
  name: string;
  durationHours: number;
  ratingAvg: number;
  ratingQuantity: number;
  price: number;
  imgCover: string;
  image: string[];
  createdAt: Date;
  startDate: Date[];
  startLoaction: string;
  locations: string[];
  slag: string;
}

export { ITour };
