import "./App.less";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { MainPageCards } from "./MainPageCards";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <MainPageCards />
      <Footer />
    </div>
  );
}

export default App;
