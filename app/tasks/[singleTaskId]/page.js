import EditForm from '@/components/EditForm';
import { getTask } from '@/utils/actions';
import Link from 'next/link';
import React from 'react';

const SingleTaskPage = async ({ params }) => {
  const task = await getTask(params.singleTaskId);
  return (
    <>
      <div className='mb-16'>
        <Link href={'/tasks'} className='btn btn-accent'>
          back to tasks
        </Link>
        <EditForm task={task} />
      </div>
    </>
  );
};

export default SingleTaskPage;
