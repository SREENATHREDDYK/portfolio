import { AnimatedSection, SlideIn } from "../AnimatedSection";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api, type MessageInput } from "@shared/routes";
import { useCreateMessage } from "@/hooks/use-messages";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Send, MapPin, Mail, Phone } from "lucide-react";

export function Contact() {
  const { mutate: sendMessage, isPending } = useCreateMessage();

  const form = useForm<MessageInput>({
    resolver: zodResolver(api.messages.create.input),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(data: MessageInput) {
    sendMessage(data, {
      onSuccess: () => {
        form.reset();
      },
    });
  }

  return (
    <AnimatedSection id="contact" className="relative">
      {/* Abstract background */}
      <div className="absolute top-0 right-0 w-[40rem] bg-primary/5 rounded-full mix-blend-screen filter blur-[100px] -z-10"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          <SlideIn direction="right">
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Let’s Build Scalable Solutions  <span className="text-primary">Together.</span></h2>
              <p className="text-lg text-muted-foreground mb-12">
                I’m currently open to backend development opportunities, freelance projects,
                and collaborative technical challenges. If you’re looking for a developer who
                can design secure APIs, optimize databases, and build scalable server-side systems — let’s connect.              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    {/* <p className="font-medium">teamhub78@gmail.com</p> */}
                    <a
                      href="mailto:teamhub78@gmail.com"
                      className="font-medium hover:text-accent transition-colors"
                    >
                      teamhub78@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">Bangalore, India</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Available for remote & on-site opportunities
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SlideIn>

          <SlideIn direction="left" delay={0.2}>
            <div className="glass-card p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-6">Send me a message</h3>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-muted-foreground">Your Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" className="bg-background/50 border-white/10 h-12 focus-visible:ring-primary/50" {...field} />
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
                          <FormLabel className="text-muted-foreground">Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="john@example.com" type="email" className="bg-background/50 border-white/10 h-12 focus-visible:ring-primary/50" {...field} />
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
                        <FormLabel className="text-muted-foreground">Your Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell me about your project..."
                            className="bg-background/50 border-white/10 min-h-[150px] resize-none focus-visible:ring-primary/50"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    disabled={isPending}
                    className="w-full h-14 text-base bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl group hover-elevate"
                  >
                    {isPending ? "Sending..." : " Start a Conversation →"}
                    {!isPending && <Send size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />}
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
