import { Button } from "@/components/ui/button";
import { Form, useFormField } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import GenericFormInput from "@/shared/GenericFormInput";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { input } from "./input";





const ShadCnForm = () => {

    const formSchema = z.object({
        title: z.string('title must be a string').min(2).max(20),
        description: z.string('description must be a string').min(2).max(200),
        price: z.string('price must be a string').min(2).max(20),
        category: z.string('category must be a string').min(2).nullable().optional(),
        
    })

    const form = useForm({
        resolver: zodResolver(formSchema)
    })
    console.log('error:', form.formState.errors);

    function onSubmit(data) {
        console.log(data);
        alert('form submitted successfully');

    }
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
         {
            input.map((input, i) =>{
                return(
                    <GenericFormInput key={i} form={form} {...input}/>
                )
            })
         }   

         <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  )
}

export default ShadCnForm


