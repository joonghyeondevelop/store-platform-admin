export const formatNumber = (value: string) => {
    if (!value) return "";
    return Number(value).toLocaleString("ko-KR");
};

export const stripNonDigits = (text: string) => text.replace(/[^\d]/g, "");
