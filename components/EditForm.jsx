'use client';
import { editTask } from '@/utils/actions';

const EditForm = ({ task }) => {
  return (
    <form
      action={editTask}
      className='max-w-sm p-12 border border-base-300 rounded-lg'
    >
      <input type='hidden' name='id' value={task.id} />
      {/* content */}
      <input
        type='text'
        name='content'
        required
        defaultValue={task.content}
        className='input input-bordered w-full'
      />

      {/* completed */}
      <div className='form-control my-4'>
        <label htmlFor='completed' className='label cursor-pointer'>
          <span>completed</span>
          <input
            id='completed'
            name='completed'
            type='checkbox'
            defaultChecked={task.completed}
            className='checkbox checkbox-primary checkbox-sm'
          />
        </label>
      </div>

      <button type='submit' className='btn btn-primary btn-block btn-sm'>
        submit
      </button>
    </form>
  );
};

export default EditForm;
