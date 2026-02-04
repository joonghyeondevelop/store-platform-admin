export type titleProps = {
    items: titleTopProps;
};

export type titleTopProps = {
    title: string;
    subTitle: string;
};

export type ToolbarAction = {
    label: string;
    onClick: () => void;
    variant?: "primary" | "secondary";
};

export type StatusOption = {
    label: string;
    value: string;
};

export type ListToolbarProps = {
    actions?: ToolbarAction[];

    search?: {
        value: string;
        onChange: (v: string) => void;
        placeholder?: string;
    };

    statusFilter?: {
        value: string;
        onChange: (v: string) => void;
        options: StatusOption[];
    };
};

export type titleBottomProps = {
    info: string;
    toolbar: ListToolbarProps;
};
