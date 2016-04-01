function showTutorSignUpForm() 
{
    document.getElementById("form").innerHTML = 
    "<form> 

    	First Name : <input type="text"> <br>
    	Last Name : <input type="text"> <br>
    	Gender: <br>
    	<input type="radio" name="gender" value="male"> Male <br>
        <input type="radio" name="gender" value="female"> Female <br>





    </form>";

}

function showStudentSignUpForm() {
    window.location.replace("studentSignIn.html");
}
