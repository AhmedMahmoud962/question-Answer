import './index.css';
import {Container, Row,Col} from 'react-bootstrap'
import FormInput from './Component/FormInput'
import QAlist from './Component/QAlist'
import React, {useState} from 'react'
import {questions} from './data'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {

  const [data, setdata] = useState(questions);
  //to add new item
const addItem=()=>{
localStorage.setItem("items",JSON.stringify([...questions]))
  setdata([...questions]); 
  notify("تم الاضافه بنجاح" ,"Success")

}
// to delete all data item 
const deleteAllItem=()=>{
localStorage.removeItem("items")
  questions.splice(0,questions.length);
  setdata([]); 
  notify("تم حذف الكل بنجاح" ,"Success")

}
// to delete one  item from array
const deletOneItem=(items)=>{
localStorage.setItem("items",JSON.stringify([...items]))
  setdata([...items]); 

  if(items.length <=0)
  {
    deleteAllItem();
  }
  notify("تم حذف السؤال بنجاح" ,"Success")


}

// to push Notification
const notify = (message,type) => {
  if(type === "Error")
  toast.error(message);
else if(type === "Success")
toast.success(message);

}

  return (
  <div className="font text-center color-body">
  <Container className="p-5 ">
<Row className="justify-content-center">
  <Col sm="4">
<div className="fs-3 text-center my-2 ">اسئله واجوبه شائعه</div>
  </Col>
  <Col sm="8">
 <FormInput onAdd={addItem} notify={notify}/>
 <QAlist data={data} deletOneItem={deletOneItem}/>
 {
  localStorage.getItem("items")!=null?(<button  onClick={deleteAllItem}
  className="btn-color w-100 my-2">مسح الكل </button>): null
 }
  </Col>
</Row>
 <ToastContainer />
</Container>

  </div>
  )
}

export default App
