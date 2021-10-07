let arguments = process.argv;
arguments.splice(0,2);

// UC 1
{
    let emailRegex = RegExp('^[a-z]+');
    arguments.forEach(element => {
        console.log(element + " :", emailRegex.test(element));
    });
}

// UC 2
{
    let emailRegex = RegExp('^[a-z]+@[a-z]+');
    arguments.forEach(element => {
        console.log(element + " :", emailRegex.test(element));
    });
}

// UC 3
{
    let emailRegex = RegExp('^[a-z]+@[a-z]+\\.[a-z]+');
    arguments.forEach(element => {
        console.log(element + " :", emailRegex.test(element));
    });
}