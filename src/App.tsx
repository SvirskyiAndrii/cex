import { Header } from 'components/Header';
import { BalancePage } from 'pages/balancePage';
import { TradePage } from 'pages/tradePage';
import { Route, Routes } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/cex' element={<TradePage />} />
          <Route path='/balance' element={<BalancePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
