import React from 'react'
import {useState,useEffect} from 'react'
import {Row,Col} from 'react-bootstrap'
import Restaurent  from './Restaurent'
import Resdata from './res.json'

function Dashboard() {
    
    const [data,setData]=useState([])
    // const testdata=async()=>{
    //     await fetch('./res.json')
    //     .then((res)=>res.json())
    //     .then((dta)=>setData(dta.restaurants))

    // }
    useEffect(()=>{
        // testdata()
        setData(Resdata.restaurants)
    },[])
console.log ("data:",data)
  return (
  <Row>
    {
        data.map((item)=>(
            <Col sm={12} md={8} lg={6} xl={3}>
            <Restaurent item={item}/>
            </Col>
        ))
    }
  </Row>
  )
}

export default Dashboard