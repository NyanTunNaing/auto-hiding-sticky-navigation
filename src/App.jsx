// React Hooks

// Components
import SmoothScroll from "./assets/components/SmoothScroll/SmoothScroll.jsx";
import Navigation from "./assets/components/Navigation/Navigation.jsx";

// Styles
import "./assets/css/main.scss";

function App() {
  return (
    <>
      <SmoothScroll />
      <Navigation />
      <div style={{ height: "300vh" }}></div>
    </>
  );
}

export default App;
