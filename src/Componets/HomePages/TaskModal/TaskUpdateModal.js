import React from 'react';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

const TaskUpdateModal = ({ modalIsOpen, closeModal, task, refetch }) => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { _id, taskName, description } = task;



    //Update 
    const onSubmit = data => {
        console.log(data);

        const url = `https://polar-bastion-06660.herokuapp.com/updateTask/${_id}`;

        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                swal('Update Success', 'Your task updated successfully done', 'success');
                window.location.reload();
                refetch();
            })
            .catch(err => {
                swal('Update fail', 'Please Try Aggain', 'error')
            })
    }

    return (
        <div>
            <Modal
                isOpen={ modalIsOpen }
                onRequestClose={ closeModal }
                // style={ customStyles }
            >
                <div className="row">
                    <div className="col-lg-6 mx-auto card shadow-lg p-4">
                        <h2 className='mt-2 mb-2 text-center fs-5 mb-3'>Please Update Your Diary Task</h2>
                        <form onSubmit={ handleSubmit(onSubmit) }>
                            <div className="row gy-2">
                                <div className="col-lg-12">
                                    <input { ...register("taskName", { required: true }) } type='text' className='form-control' placeholder={ taskName } />
                                    { errors.taskName && <span className='text-danger mt-4'>Task Name is required</span> }
                                </div>
                                <div className="col-lg-12">
                                    <textarea { ...register("description", { required: true }) } type='text' className='form-control' rows="4" placeholder={ description } />
                                    { errors.description && <span className='text-danger mt-4'>Description is required</span> }
                                </div>
                                <div className="col-lg-12">
                                    <input type="submit" className='btn btn-primary mt-3' value='Updade Now' />
                                    <button onClick={ closeModal } className='btn btn-danger mt-3 ms-3'>close</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>



            </Modal>
        </div>
    );
};

export default TaskUpdateModal;