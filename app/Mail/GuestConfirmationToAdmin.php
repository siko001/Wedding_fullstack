<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class GuestConfirmationToAdmin extends Mailable {
    use Queueable, SerializesModels;
    public $name;
    public $attendance;

    public function __construct($name, $attendance) {
        $this->name = $name;
        $this->attendance = $attendance;
    }

    public function build() {
        return $this->subject("A Guest Confirmed His Attendance!")
            ->view('emails.confirmationToAdmin');
    }
}
