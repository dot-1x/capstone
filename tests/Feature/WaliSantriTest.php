<?php

use App\Models\WaliSantri;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

test('store method creates a new wali santri', function () {
    // Arrange
    $password = 'randompassword'; // This will be mocked
    $username = 'walisantri12345'; // This will be mocked
    
    // Mock Str::random and random_int
    Str::partialMock()
        ->shouldReceive('random')
        ->with(8)
        ->andReturn($password);
    
    // Mock random_int for username generation
    $mockRandomInt = mock('overload:random_int');
    $mockRandomInt->shouldReceive('random_int')
        ->with(10000, 99999)
        ->andReturn(12345);

    $data = [
        'name' => 'John Doe',
        'email' => 'john@example.com',
        'phone' => '081234567890',
        // other required fields from your WaliSantriStoreRequest
    ];

    // Act
    $response = $this->post(route('admin.walisantri.store'), $data);

    // Assert
    $response->assertRedirect(route('admin.walisantri.index'));
    
    $this->assertDatabaseHas('users', [
        'name' => 'John Doe',
        'email' => 'john@example.com',
        'phone' => '081234567890',
        'username' => $username,
        'role' => 'walisantri',
    ]);
    
    $waliSantri = WaliSantri::first();
    $this->assertTrue(Hash::check($password, $waliSantri->password));
    $this->assertEquals($password, $waliSantri->first_password);
});

test('destroy method deletes a wali santri', function () {
    // Arrange
    $waliSantri = WaliSantri::factory()->create();

    // Act
    $response = $this->delete(route('admin.walisantri.destroy', $waliSantri));

    // Assert
    $response->assertRedirect(route('admin.walisantri.index'));
    $this->assertDatabaseMissing('users', ['id' => $waliSantri->id]);
});

test('store method validates input', function () {
    // Act
    $response = $this->post(route('admin.walisantri.store'), []);

    // Assert
    $response->assertInvalid([
        'name', // assuming these are required fields
        'email',
        'phone',
    ]);
});