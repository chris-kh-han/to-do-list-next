'use server';
import { readFile, writeFile } from 'fs/promises';
// import { Todo } from './types';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import prisma from '@/utils/db';

export type Todo = {
  id: string;
  todo: string;
  done: boolean;
};

export const fetchTodos = async (): Promise<Todo[]> => {
  const result = await prisma.todo.findMany();
  return result;
};

export const saveTodo = async (todo: Todo) => {
  await prisma.todo.create({
    data: {
      todo: todo.todo,
      done: todo.done,
    },
  });
};

// export const createTodo = async (
//   prevState: 'todo updated successfully...' | 'failed to create todo...' | null,
//   formData: FormData,
// ): Promise<
//   'todo updated successfully...' | 'failed to create todo...' | null
// > => {
//   // console.log(prevState);
//   await new Promise((resolve) => setTimeout(resolve, 2000));
//   const todo = formData.get('todo') as string;

//   const newtodo: Todo = {
//     todo,
//     id: Date.now().toString(),
//   };

//   try {
//     await saveTodo(newtodo);
//     revalidatePath('/daily');
//     return 'todo updated successfully...';
//   } catch (error) {
//     console.log(error);
//     return 'failed to create todo...';
//   }

//   // redirect('/');
// };
export type TodoFormState = {
  message: string | null;
};

export async function createTodo(
  prevState: 'todo updated successfully...' | 'failed to create todo...' | null,
  formData: FormData,
): Promise<'todo updated successfully...' | 'failed to create todo...' | null> {
  try {
    const todo = formData.get('todo') as string;

    await prisma.todo.create({
      data: {
        todo: todo,
        done: false,
      },
    });

    revalidatePath('/prisma-example');
    // redirect('/prisma-example');
    return 'todo updated successfully...';
  } catch (error) {
    console.error('Failed to create todo:', error);
    return 'failed to create todo...';
  }
}

export const deleteTodo = async (id: string) => {
  await prisma.todo.delete({
    where: {
      id: id,
    },
  });
  revalidatePath('/prisma-example');
};
