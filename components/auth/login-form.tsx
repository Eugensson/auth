"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import { useState, useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { LoginSchema } from "@/schemas";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { CardWrapper } from "@/components/auth/card-wrapper";

import { login } from "@/actions/login";

export const LoginForm = () => {
  const [isVisiblePass, setIsVisiblePass] = useState(false);
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const toggleVisblePass = () => setIsVisiblePass((prev) => !prev);

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      login(values).then((data) => {
        setError(data.error);
        setSuccess(data.success);
      });
    });
  };

  return (
    <CardWrapper
      title="Login"
      headerLabel="Welcome back"
      backButtonLabel="Don`t have an account?"
      backButtonHref="/auth/register"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="jon.doe@example.com"
                      type="email"
                      autoComplete="off"
                    />
                  </FormControl>
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
                    <div className="relative">
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="******"
                        type={isVisiblePass ? "text" : "password"}
                        autoComplete="off"
                      />
                      {isVisiblePass ? (
                        <EyeOff
                          className="absolute bottom-2 right-2 w-4 h-4 text-muted-foreground cursor-pointer"
                          onClick={toggleVisblePass}
                        />
                      ) : (
                        <Eye
                          className="absolute bottom-2 right-2 w-4 h-4 text-muted-foreground cursor-pointer"
                          onClick={toggleVisblePass}
                        />
                      )}
                    </div>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormError message={error as string} />
          <FormSuccess message={success as string} />
          <Button type="submit" disabled={isPending} className="w-full">
            Login
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
