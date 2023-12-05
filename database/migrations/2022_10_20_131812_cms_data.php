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
        Schema::create('cms', function (Blueprint $table) {
            $table->id();
            $table->string('logo')->nullable();
            $table->text('sec_one_heading')->nullable();
            $table->text('sec_one_Subheading')->nullable();
            $table->string('sec_one_img')->nullable();
            $table->string('sec_one_video')->nullable();
            $table->text('sec_two_heading')->nullable();
            $table->text('sec_two_heading2')->nullable();
            $table->text('sec_two_heading3')->nullable();
            $table->text('sec_two_Subheading')->nullable();
            $table->string('sec_two_img')->nullable();
            $table->string('sec_two_img2')->nullable();
            $table->string('sec_two_img3')->nullable();
            $table->string('sec_two_video')->nullable();
            $table->text('sec_three_heading')->nullable();
            $table->text('sec_three_Subheading')->nullable();
            $table->string('sec_three_img')->nullable();
            $table->string('sec_three_video')->nullable();
            $table->text('sec_four_heading')->nullable();
            $table->text('sec_four_Subheading')->nullable();
            $table->string('sec_four_img')->nullable();
            $table->string('sec_four_video')->nullable();
            $table->text('sec_five_heading')->nullable();
            $table->text('sec_five_Subheading')->nullable();
            $table->string('sec_five_img')->nullable();
            $table->string('sec_five_video')->nullable();
            $table->text('sec_six_heading')->nullable();
            $table->text('sec_six_Subheading')->nullable();
            $table->text('sec_six_Subheading2')->nullable();
            $table->text('sec_six_Subheading3')->nullable();
            $table->string('sec_six_img')->nullable();
            $table->string('sec_six_video')->nullable();
            $table->text('sec_seven_heading')->nullable();
            $table->text('sec_seven_Subheading')->nullable();
            $table->text('sec_seven_Subheading2')->nullable();
            $table->text('sec_seven_Subheading3')->nullable();
            $table->text('sec_seven_Subheading4')->nullable();
            $table->string('sec_seven_img')->nullable();
            $table->string('sec_seven_video')->nullable();

            $table->timestamps();
           
           
            
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
};
