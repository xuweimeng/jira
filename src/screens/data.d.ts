export interface UsersProps {
    id: number;
    name: string;
    email: string;
    title: string;
    organization: string;
    token: string;
}
export interface ParamsProps {
    name?: string;
    personId?: number;
}
export interface ProjectsProps {
    id: number;
    personId: number;
    name: string;
    organization: string;
    ownerId: number;
    created: number;
}