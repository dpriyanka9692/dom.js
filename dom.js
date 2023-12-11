const array1 = [5,7,4,6,2,3,9]
for(let indexValues in array1 )
console.log(indexValues)

//for of
//here for of returns the elements of the array.

for (let values of array1)
console.log(values)

//for each

const languages = ['c','c++','java','pythone','ruby','react','angular']
const langReturn = languages.forEach((item) => {
    //return item
    console.log(item)
})
console.log(langReturn)

//filter
const number = [2,4,6,8,6,1,4,5,8]
//const newAraaay = number.filter((item)=>{
    //return item>5;
})
//console.log(newAraaay);

const myNumber = []
number.forEach( (num) =>{
    if(num>6){
        myNumbs.push(num)
    }
})
console.log(myNumbs); 

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

const findGenre = books.filter( (gn) => gn.genre ==='history')
console.log(findGenre);

const editionbook = books.filter  ((bn) => {return bn.publish  => '1994' && bn.edition >= 2007})
console.log(editionbook);

//map method

const numSeries = [1,2,3,4,5,6,7]
const changeDate = numSeries,map((data) => {
    return data + 2;

})
console.log(numSeries);
console.log(changeDate);

//chaining
const newAraaay = numSeries
                          .map((data) => data + 2)
                          .map((data) => data +10)
                          .filter( ( data) => data >40)
console.log


