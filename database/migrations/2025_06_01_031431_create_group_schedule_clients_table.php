<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('group_schedule_clients', function (Blueprint $table) {
            $table->id(); // One and only primary key
            $table->unsignedBigInteger('group_schedule_id');
            $table->unsignedBigInteger('client_id');
            $table->timestamps();
        
            $table->foreign('group_schedule_id')->references('id')->on('group_schedules')->onDelete('cascade');
            $table->foreign('client_id')->references('id')->on('clients')->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('group_schedule_clients');
    }
};
