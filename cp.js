$(".copy-button").each (function () { // for each copy button
    $(this).on("click", function () {  
        let codeSnippet = JSON.parse($(this).parent().find(".snippet").text()); // get the code snippet from the parent div
        console.log("codeSnippet", codeSnippet); // log the code snippet
        let copyButton = $(this); // get the copy button
        let data = JSON.stringify(codeSnippet); // stringify the code snippet   
        console.log("data", data); // log the data
        document.addEventListener("copy", (event) => { // add the event listener
        event.clipboardData.setData("application/json", data); // set the data to be copied to the clipboard
        event.preventDefault(); // prevent the default copy behavior
        console.log("copied to cb", data);  // log the data
        copyButton.text("Copied to clipboard"); // change the button text
        setTimeout(() => {
            copyButton.text("Copy"); // change the button text back to the original
        }, 3000);
        });
        document.execCommand("copy"); // copy the data to the clipboard
    }
    );
});
