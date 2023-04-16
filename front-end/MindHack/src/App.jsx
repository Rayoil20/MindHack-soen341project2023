import Upload from "./upload";
import Edit_Profile from "./edit_profile";
import Admin_Manage from "./admin_profile_manage";
import SignIn from "./login";
import SignupPage from "./signup";
import Homepage from "./homepage";
import PersonalProfile from "./profile";
import Jobs from "./jobs";
import Employer_posting from "./employer_posting";
import {Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";


function App() {
  return (
      <div>
          <Navbar/>
       <Routes>
           <Route path='/' element={<Homepage/>}/>
           <Route path='/profile' element={<PersonalProfile/>}/>
           <Route path='/upload' element={<Upload/>}/>
           <Route path='/admin_manage' element={<Admin_Manage/>}/>
           <Route path='/job' element={<Jobs/>}/>
           <Route path='/employer_post' element={<Employer_posting/>}/>
           <Route path='/edit_profile' element={<Edit_Profile/>}/>
           <Route path='/login' element={<SignIn/>}/>
           <Route path='/signup' element={<SignupPage/>}/>
       </Routes>
      </div>
  );
}

export default App;
