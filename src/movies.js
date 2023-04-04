// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const allDirectors = moviesArray.map((currentMovie) => {
    return currentMovie.director
  })
  return allDirectors;
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const dramaMovies = moviesArray.filter((currentMovie) => {
        return currentMovie.genre.includes("Drama") && currentMovie.director === 'Steven Spielberg'
    })
    return dramaMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
    else {
        const sumScore = moviesArray.reduce((acc, currentElement) => {
            if (currentElement.score) {
                return acc + currentElement.score
            }
            else {
                return acc
            }
          }, 0)
        const averageScore = sumScore / moviesArray.length
          return Math.round(averageScore * 100) / 100
    }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaMovies = [];
    let dramaScoreAverage = 0;
        dramaMovies = moviesArray.filter((currentMovie)=>{
        dramaMovies = currentMovie.genre.includes('Drama')
        return dramaMovies 
    })
     dramaScoreAverage = scoresAverage(dramaMovies)
    return dramaScoreAverage
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const sortArr = [...moviesArray];
    return sortArr.sort((a, b) => {
        if (a.year === b.year) {
            if (a.title > b.title) {
              return 1;
            } 
            else if (b.title > a.title) {
              return -1;
            } 
            else {
              return 0;
            }
        }
        else {
            return a.year - b.year;
        }
    });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const sortedTitles = moviesArray.sort((a, b) => {
        if (a.title > b.title) {
            return 1
        }
        else if (a.title < b.title) {
            return -1
        }
        else {
            return 0;
        }
    });
    const sorted = sortedTitles.slice(0, 20).map((movie) => (movie.title));
    return sorted;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
