import React from "react";
import { Layout, Menu, Icon } from "antd";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import "../../Assets/CSS/Nav.css";

const { Header } = Layout;
export default function Navbar() {
  return (
    <Layout>
      <Header className='header' style={{ background: "none", padding: "0px" }}>
        <Menu
          mode='horizontal'
          defaultSelectedKeys={["-1"]}
          style={{ lineHeight: "64px" }}>
          <Menu.Item key='-1' style={{ padding: "0px"  ,marginRight:'93px',marginLeft:'60px'}}>
            <Link to='/'>
              <img
                src={require("../../Assets/Images/logo.png")}
                width='70px'
                height='54px'
              />
            </Link>
          </Menu.Item>
          <Menu.Item key='1'>
            <Link to='/javascript'>
              <b style={{ color: "#ffc13d" }}>
                <Icon type='code' style={{ marginRight: "2px" }} /> JavaScript
              </b>
            </Link>
          </Menu.Item>
          <Menu.Item key='2'>
            <Link to='/nodejs'>
              <b style={{ color: "#b4c540" }}>
                {" "}
                <Icon type='gold' style={{ marginRight: "2px" }} /> NodeJs
              </b>
            </Link>
          </Menu.Item>
          <Menu.Item key='3'>
            <Link to='/reactjs'>
              <b style={{ color: "#41BFDA" }}>
                {" "}
                <Icon type='build' style={{ marginRight: "2px" }} />
                ReactJs
              </b>
            </Link>
          </Menu.Item>
          <Menu.Item key='7'>
            <Link to='/angular'>
              <b style={{ color: "#f96167" }}>
                {" "}
                <Icon type='build' style={{ marginRight: "2px" }} />
                Angular8
              </b>
            </Link>
          </Menu.Item>
          <Menu.Item key='4'>
            <Link to='/database'>
              <b style={{ color: "#3a3f58" }}>
                {" "}
                <Icon type='database' style={{ marginRight: "2px" }} />
                DataBase
              </b>
            </Link>
          </Menu.Item>
          <Menu.Item key='5'>
            <Link to='/project'>
              <b style={{ color: "#2ca18c" }}>
                <Icon type='project' style={{ marginRight: "2px" }} />
                Projects
              </b>
            </Link>
          </Menu.Item>
          <Menu.Item key='6'>
            <Link to='/deployement'>
              <b style={{ color: "#f95335" }}>
                <Icon type='deployment-unit' style={{ marginRight: "2px" }} />
                Deployement
              </b>
            </Link>
          </Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
}
