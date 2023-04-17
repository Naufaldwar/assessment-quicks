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

    type Chatlist = {
        id: number;
        name: string;
        messages: Messasges[] | null;
    };

    type Messages = {
        id: number;
        sender: string;
        text: string;
        date: date;
    };
}