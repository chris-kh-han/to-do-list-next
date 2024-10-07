import Form from '@/components/Form';
import prisma from '@/utils/db';

const prismaHandlers = async () => {
  // await prisma.todo.create({
  //   data: {
  //     todo: 'wake up',
  //     done: false,
  //   },
  // });

  const allTodos = await prisma.todo.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  return allTodos;
};

async function PrismaExample() {
  const todos = await prismaHandlers();

  return (
    <div>
      <h1>Prisma Example</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.todo}</li>
        ))}
      </ul>
      <Form />
    </div>
  );
}
export default PrismaExample;
