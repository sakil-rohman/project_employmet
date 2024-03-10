import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Row, Col, Card , Breadcrumb, Table } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLayerGroup, faCircleQuestion, faPersonChalkboard, faBookOpenReader, faIcons, faDownload, faMagnifyingGlassChart, faHandHoldingDollar, faUsersViewfinder, faPeopleGroup,faEdit, faTrashAlt,faUserPlus  } from '@fortawesome/free-solid-svg-icons'
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useNavigate  } from 'react-router-dom';



import Header from './Header'
import FooTer from './Footer'
import '../../index'
import '../../App2.css'

function Resources_view() {
 
    const [aboutuss, setAboutUs] = useState([])
    const {id}=useParams();
    const history = useNavigate();
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const getAboutUs = async() => {
    const response = await axios.get('http://127.0.0.1:8000/api/resources/')
    setAboutUs(response. data)
    }
    useEffect(() =>{
      getAboutUs();
    }, [])
 const getSingleAboutUs = async () =>{
        const {data} = await axios.get(`http://127.0.0.1:8000/api/resources/${id}`)
        console.log(data)
        setAboutUs(data)
    }
    useEffect(() =>{
      if(id)(
        getSingleAboutUs()

      )
    }, [id])

  //   const deleteAboutUs = async (id) =>{
  //     await axios.delete(`http://127.0.0.1:8000/api/resources/${id}/`)
  //     history('/resources-view');
  //     window.location.reload(false);
  // }
  const deleteAboutUs = async (id) => {
    try {
        await axios.delete(`http://127.0.0.1:8000/api/resources/${id}/`);
        setSuccessMessage('Resources deleted successfully.');
    } catch (error) {
        setErrorMessage('Failed to delete ministry.');
        console.error('Error deleting ministry:', error);
    } finally {
        // Regardless of success or failure, reload ministers data
        getAboutUs();
    }
};
useEffect(() => {
  if (id)(
    deleteAboutUs()
  )

}, [id])
    return (
       
        <>
        {successMessage && <div className='alert alert-success'>{successMessage}</div>}
            {errorMessage && <div className='alert alert-danger'>{errorMessage}</div>}
        <h1>Resources</h1>
        <Link to='/resources-add'>
        <button className='btn btn-success m-3 ml-5' >Add   <FontAwesomeIcon icon={faUserPlus} /> </button>

        </Link>
       <div className='container w-100'>
       <Table striped bordered hover>
      <thead>
        <tr className='text-center'>
          <th scope='col'>Title</th>
          <th scope='col'>Heading</th>
          <th scope='col'>Description</th>
          <th scope='col'>Actions</th>
        </tr>
      </thead>
      <tbody>
      {
       aboutuss.map((aboutus, index) => (
        <tr>
          <td>
            <div className='d-flex align-items-center'>
              
              
                <p className='fw-bold mb-1'>{aboutus.title}</p>
                
              
            </div>
          </td>
          <td>
            <div className='d-flex align-items-center'>
              
              
                <p className='fw-bold mb-1'>{aboutus.heading}</p>
                
              
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1' dangerouslySetInnerHTML={ {__html: aboutus.description }}></p>
           </td>
           <td>
          <div className='row text-center'>
          <div className='col-sm-6'>
          
          <Link className="btn btn-primary m-2" to={`/${aboutus.id}/resources-edit`}> <FontAwesomeIcon icon={faEdit} /> </Link>
          
          </div>
          <div className='col-sm-6'>
            
          <Link className= "btn btn-danger m-2" onClick={() => deleteAboutUs(aboutus.id)}><FontAwesomeIcon icon={faTrashAlt} />  </Link>
          
          </div>
          </div>        
          </td>
        </tr>
         ))

        }
        
      </tbody>
    </Table>
</div>
        </>
    )
}
    

export default Resources_view