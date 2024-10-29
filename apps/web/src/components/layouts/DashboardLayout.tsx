import { Outlet } from "react-router-dom";
import { mainMenu } from "@/config/menu";
import { DashboardNav } from "../side-nav";
import Header from "../header";



export function DashboardLayout() {
    return (
        <div className="min-h-screen flex flex-col bg-bgPrimary font-poppins">
            <Header />
            <div className="flex flex-1">
                <aside className="fixed inset-y-0 left-0 hidden w-[250px] flex-col bg-white md:flex border-r">
                    <DashboardNav items={mainMenu} />
                </aside>
                <main className="flex-1 ml-0 mt-[70px] md:ml-[270px] h-[calc(100vh-70px)]  p-4 rounded-xl">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}


