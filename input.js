let submitButton = document.querySelector(".submit");
let messages = document.querySelector(".messages");

// CODE ALONG, PART 1 CONTINUED
// 3. Declare a variable to store the input element
let postInput = document.querySelector(".post-input");

submitButton.addEventListener("click", function() {
    // 4. Declare a variable to store the value of the input
    // 5. Use the console to check a value is saved.
    //  - Type something and click the button to confirm it works!
    let postInputValue = postInput.value;
    console.log(postInputValue);
    postInput.value = "";

    // CODE ALONG, PART 2
    // 6. User .innerHTML to display the value to the messages div.
    // 7. Type something and test it out.
    messages.innerHTML = postInputValue;
    


});