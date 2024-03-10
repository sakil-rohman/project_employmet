import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useNavigate  } from 'react-router-dom';

function Ministry_view() {
    const [ministers, setMinisters] = useState([]);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const { id } = useParams();
    const history = useNavigate();

    const getMinisters = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/ministry/');
            setMinisters(response.data);
        } catch (error) {
            console.error('Error fetching ministers:', error);
        }
    };

    useEffect(() => {
        getMinisters();
    }, []);

    const deleteMinistry = async (id) => {
        try {
            await axios.delete(`http://127.0.0.1:8000/api/ministry/${id}/`);
            setSuccessMessage('Ministry deleted successfully.');
        } catch (error) {
            setErrorMessage('Failed to delete ministry.');
            console.error('Error deleting ministry:', error);
        } finally {
            // Regardless of success or failure, reload ministers data
            getMinisters();
        }
    };
    useEffect(() => {
      if (id)(
      deleteMinistry()
      )

  }, [id])

    return (
        <>
            {successMessage && <div className='alert alert-success'>{successMessage}</div>}
            {errorMessage && <div className='alert alert-danger'>{errorMessage}</div>}
            <Link to='/ministry-add'>
                <button className='btn btn-success m-3 ml-5'>Add <FontAwesomeIcon icon={faUserPlus} /></button>
            </Link>
            <div className='container w-100'>
                <Table striped bordered hover>
                    <thead>
                        <tr className='text-center'>
                            <th scope='col'>Name</th>
                            <th scope='col'>Title</th>
                            <th scope='col'>Photo</th>
                            <th scope='col'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ministers.map((minister, index) => (
                            <tr key={index}>
                                <td>
                                    <div className='d-flex align-items-center'>
                                        <p className='fw-bold mb-1'>{minister.name}</p>
                                    </div>
                                </td>
                                <td>
                                    <p className='fw-normal mb-1'>{minister.title}</p>
                                </td>
                                <td>
                                    <img src={minister.image} style={{ width: '50px', height: '50px' }} className='rounded-circle' alt='Minister' />
                                </td>
                                <td>
                                    <div className='row text-center'>
                                        <div className='col-sm-6'>
                                            <Link className='btn btn-primary m-2' to={`/${minister.id}/ministry-edit`}>
                                                <FontAwesomeIcon icon={faEdit} />
                                            </Link>
                                        </div>
                                        <div className='col-sm-6'>
                                            <button className='btn btn-danger m-2' onClick={() => deleteMinistry(minister.id)}>
                                                <FontAwesomeIcon icon={faTrashAlt} />
                                            </button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </>
    );
}

export default Ministry_view;
