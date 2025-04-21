<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'phone',
        'role'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    /**
     * Custom login method to authenticate user using phone number and password.
     *
     * @param string $phone
     * @param string $password
     * @return bool
     */
    public static function loginWithPhone(string $phone, string $password): bool
    {
        // Attempt to locate the user by phone number.
        $user = self::where('phone', $phone)->first();

        // Check if user exists and the password is correct.
        if ($user && Hash::check($password, $user->password)) {
            // Log the user in using Laravel's Auth facade.
            Auth::login($user);
            return true;
        }

        return false;
    }
}
