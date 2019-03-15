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

//storing the first key into variable
reset($_POST);
$first_key = key($_POST);

//storing first value into variable
$first_value = reset($_POST);

//checking and setting flag vaiable
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
{   //Getting the type_id 
    $query = "SELECT type_id from product_type where type_name like \"".$first_key."\";";
    
    //running the query
    $row = mysqli_query($conn, $query);

    //getting the value from object row
    $result = mysqli_fetch_row($row);
    
    //storing the value into variable
    $type_id = $result[0];
    
    //getting price with the help of type_if and first value in $_POST
    $query2 = "SELECT price from specifications where type_id =".$type_id." and spec_name like \"".$first_value."\";";
    
    //running the query
    $row2=mysqli_query($conn, $query2);

    //getting the value from object row
    $result2 = mysqli_fetch_row($row2);

    //storing price into variable
    $price = $result2[0];
    
    echo $price;
}
?>
