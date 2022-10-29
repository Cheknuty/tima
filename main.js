var temp = "";

function givePrompt() {
    var input = document.getElementById('ClientEmail');
    var value = input.value;
    const str = input.value.split('@');
    if (value.includes("@") && str.length == 2) {
        alert(value);
        var currentEmail = str.pop();
        if (currentEmail.length == 0) {
            input.value += "gmail.com";
            temp = input.value;
            // input.focus();
            // input.setSelectionRange(value.length, input.value.length);
            alert("+_+_+_+_" + input.value);
        }
    } else if(str.length > 2){
        input.value = temp;
    }
}