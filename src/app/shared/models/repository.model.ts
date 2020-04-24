export class Repository{


  constructor(private _name: string, private _url: string, private _description: string, private _fork: boolean){}

  get name(){
    return this._name;
  }

  get url(){
    return this._url
  }

  get description(){
    return this._description
  }
  get fork(){
    return this._fork
  }
}
