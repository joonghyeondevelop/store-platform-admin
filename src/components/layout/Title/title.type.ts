export type titleTopProps = {
    title: string;
    subTitle: string;
};

export type StatusOption = {
    label: string;
    value: string;
};

export type ToolbarAction = {
    label: string;
    onClick: () => void;
};

export type TitleToolbar =
    | {
          element: "search";
          value: string;
          onChange: (v: string) => void;
          placeholder?: string;
      }
    | {
          element: "action";
          actions: ToolbarAction[];
      }
    | {
          element: "statusFilter";
          value: string;
          onChange: (v: string) => void;
          options: StatusOption[];
      };

export type TitleProps = {
    items: titleTopProps;
    toolbar: TitleToolbar;
};
