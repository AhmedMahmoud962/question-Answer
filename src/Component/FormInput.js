import React,{useState} from 'react'
import { Row,Form,Col } from 'react-bootstrap'
import {questions} from '../data'
const FormInput = ({onAdd,notify}) => {
    const [stateQues, setQues] = useState('')
    const [stateAnswer, setAnswer] = useState('')
    const addNewItem=()=>{
      if(stateQues === "" || stateAnswer==="")
      {
        notify("من فضلك ادخل البيانات ","Error")
        return;
      }
        //send data
        questions.push({id:Math.random(), ques:stateQues,Answer:stateAnswer})
        // make the in put without data
        setQues('');
        setAnswer('')
        onAdd();
    }
  return (  
   <Row className="my-3">
    
       <Col sm="5">
         <Form.Control value={stateQues} onChange={(e)=>setQues(e.target.value)} type="email" placeholder="ادخل سؤال" />
       </Col>
       <Col sm="5">
         <Form.Control value={stateAnswer} onChange={(e)=>setAnswer(e.target.value)} type="email" placeholder="ادخل الاجابه" />
       </Col>
      <Col sm="2">
      <button onClick={addNewItem} className="btn-color w-100" type="submit">
        اضافه
      </button>
      </Col>
   </Row>
  )
}

export default FormInput