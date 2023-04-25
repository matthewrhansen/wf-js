// Attach click event listener to parent element and delegate to ".copy-button"
$(document).on("click", ".copy-button", function() {
  let codeSnippet = JSON.parse($(this).parent().find(".snippet").text()); // get the code snippet from the parent div
  console.log("codeSnippet", codeSnippet); // log the code snippet
  let copyButton = $(this); // get the copy button
  let data = JSON.stringify(codeSnippet); // stringify the code snippet
  console.log("data", data); // log the data
  copyToClipboard(data, copyButton); // call function to copy data to clipboard and change button text
});

// Function to copy data to clipboard and change button text
function copyToClipboard(data, copyButton) {
  document.addEventListener("copy", (event) => { // add the event listener
    event.clipboardData.setData("application/json", data); // set the data to be copied to the clipboard
    event.preventDefault(); // prevent the default copy behavior
    console.log("copied to cb", data); // log the data
    copyButton.text("Copied to clipboard"); // change the button text
    setTimeout(() => {
      copyButton.text("Copy"); // change the button text back to the original
    }, 3000);
  });
  document.execCommand("copy"); // copy the data to the clipboard
}
