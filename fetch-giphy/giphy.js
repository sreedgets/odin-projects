const img = document.querySelector('img');



async function getCats() {
    const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=mx9J8TykPb0Nm2w2sCG09NRQrUjeCgSJ&s=cats', {mode:'cors'});
    const gif = await response.json();
    img.src = gif.data.images.original.url;
}

getCats();

/*
fetch('https://api.giphy.com/v1/gifs/translate?api_key=mx9J8TykPb0Nm2w2sCG09NRQrUjeCgSJ&s=cats', {mode:'cors'})
    .then( response => {
        return response.json();
    })
    .then(response => {
        img.src = response.data.images.original.url;
    });
    */