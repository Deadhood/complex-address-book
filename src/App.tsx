import * as React from 'react';
import './App.css';
import { Button } from './Button';
import { FormComponent } from './FormComponent';
import { ListComponent } from './ListComponent';
import { ModalComponent } from './ModalComponent';
class App extends React.Component {
  render() {
    return (
      <div className="App">
        hello
        <Button />
        <FormComponent />
        <ListComponent />
        <ModalComponent />
      </div>
    );
  }
}

export default App;
