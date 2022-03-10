import logo from "./logo.svg";
import "./App.css";
import Video from "./components/Video";

function App() {
  return (
    <div className="row row-cols-1 row-cols-md-2">
        <Video id="4XSo5Z0hEAs" src="media/3.jpg"/>
        <Video id="VV0w2IsiE3w" src="media/2.jpg"/>
        <Video id="rf5g7z9tF3M" src="media/1.jpg"/>
    </div>
  );
}

export default App;
