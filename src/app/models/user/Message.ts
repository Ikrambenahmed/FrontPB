import { Forum } from "./Forum"
import { User } from "./User";



        export class Message 
{   messageid:BigInteger;
    text: string;
    content : string
    User: User; 
    Forum : Forum ; 
   
    constructor(messageid?:BigInteger ,text?:String ,content?:string , User?:User,Forum?:Forum)
    { }
    
}
