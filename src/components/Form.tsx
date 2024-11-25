"use client";
import { useForm } from "react-hook-form";
import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendMail } from "@/lib/send-mail";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

const contactFormSchema = z.object({
  email: z.string().email({ message: "Please Enter a Valid Email Address" }),
});

export default function ContactForm() {
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      email: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof contactFormSchema>) => {
    const mailText = `Request to delete all data:\nEmail: ${values.email}`;
    const response = await sendMail({
      email: values.email,
      subject: "Data Deletion Request",
      text: mailText,
    });
    if (response?.messageId) {
      toast.success("Request Submitted Successfully.");
    } else {
      toast.error("Failed to send request.");
    }
  };

  return (
    <div className="flex items-center justify-center ">
      <Form {...form}>
        <form
          className="grid grid-cols-1 items-center p-6 shadow-2xl rounded-md bg-white"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-6">
            <h2 className="text-lg font-semibold text-center">
              To delete all data, enter your email:
            </h2>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="john@example.com"
                      {...field}
                      className="w-full transparent"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              disabled={isLoading}
              className="w-full bg-[#0081B4] text-white hover:bg-[#0081B4]  hover:opacity-50"
            >
              {isLoading ? "Sending....." : "Send"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
