import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import { get } from 'react-hook-form';

function AxiosCrud2() {
    const [data, setData] = useState([])
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [uname, usetName] = useState('')
    const [uemail, usetEmail] = useState('')
    const [editId, setEditID] = useState(-1)
    const [selectedUser, setSelectedUser] = useState({});
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const handleShow = (user) => {
        setSelectedUser({ ...user })
        setShow(true);
    }
const getusers=()=>
{
    axios.get('http://localhost:4004/users')
    .then(res => setData(res.data))
    .catch(er => console.log(er));

}
    useEffect(() => {
        getusers();
    }, [])
    const handleSubmit = (event) => {
        event.preventDefault();
        const id = data.length + 1;
        axios.post('http://localhost:4004/users', { id: id, name: uname, email: uemail })
            .then(res => {
                getusers();
            })
            .catch(er => console.log(er));
    }
    const handleEdit = (id) => {
        axios.get('http://localhost:4004/users/' + id)

            .then(res => {
                console.log(res.data)
                usetName(res.data.name)
                usetEmail(res.data.email)
            })
            .catch(er => console.log(er));

        setEditID(id)
    }
    const handleUpdate = () => {
        axios.put('http://localhost:4004/users' + editId, { id: editId, name: uname, email: uemail })
            .then(res => {
                console.log(res);
                Location.reload();
                setEditID(-1);
            }).catch(err => console.log(err));
    }
    const handleDelete = (id) => {
        axios.delete('http://localhost:4004/users/' + id)
            .then(res => {
                getusers();
            })
            .catch(er => console.log(er));
    }
    return (

        <div className='container'>
            <div>
                <form onSubmit={handleSubmit} >
                    <input type='text' placeholder='Enter name' onChange={e => usetName(e.target.value)} />
                    <input type='text' placeholder='Enter email' onChange={e => usetEmail(e.target.value)} />
                    <button className='btn btn-success' >Add</button>
                </form>
            </div>
            <table className='container table  table-bordered table-striped table-hover'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((user, index) => (
                            user.id === editId ?
                                <tr>
                         <td>{user.id}</td>
                     <td><input type='text' value={uname} onChange={e => setName(e.target.value)} /></td>
                    <td><input type='text' value={uemail} onChange={e => setEmail(e.target.value)} /></td>
                  <td><button onClick={handleUpdate}>Update</button></td>
                                </tr>
                                :
                                <tr key={index}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td><Modal show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>employee Details</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                             <h3 class="card-title">{selectedUser.id}</h3>
                                            <p class="card-text">{selectedUser.name}</p>
                                            <p class="card-text">{selectedUser.email}</p>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={handleClose}>
                                                Close
                                            </Button>
                                            <Button variant="primary" onClick={handleClose}>
                                                Save Changes
                                            </Button>
                                        </Modal.Footer>

                                    </Modal>
                                        <Button onClick={() => { handleShow(user) }}>View</Button>
                    <button className='btn btn-success m-1' onClick={() => handleEdit(user.id)}>Edit</button>
                 <button className='btn btn-danger ' onClick={() => handleDelete(user.id)}>Delete</button></td>
                                </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>


    )
}


export default AxiosCrud2
