import logo from './logo.svg';
import { Network } from '@capacitor/network';
import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    async function getStatus() {
      const status = await Network.getStatus();
      console.log('NETWORK STATUS FIRST', status);
    }

    const listener = Network.addListener('networkStatusChange', (status) => {
      console.log('NETWORK STATUS', status);
    });

    getStatus();

    return () => {
      Network.removeAllListeners();
    }
  }, []);
  return (
    <div className="App">
    </div>
  );
}

export default App;
