document.getElementById("quizForm").onsubmit = function() {

    let personality;
    let holiday;
    let quote;
    let description;
    let colour;
    let home;
    let help;
    let live;
    let total;

    if (document.querySelector('input[name = "personality"]:checked') &&
        document.querySelector('input[name = "holiday"]:checked') &&
        document.querySelector('input[name = "quote"]:checked') &&
        document.querySelector('input[name = "description"]:checked') &&
        document.querySelector('input[name = "colour"]:checked') &&
        document.querySelector('input[name = "home"]:checked') &&
        document.querySelector('input[name = "help"]:checked') &&
        document.querySelector('input[name = "live"]:checked')

    ) {

        personality = parseInt(document.querySelector('input[name = "personality"]:checked').value);

        holiday = parseInt(document.querySelector('input[name = "holiday"]:checked').value);

        quote = parseInt(document.querySelector('input[name = "quote"]:checked').value);

        description = parseInt(document.querySelector('input[name = "description"]:checked').value);

        colour = parseInt(document.querySelector('input[name = "colour"]:checked').value);

        home = parseInt(document.querySelector('input[name = "home"]:checked').value);

        help = parseInt(document.querySelector('input[name = "help"]:checked').value);

        live = parseInt(document.querySelector('input[name = "live"]:checked').value);

        total = personality + holiday + quote + description + colour + home + help + live;

        if (total < 9) {

            window.location = "./catresult.html";
        }

        if (total >= 9 && total < 17) {
            window.location = "./dogresult.html";
        }

        if (total >= 17 && total < 25) {
            window.location = "./bunnyresult.html";
        }

        if (total >= 25 && total < 33) {
            window.location = "./birdresult.html";
        }
    } else {
        alert("Please fill out all questions before submitting.");
    }
    return false;
}