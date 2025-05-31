<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('home');
})->name('home');

Route::get('/tracker', fn () => Inertia::render('tracker'))->name('tracker');
Route::get('/history', fn () => Inertia::render('history'))->name('history');
Route::get('/new', fn () => Inertia::render('new'))->name('new');
Route::get('/select-kids', fn () => Inertia::render('select-kids'))->name('select-kids');


Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
