import React from 'react'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'


function Restaurent({item}) {
    console.log("ITEM:",item);
    
  return (
    <Link to={`details/${item.id}`}>
    <Card className = 'my-3 p-3 rounded cards' style={{width:'20rem',height:'60rem'}}>
        <Card.Img variant="top" src={item.photograph1}/>
        <Card.Body>
            <Card.Text>{item.name}</Card.Text>
            <Card.Text>
                {item.description}
            </Card.Text>
        </Card.Body>
    </Card>
    </Link>
  )
}

export default Restaurent