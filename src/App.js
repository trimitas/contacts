
import React from 'react';
import ContactsForm from './components/ContactsForm';
import QuestionTable from './components/QuestionTable';
import MyNavbar from './components/MyNavbar';

function App() {
  return (
    <div className='container'>
      <MyNavbar/>
     <ContactsForm/>
     <QuestionTable/>
    </div>
  )
}

export default App;
