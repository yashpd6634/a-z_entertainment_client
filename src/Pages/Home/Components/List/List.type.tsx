export interface ListInput {
    title: string;
    type: string;
    genre: string;
    content: Array<string>;
  }
  
  export interface ListOutput extends ListInput {
    _id: string;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
  };