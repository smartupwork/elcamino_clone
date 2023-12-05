<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;
use Spatie\SchemalessAttributes\Casts\SchemalessAttributes;

class Calculation extends Model
{
    protected $guarded = ['id'];

    protected $casts = [
        'assets' => 'array',
        'expenses' => 'array',
        'debts' => 'array',
        'goals' => 'array',
        'results' => SchemalessAttributes::class,
    ];

    public function scopeWithResults(): Builder
    {
        return $this->results->modelScope();
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    protected function name(): Attribute
    {
        return new Attribute(
            get: fn ($value) =>  $value ?? $this->created_at->format('m/d/Y'),
        );
    }

    public function scopeRelative(Builder $builder)
    {
        $user = auth()->user();
        if ($user->isAdmin()){
            return $builder;
        }

        $builder->where('user_id', $user->id);
    }
}
