import './App.css';
import CompA from './components/CompA';
import CompB from './components/CompB';
import { BrowserRouter,Routes,Route,Link} from 'react-router-dom';

function App() {
  const details=[
  {
    name:"Jayadeep",
    roll:"0660"
  },

  {
    name:"Kashmira",
    roll:"0699"
  }
]
return(
  <>
  <BrowserRouter>
  <ul>
  <li><Link to="/compA">Click to compa</Link></li>
  <li><Link to="/compB">Click to compb</Link></li>

  </ul>
    <Routes>
      <Route path='/compA' element={<CompA data={details}/>}></Route>
      <Route path='/compB' element={<CompB data={details}/>}></Route>
    </Routes>
  </BrowserRouter>
  </>
  );
}

export default App