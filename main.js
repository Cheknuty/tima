function givePrompt() {
    var input = document.getElementById('ClientEmail');
    var value = input.value;
    const arr = value.split("").filter(letter => letter === "@")
    const str = input.value.split('@');
    console.log(str);
    if (value.includes("@") && arr.length === 1) {
        alert(value);
        var currentEmail = input.value.split('@').pop();

        if (currentEmail.length == 0) {
            input.value = ""
            input.value =  `${str.join("")}@gmail.com`;
            // input.focus();
            // input.setSelectionRange(value.length, input.value.length);
            alert("+_+_+_+_" + input.value);
        }
    }
}