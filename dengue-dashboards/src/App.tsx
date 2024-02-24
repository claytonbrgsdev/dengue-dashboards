import NavBar from "./Components/NavBar/NavBar"
import MetabaseOutput from "./Features/MetabaseDasboards/MetabaseOutput"


export default function App() {

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div style={{ display: "flex", justifyContent: "center", alignContent: "center" }}>
        <MetabaseOutput />

      </div>
    </div>
  )
}
