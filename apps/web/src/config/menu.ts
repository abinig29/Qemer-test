import { NavItemWithChildren } from "@/types/dashboard";

export const mainMenu: NavItemWithChildren[] = [
    {
        title: 'Student',
        to: '/dashboard',
        icon: "user"
    },
    {
        title: 'Logout',
        to: '/',
        icon: "logOut"
    },

]
