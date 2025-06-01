<?php
##### This table is used to manage the relationship between clients and groups. It allows for multiple clients to be assigned to a group, with optional start and end dates, notes, and an assigned_by field to track who made the assignment. However since we are now assigning clients to the group schedules this table is no longer relevant####
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('group_clients', function (Blueprint $table) {
            $table->id();
            $table->foreignId('client_id')->constrained()->onDelete('cascade');
            $table->foreignId('group_id')->constrained('groups')->onDelete('cascade');
            $table->foreignId('assigned_by')->nullable()->constrained('employees')->onDelete('set null');
            $table->date('start_date')->nullable(); // optional: when assignment begins
            $table->date('end_date')->nullable();   // optional: when assignment ends
            $table->text('notes')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('group_clients');
    }
};
