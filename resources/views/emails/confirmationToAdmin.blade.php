<!DOCTYPE html>
<html>

<head>
    <title>Guest Confirmation</title>
</head>

<body>

    <h2>{{ $name }} has confirmed that @if ($attendance == 'yes')
            they will be joining! and attendance is <strong style="color:green">{{ $attendance }}</strong>
        @else
            they will <strong style="color:red">NOT</strong> be joining! and attendance is
            <strong style="color:red">{{ $attendance }}</strong>
        @endif
    </h2>
</body>

</html>
