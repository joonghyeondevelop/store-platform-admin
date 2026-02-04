export type sidebarItemType = {
    label: string;
    onClick: () => void;
};

export type sidebarGroupType = {
    title: string;
    item: sidebarItemType[];
};
