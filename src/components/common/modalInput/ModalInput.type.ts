export type ModalItems = {
    type: "TITLE" | "PRICE";
    placeholder: string;
    titleLimit?: number;
};

type ModalInputType = "TITLE" | "PRICE";

export type ModalInputProps = {
    type: ModalInputType;
    placeholder: string;
    value: string; // ⭐ 부모 상태
    onChange: (next: string) => void; // ⭐ 부모 setter
    titleLimit?: number;
};
