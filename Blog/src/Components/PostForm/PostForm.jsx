import React, {useCallback} from 'react'
import { useForm } from 'react-hook-form'
import { Button, Input, Select, RTE} from '../index'
import service from '../../appwrite/conf'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'



function PostForm({post}) 
{

    const { register ,handleSubmit, watch, setValue,control,getValues} = useForm(
        {
        defaultValues :
        {
            title: post ?.title || '',
            slug: post?.slug || '',
            content: post?.content  || '',
            status: post?.status  || 'active', 
        },
    })

    const navigate = useNavigate()
    const userData = useSelector( state => state.use.userData)
    
    const submit = async (data) => {
        if(post) {
         const file = data.image[0] ? service.uploadFile(data.image[0] ) : null

         if (file) {
            service.deleteFile(post.featuredImg)
         }

         const bdPost = await service.updatePost(
            post.$id,
            {
                ...data,
                featuredImg: flie ? file.$id : undefined,


            }
        )
        
        if(bdPost){
            navigate(`/post/${bdPost.$id}`)
        }
        else{
            const file = await service.uploadFile(data.image[0]);

            if(file){
                const fileId = file.$id
                data.featuredImg = fileId
                const bdPost = await service.createPost({
                    ...data,
                    userId: userData.$id,

                })
                if(bdPost){
                    navigate(`/post/${bdPost.$id}`)
                }
            }
        }

        }
    }
/*A function provided to transform the value of the title field into a slug. For example:
Input: "My First Post"
Output: "my-first-post"*/

    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string")
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");

        return "";
    }, []);

    React.useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                setValue("slug", slugTransform(value.title), { shouldValidate: true });
            }
        });

        return () => subscription.unsubscribe();  
           /*The return () => subscription.unsubscribe(); part ensures that the subscription 
           is canceled (cleaned up) when the component is unmounted or the dependencies change. 
           This prevents memory leaks or unwanted behavior.*/
    }, [watch, slugTransform, setValue]);


    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">

            <div className="w-2/3 px-2">

                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />


                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />


                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />


            </div>



            <div className="w-1/3 px-2">

                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />

                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}


                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />



                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>



            </div>
        </form>
    );
}



export default PostForm
