function givePrompt() {
    var input = document.getElementById('ClientEmail');
    var value = input.value;
    if (value.includes("@")) {
        alert(value);
        var currentEmail = input.value.split('@').pop();

        if (currentEmail.length == 0) {
            input.value += "gmail.com";
            // input.focus();
            // input.setSelectionRange(value.length, input.value.length);
            alert("+_+_+_+_" + input.value);
        }
    }
}