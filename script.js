var num = Math.floor(Math.random()*1001); ///This line generates a random number from 0 to 1000 and assigning the number to num
var numm = "Randomly Generated Number: "; /// Assign numm to "Randomly Generated Number"
var numwrite = numm.concat(num); /// Concatenate numm and num and assign it to numwrite

var br = '<br>' /// Assign <br> to br in order to perform a line-break by using the variable br
document.write(numwrite + br); /// Output numwrite (Randomly Generated Number) and a line-break
var hundredp = Math.floor(num/100)*100; /// Get the hundreds place of the number
var tenp = Math.floor((num%100)/10)*10; ///For the tenths place of the number
var onep = Math.floor(num%10); ///For the ones place of the number
document.write("Breakdown: " + hundredp + ", " + tenp + ", " + onep + br); ///Outputs the breakdown which displays the hundreds, tenths, and ones place separately with a line-break below

var date = new Date(); ///assigns present date to the variable date 
document.write(br + date); ///outputs the date with a line-break above it