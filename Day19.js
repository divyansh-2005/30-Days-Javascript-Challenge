// Day 19: Regular Expressions

// Activity 1: Basic Regular Expressions
// . Task 1: Write a regular expression to match a simple pattern (e.g., match all occurrences of the word "JavaScript" in a string). Log the matches.
const text1 = "JavaScript is a versatile language. Many developers love JavaScript because JavaScript can be used for both frontend and backend development.";
const regex = /JavaScript/g;
const matches = text1.match(regex);
console.log(matches);

// . Task 2: Write a regular expression to match all digits in a string. Log the matches.
const text2 = "JavaScript is a 1st language 334. Many developers love JavaScript because JavaScript can be used for both frontend and backend development.";
const regex2 = /[0-9]/g; // /\d/g
console.log(text2.match(regex2));

// Activity 2: Character Classes and Quantifiers
// . Task 3: Write a regular expression to match all words in a string that start with a capital letter. Log the matches.
const text3 = "Javascript is a versatile language. Many developers Love JavaScript because JavaScript can be used for both frontend and backend Development.";
const regex3 = /\b[A-Z][a-z]*\b/g;
console.log(text3.match(regex3));

// . Task 4: Write a regular expression to match all sequences of one or more digits in a string. Log the matches.
const text4 = "1 javascript 1234 23 08 2004"
const regex4 = /[0-9]+/g; // /\d+/g;
console.log(text4.match(regex4));

// Activity 3: Grouping and Capturing
// . Task 5: Write a regular expression to capture the area code, central office code, and line number from a US phone number format (e.g., (123) 456- 7890). Log the captures.
const phoneNumber = "(123) 456-7890"
const phoneRegex = /\((\d{3})\)\s(\d{3})[-\s](\d{4})/
const phoneMatches = phoneNumber.match(phoneRegex);
if(phoneMatches){
    const areaCode = phoneMatches[1];
    const centralOfficeCode = phoneMatches[2];
    const lineNumber = phoneMatches[3];
    console.log("Area Code:", areaCode);
    console.log("Central Office Code:", centralOfficeCode);
    console.log("Line Number:", lineNumber);
} 
else {
    console.log("No match found.");
}


// . Task 6: Write a regular expression to capture the username and domain from an email address. Log the captures.
const eamil = "dev@gamil.com";
const emailRegex = /^([A-Za-z0-9._]+)@([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,})$/
const eamilMatches = eamil.match(emailRegex);
if (eamilMatches) {
    const username = eamilMatches[1];
    const domain = eamilMatches[2];
    
    // Log the captures
    console.log("Username:", username);
    console.log("Domain:", domain);
} else {
    console.log("No match found.");
}


// Activity 4: Assertions and Boundaries

// . Task 7: Write a regular expression to match a word only if it is at the beginning of a string. Log the matches.
const identifier = "count12 sdf";
const idRegex = /^\b[A-Za-z]+/g
const match = identifier.match(idRegex);
if(match){
    console.log(match);
}
else{
    console.log("Invalid");
}

// . Task 8: Write a regular expression to match a word only if it is at the end of a string. Log the matches.
const identifier1 = "count12 ture";
const idRegex1 = /\b[A-Za-z]+$/g
const match1 = identifier1.match(idRegex1);
if(match1){
    console.log(match1);
}
else{
    console.log("Invalid");
}

// Activity 5: Practical Applications
// . Task 9: Write a regular expression to validate a simple password (must include at least one uppercase letter, one lowercase letter, one digit, and one special character). Log whether the password is valid.

// ^ asserts the position at the start of the string.
// (?=.*[a-z]) asserts that there is at least one lowercase letter.
// (?=.*[A-Z]) asserts that there is at least one uppercase letter.
// (?=.*\d) asserts that there is at least one digit.
// (?=.*[!@#$%^&*()_+{}\[\]:;"'<>,.?/\\|~])` asserts that there is at least one special character from the specified set.
// .{8,} ensures the password is at least 8 characters long.
// $ asserts the position at the end of the string.
const password = "#Pass1234";
const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;"'<>,.?/\\|`~]).{8,}$/g;

if(passRegex.test(password)){
    console.log("valid Password");
}
else{
    console.log("Invalid Password");
}

// . Task 10: Write a regular expression to validate a URL. Log whether the URL is valid.
const urlRegex = /^(https?:\/\/)?([a-zA-Z0-9\-\.]+)(:[0-9]+)?(\/[^\s]*)?$/;

const urls = [
    "http://example.com",
    "https://example.com:8080/path?query#fragment",
    "ftp://example.com", // Invalid: not http or https
    "http://example.com/path/to/resource",
    "http://example",
    "https://",
    "http://example.com:80"
];

urls.forEach(url => {
    if (urlRegex.test(url)) {
        console.log(`Valid URL: "${url}"`);
    } else {
        console.log(`Invalid URL: "${url}"`);
    }
});
// Explanation
// ^ asserts the position at the start of the string.
// (https?:\/\/)? optionally matches the protocol (http:// or https://).
// ([a-zA-Z0-9\-\.]+) matches the domain name, which can include letters, digits, hyphens, and dots.
// (:[0-9]+)? optionally matches the port number.
// (\/[^\s]*)? optionally matches the path, query parameters, and fragments.
// $ asserts the position at the end of the string.

