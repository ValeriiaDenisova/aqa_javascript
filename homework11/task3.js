async function fetchTodo() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const todo = await response.json();
    return todo;
}

async function fetchUser() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const todo = await response.json();
    return todo;
}

async function getData() {
    const [todo, user] = await Promise.all([fetchTodo(), fetchUser()]);
    console.log('Promise.all result:');
    console.log('Todo:', todo);
    console.log('User:', user);

    const firstResult = await Promise.race([fetchTodo(), fetchUser()]);
    console.log('Promise.race result:', firstResult);
}

getData();