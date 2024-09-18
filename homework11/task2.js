function fetchTodo() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => {
            if (!response.ok) {
                throw new Error('todo response not ok');
            }
            return response.json();
        })
        .catch(error => {
            console.error('Error getting todo:', error);
        });
}

function fetchUser() {
    return fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => {
            if (!response.ok) {
                throw new Error('user response not ok');
            }
            return response.json();
        })
        .catch(error => {
            console.error('Error getting users:', error);
        });
}

// Масив з промісами
const promises = [fetchTodo(), fetchUser()];

// Використовуємо Promise.all
Promise.all(promises)
    .then(results => {
        const [todo, user] = results;  // Присвоюємо значення отриманих результатів змінним
        console.log('Promise.all results:');
        console.log('Todo:', todo);
        console.log('User:', user);
    })
    .catch(error => {
        console.error('Error in Promise.all:', error);
    });

// Використовуємо Promise.race
Promise.race(promises)
    .then(result => {
        console.log('Promise.race result:', result);  // Перший завершений проміс
    })
    .catch(error => {
        console.error('Error in Promise.race:', error);
    });
