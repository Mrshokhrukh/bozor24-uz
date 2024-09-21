import React from "react";
import { RiSearchLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
type SearchFormProps = {};

const SearchForm: React.FC<SearchFormProps> = () => {
  return (
    <div className="fixed top-0 bg-white z-[100] w-full mx-auto flex gap-2 p-2 pt-4 px-4 items-center">
      <form className="border-[1px] h-[40px] border-zinc-200 flex gap-2 rounded-lg flex-1 items-center px-3">
        <RiSearchLine className="text-xl" />
        <input
          type="text"
          className="flex-1 outline-none border-none text-sm"
          placeholder="Search category, product, or brand"
        />
      </form>
      <span className="text-3xl">
        <IoMdNotificationsOutline />
      </span>
    </div>
  );
};
export default SearchForm;
