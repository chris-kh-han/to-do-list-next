'use client';
import { createTodo, TodoFormState } from '@/utils/action';
import { useFormStatus, useFormState } from 'react-dom';
import { useState, useEffect } from 'react';

const btnStyle =
  'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded capitalize';
const formStyle = 'flex flex-col gap-y-4  shadow rounded';
const inputStyle = 'border shadow rounded py-2 px-3 text-gray-700';

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type='submit'
      className={btnStyle}
      disabled={pending}
    >
      {pending ? 'submitting...' : 'submit'}
    </button>
  );
};

function Form() {
  const [message, formAction] = useFormState<
    'todo updated successfully...' | 'failed to create todo...' | null,
    FormData
  >(createTodo, null);

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const { pending } = useFormStatus();

  useEffect(() => {
    if (!pending && message === 'todo updated successfully...') {
      setInputValue('');
    }
  }, [pending, message]);

  return (
    <form
      action={formAction}
      className={formStyle}
    >
      <input
        type='text'
        name='todo'
        required
        className={inputStyle}
        placeholder='Enter a new todo...'
        value={inputValue}
        onChange={handleInputChange}
      />
      <SubmitButton />
      {message && <p>{message}</p>}
    </form>
  );
}
export default Form;
