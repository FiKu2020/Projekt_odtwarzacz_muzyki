document.addEventListener("DOMContentLoaded", function() {

async function fetchSongs() {
     const songsResponse = await fetch('https://gist.githubusercontent.com/techniadrian/c39f844edbacee0439bfeb107227325b/raw/81eec7847b1b3dfa1c7031586405c93e9a9c1a2d/songs.json');}
}

async function fetchGenres(){
    const genresResponse = await fetch('https://gist.githubusercontent.com/techniadrian/6ccdb1c837d431bb84c2dfedbec2e435/raw/60783ebfa89c6fd658aaf556b9f7162553ac0729/genres.json');
}
