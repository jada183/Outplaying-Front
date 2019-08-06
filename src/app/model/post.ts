export class Post {
  idPost: number;
  postName: string;
  picturesURL: string;
  contentText: string;
  date: Date;
  likes: number;
  manageDate: Date;
  status: string;
  idUser: number;
  idUserManager: number;
  constructor(
    idPost: number,
    postName: string,
    picturesURL: string,
    contentText: string,
    date: Date,
    likes: number,
    manageDate: Date,
    status: string,
    idUser: number,
    idUserManager: number,
  ) {
    this.idPost = idPost;
    this.postName = postName;
    this.picturesURL = picturesURL;
    this.contentText = picturesURL;
    this.date = date;
    this.likes = likes;
    this.manageDate = manageDate;
    this.status =  status;
    this.idUser = idUser;
    this.idUserManager = idUserManager;
  }
}
