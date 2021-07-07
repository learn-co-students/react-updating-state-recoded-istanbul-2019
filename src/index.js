import React from 'react';
import ReactDOM from 'react-dom';
import ClickityClick from './ClickityClick'
import ButtonCounter from './components/ButtonCounter'
import LightSwitch from './LightSwitch'

ReactDOM.render(<div>
  <ClickityClick />
  <ButtonCounter />
  <LightSwitch />
  </div>
    ,
  document.getElementById('root')
);
