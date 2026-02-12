import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Cards from './components/Cards';

function App() {

  return (
    <>
      <div className='container d-flex flex-column min-vh-100'>
<Header/>
      <div className="container p-0 flex-fill">
<Cards />
      </div>
<Footer />
      </div>
    </>
  )
}

export default App
