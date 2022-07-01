import React, { useEffect, useState } from 'react';
import TaskCart from './TaskCart';
import { useQuery } from 'react-query';

const TaskData = () => {

    const { isLoading, error, data: task, refetch } = useQuery('task', () => fetch('https://polar-bastion-06660.herokuapp.com/allDataInformation')
        .then(res => res.json()))


    if (isLoading) {
        return <p className='text-center mt-5'>Loading...</p>
    }

    return (
        <div className='container mt-5 mb-5'>
            <h2 className='mb-3 fs-6 text-center'>My show all Task</h2>
            <div className="row">
                {
                    task.map(task2 => <TaskCart task2={ task2 } key={ task2._id } task={ task } refetch={ refetch }></TaskCart>)
                }
            </div>
        </div>
    );
};

export default TaskData;