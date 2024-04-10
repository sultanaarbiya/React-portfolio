import { z, ZodType } from "zod"
import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'


type FormData = {
    UserName: string;
    Email: string;
    Feedback: string;
};


function Validate() {

    const schema: ZodType<FormData> = z
        .object({
            UserName: z.string().min(3).max(20),
            Email: z.string().email(),
            Feedback: z.string(),
        })

    const { register,
         handleSubmit,
         formState:{errors},
         } = useForm<FormData>
    ({ resolver: zodResolver(schema) })

    const submitData = (data:FormData)=>{
        console.log(data)
    }
    return (
        <div >
                <form onSubmit={handleSubmit(submitData)} >
                    <input type="text" placeholder = "Your Name" {...register("UserName")} ></input>
                    {errors.UserName && <span>{errors.UserName.message}</span>}
                  <input type="text" placeholder = "Email Address" {...register("Email")}   />
                  {errors.Email && <span>{errors.Email.message}</span>}
                  <textarea   placeholder="Message"{...register("Feedback")}/>
                  {errors.Feedback && <span>{errors.Feedback.message}</span>}
                  <br/>
                  <button>Submit</button>
                </form>
        </div>
  );
}

export default Validate;