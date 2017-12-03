export class Product {
    public name: string;
    public snippet: string;
    public imagePath: string;

    constructor(name: string, snippet: string, imagePath: string){
        this.name = name;
        this.snippet = snippet;
        this.imagePath = imagePath;
    }
}