function concatenateAndUpperCase(str1, str2) {
   
    const concatenatedString = `${str1} ${str2}`;

    const uppercasedString = concatenatedString.toUpperCase();

    return uppercasedString;
}
const result = concatenateAndUpperCase("getting", "there",);
console.log(result); 