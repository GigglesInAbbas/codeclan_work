var movie = {
    title: "Dirty Harry",
    year : 1971 ,
    language: "English"
}
//add a new key - value pair 
movie.Actor = "clint Eastwood"

// update an existing key - value pair 
movie.year = 1971

// remove a key - value pair 
delete movie.language


var movie2 = {
    title: "Scott Pilgein Vs The World ",
    year :2010,
    cast :["Michael Cera", " Chris Evans"],
    subtitleLanguage:"German",
    ratings: {imdb: 7.6, rt:  {crirics : 82, aduience: 84}}
}

// console.log(movie2.cast[1])
    console.log(movie2.ratings.rt.aduience)
