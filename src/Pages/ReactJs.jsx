import React, { Component } from "react";
import WelcomeToJs from "../Content/ContentOfJavaScript/welcomeToJS";
import Option1 from "../Content/ContentOfJavaScript/option1";
import Option2 from "../Content/ContentOfJavaScript/option2";
import Option3 from "../Content/ContentOfJavaScript/option3";
import Fusioncharts from "../Content/ContentOfReactJS/Fusioncharts";
import { Menu, Row, Col, Icon } from "antd";
import "antd/dist/antd.css";

const { SubMenu } = Menu;

export default class ReactJs extends Component {
  rootSubmenuKeys = ["sub1", "sub2", "sub4"];

  state = {
    openKeys: ["sub1"],
    opt: "0"
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
    console.log(this.state.opt);
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
              <SubMenu
                key='sub2'
                title={
                  <b>
                    <Icon type='file-zip' />
                    NPM ASSETS
                  </b>
                }>
                <Menu.Item key='5' onClick={this.onOptionChange}>
                  <b><Icon type="bar-chart" />Fusioncharts</b>
                </Menu.Item>
                <Menu.Item key='6' onClick={this.onOptionChange}>
                  Option 6
                </Menu.Item>
              </SubMenu>
            </Menu>
          </Col>
          <Col span={20}>
            {this.state.opt === "0" ? <WelcomeToJs /> : null}
            {this.state.opt === "1" ? <Option1 /> : null}
            {this.state.opt === "2" ? <Option2 /> : null}
            {this.state.opt === "3" ? <Option3 /> : null}
            {this.state.opt === "5" ? <Fusioncharts /> : null}
          </Col>
        </Row>
      </div>
    );
  }
}
