import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

export default function Layout() {
  return (
    <>
    <NavBar />
    <Outlet /> {/*represent whatever page is being displayed*/}
    </>
  );
}