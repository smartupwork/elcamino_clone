<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Mail;
use App\Models\EmailLog;

class SendQueueEmail implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    protected $details;
    public $timeout = 7200; // 2 hours

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($details)
    {
        $this->details = $details;

       // $this->details = $details;

    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
       

        // $body = $this->details->email_body;
        $body = $this->details['email_body'];
        $subject = $this->details['subject'];
        $emails_list = $this->details['emails'];
        foreach($emails_list as $key=>$value){
          
           $input['name'] = $value;
           $input['email'] = $key;
           $input['subject'] = $subject;


           
           
           /* \Mail::send('emails.bulk',array('first_name'=>$value,'body'=>$body), function($message) use($input){
                $message->to($input['email'], $input['name'])
                    ->subject($input['subject']);

                    EmailLog::create([
                        'to' => $input['email'],
                        'subject' => $input['subject'],
                        'message' => $this->details['email_body']
                    ]);
            });*/

            \Mail::mailer('ses')->send('emails.bulk',array('first_name'=>$value,'body'=>$body), function($message) use($input){
                $message->to($input['email'], $input['name'])
                    ->subject($input['subject']);

                EmailLog::create([
                    'to' => $input['email'],
                    'subject' => $input['subject'],
                    'message' => $this->details['email_body']
                ]);
            });

            

        }
    }
}
