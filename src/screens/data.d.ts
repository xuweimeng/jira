export interface UsersProps {
    id: number;
    name: string;
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
    created: number;
}