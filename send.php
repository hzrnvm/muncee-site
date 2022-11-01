if (isset($_POST['name'])) {$name = $_POST["name"];}
$msg = $_POST["msg"];

if (isset(#name)) {
    $iable = <<<EOT
    A Message From $name:<br><br>

    $msg<br><br>

    Awesome...
    EOT;

    mail("adamajabri@gmail.com", "Site Message from $name", $iable);
}
else {
    $iable = <<<EOT
    An Anonymous Message:<br><br>

    $msg<br><br>

    Awesome...
    EOT;

    mail("adamajabri@gmail.com", "Anonymous Site Message", $iable);
}