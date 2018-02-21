import * as React from 'react';
import { Layout, Icon } from 'antd';

import './App.css';

import { ListComponent } from './ListComponent';
import { ModalComponent } from './ModalComponent';

class App extends React.Component {
  public state = {
    addColor: '#333',
    showModal: false
  };

  public render() {
    return (
      <Layout className="App">
        <ModalComponent
          visible={this.state.showModal}
          toHide={this.hideModal}
        />
        <Layout.Sider width={400} style={{ background: '#fff' }}>
          <div
            className="add-contact"
            onMouseOver={this.setAddIconColor('#07d')}
            onMouseOut={this.setAddIconColor('#333')}
          >
            <Icon
              type="plus"
              style={{ color: this.state.addColor }}
              onClick={this.showModal}
            />
          </div>
          <ListComponent />
        </Layout.Sider>
        <Layout.Content>
          NO DATA
        </Layout.Content>
      </Layout>
    );
  }

  private setAddIconColor = (color: string): (() => void) => (): void => {
    this.setState({ addColor: color });
  }

  private showModal = (): void => {
    this.setState({ showModal: true });
  }

  private hideModal = (): void => {
    this.setState({ showModal: false });
  }
}

export default App;
