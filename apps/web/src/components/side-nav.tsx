
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Icons } from '@/components/icons';
import { cn } from '@/lib/utils';
import { type NavItem } from '@/types/dashboard';
import { Logo } from './logo';


const DashboardNav = ({ items }: { items: NavItem[] }) => {
  const location = useLocation();
  const path = location.pathname;
  const navigate = useNavigate()

  if (!items?.length) {
    return null;
  }

  return (
    <nav className="grid items-center pt-10  gap-2 px-4">
      <Logo />
      <div className="flex flex-col gap-1 mt-4">
        {items.map((item, index) => {
          const Icon = Icons[item?.icon as keyof typeof Icons ?? ""];
          const isActive =
            item?.to === "/dashboard"
              ? path === "/dashboard"
              : path === item.href || path.includes(item.href ?? "/doesnt-exist");

          return (
            <div key={index}>
              <Link
                key={index}
                to={item.disabled ? "/" : item.to ?? "/dashboard"}
                onClick={() => {
                  if (item?.title === "Logout") {
                    navigate("/")
                  }
                }}
              >
                <span
                  className={cn(
                    "group flex items-center rounded-md font-[500] px-2  py-2 text-md hover:bg-primary/10 hover:text-primary",
                    isActive ? "bg-primary/10 text-primary" : "transparent",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  <Icon className="mr-2 size-5" />
                  <span className="text-md">{item.title}</span>
                </span>
              </Link>
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export { DashboardNav };
