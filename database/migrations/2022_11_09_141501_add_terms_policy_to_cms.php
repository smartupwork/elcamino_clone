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
            $table->text('head_privacy')->default('null')->after('sec_seven_video');
            $table->text('body_privacy')->default('null')->after('head_privacy');
            $table->text('head_terms')->default('null')->after('body_privacy');
            $table->text('body_terms')->default('null')->after('head_terms');
            $table->string('footer_logo')->default('null')->after('body_terms');
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
