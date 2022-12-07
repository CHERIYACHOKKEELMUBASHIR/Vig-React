import React from 'react'
import { useState, useEffect } from 'react'
import njson from './res.json'
import { useParams } from 'react-router-dom'
import { Row, Col, ListGroup, Image } from 'react-bootstrap'



function RestaurentDetails() {

    const [data, setData] = useState([])

    const params = useParams()

    useEffect(() => {
        setData(njson.restaurants)
    }, [])
    console.log("all datas:", data)
    console.log("params:", params.id)

    const details = data.find((i) => i.id == params.id)
    console.log("detailed:", details)

    return (
        <>{

            details ?
                (
                    <Row>
                        <Col md={3}>
                            <img className='img pt-4' src={details.photograph1} alt={details.name} style={{ height: '400px', width: '400px' }} fluid />
                        </Col>
                        <Col md={4} className>
                            <ListGroup>
                                <ListGroup.Item>
                                    <h2>{details.name}</h2>
                                    <p>{details.description}</p>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <h2>{details.address}</h2>
                                    <p>cuisine_type:{details.cuisine_type}</p>
                                </ListGroup.Item>
                            </ListGroup>
                            </Col>
                            <Col md={4} className>
                            
                            <ListGroup>
                                <ListGroup.Item>
                                    <h4>Operating Hours</h4>
                                    <p>Monday:{details.operating_hours.Monday}</p>
                                    <p>Tuesday:{details.operating_hours.Tuesday}</p>
                                    <p>Wednesday:{details.operating_hours.Wednesday}</p>
                                    <p>Thursday:{details.operating_hours.Thursday}</p>
                                    <p>Friday:{details.operating_hours.Friday}</p>
                                    <p>Saturday:{details.operating_hours.Saturday}</p>
                                    <p>Sunday:{details.operating_hours.Sunday}</p>

                                </ListGroup.Item>
                            </ListGroup>
                            </Col>

                    </Row>) : 'null'
        } </>
    )

}

export default RestaurentDetails