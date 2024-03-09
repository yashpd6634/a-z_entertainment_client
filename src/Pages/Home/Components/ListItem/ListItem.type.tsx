export interface VideoInput {
    title: string;
    desc: string;
    imgFeatured: string;
    imgTitle: string;
    imgThumbnail: string;
    trailer: string;
    video: string;
    year: string;
    limit: number;
    genre: string;
    duration?: string;
    isSeries: boolean;
  }
  
  export interface VideoOutput extends VideoInput {
    _id: string;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
  };