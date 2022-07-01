import { faPenToSquare, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import swal from 'sweetalert';
import TaskUpdateModal from './TaskModal/TaskUpdateModal';

const TaskCart = ({ task2, task, refetch }) => {
    const { taskName, description, _id } = task2;

    //===============================Update task value===============================

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    //===============================Update task===============================

    //Delete Task
    const handleDeleteTask = id => {
        const deleteTask = window.confirm("Do You want to delete it?");
        if (deleteTask) {
            const url = `https://polar-bastion-06660.herokuapp.com/deleteTask/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    swal('Task Delete success', 'Your Task  deleted successfully done', 'success');
                    refetch();
                })
        }
    }


    return (
        <div>
            <div className='col-lg-6 mx-auto'>
                <div className="shadow p-4">
                    <div className="row gy-2">
                        <div className="col-lg-6">
                            <h3 className='fs-5'>{ taskName }</h3>
                            <p>{ description }</p>
                        </div>
                        <div className="col-lg-3 offset-lg-2">
                            <div className="crud-operation mt-2">
                                <FontAwesomeIcon icon={ faPenToSquare } className='text-primary fs-4 me-3' style={ { cursor: 'pointer' } } onClick={ openModal }></FontAwesomeIcon>
                                <FontAwesomeIcon icon={ faTrashAlt } className='text-danger fs-4' style={ { cursor: 'pointer' } } onClick={ () => handleDeleteTask(_id) }></FontAwesomeIcon>
                            </div>
                        </div>
                    </div>

                    <TaskUpdateModal modalIsOpen={ modalIsOpen } closeModal={ closeModal } task={ task2 } refetch={ refetch }></TaskUpdateModal>
                </div>
            </div>
        </div>
    );
};

export default TaskCart;