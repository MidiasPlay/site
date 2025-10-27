export type NavItemChildren = {
    section: string;
    items: {
        label: string;
        href: string;
        description?: string;
    }[];
}

export type NavItem = {
    label: string;
    href: string;
    childrenList?: NavItemChildren[];
}