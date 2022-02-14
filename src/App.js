import Routers from "./Routers";
import { ThemeProvider } from "./themeContext";

function App() {
  return (
    <ThemeProvider>
       <Routers />
    </ThemeProvider>)
}

export default App;
