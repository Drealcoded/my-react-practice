import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select"
import React from 'react'

const GenericFormInput = ({placeholder, form, label, name, type, required, description}) => {
 if (type === 'text'){
    return(
<FormField
  Control={form.controls}
  name={name}
  render={({ field }) => (
    <FormItem>
     <div>
     <FormLabel>{label}</FormLabel>
      {required && <span className="text-red-500">*</span>}
     </div>
      <FormControl>
        <Input placeholder={placeholder} {...field} />
      </FormControl>
      {description && <FormDescription>{description}
      </FormDescription>}
      <FormMessage />
    </FormItem>
  )}
/>
    )
 }else if (type === 'select'){
    return(
        <FormField
  Controls={form.controls}
  name="email"
  render={({ field }) => (
    <FormItem>
     <FormLabel>Email</FormLabel>
     <Select onValueChange={field.onChange} defaultValue={field.value}>
      <FormControl>
      <SelectTrigger>
    <SelectValue placeholder="Select a verifid email to display" />
  </SelectTrigger>
      </FormControl>
      <SelectContent>
    <SelectItem value="light">Light</SelectItem>
    <SelectItem value="dark">Dark</SelectItem>
    <SelectItem value="system">System</SelectItem>
  </SelectContent>
</Select>
      <FormDescription>
        You can manage email adresses in your {""}
      </FormDescription>
      <FormMessage />
    </FormItem>
  )}
/>
    )
 }
}   

export default GenericFormInput


