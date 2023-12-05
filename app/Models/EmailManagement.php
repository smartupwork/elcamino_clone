<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Carbon\Carbon;

class EmailManagement extends Model
{
    use HasFactory;

    protected $table = 'email_crm';

    protected $fillable =['first_name','last_name','email','company','last_contact','do_not_contact','website','contact_type'];

}
