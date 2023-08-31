import React from 'react';
import './App.css';
import Menu from './components/Menu/menu';

function App() {
    return (
        <div className='App'>
            <Menu />
            <div className='content'>Content here</div>
        </div>
    );
}

export default App;
