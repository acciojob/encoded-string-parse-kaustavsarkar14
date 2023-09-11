const parseCode = (str) => {
  // your code here
	  const regex = /^(.*?)000(.*?)000(\d+)$/;
  
  // Use the regular expression to match the input string
  const match = input.match(regex);

  if (match) {
    // Extract the captured groups and create the result object
    const [, firstName, lastName, id] = match;
    return { firstName, lastName, id };
  } else {
    // Return null or an appropriate value if the input doesn't match the expected format
    return null;
  }
};

// Do not change the code below
// const str = prompt("Enter str: ");
// alert(JSON.stringify(parseCode(str)));
