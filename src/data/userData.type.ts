export type User = {
    id: number;
    joinedAt: string; // 가입일
    name: string; // 성함
    phone: string; // 전화번호
    storeName: string; // 상호명
    address: string; // 업장 주소
    role: "ADMIN" | "MANAGER" | "USER"; // 유저 권한
};
