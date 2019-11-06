import React from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

export default function RemoteMathod() {
  return (
    <div className='container'>
      <div className='mx-2'>
        <h1 className='text-center'> Remote Mathod</h1>
        <h4>What's a remote mathod</h4>
        <p>
          Remote methods is a way to add custom endpoints to existing models in
          your Loopback API.
        </p>
        <h4>How to add remote mathod </h4>
        <h6>Step 1:</h6>
        <p>
          <b>Declare Remote mathod</b>
        </p>
        <p>There is two way to add remote mathod in loopback model</p>
        <p>Add remote mathod into model.json file</p>
       
          <LiveProvider
            code='"methods":{
            "OrderReport": {//Name of method
              "accepts": [ //Accept following arguments
                {
                  "arg": "isYear",
                  "type": "string",
                  "required": true,
                  "description": "Report for year or a month",
                  "http": {"source": "query"}
                },
                {
                  "arg": "startDate",
                  "type": "date",
                  "required": true,
                  "description": "Starting date",
                  "http": {"source": "query"}
                }
              ],
              "returns": [{
                 "arg": "Response",
                  "type": "object",
                  "root": true,
                  "description": "Response"
                }],
              "description": "This will Return Report Of Orders",
              "http": [{
                  "path": "/OrderReport",
                  "verb": "get"
                }]
            }'>
            <LiveEditor />
          </LiveProvider>
       
      </div>
    </div>
  );
}
