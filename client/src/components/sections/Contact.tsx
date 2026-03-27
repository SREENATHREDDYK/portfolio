"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, MapPin, Mail } from "lucide-react";
import { AnimatedSection, SlideIn } from "../AnimatedSection";
import { api, type MessageInput } from "@shared/routes";
import { useCreateMessage } from "@/hooks/use-messages";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export function Contact() {
  const { mutate: sendMessage, isPending } = useCreateMessage();
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const form = useForm<MessageInput>({
    resolver: zodResolver(api.messages.create.input),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(data: MessageInput) {
    setSuccessMessage(null);
    sendMessage(data, {
      onSuccess: () => {
        form.reset();
        setSuccessMessage("Thanks for reaching out! I'll get back to you soon.");
      },
    });
  }

  return (
    <AnimatedSection id="contact" className="relative">
      <div className="absolute top-0 right-0 -z-10 w-[40rem] rounded-full bg-primary/5 blur-[100px]" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <SlideIn direction="right">
            <div>
              <h2 className="mb-6 text-3xl font-display font-bold md:text-5xl">
                Let&apos;s Build Scalable Solutions{" "}
                <span className="text-primary">Together.</span>
              </h2>
              <p className="mb-12 text-lg text-muted-foreground">
                I&apos;m currently open to backend development opportunities,
                freelance projects, and collaborative technical challenges. If
                you&apos;re looking for a developer who can design secure APIs,
                optimize databases, and build scalable server-side systems,
                let&apos;s connect.
              </p>

              <div className="space-y-6">
                <div className="group flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a
                      href="mailto:teamhub78@gmail.com"
                      className="font-medium transition-colors hover:text-accent"
                    >
                      teamhub78@gmail.com
                    </a>
                  </div>
                </div>

                <div className="group flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">Bangalore, India</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Available for remote and on-site opportunities
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SlideIn>

          <SlideIn direction="left" delay={0.2}>
            <div className="glass-card rounded-3xl p-8">
              <h3 className="mb-6 text-2xl font-bold">Send me a message</h3>

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-muted-foreground">
                            Your Name
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="John Doe"
                              className="h-12 border-white/10 bg-background/50 focus-visible:ring-primary/50"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-muted-foreground">
                            Email Address
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="john@example.com"
                              type="email"
                              className="h-12 border-white/10 bg-background/50 focus-visible:ring-primary/50"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-muted-foreground">
                          Your Message
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell me about your project..."
                            className="min-h-[150px] resize-none border-white/10 bg-background/50 focus-visible:ring-primary/50"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {successMessage ? (
                    <div className="rounded-md bg-green-100 p-4 text-green-800">
                      {successMessage}
                    </div>
                  ) : null}

                  <Button
                    type="submit"
                    disabled={isPending}
                    className="group h-14 w-full rounded-xl bg-primary text-base text-primary-foreground hover:bg-primary/90"
                  >
                    {isPending ? "Sending..." : "Start a Conversation"}
                    {!isPending ? (
                      <Send
                        size={18}
                        className="ml-2 transition-transform group-hover:translate-x-1"
                      />
                    ) : null}
                  </Button>
                </form>
              </Form>
            </div>
          </SlideIn>
        </div>
      </div>
    </AnimatedSection>
  );
}
