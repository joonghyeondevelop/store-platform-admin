import "./title.css";
import { ListToolbarProps } from "./title.type";

const ListToolbar = ({ search, actions, statusFilter }: ListToolbarProps) => {
    return (
        <div className="list_toolbar">
            <div className="toolbar_left">
                {actions?.map((action) => (
                    <button
                        key={action.label}
                        onClick={action.onClick}
                        className={action.variant}
                    >
                        {action.label}
                    </button>
                ))}
            </div>

            {statusFilter && (
                <select
                    value={statusFilter.value}
                    onChange={(e) => statusFilter.onChange(e.target.value)}
                >
                    {statusFilter.options.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                            {opt.label}
                        </option>
                    ))}
                </select>
            )}

            {search && (
                <input
                    value={search.value}
                    placeholder={search.placeholder}
                    onChange={(e) => search.onChange(e.target.value)}
                />
            )}
        </div>
    );
};

export default ListToolbar;
