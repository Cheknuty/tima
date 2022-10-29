function givePrompt() {
    var input = document.getElementById('ClientEmail');
    var value = input.value;
    if (value.includes("@")) {
        var currentEmail = input.value.split('@').pop();

        if (currentEmail.length == 0) {
            input.value += "gmail.com";
            input.focus();
            input.setSelectionRange(value.length, input.value.length);
        }
    }
}