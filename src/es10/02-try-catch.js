try {
    hello();
} catch (error) {
    console.log(error);
}

try {
    anotherFn();
} catch {
    console.log('Hay un error!');
}