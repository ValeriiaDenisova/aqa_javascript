class ToDoServ {
    async fetchTodo() {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const todo = await response.json();
        return todo;
    }
}

class UserClass {
    async fetchUser() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const todo = await response.json();
        return todo;
    }
}

async function getData () {
    const todoService = new ToDoServ()
    const userService = new UserClass()

    const [todo, user] = await Promise.all([todoService.fetchTodo(), userService.fetchUser()]);
    console.log('Promise.all result:');
    console.log('Todo:', todo);
    console.log('User:', user);

    const firstResult = await Promise.race([todoService.fetchTodo(), userService.fetchUser()]);
    console.log('Promise.race result:', firstResult);
}

getData()