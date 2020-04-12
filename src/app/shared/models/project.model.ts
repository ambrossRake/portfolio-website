export class Project{


  constructor(private _name: string, private _url: string, private _description: string){}

  get name(){
    return this._name;
  }

  get url(){
    return this._url
  }

  get description(){
    return this._description
  }
}
