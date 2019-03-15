<?php
//connecting to database
$conn = mysqli_connect('localhost','apple_user','apple_user','apple_database');

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
{   //inserting into database
    $query = "INSERT INTO form VALUES (\"" . $_POST['txtusernamereg'] . "\", \"" . $_POST['txtpasswordreg'] . "\", \"" . $_POST['txtaddress'] . "\", \"" . $_POST['txtfullname']  .  "\");";
    $result = mysqli_query($conn, $query);
    if($result)
    {
        echo("done!");
    }
    else
    {
        echo("You are not registered (not able to store in database)");
    }
}
?>
