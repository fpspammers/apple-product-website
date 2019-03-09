<?php
//connecting to database
$conn = mysqli_connect('localhost','temp','unlockstackframe','stackframe');

//flag variable to check if all values are set
$error=false;

//checking if successfully connected to the database
if(!$conn)
{
    die("Unable to connect.");
}

//checking and setting flag vaiable
foreach($_POST['items'] as $fields)
{
    if(!isset($_POST[$fields]) || (empty($_POST[$fields])))
    {
        $error=true;
    }
}

//if fields are left empty
if($error)
{   
    die("Some fields were left empty");
}
else
{   //checking if users with name pass exists
    //insert into form values('owner2', 1234567890, 'PUNE', 'Ashish');
    //select * from form where username like "owner2" and password like "1234567890";
    $query = "SELECT * from form where username like \"".$_POST['txtusername']."\" and password like \"".$_POST['txtpassword']."\";"; 
    $result = mysqli_query($conn, $query);
    //var_dump($result);
    //echo("<br>");
    $number_of_rows = mysqli_num_rows($result);
    if($number_of_rows==0)
    {
        echo("Invalid username or password!");
    }
    else if($number_of_rows==1)
    {
        echo("done!");
    }
    else
    {
        echo("Multiple entries found! ");
    }
}
?>