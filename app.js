// fetch('data.json')
// .then(response => response.json())
// .then(movies => {
 let fetchMovies = async ( )=> {

const response = await fetch("./data.json");
const data = await JSON.parse(response);


     const genreSelect = document.getElementById('genre');
     const ratingSelect = document.getElementById('rating');
     const yearInput = document.getElementById('year');
     const recommendtaionsDiv = document.getElementById('recommendations');
     const btnElem = documen.getElementById('search');

     document.querySelector("form").addEventListener('Submit', event =>{
         event.preventDefault();
        const genre = genreSelect.value;
             const rating = parseInt(ratingSelect.value);
        const year = parseInt(yearInput.value);

         const filterMoives = movies.filter(movies =>
             movies.genre === genre &&
             movies.rating >= rating &&
             movies.year >= year
             );
             filterMoives.sort((a,b) => b.rating - a.rating);

             recommendtaionsDiv.innerHTML = '';

             filterMoives.forEach(movies=>{
                 const movieDiv = document.createElement('div');
                 movieDiv.innerHTML= `<h3>${movies.title} (${movies.year})</h3><p>${movies.description}</p>`;
         recommendtaionsDiv.appendChild(movieDiv);
             });
                
             });


    }
    // .catch(error => console.error(error));
    

    
    
    
    