import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';

const App = (props) => (
  <div className='container0'>
    <div className='container1'>
      <div className='item1'>Item 1</div>
      <div className='item1 container2'>
        <div className='item2 container3'><div className="content">Item 1</div></div>
        <div className='item2 container3'><div className="content">Item 2</div></div>
        <div className='item2 container3'><div className="content">Item 3</div></div>
        <div className='item2 container3'><div className="content">Item 4</div></div>
        <div className='item2 container3'><div className="content">Item 5</div></div>
      </div>
      <div className='item1'>Item 3</div>
    </div>
  </div>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
