let favoriteBooks = [];

function addFavoriteBook(bookName) {
  // Start coding here !
  bookName.includes("Beauty")? favoriteBooks.push(bookName): console.log(`${bookName} ไม่มีคำว่า Beauty`);
  ;
}

// Example case
addFavoriteBook("Let Me Tell You What I Mean");
addFavoriteBook("Life Among the Terranauts");
addFavoriteBook("The Beauty of Living Twice");
addFavoriteBook("Black Beauty");
addFavoriteBook("Monstrous Beauty");

console.log(favoriteBooks);
