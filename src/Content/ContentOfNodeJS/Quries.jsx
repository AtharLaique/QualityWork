import React, { Component } from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { Icon, Table } from "antd";
const columns = [
  {
    title: "Element",
    dataIndex: "element"
  },
  {
    title: "Type",
    dataIndex: "type"
  },
  {
    title: "Description",
    dataIndex: "des"
  }
];
const data = [
  {
    key: "1",
    Element: "John Brown",
    Type: 32,
    Description: "New York No. 1 Lake Park"
  }
];
export default class Quries extends Component {
  render() {
    return (
      <div className='container'>
        <h1 className='text-center'> LoopBack Quries</h1>
        <ul>
          <li>
            <b>Qurey that retuen whole tabel</b>
          </li>
          <LiveProvider code='"Model.find()"'>
            <LiveEditor />
          </LiveProvider>
          <li>
            <b>Qurey that retuen record based on id</b>
          </li>
          <LiveProvider code='"Model.find({where:{id:2}})"'>
            <LiveEditor />
          </LiveProvider>
          <li>
            <b>Query to update table instance</b>
          </li>
          <LiveProvider code='"Model.updateAll({id:15,},{isActive:false})"'>
            <LiveEditor />
          </LiveProvider>
          <li>
            <b>Query to update Multiple instance in a table</b>
          </li>
          <LiveProvider code='"Model.updateAll({id:15,},{ name: Athar Laique, category: Developer })"'>
            <LiveEditor />
          </LiveProvider>
        </ul>
        <div className='container'>
          <h4 className='mx-5'>LoopBack Qury filters</h4>
          <br/>
          <div style={{width:"70%"}} className='mx-5'>
          <table className='table '>
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className='table-secondary'>
                <th scope='row'>where</th>
                <td>string</td>
                <td>
                  A condition expression used to filter the set of returned
                  records{" "}
                </td>
              </tr>
              <tr>
                <th scope='row'>limit</th>
                <td>positive integer</td>
                <td>
                  Imposes a maximum number of records in the returned set.
                </td>
              </tr>
              <tr className='table-secondary'>
                <th scope='row'>skip</th>
                <td>positive integer</td>
                <td>
                  Removes the first n records from the returned set, before
                  returning the number of results up to the specified limit.
                </td>
              </tr>
              <tr>
                <th scope='row'>order</th>
                <td>structure</td>
                <td>
                  One child, the name of which must match the name of a field of
                  the record. The value is either ASC or DESC (case-sensitive)
                  and is used to order the returned set. You can specify
                  multiple order clauses, which are applied in the order in
                  which they appear in the filter tree.
                </td>
              </tr>
              <tr className='table-secondary'>
                <th scope='row'>field</th>
                <td>structure</td>
                <td>
                  One child, the name of which must match the name of a field of
                  the record. The value can be either true or false (or 1 or 0),
                  and controls whether the field is included as part of each
                  returned record. You can specify multiple field clauses.
                </td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>
      </div>
    );
  }
}
