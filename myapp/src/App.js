import logo from './logo.svg';
import './App.css';

function App() {

  const brandName = 'CredoFinance'

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <Message name = {brandName} id={1} />
        <a
          className="App-link"
          href="https://evgeniy755086.invisionapp.com/prototype/credo-cl89y22bc00ngv401hol2nbc2/play/dcc39ea9?sharehttps://evgeniy755086.invisionapp.com/prototype/cl89y22bc00ngv401hol2nbc2/play"
          target="_blank"
          rel="noopener noreferrer"
        >
          Desing presentation
        </a>
      </header>
    </div>
  );
}

export default App;

const Message = (props) => {
  return (
    <h1>First app for
      <p>{props.name}</p>
      </h1> 
  )
}