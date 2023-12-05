<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;
use App\User;

class contactMail extends Mailable
{
    use Queueable, SerializesModels;
   public $data;
/**
    * Create a new message instance.
    
    * @return void
    */
   public function __construct($data){
   
       $this->data = $data;
/**
    * Build the message.
    
    * @return $this
    */
   }
   public function build()
{
       $subject = 'Contactform';
       return $this->view('emails.contactform')->subject($subject);
   
}
}
