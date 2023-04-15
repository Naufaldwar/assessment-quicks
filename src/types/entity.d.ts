declare namespace TEntity {
    type Task = {
        id: number;
        title: string;
        description: string;
        status: string
        date: date;

    };

    type TaskList = {
        id: number;
        tasks: Task[] | null;
    };

}