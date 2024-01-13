<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Include PHPMailer autoload file

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(["status" => "error", "message" => "Invalid email address"]);
        exit;
    }

    $mail = new PHPMailer;

    // Enable verbose debug output
    $mail->SMTPDebug = 2;
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';  // Set your SMTP server
    $mail->SMTPAuth = true;
    $mail->Username = 'lxhomeschool@gmail.com';
    $mail->Password = 'bnunevougmuwzggc'; // Replace with your actual password
    $mail->SMTPSecure = 'tls'; // or 'ssl' if needed
    $mail->Port = 587; // Check your SMTP server configuration for the correct port

    $mail->setFrom('noreply@veillax.com', 'No-Reply - Veillax');
    $mail->addAddress($email);
    $mail->Subject = 'Thank you for signing up for the Mailing List!';
    $mail->Body = "Thanks for signing up for the mailing list! If you wish to unsubscribe, <a href='https://dovs.veillax.com/unsubscribe'>click here</a>";
    $mail->IsHTML(true);

    $mailCopy = new PHPMailer;
    $mailCopy->SMTPDebug = 2;
    $mailCopy->isSMTP();
    $mailCopy->Host = 'smtp.gmail.com';  // Set your SMTP server
    $mailCopy->SMTPAuth = true;
    $mailCopy->Username = 'lxhomeschool@gmail.com';
    $mailCopy->Password = 'bnunevougmuwzggc'; // Replace with your actual password
    $mailCopy->SMTPSecure = 'tls'; // or 'ssl' if needed
    $mailCopy->Port = 587; // Check your SMTP server configuration for the correct port

    $mailCopy->setFrom('noreply@veillax.com', 'No-Reply - Veillax');
    $mailCopy->addAddress('lxhomeschool@gmail.com'); // Corrected email address
    $mailCopy->Subject = 'New Mailing List Sign Up';
    $mailCopy->Body = "Email:" . $email;

    if (!$mail->send() && !$mailCopy->send()) {
        echo json_encode(["status" => "error", "message" => "Emails could not be sent"]);
    } else {
        echo json_encode(["status" => "success", "message" => "Emails sent successfully"]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Form not submitted"]);
}
?>
