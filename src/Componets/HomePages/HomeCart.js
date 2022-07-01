import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import swal from 'sweetalert';
import TaskData from './TaskData';

const HomeCart = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();


    const onSubmit = data => {
        const url = 'https://polar-bastion-06660.herokuapp.com/addData';

        fetch(url, {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                window.location.reload();
                swal('Task add success', 'Your Task  added successfully done', 'success');
                reset();
            })
            .catch(err => {
                swal('Task add Fail', 'Your Task  added fail try aggain', 'error');
            })
    }



    return (
        <div className='container mt-5 mb-5'>

            <div className="row">
                <div className="col-lg-6 mx-auto card shadow-lg p-4">
                    <h2 className='mt-2 mb-2 text-center fs-5 mb-3'>Please Add Your Diary Task</h2>
                    <form onSubmit={ handleSubmit(onSubmit) }>
                        <div className="row gy-2">
                            <div className="col-lg-12">
                                <input { ...register("taskName", { required: true }) } type='text' className='form-control' placeholder='Task Name' />
                                { errors.taskName && <span className='text-danger mt-4'>Task Name is required</span> }
                            </div>
                            <div className="col-lg-12">
                                <textarea { ...register("description", { required: true }) } type='text' className='form-control' rows="4" placeholder='Write description' />
                                { errors.description && <span className='text-danger mt-4'>Description is required</span> }
                            </div>
                            <div className="col-lg-12">
                                <input type="submit" className='btn btn-primary mt-3' value='Add Task' />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="task-data">

                <TaskData></TaskData>
            </div>
        </div>
    );
};

export default HomeCart;