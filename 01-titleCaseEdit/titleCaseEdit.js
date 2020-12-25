function titleCaseEdit(title) {
    var upper = title.split(" ");
    
    for (i = 0; i < upper.length; i++) {

        upper[i] = upper[i].replace(upper[i].charAt(0), upper[i].toUpperCase().charAt(0));
    }
    return (upper.join(" "));
}



// Do not edit this line;
module.exports = titleCaseEdit;