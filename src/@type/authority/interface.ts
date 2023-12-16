export enum Role {
    ADMIN = 'ADMIN',
    VIEWER = 'VIEWER',
    EDITOR = 'EDITOR',
}

export interface fileAuthority {
    email: string;
    name: string;
    role: Role;
    userId: number;
}