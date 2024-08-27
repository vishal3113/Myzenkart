<?php
// Start the session to store user data
session_start();

// Check if the form was submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    include 'asset/asset.php';
    // Database Add 

    // Sanitize and validate the input data
    $plan = filter_input(INPUT_POST, 'plan', FILTER_SANITIZE_STRING);
    $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
    $password = filter_input(INPUT_POST, 'password', FILTER_SANITIZE_STRING);
    $password_confirmation = filter_input(INPUT_POST, 'password_confirmation', FILTER_SANITIZE_STRING);
    $phone = filter_input(INPUT_POST, 'phone', FILTER_SANITIZE_STRING);
    $shop_name = filter_input(INPUT_POST, 'shop_name', FILTER_SANITIZE_STRING);
    $firm_name = filter_input(INPUT_POST, 'firm_name', FILTER_SANITIZE_STRING);
    $proprietor_name = filter_input(INPUT_POST, 'proprietor_name', FILTER_SANITIZE_STRING);
    $gst_number = filter_input(INPUT_POST, 'gst_number', FILTER_SANITIZE_STRING);
    $address = filter_input(INPUT_POST, 'address', FILTER_SANITIZE_STRING);
    $mobile_number = filter_input(INPUT_POST, 'mobile_number', FILTER_SANITIZE_STRING);
    $firm_email = filter_input(INPUT_POST, 'firm_email', FILTER_VALIDATE_EMAIL);
    $looking_for = filter_input(INPUT_POST, 'looking_for', FILTER_SANITIZE_STRING);

    // Check if passwords match
    if ($password !== $password_confirmation) {
        die('Passwords do not match.');
        // Fire  A Encounter 
    }

    // Hash the password
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    // Handle file uploads
    $upload_dir = 'vendors/uploads/'; // Make sure this directory exists and is writable

    // Passport photo upload
    $passport_upload = $_FILES['passport_upload'];
    $passport_path = $upload_dir . basename($passport_upload['name']);
    if (!move_uploaded_file($passport_upload['tmp_name'], $passport_path)) {
        die('Failed to upload passport photo.');
    }

    // GST registration paper upload
    $gst_upload = $_FILES['gst_upload'];
    $gst_path = $upload_dir . basename($gst_upload['name']);
    if (!move_uploaded_file($gst_upload['tmp_name'], $gst_path)) {
        die('Failed to upload GST registration paper.');
    }

    // Aadhar card upload
    $aadhar_upload = $_FILES['aadhar_upload'];
    $aadhar_path = $upload_dir . basename($aadhar_upload['name']);
    if (!move_uploaded_file($aadhar_upload['tmp_name'], $aadhar_path)) {
        die('Failed to upload Aadhar card.');
    }

    // PAN card upload
    $pancard_upload = $_FILES['pancard_upload'];
    $pancard_path = $upload_dir . basename($pancard_upload['name']);
    if (!move_uploaded_file($pancard_upload['tmp_name'], $pancard_path)) {
        die('Failed to upload PAN card.');
    }

   
    // Prepare and bind
    $stmt = $zen_Connt_3113->prepare("INSERT INTO vendors (plan, name, email, password, phone, shop_name, firm_name, proprietor_name, gst_number, address, mobile_number, firm_email, looking_for, passport_path, gst_path, aadhar_path, pancard_path) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("sssssssssssssssss", $plan, $name, $email, $hashed_password, $phone, $shop_name, $firm_name, $proprietor_name, $gst_number, $address, $mobile_number, $firm_email, $looking_for, $passport_path, $gst_path, $aadhar_path, $pancard_path);

    // Execute the query
    if ($stmt->execute()) {
        echo "Registration successful!";
        // Redirect or further processing
    } else {
        echo "Error: " . $stmt->error;
    }

    // Close connections
    $stmt->close();
    $zen_Connt_3113n->close();
}
?>
