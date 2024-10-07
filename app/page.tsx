import TodoList from '@/components/TodoList';

function Home() {
  return (
    <main className='flex flex-col gap-y-16'>
      <div className=''>
        <div>Today</div>
        <TodoList />
      </div>
      <div className=''>
        <div>Weekly</div>
      </div>
      <div className=''>
        <div>Monthly</div>
      </div>
    </main>
  );
}
export default Home;
