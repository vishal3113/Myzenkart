<?php
 // Database connection (replace with your own credentials)
 $servername = "localhost";
 $username = "root";
 $password_db = "";
 $dbname = "zenkart_311323_data_secure";

 $zen_Connt_3113 = new mysqli($servername, $username, $password_db, $dbname);

 // Check connection
 if ( $zen_Connt_3113->connect_error) {
     die("Connection failed: " .  $zen_Connt_3113->connect_error);
 }


?>