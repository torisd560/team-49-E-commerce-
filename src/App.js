import { initializeApp } from "firebase/app";
import firebaseConfig from './Firebase/firebase.config'
import { getFirestore } from "firebase/firestore";

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import AttachmentContainer from "./Components/Attachment/AttachmentContainer/AttachmentContainer";


function App() {

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app)

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={< Login />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='attachment' element={<PrivateRoute>
            <AttachmentContainer db={db} />
          </PrivateRoute>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
