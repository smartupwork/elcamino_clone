<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class snapshare extends Model
{
    use HasFactory;

    protected $fillable =['snapshot_id','slug','receiver_email','sender_email'];
    protected $table = 'snapshares';
}
