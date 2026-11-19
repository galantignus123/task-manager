//15
players.forEach(player => {
    console.log(`${player.nickname} - ${player.score} points`);
});
players.forEach(player => {
    console.log(`ID: ${player.id}, ${player.nickname} - ${player.score} points, Level: ${player.level}`);
});
const result = players.forEach(player => player.nickname);
console.log(result); // undefined
//16
// א
const updatedScores = scores.map(score => score + 100);

// ב
const courseNameLengths = courses.map(course => course.length);

// ג
console.log(scores);
console.log(updatedScores);
console.log(courses);
console.log(courseNameLengths);

console.log(scores.length); // 4
console.log(updatedScores.length); // 4
console.log(courses.length); // 3
console.log(courseNameLengths.length); // 3

// ד
const doubledScores = scores.map(score => score * 2);
//17
// א
const postUsernames = posts.map(post => post.username);

// ב
const postLabels = posts.map(post =>
    `${post.username} | ${post.content} | ${post.likes} likes`
);

// ג
const postCards = posts.map(post => ({
    id: post.id,
    label: `${post.username} - ${post.likes} likes`
}));

// ד
console.log(posts);
console.log(postCards);//לא השתנה 
//18
// א
const openTasks = tasks.filter(task => !task.completed);

// ב
const highPriorityTasks = tasks.filter(task => task.priority === "high");

// ג
const urgentOpenTasks = tasks.filter(
    task => task.priority === "high" && !task.completed
);

// ד
function getTasksByPriority(tasks, priority) {
    return tasks.filter(task => task.priority === priority);
}

// ה
 result = tasks.filter(task => task.id === 3);
console.log(result);//array איבר אחד 
//19
// א
function findMovieById(movies, id) {
    return movies.find(movie => movie.id === id);
}

// ב
const movie1 = findMovieById(movies, 12);

if (movie1) {
    console.log(movie1);
} else {
    console.log("Movie not found");
}

const movie2 = findMovieById(movies, 99);

if (movie2) {
    console.log(movie2);
} else {
    console.log("Movie not found");
}

// ג
movie = movies.find(movie => movie.id === 12);
console.log(movie.title);
//ד //find מחזיר: איבר אחד או undefined.

//filter מחזיר: מערך חדש עם כל האיברים המתאימים.
//20
// א - forEach
players.forEach(player => {
    console.log(`${player.nickname} - ${player.score}`);
});

// ב - map
const usernames = posts.map(post => post.username);
console.log(usernames);

// ג - filter
const OpenTasks = tasks.filter(task => !task.completed);
console.log(openTasks);

// ד - find
 movie = movies.find(movie => movie.id === 13);
console.log(movie);

// ה - filter + map
const movieTitles = movies
    .filter(movie => movie.rating > 8)
    .map(movie => movie.title);

console.log(movieTitles);

// ו - find
const post = posts.find(post => post.id === 102);
console.log(post);
//21
// א
const highScoreNicknames = players
    .filter(player => player.score > 800)
    .map(player => player.nickname);

console.log(highScoreNicknames);

// ב
const popularUsernames = posts
    .filter(post => post.likes > 100)
    .map(post => post.username);

console.log(popularUsernames);

// ג
function getOpenTaskTitles(tasks) {
    return tasks
        .filter(task => !task.completed)
        .map(task => task.title);
}

console.log(getOpenTaskTitles(tasks));

// ד
const result1 = players
    .filter(player => player.score > 800)
    .map(player => player.nickname);

console.log(result);
//אחרי filter: מערך של אובייקטים.
//אחרי map: מערך של מחרוזות.
//result: ["Pixel", "Nova"]
//ה
//מסננים קודם כדי לבחור רק את האיברים שעומדים בתנאי, ואז משתמשים ב־map
//  כדי ליצור מהם מערך חדש. כך עובדים רק עם האיברים הרצויים.




