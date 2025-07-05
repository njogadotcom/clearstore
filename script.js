fetch('movies.json')
  .then(res => res.json())
  .then(movies => {
    const movieList = document.getElementById('movieList');
    const searchInput = document.getElementById('searchInput');

    function renderMovies(filter = '') {
      movieList.innerHTML = '';
      movies
        .filter(movie => movie.title.toLowerCase().includes(filter.toLowerCase()))
        .forEach(movie => {
          const movieEl = document.createElement('div');
          movieEl.classList.add('movie');
          movieEl.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title}">
            <h3>${movie.title}</h3>
            <a href="${movie.link}" target="_blank">🎥 Watch Now</a>
          `;
          movieList.appendChild(movieEl);
        });
    }

    searchInput.addEventListener('input', e => {
      renderMovies(e.target.value);
    });

    renderMovies();
  });
