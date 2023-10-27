function FormatName(name) {

    let regexAlphabetic = /^[a-zA-Z]+$/;
    return name.charAt(0) === name.charAt(0).toUpperCase() && name.substring(1) === name.substring(1).toLowerCase() && regexAlphabetic.test(name);

}

function FormatPrice(price) {

    let regexNumberV = /^[+-]+\d+,\d{2}$/;
    let regexNumber = /^[+-]+\d+$/;
    return regexNumberV.test(price) || regexNumber.test(price);

}

document.querySelector("#form-expense").onsubmit = function FormValidation() {

    event.preventDefault();
    let name = document.getElementById("input_name");
    let price = document.getElementById("input_price");
    let description = document.getElementById("input_desc");
    if (name.value === "") {

        alert("S'il vous plait entrer quelques choses");
        document.querySelector("#messageAlert").innerHTML =
            "<div class=\"alert alert-danger\" role=\"alert\">S'il vous plait entrer quelques choses</div>";
        return false;

    } else if (price.value === "") {

        alert("S'il vous plait entrer quelques choses");
        document.querySelector("#messageAlert").innerHTML =
            "<div class=\"alert alert-danger\" role=\"alert\">S'il vous plait entrer quelques choses</div>";
        return false;

    } else {

        let resName = FormatName(name.value);
        let resPrice = FormatPrice(price.value);
        if (resName && resPrice) {

            const documentTr = document.createElement('tr');
            documentTr.innerHTML =
                `<td>${name.value}</td>
                <td>${description.value}</td>
                <td data-price>${price.value}</td>
                <td><a class='text-danger' href='#' data-delete>X</a></td>`;
            document.querySelector('tbody').appendChild(documentTr);
            document.querySelector('form').reset();
            return [name.value, price.value, description.value];

        } else {

            alert("Erreur de format");
            document.querySelector("#messageAlert").innerHTML =
                "<div class=\"alert alert-danger\" role=\"alert\">Erreur de format</div>";
            return false;

        }

    }

}
document.onclick = function DropPrice(event) {
    if (event.target.getAttribute("data-delete") !== null) {
        event.preventDefault();
        let target= 'target' in event? event.target : event.srcElement;
        target.parentNode.parentElement.remove();
    }
};