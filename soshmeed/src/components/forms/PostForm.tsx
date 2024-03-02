import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters."
    }),
})

const PostForm = () => {

//1 define your form
const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        username: "",
    },
})

// 2 Define a submit handler
function onSubmit(values: z.infer<typeof formSchema>) {
    // do something w the form values
    // this will be typesafe and validated
    console.log(values)
};

  return (
    <div>PostForm</div>
  )
}

export default PostForm