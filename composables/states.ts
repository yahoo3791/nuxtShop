export const useCounter = () => useState<number>("counter", () => 0);
export const useStore = () => useState<string>("store", () => "pink");
