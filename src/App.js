import './App.css';
import Layout from './Components/Layout';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';
import Completed from './Components/Completed';

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" exact activeClassName="active" element={
              <Layout>
                <Home />
              </Layout>
            } />
            <Route path="/completed"  element={
              <Layout>
                <Completed />
              </Layout>
            } />
          </Routes>
        </Router>
      </Provider>
    </>
  );
}

export default App;
