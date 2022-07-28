//Studio Ghibli Films

const baseURL = "https://ghibliapi.herokuapp.com/films"
const containerDiv = document.getElementById('container')

const searchDiv = document.getElementById('searchContainer')


fetch(baseURL)
    .then(res => res.json())
    .then(data => {
        console.log(data)

        data.forEach(film => { 
            makeFilmDiv(film, film.image, film.title, film.release_date, film.description, containerDiv)
        });
    })  
    
const getFilmResults = () => {
    const searchInput = document.getElementById("search")
    // const dataURL = `https://ghibliapi.herokuapp.com/films/?title=${searchInput.value}`

fetch(`https://ghibliapi.herokuapp.com/films/`)
    .then(res => res.json())
    .then(data => {
        console.log(searchInput.value)
        const filmResult = data.filter(film => film.title.toLowerCase().includes(searchInput.value.toLowerCase()))
        console.log(filmResult)
        
        if (filmResult.length < 2) {
            makeFilmDiv(filmResult[0], filmResult[0].image, filmResult[0].title, filmResult[0].release_date, filmResult[0].description, searchDiv)
        } else {
            filmResult.forEach(film => {
                makeFilmDiv(film, film.image, film.title, film.release_date, film.description, searchDiv)
            })
        }
    })
    .catch(err => {
        const errorMessage = document.createElement("h4")

        errorMessage.textContent = `Error: What are you even doing?! Do better!`
        errorMessage.style = "background-color: white; color: palevioletred; text-shadow: 1px 1px purple; font-size: 1.5rem; margin: auto; margin-top: 15px; padding: 5px;"

        searchDiv.appendChild(errorMessage)

        console.log(`Error: ${err}`)
    })

    searchDiv.innerHTML = ""
    // searchInput.value = ""
}
    

const makeFilmDiv = (filmObj, image, title, release_date, description, divForInfo) => {
    const filmDiv = document.createElement('div')
    // filmDiv.setAttribute('class', 'card')
    filmDiv.className = "card"

    const filmPic = document.createElement('img')
    const filmTitle = document.createElement('h3')
    const filmReleaseDate = document.createElement('p')
    const filmDescription = document.createElement('p')

    filmDiv.style = "background-color: white; padding: 10px; border-radius: 5px;"
    
    filmPic.src = image
    filmPic.style = "height: 400px; width: auto;"

    filmTitle.textContent = title
    filmTitle.style = "color: black;"

    filmReleaseDate.textContent = release_date

    filmDescription.textContent = description
    filmDescription.style = "width: 350px"
    // title, original_title, original_title_romanised, banner, description, director, producer, release_date, running_time, clickDivInfo
    filmDiv.addEventListener("click", () => {
        clickFilmDiv(filmObj.title, filmObj.original_title, filmObj.original_title_romanised, filmObj.movie_banner, filmObj.description, filmObj.director, filmObj.producer, filmObj.release_date, filmObj.running_time)
    })

    filmDiv.appendChild(filmPic)
    filmDiv.appendChild(filmTitle)
    filmDiv.appendChild(filmReleaseDate)
    filmDiv.appendChild(filmDescription)
    

    divForInfo.appendChild(filmDiv)
}

//! My attempt:

const clickFilmDiv = (title, original_title, original_title_romanised, banner, description, director, producer, release_date, running_time) => {
         
        searchDiv.innerHTML = ""
         
        const clickDiv = document.createElement('div')
        // clickDiv.setAttribute('class', 'filmCard')
         clickDiv.className = "filmCard"

        const filmClickBanner = document.createElement('img')
        filmClickBanner.src = banner
        filmClickBanner.style = "height: 400px; width: auto;"

        const filmClickTitle = document.createElement('h3')
        filmClickTitle.textContent = `Title: ${title}`
        filmClickTitle.style = "color: black;"

        const filmClickOriginalTitle = document.createElement('p')
        filmClickOriginalTitle.textContent = `Original Title: ${original_title}`
        filmClickOriginalTitle.style = "color: black;"

        const filmClickOriginalTitleRomanised = document.createElement('p')
        filmClickOriginalTitleRomanised.textContent = `Original Romanised Title: ${original_title_romanised}`
        filmClickOriginalTitleRomanised.style = "color: black;"

        const filmClickDescription = document.createElement('p')
        filmClickDescription.textContent = description
        filmClickDescription.style = "color: black;"
        filmClickDescription.style = "color: black; width: auto;"

        const filmClickDirector = document.createElement('p')
        filmClickDirector.textContent = `Director: ${director}`
        filmClickDirector.style = "color: black;"

        const filmClickProducer = document.createElement('p')
        filmClickProducer.textContent = `Producer: ${producer}`
        filmClickProducer.style = "color: black;"

        const filmClickReleaseDate = document.createElement('p')
        filmClickReleaseDate.textContent = `Release Date: ${release_date}`
        filmClickReleaseDate.style = "color: black;"

        const filmClickRunningTime = document.createElement('p')
        filmClickRunningTime.textContent = `Running Time: ${running_time}`
        filmClickRunningTime.style = "color: black;"

        clickDiv.style = "background-color: white; padding: 10px; border-radius: 5px;"

        clickDiv.appendChild(filmClickBanner)
        clickDiv.appendChild(filmClickTitle)
        clickDiv.appendChild(filmClickOriginalTitle)
        clickDiv.appendChild(filmClickOriginalTitleRomanised)
        clickDiv.appendChild(filmClickDescription)
        clickDiv.appendChild(filmClickDirector)
        clickDiv.appendChild(filmClickProducer)
        clickDiv.appendChild(filmClickReleaseDate)
        clickDiv.appendChild(filmClickRunningTime)

        searchDiv.appendChild(clickDiv)
    
    }

    //! Research attempts:

// var btn = document.getElementById('btn')

// window.addEventListener('fetch', function (generateFilm) {
//     console.log("fetch add event listener")
// })
// btn.addEventListener('click', function (generateFilm) {
//     fetch(`https://ghibliapi.herokuapp.com/films/`)
//         .then(data => {
//             makeClickFilmDiv(clickResult[0].banner, clickResult[0].title, clickResult[0].original_title, clickResult[0].original_title_romanised, clickResult[0].description, clickResult[0].director, clickResult[0].producer, clickResult[0].release_date, clickResult[0].running_time, clickFilmDiv)
//             console.log(makeClickFilmDiv)
//         })

    //!Code from Other API:
//     const GET_FILMS = 'GET_FILMS';

// const FILMS_URL = 'https://ghibliapi.herokuapp.com/films';

// const initialState = [];

// const getFilmsAction = (payload) => ({
//   type: GET_FILMS,
//   payload,
// });

// const logic = (state = initialState, action) => {
//   switch (action.type) {
//     case GET_FILMS:
//       return [...action.payload];
//     default:
//       return state;
//   }
// };

// logic();

// const getFilmsApi = () => async (dispatch) => {
//   const response = await fetch(FILMS_URL);
//   const films = await response.json();
//   const formatFilmData = films.map((e) => {
//     const obj = {
//       filmKey: e.id,
//       title: e.title,
//       originalTitle: e.original_title,
//       romanisedTitle: e.original_title_romanised,
//       image: e.image,
//       banner: e.movie_banner,
//       description: e.description,
//       director: e.director,
//       producer: e.producer,
//       release: e.release_date,
//       runningTime: e.running_time,
//       rtScore: e.rt_score,
//     };
//     return obj;
//   });
//   dispatch(getFilmsAction(formatFilmData));
// };