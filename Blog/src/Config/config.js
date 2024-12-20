const conf = {
    appwrite_Url: String(import.meta.env.VITE_APP_APPWRITE_URL),
    appwrite_Project_Id: String(import.meta.env.VITE_APPWRITE_PROJECT_ID ),
    appwrite_Database_Id: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwrite_Collection_Id: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwrite_Bucket_Id: String(import.meta.env.VITE_APPWRITE_BUCKET_ID)
}

export default conf
