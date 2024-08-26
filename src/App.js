import logo from "./logo.svg";
import "./App.css";
import data from "./data/sample";
import Section from "./components/section";
import Header from "./components/header";
import { styled } from "@mui/material/styles";


function App() {
  const { title, section } = data;
  return (
    <div className="App">
      <Header />
      <h3 style={{ textAlign: "left", paddingLeft: "20px" }}>{title}</h3>
      {section.map((i) => {
        return <Section title={i.title} data={i.data} />;
      })}
    </div>
  );
}

export default App;
