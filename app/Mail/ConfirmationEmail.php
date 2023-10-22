<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ConfirmationEmail extends Mailable {
    use Queueable, SerializesModels;
    public $name;
    public $attendance;

    public function __construct($name, $attendance) {
        $this->name = $name;
        $this->attendance = $attendance;
    }

    public function build() {
        return $this->subject("Karina & Neil's Wedding Attendance Confirmation")
            ->view('emails.confirmation');
    }
}
