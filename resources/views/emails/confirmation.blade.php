<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Registration Notification</title>
</head>
<body>
    <h1>User Info:</h1>
    <h2>user name</h2>
    <p>{{$user->name}}</p>
    <h2>user email</h2>
    <p>{{$user->email}}</p>
    <h2>user password</h2>
    <p>Your Password is: password</p>
    <h2>user role</h2>
    <p>Role is: {{$user->role}}</p>
    here you can set your password
    <a href="{{ url('dashboard/reset-password-request')}}">here is your link</a>
</body>
</html>