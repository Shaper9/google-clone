import { ReactNode } from "react";
import SearchHeader from "../../components/SearchHeader";
import "./../globals.css";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <SearchHeader />
      {children}
    </div>
  );
}
