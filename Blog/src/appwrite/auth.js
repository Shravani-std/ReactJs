import conf from "../Config/config";
import {Client, Account, ID} from "appwrite";



export class AuthService{

    client = new Client();
    account;


    constructor(){
        this.client

        .setEndpoint(conf.appwrite_Url)
        .setProject(conf.appwrite_Project_Id);

        this.account = new Account(this.client);

    }

    async createAccount({email, password, name}){
    try{
        const userAccount = await this.account.create(ID.unique(), email,password,name)
        if(userAccount){
            // return userAccount;
            //call Another method
            return this.login( {email, password})
        }
        else{
            return userAccount;
        }
   
    }
    catch(error){

        throw new Error("error");
        
    }

    }
    async login( {email,password}) {
        try{
            return await this.account.createEmailPasswordSession( email, password);
        }catch(error){
            throw error;

        }
    }
    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error){
            console.log("Appwrite service :: getCurrentUser :: error ", error )
        }
          return null;  
        
    }
    async logout(){
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error ", error );
        }
    }

}

const authService = new AuthService();//object of class AuthService

export default AuthService

