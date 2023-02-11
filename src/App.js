import './App.css';
import {BrowserRouter as Router ,Route ,Routes} from 'react-router-dom'
import Home from './Components/Home';
import ProfileDetail from './Components/ProfileDetail';
import CommingSoon from './Components/CommingSoon';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile/:id' element = {<ProfileDetail />} />
        <Route path='/profile/:id/post' element = {<CommingSoon />} />
        <Route path='/profile/:id/gallery' element = {<CommingSoon />} />
        <Route path='/profile/:id/todoList' element = {<CommingSoon />} />
      </Routes>
    </Router>
  );
}

export default App;
