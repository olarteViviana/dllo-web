const getDataForm = () => {
    const txtName = document.getElementById("txtName").value
    const txtEmail = document.getElementById("txtEmail").value
    const txtDescription = document.getElementById("txtTask").value
    const acceptConditions = document.getElementById("acceptConditions").checked
    const typeA = document.getElementById("typeA").checked
    const typeB = document.getElementById("typeB").checked
    const period = document.getElementById("semester").value

    //JSON { clave:valor }
    const data = {
        name: txtName,
        email: txtEmail,
        description: txtDescription,
        acceptConditions: acceptConditions,
        typeA,
        typeB,
        period
    }

    console.log(data);
}