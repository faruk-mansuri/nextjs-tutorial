'use client';
import { deleteTask } from '@/utils/actions';
import { useFormStatus } from 'react-dom';

const SubmitBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button className='btn  btn-xs btn-error'>
      {pending ? 'deleting...' : 'delete'}
    </button>
  );
};
const DeleteForm = ({ id }) => {
  return (
    <form action={deleteTask}>
      <input type='text' hidden name='id' defaultChecked={id} />
      <SubmitBtn />
    </form>
  );
};

export default DeleteForm;
