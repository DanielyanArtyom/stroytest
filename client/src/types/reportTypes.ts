export interface IResponse<T> {
  total: number;
  records: T;
}

export interface IChat {
  [key: string]: { total: number };
}

export interface IDuration {
  [key: string]: {
    agentsChattingDuration: number;
    count: number;
    duration: number;
  };
}

export interface IRating {
  [key: string]: { badRating: number; count: number; goodRating: number };
}

export interface ITag {
  [key: string]: {
    [key: string]: number;
  };
}
