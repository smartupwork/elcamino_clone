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
        Schema::table('users', function (Blueprint $table) {
            $table->double('pre_retirement')->default(10)->after('remember_token');
            $table->double('post_retirement')->default(6)->after('pre_retirement');
            $table->double('inflation')->default(3)->after('post_retirement');
            $table->integer('retirement_age')->default(65)->after('inflation');
            $table->double('wage_replacement_ratio')->default(80)->after('retirement_age');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            //
        });
    }
};
