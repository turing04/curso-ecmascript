const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve('Hey!');
        } else {
            let whoop = 'Whooops!';
            reject(whoop);
        }
    })
}

anotherFunction()
    .then(res => console.log(res))
    .catch(err => console.log(err + 'oooo'))
    .finally(() => console.log('Finnaly'));
