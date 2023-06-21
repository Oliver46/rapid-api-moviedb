fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=game', {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '207ea59bc2msha2fd5303c2e638fp122f05jsn7b8c72a0a61f',
            'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
        }
})


.then(response => response.json())
.then(data => {
    console.log(data);
    const list = data.d;
    list.map((item) => {
        console.log(item);
        const name = item.l;
        const poster = item.i.imageUrl;
        const year = item.y;

        const movie = `<div class="col-lg-4 mb-2 d-flex justify-content-center">
        <div class="box">
           <a href="#">
            <div class="imgBox">
                <img src="${poster}" alt="">
                <div class="content">
                    <h3>${name}</h3>
                    <p>Year:${year}</p>
                </div>
            </div>
            </a>
        </div>
    </div>`;
        document.querySelector(".movies").innerHTML += movie;


    })
})
.catch(err => {
    console.error(err);
});
