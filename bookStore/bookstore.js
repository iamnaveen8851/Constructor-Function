
function Author(name, birthYear, nationality)
{
    this.name = name;
    this.birthYear = birthYear;
    this.nationality = nationality;


}

function Book(title, author, genre, price)
{
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.price = price;

    this.getBookInfo = function()
    {
       

        console.log(`Book's name: ${this.title}`)
        console.log(`Author's name: ${this.author.name}`)
        console.log(`Genre : ${this.genre}`)
        console.log(`price : ${this.price}`)


    }
}



let author1 = new Author('Suraj', 1999, 'Indian')
console.log(author1)

let book1 = new Book('alchamist', author1, 'magic', 1000)
console.log(book1)

book1.getBookInfo()



let author2 = new Author('Naveen', 1999, 'Indian')
console.log(author2)

let book2  = new Book('Harry Potter', author2, 'fiction', 2000)
console.log(book2)

book2.getBookInfo()



let author3 = new Author('Suresh', 1965, 'Indian')
console.log(author3);

let book3 = new Book('Iki-Gai', author3, 'life-lesson', 3000)
console.log(book3)


book3.getBookInfo()