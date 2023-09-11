import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";

interface SearchBarProps {
  search: string;
  setSearch: (value: string) => void;
}

export const SearchBar = ({ search, setSearch }: SearchBarProps) => {
  return (
    <div className="relative z-50 flex items-center w-full max-w-5xl mx-auto mt-6 shadow min-w-min">
      <input
        className="w-full p-3 border rounded border-neutral-300 outline-secondary"
        placeholder="Sök här..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="absolute w-5 transform -translate-y-1/2 right-6 text-neutral-400 top-1/2">
        <Icon path={mdiMagnify} size={1} />
      </div>
    </div>
  );
};
