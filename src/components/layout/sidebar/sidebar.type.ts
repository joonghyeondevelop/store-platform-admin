export type sidebarItemType = {
    label: string;
    onClick: () => void;
    page: Page;
};

export type sidebarItemProps = sidebarItemType & {
    activePage: Page;
};

export type sidebarGroupType = {
    activePage: Page;
    title: string;
    item: sidebarItemType[];
    value: Page | Page[];
};

export type Page =
    | "USER"
    | "ORDER"
    | "PRODUCT"
    | "CATEGORY"
    | "NOTIFICATION"
    | "TERMS"
    | "PRIVACY"
    | "ALARM";
