import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import SimpleBottomNavigation from "./Components/Mainnav";
import { Container, Switch } from "@mui/material";
import Trending from "./Pages/Trending/Trending";
import Movies from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";
import Search from "./Pages/Search/Search";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Container>
          <Switch>
            <Route path="/" Component={Trending} exact />
            <Route path="/Movies" Component={Movies} />
            <Route path="/Series" Component={Series} />
            <Route path="/Search" Component={Search} />
          </Switch>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
