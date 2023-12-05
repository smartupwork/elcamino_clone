<?php
    

namespace App\Imports;  
use App\Models\Subscribe;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
     
class SubscribeImport implements ToModel, WithHeadingRow
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {

        if(!Subscribe::where('email', '=', $row['email'])->exists()) {
            return new Subscribe([
                'email' => $row['email'],
            ]);
        }
    }
}
