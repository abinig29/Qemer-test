import { UserAccountNav } from "@/components/user-account-nav";

import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"



const Header = () => {


  return (
    <header className="fixed  inset-0 h-[50px] sm:ml-[270px] bg-white border rounded-md mt-4 mr-[20px]">
      <div className=" flex  h-full items-center justify-between mx-4 ">
        <SearchInput />
        <UserAccountNav
          data={{
            fullName: "Abel Nigus",
            email: "abinig5@gmail.com",
          }}
        />
      </div>
    </header>
  );
};

export default Header;


function SearchInput() {
  return (
    <div className="relative w-full max-w-xs ">
      <Input
        type="text"
        placeholder="Search"
        className="pl-3 py-0 pr-10 h-8  w-full bg-gray-100 text-gray-400 placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
      />
      <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
    </div>
  )
}