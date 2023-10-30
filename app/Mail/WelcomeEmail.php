<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class WelcomeEmail extends Mailable {
    use Queueable, SerializesModels;
    public $name;
    public $email;


    public function __construct($name, $email) {
        $this->name = $name;
        $this->email = $email;
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope {
        return new Envelope(
            subject: 'Welcome Email',
        );
    }

    /**
     * Get the message content definition.
     */
    public function build() {
        return $this->subject("Karina and Neil's Wedding Invitation")
            ->view('emails.guestInvitation');
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array {
        return [];
    }
}
