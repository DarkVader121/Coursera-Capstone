import './App.css';
import { Helmet } from 'react-helmet';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta name="description" content="This is the Lilttle Lemon Restaurant" />
        <meta name="og:title" content="Little Lemon" />
        <meta name="og:description" content="This is the Little Lemon Restaurant" />
        <meta name="ig:image" content="" />
      </Helmet>
      
      <Navigation/>
    </div>
  );
}

export default App;
