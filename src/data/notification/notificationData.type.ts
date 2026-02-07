export type Notification = {
    id: number;
    status: "ACTIVE" | "INACTIVE";
    imageUrl: string;
    title: string;
    startAt: string;
    endAt: string;
};
