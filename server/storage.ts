export const storage = {
    async createMessage(data: any) {
        return {
            id: Date.now(),
            ...data
        };
    }
};