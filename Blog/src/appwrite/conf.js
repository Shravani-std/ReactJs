import conf from "../Config/config";
import {Client, ID, Databases, Storage, Query} from "appwrite";


export class Service{
    client = new Client();
    databases;
    storage;

    constructor(){
        this.client
             .setEndpoint(conf.appwrite_Url)
             .setProject(conf.appwrite_Project_Id);  // the project ID, essentially grants the client access to all the resources attributes(like login) and functionalities associated with that specific project
        this.databases = new Databases(this.client)
        this.storage = new Storage(this.client)
    }
    
    //post related services
    async createPost(slug,{  title, content, featuredImg, stat, userId }) {
        try {
            return await this.databases.createDocument( 
                conf.appwrite_Database_Id,
                conf.appwrite_Collection_Id,
                slug,
                {
                    title,
                    content,
                    featuredImg,
                    stat,
                    userId
                }        
            )
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error ", error );

        }
        
    }
    async updatePost ({ slug, title, content, featuredImg , stat}){
        try {
            
            return await this.databases.updateDocument(
                conf.appwrite_Database_Id,
                conf.appwrite_Collection_Id.
                slug,
                {
                    title,content,featuredImg,stat
                }
            )

        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error ", error );
        }
    }
    async deletePost (slug){
        try {
            
             await this.databases.deleteDocument(
                conf.appwrite_Database_Id,
                conf.appwrite_Collection_Id,
                slug
            )
            return true
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error ", error );
            return false
        }
    }
    async getPost (slug){
        try {
            
            return await this.databases.getDocument(
                conf.appwrite_Database_Id,
                conf.appwrite_Collection_Id,
                slug
            )
            return true
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error ", error );
            return false
        }
    }//for single post
    async getPosts ( queries = [Query.equal("status", "active")] ){
        try {
            
            return await this.databases.listDocuments(
                conf.appwrite_Database_Id,
                conf.appwrite_Collection_Id,
                
                
                queries
                //or
                /*
            [
                queries = [Query.equal("status", "active")]
            ]
                */
            )
            return true
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error ", error );
            return false
        }
    }//for all post



    //file Uploading services

    async uploadFile( file){
        try {
            await this.storage.createFile(
                conf.appwrite_Bucket_Id,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error ", error );
            return false
        }
    }
    async deleteFile( fileId){
        try {
            await this.storage.deleteFile(
                conf.appwrite_Bucket_Id,
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error ", error );
            return false
        }
    }
    FilePreview( fileId){
        return this.storage.getFilePreview(
            conf.appwrite_Bucket_Id,
            fileId
        )
    }



}

const service = new Service()
export default service

/*setEndPoint:  this method is responsible for setting the address or URL
 of the external service that the client needs to communicate with. 
 It's like providing the browser, the web address of a specific website
  in our code. This method takes the endpoint value from the configuration and 
  sets that address on the client.*/
