//Studio Ghibli Films

const baseURL = "https://ghibliapi.herokuapp.com/films"
const containerDiv = document.getElementById('container')

const searchDiv = document.getElementById('searchContainer')


fetch(baseURL)
    .then(res => res.json())
    .then(data => {
        // console.log(data)

        data.forEach(film => { 
            makeFilmDiv(film.image, film.title, film.description, containerDiv)
        });
    })
    
const getFilmResults = () => {
    const searchInput = document.getElementById("search")
    const dataURL = `https://ghibliapi.herokuapp.com/films/?title=${searchInput.value}`

fetch(`https://ghibliapi.herokuapp.com/films/?title=${searchInput.value}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        makeFilmDiv(data[0].image, data[0].title, data[0].description, searchDiv)
    })
    .catch(err => {
        const errorMessage = document.createElement("h4")

        errorMessage.textContent = `Error! Film name search is case sensitive! Do better!`
        errorMessage.style = "background-color: white; color: palevioletred; text-shadow: 1px 1px purple; font-size: 1.5rem; margin: auto; padding: 5px;"

        searchDiv.appendChild(errorMessage)

        console.log(`Error: ${err}`)
    })

    searchDiv.innerHTML = ""
    searchInput.value = ""
}
    

const makeFilmDiv = (image, title, description, divForInfo) => {
    const filmDiv = document.createElement('div')
    filmDiv.setAttribute('class', 'card')

    const filmPic = document.createElement('img')
    const filmTitle = document.createElement('h3')
    const filmDescription = document.createElement('p')

    filmDiv.style = "background-color: white; padding: 10px; border-radius: 5px;"
    
    filmPic.src = image
    filmPic.style = "height: 400px; width: auto;"

    filmTitle.textContent = title
    filmTitle.style = "color: black;"

    filmDescription.textContent = description
    filmDescription.style = "color: black; width: 350px"

    filmDiv.appendChild(filmPic)
    filmDiv.appendChild(filmTitle)
    filmDiv.appendChild(filmDescription)

    divForInfo.appendChild(filmDiv)
}