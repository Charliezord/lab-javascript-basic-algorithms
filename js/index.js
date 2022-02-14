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

