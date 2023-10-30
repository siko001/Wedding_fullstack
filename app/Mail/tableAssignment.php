<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class tableAssignment extends Mailable {
    use Queueable, SerializesModels;

    public $name;
    public $table_number;
    public function __construct($name, $table_number) {
        $this->name = $name;
        $this->table_number = $table_number;
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope {
        return new Envelope(
            subject: 'You Have Been Assigned a Table!',
        );
    }

    public function build() {
        return $this->subject("Karina and Neil's Wedding Table Assigned")
            ->view('emails.tableAssignment');
    }
}
