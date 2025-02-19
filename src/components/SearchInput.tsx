import { CiSearch } from "react-icons/ci"


const SearchInput = () => {
  return (
    <div>
        <div className="relative hidden md:flex items-center justify-center gap-3 ">
            <CiSearch className="absolute left-4"/>
            <input
            type="text"
            placeholder="Search..."
            className="py-2 pl-10 rounded-xl  focus:outline-sky-300 border-sky-200 border-2 w-fit"
            />
      </div>
    </div>
  )
}

export default SearchInput
