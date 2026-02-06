import { TitleToolbar } from "./title.type";

export function renderToolbar(toolbar: TitleToolbar) {
    switch (toolbar.element) {
        case "search":
            return (
                <input
                    value={toolbar.value}
                    onChange={(e) => toolbar.onChange(e.target.value)}
                    placeholder={toolbar.placeholder}
                />
            );

        case "action":
            return (
                <>
                    {toolbar.actions.map((a) => (
                        <button key={a.label} onClick={a.onClick}>
                            {a.label}
                        </button>
                    ))}
                </>
            );

        case "statusFilter":
            return (
                <select
                    value={toolbar.value}
                    onChange={(e) => toolbar.onChange(e.target.value)}
                >
                    {toolbar.options.map((o) => (
                        <option key={o.value} value={o.value}>
                            {o.label}
                        </option>
                    ))}
                </select>
            );

        default:
            return null;
    }
}
