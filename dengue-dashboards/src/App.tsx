import ButtonAppBar from "./Core/AppNavBar/NavBar"
import { Outlet } from "react-router-dom"
export default function App() {

  return (
    <div>
      <ButtonAppBar />
      <div style={{ display: "flex", justifyContent: "center", alignContent: "center" }}>
        <Outlet />
      </div>
    </div>
  )
}
