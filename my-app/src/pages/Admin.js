import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { MDBDataTable } from 'mdbreact';

import AdminDetails from '../components/Admin/AdminDetails';
import Graph from '../components/UI/Graph';

const Admin = (props) => {
  const [users, setUsers] = useState([]);
  const [editView, setEditView] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [chosenUser, setChosenUser] = useState({
    email: '',
    firstName: '',
    lastName: '',
    role: '',
    _id: '',
  });
  const socket = io('http://localhost:5000');
  const { email, firstName, lastName, role } = chosenUser;

  if (users === undefined) setUsers([]);
  useEffect(() => {
    async function getUsers() {
      if (!users[0]) {
        try {
          // eslint-disable-next-line
          socket.emit('GET_USERS');
          // eslint-disable-next-line
          socket.on('getUsers_error', (msg) => {
            alert('Getting User Failed on server.');
          });
          // eslint-disable-next-line
          socket.on('getUsers_success', (data) => {
            setUsers([...data]);
          });
        } catch (e) {
          console.log(e);
        }
      }
    }
    getUsers();
  }, []);

  const editHandler = () => {
    setIsEdit(true);
    setEditView(true);
  };

  const onChange = (e) => {
    setChosenUser({ ...chosenUser, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setEditView(false);
    socket.emit('EDIT_USER', { chosenUser, isEdit });
    socket.on('editUser_error', (msg) => {
      alert('Please try again.');
    });
    socket.on('editUser_success', (data) => {
      setUsers([...data]);
    });
  };

  const deleteHanlder = (id) => {
    socket.emit('DELETE_USER', id);
    socket.on('deleteUser_error', (msg) => {
      alert('Delete Failed. Please try again.');
    });
    socket.on('deleteUser_success', (data) => {
      setUsers([...data]);
    });
  };

  const userData = {
    columns: [
      {
        label: 'First Name',
        field: 'firstName',
        sort: 'asc',
        width: 100,
      },
      {
        label: 'Last Name',
        field: 'lastName',
        sort: 'asc',
        width: 100,
      },
      {
        label: 'Role',
        field: 'role',
        sort: 'asc',
        width: 100,
      },
      {
        label: 'Email',
        field: 'email',
        sort: 'asc',
        width: 150,
      },
      {
        label: 'Edit',
        field: 'edit',
        sort: 'asc',
        width: 100,
      },
      {
        label: 'Delete',
        field: 'delete',
        sort: 'asc',
        width: 100,
      },
    ],
    rows: users.map((user) => {
      return {
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
        email: user.email,
        edit: (
          <button
            onClick={() => {
              setChosenUser({
                firstName: user.firstName,
                lastName: user.lastName,
                role: user.role,
                email: user.email,
                _id: user._id,
              });
              editHandler();
            }}
            className='Button_inner'
          >
            Edit
          </button>
        ),
        delete: (
          <button
            onClick={() => deleteHanlder(user._id)}
            className='Button_inner'
          >
            Delete
          </button>
        ),
      };
    }),
  };

  return (
    <div>
      <br />
      <br />
      <br />
      <h1>Admin Tutorial</h1>
      <AdminDetails></AdminDetails>
      <Graph products={props.products} />
      <div className='table'>
        {!editView && (
          <div>
            <MDBDataTable hover striped bordered small data={userData} />
          </div>
        )}
        {editView && (
          <div className='addUser'>
            <h2>{isEdit ? 'Edit User' : 'Add User'}</h2>
            <form className='editView' onSubmit={onSubmit}>
              <span onClick={() => setEditView(false)}>X</span>
              <div className='input-group'>
                <label htmlFor='firstName'>First Name</label>
                <input
                  type='text'
                  style={{ color: 'black' }}
                  name='firstName'
                  id='firstName'
                  value={firstName}
                  onChange={onChange}
                />
              </div>
              <div className='input-group'>
                <label htmlFor='lastName'>Last Name</label>
                <input
                  type='text'
                  style={{ color: 'black' }}
                  name='lastName'
                  id='lastName'
                  value={lastName}
                  onChange={onChange}
                />
              </div>
              <div className='input-group'>
                <label htmlFor='email'>Email</label>
                <input
                  type='text'
                  id='email'
                  value={email}
                  name='email'
                  onChange={onChange}
                />
              </div>
              <div className='input-group'>
                <label htmlFor='role'>Role</label>
                <input
                  type='text'
                  id='role'
                  value={role}
                  name='role'
                  onChange={onChange}
                />
              </div>
              <input type='submit' className='submit' value='Update' />
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
