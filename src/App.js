import Header from './components/Header';
import Main from './components/Main';
import { Provider } from 'react-redux';
import store from './store/index.js';
import './styleSheets/style.css';

function App() {
  return (
    <>
      <Header />
      <Provider store={store}>
        <Main />
      </Provider>
    </>
  );
}

export default App;
