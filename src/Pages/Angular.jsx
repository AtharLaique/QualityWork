import React, { Component } from "react";
import WelcomeToJs from "../Content/ContentOfJavaScript/welcomeToJS";
import ErdIntro from "../Content/ContentOfDatabase/ErdInro";
import Chapter1 from "../Content/ContentOfDatabase/Chapter1";
import Chapter2 from "../Content/ContentOfDatabase/Chapter2";
import Chapter3 from "../Content/ContentOfDatabase/Chapter3";
import { Menu, Row, Col ,Icon} from "antd";
import "antd/dist/antd.css";

const { SubMenu } = Menu;

export default class Angular extends Component {
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
              <SubMenu key='sub1' title={<b>  Database Theory</b>}>
                <Menu.Item key='1' onClick={this.onOptionChange}>
                <b>Chapter 1</b>
                </Menu.Item>
                <Menu.Item key='2' onClick={this.onOptionChange}>
                  <b>Chapter 2</b>
                </Menu.Item>
                <Menu.Item key='3' onClick={this.onOptionChange}>
                  <b>Chapter 3</b>
                </Menu.Item>
              </SubMenu>
              <SubMenu key='sub2' title={<b>ERD Practice</b>}>
                <Menu.Item key='5' onClick={this.onOptionChange}>
                  <b>ERD Basics</b>
                </Menu.Item>
                <Menu.Item key='6' onClick={this.onOptionChange}>
                  <b>Practice 1</b>
                </Menu.Item>
              </SubMenu>
            </Menu>
          </Col>
          <Col span={20}>
            {this.state.opt === "0" ? <WelcomeToJs /> : null}
            {this.state.opt === "1" ? <Chapter1 /> : null}
            {this.state.opt === "2" ? <Chapter2 /> : null}
            {this.state.opt === "5" ? <ErdIntro /> : null}
          </Col>
        </Row>
      </div>
    );
  }
}
