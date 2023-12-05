<?php

namespace App\Models;

use App\MediaLibrary\InteractsWithMedia;
use Carbon\Carbon;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Spatie\MediaLibrary\HasMedia;

class User extends Authenticatable implements HasMedia
{
    use HasApiTokens, HasFactory, Notifiable, InteractsWithMedia;

    protected $guarded = ['id'];

    protected $hidden = ['password', 'remember_token',];

    protected $casts = ['email_verified_at' => 'datetime',];

    protected $dates = ['dob'];

    public function registerMediaCollections(): void
    {
        $this
            ->addMediaCollection('avatar')
            ->useFallbackUrl(asset(theme()->getMediaUrlPath().'avatars/blank.png'))
            ->useFallbackPath(public_path(asset(theme()->getMediaUrlPath().'avatars/blank.png')))
            ->singleFile();
    }

    protected function name(): Attribute
    {
        return new Attribute(
            get: fn ($value) =>  "$this->first_name $this->last_name",
        );
    }

    protected function dob(): Attribute
    {
        return new Attribute(
            set: fn ($value) =>  Carbon::createFromFormat('m-d-Y', $value),
        );
    }

    protected function password(): Attribute
    {
        return new Attribute(
            set: function ($value){
                $isEncrypted = strlen($value) == 60 && strpos($value, '$2y$') == 0;
                return $isEncrypted ? $value : bcrypt($value);
            },
        );
    }

    protected function age(): Attribute
    {
        return new Attribute(
            get: fn () =>  $this->dob?->age,
        );
    }

    protected function avatarUrl(): Attribute
    {
        return new Attribute(
            get: fn ($value) =>  $this->getFirstMediaUrl('avatar')
        );
    }

    public function isAdmin()
    {
        return in_array($this->id, [
            1
        ]);
    }

    public function calculations()
    {
        return $this->hasMany(Calculation::class);
    }

    public function lastCalculation()
    {
        return $this->hasOne(Calculation::class)->latestOfMany();
    }
}
