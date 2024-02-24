import NavBar from "./Components/NavBar/NavBar"
import MetabaseDashboard from "./Features/MetabaseDasboards/MetabaseDasboards"

export default function App() {
  
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div style={{display: "flex", justifyContent: "center", alignContent: "center"}}>
        
        <MetabaseDashboard/>
      </div>
    </div>
  )
}
