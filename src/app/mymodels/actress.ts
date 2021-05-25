export class Actress {
    public name:string = "";
    public photo:string = "";

    constructor() {}

    set(data:object){
        this.name = data["name"];
        this.photo = data["photo"];
    }
}
