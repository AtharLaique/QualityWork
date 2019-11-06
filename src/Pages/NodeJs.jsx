import React, { Component } from "react";
import WelcomeToJs from "../Content/ContentOfJavaScript/welcomeToJS";
import Option1 from "../Content/ContentOfJavaScript/option1";
import Option2 from "../Content/ContentOfJavaScript/option2";
import Option3 from "../Content/ContentOfJavaScript/option3";
import Quries from "../Content/ContentOfNodeJS/Quries"
import RemoteMathod from "../Content/ContentOfNodeJS/RemoteMathod"
import { Menu, Row, Col ,Icon} from "antd";
import "antd/dist/antd.css";

const { SubMenu } = Menu;

export default class NodeJs extends Component {
  rootSubmenuKeys = ["sub1", "sub2", "sub4"];

  state = {
    openKeys: ["sub2"],
    opt: "6"
  };

  onOpenChange = openKeys => {
    this.setState({ opt: "0" });
    const latestOpenKey = openKeys.find(
      key => this.state.openKeys.indexOf(key) === -1
    );
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : []
      });
    }
  };
  onOptionChange = e => {
    this.setState({ opt: e.key });
  };
  render() {

    return (
      <div>
        <Row>
          <Col span={4}>
            <Menu
              mode='inline'
              openKeys={this.state.openKeys}
              onOpenChange={this.onOpenChange}
              style={{ width: 222, marginTop: "2px" }}>
              <SubMenu key='sub1' title={<b>Navigation One</b>}>
                <Menu.Item key='1' onClick={this.onOptionChange}>
                  Option 1
                </Menu.Item>
                <Menu.Item key='2' onClick={this.onOptionChange}>
                  Option 2
                </Menu.Item>
                <Menu.Item key='3' onClick={this.onOptionChange}>
                  Option 3
                </Menu.Item>
              </SubMenu>
              <SubMenu key='sub2' title={<b><Icon type="codepen" />LoopBack</b>}>
                <Menu.Item key='5' onClick={this.onOptionChange}>
                  Quries
                </Menu.Item>
                <Menu.Item key='6' onClick={this.onOptionChange}>
                 RemoteMathod
                </Menu.Item>
              </SubMenu>
            </Menu>
          </Col>
          <Col span={20}>
            {this.state.opt === "0" ? <WelcomeToJs /> : null}
            {this.state.opt === "1" ? <Option1 /> : null}
            {this.state.opt === "2" ? <Option2 /> : null}
            {this.state.opt === "3" ? <Option3 /> : null}
            {this.state.opt === "5" ? <Quries /> : null}
            {this.state.opt === "6" ? <RemoteMathod /> : null}
          </Col>
        </Row>
      </div>
    );
  }
}
