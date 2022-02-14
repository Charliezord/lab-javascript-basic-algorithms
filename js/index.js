// Iteration 1: Names and Input

let hacker1 = 'Charlie'
 console.log(`The drivers name is ${hacker1}`);

let hacker2 = "Kevin"
console.log(`The navigators name is ${hacker2}`);


// Iteration 2: Conditionals

lengthDriver = hacker1.length
lengthNavigator = hacker2.length

if(lengthDriver > lengthNavigator){
    console.log(`The driver has the longest name, it has ${lengthDriver} characters`)
}

else if(lengthNavigator > lengthDriver){
    console.log(`It seems that the navigator has the longest name, it has ${lengthNavigator} characters`)
}

else if(lengthNavigator == lengthDriver){
    console.log(`Wow, you both have equally long names, ${lengthDriver} characters!`)
}



// Iteration 3: Loops


let seperateName = (hacker1.toUpperCase().split('').join(" "));

console.log(seperateName)

let reverse = "";
for(let i = hacker2.length - 1; i >= 0; i--){
    reverse += hacker2[i];
}

console.log(reverse);


for (let j = 0; j < hacker1.length; j++)
    if (hacker1[j] < hacker2[j]){ 
    console.log("The drivers name goes first.")
    {break}
    }
    else if(hacker2[j] < hacker1[j]){ 
        console.log("Yo, the navigator goes first definitely.")
    {break}
    }
    else {
        console.log("What?! You both have the same name?")
        {break}
    }

// bonus time!

let paragraph1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies sagittis augue, ut ultrices lectus dapibus in. Duis auctor metus enim. Curabitur vel suscipit tortor. Ut at enim at massa laoreet luctus placerat tempor orci. Aliquam augue libero, efficitur congue rhoncus et, hendrerit a quam. Aenean ullamcorper pretium nisl, ac imperdiet justo tristique ac. Curabitur a dui mattis, ullamcorper elit quis, consequat enim. Etiam id fermentum quam.";
let paragraph2 = "Nullam diam eros, finibus nec purus eget, pellentesque sodales neque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus malesuada eros at euismod fringilla. Vivamus velit enim, viverra sed enim et, elementum mollis leo. Phasellus ex neque, dapibus sit amet euismod tincidunt, sodales vel mi. Suspendisse ornare lectus in ante luctus dignissim. Proin finibus ullamcorper lacus tincidunt sagittis. Suspendisse porta sed risus sed vestibulum. Etiam commodo dolor ut quam rhoncus sodales.";
let paragraph3 = "Proin ac dui venenatis, interdum neque sit amet, consectetur lacus. Aliquam ultrices eros ac velit imperdiet tristique. Donec a libero nec ligula porta congue. Sed eget pharetra lorem. Integer venenatis non est quis posuere. In non feugiat leo. Praesent euismod dui orci. Donec lobortis dui eget nunc malesuada mattis.";
let allParagraphs = paragraph1 + paragraph2 + paragraph3;


for(let i = 0; i <= allParagraphs.length; i++){
    console.log(`the amount of words are: ${allParagraphs.split(" ").length}`); 
    {break} // this is not actually the correct amount of words according to googledrive word count, but i cannot figure out why.
}


/* same as above but in function version, which i found help with first online:

function wordcount1(){
    return allParagraphs.split(" ").length;
}

console.log(wordcount1(allParagraphs));
*/

let etCounter = "";
for(let i = 0; i <= allParagraphs.length; i++){
    if(allParagraphs[0] == "e" && allParagraphs[0]+1 == "t" && allParagraphs[0]+2 == " "){
    etCounter += allParagraphs[i];

    console.log(allParagraphs[i]);}
}

/* same as above but in function version, which i found help with first online:

function countEt(){
    return (allParagraphs.split(' et ')).length -1; ---> the internet told me to add -1 but whyyyyy??
}

console.log(countEt(allParagraphs));

*/