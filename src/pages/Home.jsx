import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Hometable from '../components/Hometable'
import LoadingSpinner from '../components/LoadingSpinner'
import { allUsers, deleteUser } from '../services/AllApi'
import { deleteContext, registerContext } from './Contextshare'
import { Alert } from 'react-bootstrap'




function Home() {

  const{registerdata,setRegisterData}=useContext(registerContext)

  const{removedata,setRemoveData}=useContext(deleteContext)
  
  const[showspin,setshowspin]=useState(true)
  const[allUserData,setallUserData]=useState([])

  const[search,setSearch]=useState("")

  const {id}=useParams()

  console.log(id);

  useEffect(() => {

    getAllEmployes()

    setTimeout(() => {
      setshowspin(false)
    }, 2000);
    
  }, [search])


  // to get all data, call allusers function

  const getAllEmployes=async()=>{
    const response=await allUsers(search)
    console.log(response);
    setallUserData(response.data)
  }

  // to delete a single data

  const removeUser=async(id)=>{
    const response= await deleteUser(id)

    if(response.status===200){
      setRemoveData(response.data)
      getAllEmployes()
      
    }else{

      alert("operation failed!!! Please try after sometime")
    }
  }
  
  return (

    <>

    {
      registerdata&&<Alert variant='success'onClose={()=>setRegisterData("")} dismissible>

        {registerdata.fname.toUpperCase()} registered successfully.....
        
      </Alert>
    }

    {
      removedata&&<Alert variant='warning' onClose={()=>setRemoveData("")} dismissible>

        {removedata.fname.toUpperCase()} Deleted successfully

      </Alert>
    }
    

    {
      showspin?

      <LoadingSpinner/>:

    <div className='container'>

      <div className='search-all d-flex align-items-center'>

        <div className='search d-flex align-items-center mt-5'>

          <span className='fw-bolder'> Search:</span>
          <input type="text" onChange={e=>setSearch(e.target.value)} placeholder='Search By Employee Name' className='form-control ms-3' style={{width:'400px'}} />

        </div>

        <Link to={'/add'} className='btn btn-warning ms-auto mt-5'><i class="fa-solid fa-user-plus"></i>Add</Link>

      </div>

      <div className='table mt-5'>

        <h1 className='fw-bolder'>List of All Employees</h1>

        <Hometable displayData={allUserData} removeuser={removeUser}/>

      </div>

    </div>
    }

    </>
  )
}

export default Home