import { useEffect, useState } from "react";
import "../pages/legal/terms/termsPage.css";

export default function LoadMarkdown({ md }: { md: string }) {
    const [markdown, setMarkdown] = useState("");

    useEffect(() => {
        fetch(md)
            .then((response) => response.text())
            .then((text) => setMarkdown(text));
    }, [md]);

    return (
        <div className="textareaWrap">
            <div>
                <textarea
                    value={markdown}
                    onChange={(e) => setMarkdown(e.target.value)}
                />
            </div>
        </div>
    );
}
