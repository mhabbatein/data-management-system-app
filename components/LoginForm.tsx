"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { FaGoogle } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { TfiEmail } from "react-icons/tfi";

const formSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: "Email wajib diisi",
    })
    .email({ message: "email tidak valid" }),
  password: z.string().min(1, {
    message: "password wajib diisi",
  }),
});

export function LoginForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    // console.log(values);
  }

  return (
    <section className="z-0 flex flex-col items-center gap-6 rounded-lg border border-input bg-card p-4">
      <h1 className="text-2xl font-semibold">Login</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-y-3"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              // width is here
              <FormItem className="w-72 gap-y-1.5 lg:w-96">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Masukkan Email anda" {...field} />
                </FormControl>
                {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Masukkan password anda"
                    {...field}
                    type="password"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <p className="self-center text-sm">
            Lupa password?{" "}
            <Link href="#" className="underline">
              Hubungi Untung
            </Link>
          </p>
          <Button type="submit">Submit</Button>
          <p className="self-center text-sm">Atau</p>
          <Button className="flex w-full items-center gap-x-2">
            <FaGoogle />
            <>Login melalui Google</>
          </Button>
        </form>
      </Form>
    </section>
  );
}
