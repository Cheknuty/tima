var temp = "";
var isUserEdit = false;

function givePrompt() {
    var input = document.getElementById('ClientEmail');
    var value = input.value;
    const str = input.value.split('@');
    if (value.includes("@") && str.length == 2) {
        var currentEmail = str.pop();
        if (currentEmail.length == 0) {
            input.value += "gmail.com";
            temp = input.value;
            if(isUserEdit){
                isUserEdit = false;
            }
            setTimeout(() => {
                isUserEdit = true;
            }, 1000);
            input.focus();
            input.setSelectionRange(value.length, input.value.length);
        }
    } else if(str.length > 2 && !isUserEdit){
        input.value = temp;
        isUserEdit = true;
    }
}