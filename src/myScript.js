function myFunction() {
   document.getElementById("form").innerHTML = "<form action='studentProfile.html'> First Name : <input type='text' name='fName'> <br> Last Name : <input type='text' name='lName'> <br> Gender: <br> <input type='radio' name='gender' value='male'> Male <br> <input type='radio' name='gender' value='female'> Female <br> UserName: <input type='text' name='userName'> Password: <input type='text' name='password'> <br><input type='Submit' value='Submit'> </form>";
}

function showTutorSignUpForm() {
   document.getElementById("form").innerHTML = "<form action='selectTimes.html'> First Name : <input type='text' name='fName'> <br> Last Name : <input type='text' name='lName'> <br> Gender: <br> <input type='radio' name='gender' value='male'> Male <br> <input type='radio' name='gender' value='female'> Female <br> UserName: <input type='text' name='userName'> Password: <input type='text' name='password'> <br><input type='Submit' value='Submit'> </form>";

}