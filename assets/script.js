function FormatName(name) {

    let regexAlphabetic = /^[a-zA-Z]+$/;
    return name.charAt(0) === name.charAt(0).toUpperCase() && name.substring(1) === name.substring(1).toLowerCase() && regexAlphabetic.test(name);

}

function FormatPrice(price) {

    let regexNumberV = /^[+-]+\d+,\d{2}$/;
    let regexNumber = /^[+-]+\d+$/;
    return regexNumberV.test(price) || regexNumber.test(price);

}

function FormValidation() {

    let name = document.getElementById("input_name");
    let price = document.getElementById("input_price");
    let description = document.getElementById("input_desc");
    if (name.value === "") {

        alert("S'il vous plait entrer quelques choses");
        return false;

    } else if (price.value === "") {

        alert("S'il vous plait entrer quelques choses");
        return false;

    } else if (description.value === "") {

        alert("S'il vous plait entrer quelques choses");
        return false;

    } else {

        let resName = FormatName(name.value);
        let resPrice = FormatPrice(price.value);
        if (resName && resPrice) {

            return [name.value, price.value, description.value];

        } else {

            alert("Erreur de format");
            return false;

        }

    }

}

function DropPrice() {
    document.querySelector()
}