let sure = window.confirm("Sure of your numbers?")
 if (sure) {
    let totalRequired = (Number (numberPerDay) * 365) * (Number(maxAge) - Number(age));
    // display on browser
    document.write("You will need " + totalRequired + " to last you until the ripe old age of " + maxAge);
    // pop-up dialog box
    alert(`You will need ${totalRequired} to last yopu until the ripe old age of ${maxAge}`);
    // browser's inspect console
    console.log("You will need" + totalRequired + " to last you untile the ripe old age of " + maxAge);
}
else {
    window.alert("Please click run again")
}