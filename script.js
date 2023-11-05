document.addEventListener("DOMContentLoaded", function() {
    const genreSelect = document.getElementById("genreSearch");
    const bpmSelect = document.getElementById("bpmSearch");
    const songsTable = document.getElementById("songsData");
  
    async function fetchSongs() {
      try {
        const response = await fetch('https://gist.githubusercontent.com/techniadrian/c39f844edbacee0439bfeb107227325b/raw/81eec7847b1b3dfa1c7031586405c93e9a9c1a2d/songs.json');
        const songsData = await response.json();
        displaySongs(songsData);
      } catch (error) {
        console.error('Error fetching songs:', error);
      }
    }
  
    async function fetchGenres() {
      try {
        const response = await fetch('https://gist.githubusercontent.com/techniadrian/6ccdb1c837d431bb84c2dfedbec2e435/raw/60783ebfa89c6fd658aaf556b9f7162553ac0729/genres.json');
        const genresData = await response.json();
        populateGenres(genresData);
      } catch (error) {
        console.error('Error fetching genres:', error);
      }
    }
  
    function populateGenres(genres) {
      genres.forEach(genre => {
        const option = document.createElement('option');
        option.value = genre;
        option.textContent = genre;
        genreSelect.appendChild(option);
      });
    }
  
    function displaySongs(songs) {
      songs.forEach(song => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${song.title}</td>
          <td>${song.artist}</td>
          <td>${song.genre}</td>
          <td>${song.bpm}</td>
          <td>${song.duration}</td>
        `;
        songsTable.appendChild(row);
      });
    }
  
    fetchSongs();
    fetchGenres();
  });