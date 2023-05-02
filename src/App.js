import logo from './logo.svg';
import './App.css';
import Random from './Components/Random';
import Tag from './Components/Tag';

function App() {
  return (
    <div className='container'>
      <div className="heading">
        <h1>Random GIFs</h1>
      </div>

        <div className="Random">
          <Random/>
          <Tag/>
        </div>
    </div>
  );
}

export default App;
