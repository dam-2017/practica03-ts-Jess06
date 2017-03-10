export class Cadena {
    
    private str: string;

    constructor(str: string){
        this.str = str;
    }

    isPalindrome():boolean{
        var strNoSpaces: string = this.str.replace(/ /g, "");
        strNoSpaces = strNoSpaces.toLowerCase();
        for (let i = 0, j=strNoSpaces.length-1; i < Math.floor(strNoSpaces.length/2); i++, j--){
            if (strNoSpaces[i] != strNoSpaces[j]){
                return false;
            }
        }
        return true;
    }

    countVowels():string{
        let a:number = 0;
        let e:number = 0;
        let i:number = 0;
        let o:number = 0;
        let u:number = 0;
        let current:string;
        for (let j = 0; j< this.str.length; j++){
            current = this.str[j].toLowerCase();
            switch (current){
                case "a":
                    a++;
                break;
                case "e":
                    e++;
                break;
                case "i":
                    i++;
                break;
                case "o":
                    o++;
                break;
                case "u":
                    u++;
                break;
            }
        }
        return `Vocales:
        a: ${a}
        e: ${e}
        i: ${i}
        o: ${o}
        u: ${u}`;
    }

    countLetters():number{
        let letters: number = this.str.length;
        for (let i = 0; i < letters; i++){
            if (this.str[i] == " "){
                letters --;
            }
        }
        return letters;
    }

    countWords():number{
        let cadenaSplit: any;
        cadenaSplit = this.str.split(" ");
        return cadenaSplit.length;
    }
}