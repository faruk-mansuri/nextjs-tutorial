import prisma from '@/utils/db';

const prismaHandlers = async () => {
  console.log('prisma example');

  // await prisma.task.create({
  //   data: {
  //     content: 'morning walk',
  //   },
  // });

  const allTasks = await prisma.task.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return allTasks;
};

const PrismaExample = async () => {
  const tasks = await prismaHandlers();

  if (tasks.length < 1) {
    return <h1 className='text-lg mt-8 font-medium'>No task to show...</h1>;
  }

  if (tasks.length < 1) {
    return <h1 className='text-lg mt-8 font-medium'>No task to show...</h1>;
  }

  return (
    <div>
      <h1 className='text-7xl'>Prisma Example Page</h1>
      {tasks.map((task) => {
        return (
          <h2 className='text-xl py-2' key={task.id}>
            👍{task.content}
          </h2>
        );
      })}
    </div>
  );
};

export default PrismaExample;
