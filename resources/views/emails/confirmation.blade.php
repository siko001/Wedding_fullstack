<!DOCTYPE html>
<html>

<head>
    <title>Your Attendance</title>
</head>

<body>
    <h1>You confirmed that you will be @if ($attendance == 'yes')
            joining
        @else
            not joining
        @endif
        us on our Special day
    </h1>
    <p>Hi, {{ $name }}</p>
    <p>Your attendance status:<strong>
            @if ($attendance == 'yes')
                Confirmed Going
            @else
                Not Going
            @endif
        </strong></p>

    @if ($attendance == 'yes')
        <p>We are excisted to have you on our special day</p>
    @else
        <p>We're' sorry you won't be able to make it, if you change your mind Please contact Neil</p>
    @endif
</body>

</html>
