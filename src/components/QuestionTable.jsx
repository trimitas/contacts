import {useState,useEffect} from 'react';
import { collection,getDocs } from 'firebase/firestore';
import { db } from '../firebase';

import Table from 'react-bootstrap/Table';

const QuestionTable = () => {
    const [questions,setQuestions]= useState([]);


    const getDataFromFirestore = async ()=>{
        const querySnapshot = await getDocs(collection(db,'clientsReq'));
        const tempQuestion = querySnapshot.docs.map((doc)=>(
            {
                id:doc.id,
                ...doc.data()
            }));
            console.log(tempQuestion);
            setQuestions(tempQuestion)
        
    }

    useEffect(()=>{
        getDataFromFirestore();

    },[]);

    console.log(questions);
  return (
    <Table striped bordered hover size="sm">
    <thead>
        <tr>
            <th>#</th>
            <th>Client Name</th>
            <th>Question</th>
        </tr>
    </thead>
    <tbody>
        {questions && questions.map((oneQuestion, index) => (
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{oneQuestion.name}</td>
                <td>{oneQuestion.client_message}</td>
            </tr>
        )

        )}
    </tbody>
</Table>
  )
}

export default QuestionTable