<?php
//connecting to database
$conn = mysqli_connect('localhost','apple_user','apple_user','apple_database');

//flag variable to check if any radio is set
$error=false;

//checking if successfully connected to the database
if(!$conn)
{
    die("Unable to connect.");
}
$_POST['iMacPro']="10";
reset($_POST);
$first_key = key($_POST);
//echo($first_key);

//checking and setting flag vaiable
$first_value = reset($_POST);
if($first_value==NULL)
{
        $error=true;
}

//if fields are left empty
if($error)
{   
    die("Radio was not checked");
}
else
{   //inserting into database
    $query = "SELECT type_id from product_type where type_name like \"".$first_key."\";";
    $row = mysqli_query($conn, $query);
    $result = mysqli_fetch_row($row);
    //var_dump($result);
    $type_id = $result[0];
    echo $type_id;
    
    $query2 = "SELECT price from specifications where type_id =".$type_id." and spec_name like \"".$first_value."\";";
    $row2=mysqli_query($conn, $query2);
    $result2 = mysqli_fetch_row($row2);
    $result2[0];
    $price = $result2[0];
    //var_dump($result2);
    
    echo $price;
    /*
    if($result)
    {
        echo("done!");
    }
    else
    {
        echo("You are not registered (not able to store in database)");
    }
    */
}

?>
