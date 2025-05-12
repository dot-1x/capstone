<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * The current password being used by the factory.
     */
    protected static ?string $password;
    protected $model = User::class;
    private static $counter = 0;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $roles = ['santri', 'ustadz', 'walisantri'];
        // $role = $roles[array_rand($roles)]
        return [
            'name' => $this->faker->name,
            'email' => $this->faker->unique()->safeEmail,
            'password' => bcrypt('password'), // default password
            'role' => $roles[array_rand($roles)],
            'alamat' => $this->faker->address,
            'phone' => $this->faker->phoneNumber,
            'first_password' => 'password'
        ];
    }

    public function santri()
    {
        $angkatan = rand(2021, 2025);
        return $this->state(fn () => [
            'role' => 'santri',
            'santri_role' => 'regular',
            'nis' => $angkatan . str_pad(self::$counter++, 5, '0', STR_PAD_LEFT),
            'angkatan' => $angkatan,
            'jenis_kelamin' => $this->faker->randomElement(['pria', 'wanita']),
            'nik' => $this->faker->randomNumber(9),
            'tempat_lahir' => $this->faker->city(),
            'tanggal_lahir' => $this->faker->date(),
            'username' => 'santri' . self::$counter
        ]);
    }

    public function ustadz()
    {
        return $this->state(fn () => ['role' => 'ustadz', 'username' => 'ustadz' . self::$counter++]);
    }

    public function walisantri()
    {
        return $this->state(fn () => ['role' => 'walisantri', 'username' => 'walisantri' . self::$counter++]);
    }

    /**
     * Indicate that the model's email address should be unverified.
     */
    public function unverified(): static
    {
        return $this->state(fn (array $attributes) => [
            'email_verified_at' => null,
        ]);
    }
}
