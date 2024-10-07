import { fetchTodos } from '@/utils/action';
import { Todo } from '@/utils/types';
import RemoveButton from './RemoveButton';

function formatDate(date: Date): string {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const month = months[date.getMonth()];
  const day = date.getDate().toString().padStart(2, '0');
  const year = date.getFullYear().toString().slice(-2);
  return `${month}/${day}/${year}`;
}

async function TodoList() {
  const todos: Todo[] = await fetchTodos();

  const today = new Date();
  const formattedDate = formatDate(today);

  return (
    <div className='mt-8'>
      <div className='flex justify-between mb-4'>
        <span className='font-bold'>{`Today's to-do list`}</span>
        <span className='ml-2 text-sm text-gray-500'>{formattedDate}</span>
      </div>

      {todos.length > 0 ? (
        <>
          <ul className='list-disc list-inside'>
            {todos.map((todo) => {
              return (
                <li
                  key={todo.id}
                  className='flex justify-between my-2'
                >
                  {todo.todo} <RemoveButton id={todo.id} />
                </li>
              );
            })}
          </ul>
        </>
      ) : (
        <div>No todos found...</div>
      )}
    </div>
  );
}

export default TodoList;
