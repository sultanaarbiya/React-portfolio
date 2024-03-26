import { z, ZodType } from "zod"
import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'


type FormData = {
    UserName: string;
    Email: string;
    Message: string;
};


function Validate() {

    const schema: ZodType<FormData> = z
        .object({
            UserName: z.string().min(3).max(20),
            Email: z.string().email(),
            Message: z.string(),
        })

    const { register, handleSubmit } = useForm<FormData>
    ({ resolver: zodResolver(schema) })

    const submitData = (data:FormData)=>{
        console.log(data)
    }
    return (
        <div >
                <form onSubmit={handleSubmit(submitData)} >
                    <input type="text" placeholder = "Your Name" {...register("UserName")} ></input>
                    
                  <input type="text" placeholder = "Email Address" {...register("Email")}   />
                  <textarea   placeholder="Message"{...register("Message")}/>
                  <br/>
                  <button>Submit</button>
                </form>
        </div>
  );
}

export default Validate;