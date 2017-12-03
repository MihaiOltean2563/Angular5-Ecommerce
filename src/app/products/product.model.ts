export class Product {
    public name: string;
    public snippet: string;
    public imageUrl: string;

    constructor(name: string, snippet: string, imageUrl: string){
        this.name = name;
        this.snippet = snippet;
        this.imageUrl = imageUrl;
    }
}
