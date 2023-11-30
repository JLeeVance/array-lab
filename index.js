const cats = ["Milo" , "Otis" , "Garfield"];
console.log(cats);

function destructivelyAppendCat () {
    cats.push("Ralph");
};

cats.length = 0;
cats.push('Milo' , 'Otis' , 'Garfield');

function destructivelyPrependCat () {
    cats.unshift("Bob");
};

cats.length = 0;
cats.push('Milo' , 'Otis' , 'Garfield');

function destructivelyRemoveLastCat () {
    cats.pop();
}

cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield');

function destructivelyRemoveFirstCat () {
    cats.shift();
}

cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield');

function appendCat(name) {
    const newList = [
        ...cats,
        name,
    ]
    return newList;
};
appendCat("Broom");

cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield');

function prependCat (name) {
    const newList2 = [
        name,
     ...cats,
    ]
    return newList2;
};
prependCat("Broom");

cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield');

function removeLastCat () {
   const newList3 = cats.slice(0,2);
   return newList3;
};

cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield');

function removeFirstCat () {
    const newList4 = cats.slice(1);
    return newList4;
};










