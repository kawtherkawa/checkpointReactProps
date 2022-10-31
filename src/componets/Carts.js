import React from 'react'
import { Button, Card } from 'react-bootstrap'
import pic from './informaticienne.jpg'
import './profile.css';
import  PropTypes  from 'prop-types';
const Carts = (props) => {
  const HandleName=(name)=>alert( `my name is ${props.name} `)
  return (
    <div className='ContCard' >

      <Card style={{ width: '18rem' }} >
        <Card.Img variant="top" src={pic} />
        {props.children}
        <Card.Body>
          <Card.Title>My Profile</Card.Title>
          <Card.Text>{props.name}

          </Card.Text>
          <Card.Text>
            {props.username}
          </Card.Text>
          <Card.Text>
            {props.age}
          </Card.Text>
          <Card.Text>
            {props.adress}
          </Card.Text>
          <Card.Text>
            {props.email}
          </Card.Text>
          <Button variant="primary" onClick={HandleName}>Submit </Button>
        </Card.Body>
      </Card>
    </div>
  )
}
Carts.propTypes={
  age:PropTypes.number
}
Carts.defaultProps={
  name:"lina"
}
export default Carts
