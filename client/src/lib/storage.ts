export const storage = {
  async createMessage(data: unknown) {
    return {
      id: Date.now(),
      ...((data as Record<string, unknown>) ?? {}),
    };
  },
};
