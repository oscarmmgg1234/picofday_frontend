import React, {lazy, Suspense} from 'react';
import logo from './logo.svg';
import './App.css';
const Home = lazy(()=>import('./Views/Home'))


function App() {
  return (
   <Suspense fallback={null}>
     <Home/>
   </Suspense>
  );
}

export default App;
