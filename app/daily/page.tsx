import Form from '@/components/Form';
import TodoList from '@/components/TodoList';

function Daily() {
  return (
    <>
      <div className='mb-8'>{`Add Today's todo`}</div>
      <Form />
      <TodoList />
    </>
  );
}
export default Daily;
