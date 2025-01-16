const apiUrl = 'http://localhost/ventas_Web/api/';

async function fetchData(endpoint, options = {}) {
    const response = await fetch(apiUrl + endpoint, options);
    return response.json();
}

async function createData(data) {
    return await fetchData('create.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
}

async function readData(id) {
    return await fetchData(`read.php?id=${id}`);
}

async function updateData(id, data) {
    return await fetchData('update.php', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id, ...data })
    });
return response.json();
}

async function deleteData(id) {
    return await fetchData('delete.php', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id })
    });
}

// Example usage
(async () => {
    const newData = { name: 'Product 1', price: 100 };
    const created = await createData(newData);
    console.log('Created:', created);

    const read = await readData(created.id);
    console.log('Read:', read);

    const updated = await updateData(created.id, { price: 150 });
    console.log('Updated:', updated);

    const deleted = await deleteData(created.id);
    console.log('Deleted:', deleted);
})();
