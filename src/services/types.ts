export type eventType = {
  name: string;
  image: string;
  date: string;
  category: string;
  tickets: number;
  price: string;
  description: string;
  id: string;
};

export type stateType = {
  events: {
    data: eventType[];
    isLoading: boolean;
    error: Error;
  };
};
