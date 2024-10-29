import { appConfig } from "@/config/app";
import { Icons } from "./icons";
import { Link } from "react-router-dom";

export function Logo() {
    return (
        <Link to={"/"}>
            <div className="flex items-center gap-2">
                <img src="./logo.png" alt="" className="h-10 w-10" />
                <span className="font-bold text-2xl">{appConfig.name}</span>
            </div>
        </Link>
    )
}