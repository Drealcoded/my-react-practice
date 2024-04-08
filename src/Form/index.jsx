import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'

const formSchema = z.object({
    firstname: z.string(),
    lastname: z.string(),
    email: z.string().email(),
    password: z.string().min(3, 'at least 3 charcter'),
    title: z.string().min(1, 'title must containt at least 1 character')
})

// const url = 'http://localhost:4000/api/v1/user'
const Form = () => {
    const formRef = useRef()

    const { register,
        handleSubmit,
        formState: { errors },} = useForm({
            resolver: zodResolver(formSchema),
        })
        console.log(errors, 'errorss');

    function onSubmit(data){
      console.log(data);
      alert('form submitted');
      // try {
      //   const res = await fetch(url, {method: 'POST', body: JSON.stringify(data), headers: {'Content-Type': 'application/json'}});
      //   const responseData = await res.json();
      //   console.log(responseData);
      //   console.log(res);
      //   alert('form submit success');
      // } catch (error) {
      //   console.log(error);
      // }
    }

    
  return (
    <div>
    <div className='signup flex items-center justify-center h-32 border-2'>
        <h1 className='h1 text-4xl	' >sign up form</h1>
    </div>
    <form  action="" onSubmit={handleSubmit(onSubmit)} className='container my-7 w-3/5 mb-10	'>

        <Input type='text' placeholder='Title' {...register('title')} />
        {errors.title && <p className='text-red-400'>{errors.title.message}</p>}
        <Input {...register('firstname')} type={'text'} placeholder='First Name' />
        {errors.firstname && <p className='text-red-400'>{errors.firstname.message}</p>}

        <Input {...register('lastname')} type={'text'} placeholder='Last Name' />
        {errors.lastname && <p className='text-red-400'>{errors.lastname.message}</p>}

        <Input {...register('email')} type={'email'} placeholder='email' />
        {errors.email && <p className='text-red-400'>{errors.email.message}</p>}
        <Input {...register('password')} type='password' placeholder='password' />
        {errors.password && <p className='text-red-400'>{errors.password.message}</p>}

        
        <Button className='bg-orange-400 mt-3'>Submit</Button>
    </form>
      
    </div>
  )
}

export default Form
