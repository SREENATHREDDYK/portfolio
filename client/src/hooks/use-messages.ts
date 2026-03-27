import { useState } from "react";
import { api, type MessageInput } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useCreateMessage() {
  const { toast } = useToast();
  const [isPending, setIsPending] = useState(false);

  const mutate = async (
    data: MessageInput,
    options?: { onSuccess?: () => void },
  ) => {
    setIsPending(true);

    try {
      const validated = api.messages.create.input.parse(data);
      const res = await fetch(api.messages.create.path, {
        method: api.messages.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
      });

      if (!res.ok) {
        if (res.status === 400) {
          const error = api.messages.create.responses[400].parse(await res.json());
          throw new Error(error.message);
        }

        throw new Error("Failed to send message");
      }

      api.messages.create.responses[201].parse(await res.json());
      options?.onSuccess?.();
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Failed to send message";

      toast({
        title: "Error sending message",
        description: message,
        variant: "destructive",
      });
    } finally {
      setIsPending(false);
    }
  };

  return { mutate, isPending };
}
