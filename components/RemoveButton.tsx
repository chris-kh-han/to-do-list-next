import { deleteTodo } from '@/utils/action';
import { Trash2 } from 'lucide-react';

function RemoveButton({ id }: { id: string }) {
  const deleteTodoWithId = deleteTodo.bind(null, id);
  return (
    <form action={deleteTodoWithId}>
      <input
        type='hidden'
        name='id'
      />
      <button type='submit'>
        <Trash2 className='text-red-500' />
      </button>
    </form>
  );
}
export default RemoveButton;
