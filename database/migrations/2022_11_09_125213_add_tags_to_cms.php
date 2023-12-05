<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('cms', function (Blueprint $table) {
            

            $table->text('sec_five_private')->default('private')->after('sec_five_price3');
            $table->text('sec_five_business')->default('business')->after('sec_five_private');
            $table->text('sec_five_corporate')->default('Corporate')->after('sec_five_business');


        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('cms', function (Blueprint $table) {
            //
        });
    }
};
