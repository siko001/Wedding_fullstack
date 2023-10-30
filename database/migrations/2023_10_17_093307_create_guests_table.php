<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGuestsTable extends Migration {
    public function up() {
        Schema::create('guests', function (Blueprint $table) {
            $table->id();
            $table->string('fullname');
            $table->string('email')->unique();
            $table->enum('confirmed', ['yes', 'no'])->default("no");
            $table->enum('attending', ['yes', 'no'])->nullable();
            $table->string('table_number')->nullable();
            $table->timestamps();
        });
    }

    public function down() {
        Schema::dropIfExists('guests');
    }
}
