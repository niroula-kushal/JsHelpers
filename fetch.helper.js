function handleFetchStatus(response) {
    return response.json().then(r => {
        if (response.ok) return r;
        else throw r;
    });
}
