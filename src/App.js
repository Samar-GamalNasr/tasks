import React, { Fragment, useState } from 'react';

import { Button } from 'antd';
import { Col, Row } from 'antd';

function App() {
  const [myArray, updateMyArray] = useState([]);

  const add = () => {
      updateMyArray( arr => [...arr, `${arr.length}`]);
  };
  const remove= ()=>{
    myArray.pop()
    //console.log(myArray)
    updateMyArray( arr => [...arr])
    
  }

  return (
    <Fragment >
    <Row>
    <Col span={12}>
    <Button type="primary" block onClick={ add } >Add</Button>
    </Col>
    <Col span={12}>
    <Button type="primary" block danger onClick={ remove } >Delete</Button>
    </Col>
    </Row>
    <Row>
    <Col span={6} offset = {12}>
    <ul>{myArray.map( e =>
      <li>{ e }</li>
    )}
    </ul>
    </Col>
    </Row>


      </Fragment>
  );
}


export default App;


