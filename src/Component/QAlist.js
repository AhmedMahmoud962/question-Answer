import React from 'react'
import {Accordion, Row} from 'react-bootstrap'
import {questions} from '../data'

const QAlist = ({data,deletOneItem}) => {

  const dataLocal=JSON.parse(localStorage.getItem("items"))
  // to delete one item from array
  const onDeletOneItem=(ID)=>{
if(localStorage.getItem("items")!=null)
{
  const index=questions.findIndex((item)=>item.id === ID)
questions.splice(index,1)
deletOneItem(questions );
}  
}
  return (
    <Row>
    <Accordion>
    {
     localStorage.getItem("items")!=null? (dataLocal.map((item,index)=>{
return(

  <Accordion.Item key={index} eventKey={item.id}>
        <Accordion.Header> 
        <div className="m-auto"> {item.ques} </div>
        </Accordion.Header>
        <Accordion.Body className="text-end">
        <div className="p-3 d-inline"> {item.Answer}</div>
         <button onClick={()=> onDeletOneItem(item.id)} className="btn btn-danger">مسح</button>
        </Accordion.Body>
      </Accordion.Item>

)
})):<h3 className="text-center p-5"> لا يوجد اسئله الان    </h3>
    }
    </Accordion>
    </Row>
  )
}

export default QAlist 