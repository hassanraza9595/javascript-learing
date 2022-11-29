    
    
    
    // DogAPI
    // https://dog.ceo/api/breeds/image/random


    // stuff you don't wait for 
    // console.log('1 Run')

    // let dogImage = document.getElementById('dogImage');

    // stuff you wait for 
    // fetch('https://dog.ceo/api/breeds/image/random')
    // .then(response => response.json())
    // .then(json => {
    //     console.log(json.message);
    //     dogImage.innerHTML = `<img src='${json.message}' />`
    // })

    const dogImageDiv = document.getElementById('dogImage');

    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(json => {
        console.log(json.message);
        dogImageDiv.innerHTML = `<img src='${json.message}' />`

    });


