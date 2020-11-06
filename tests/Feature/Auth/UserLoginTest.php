<?php

namespace Tests\Feature\Auth;

use App\Events\Auth\UserLoggedIn;
use App\Models\User;
use Tests\TestCase;
use Illuminate\Support\Facades\Event;
use Illuminate\Foundation\Testing\RefreshDatabase;

class UserLoginTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function shouldBeAbleToLogin()
    {
        Event::fake();

        $this->preparePassportClient();

        User::factory()->create([
            'email' => 'myemail@email.com',
            'password' => '@$trongpwd'
        ]);
        $response = $this->post('/api/login', [
            'email' => 'myemail@email.com',
            'password' => '@$trongpwd'
        ]);
        
        $response->assertStatus(200);
        Event::assertDispatched(UserLoggedIn::class);

        $content = $response->decodeResponseJson();
        $this->assertArrayHasKey('data', $content);
        $this->assertArrayHasKey('token', $content['data']);
    }

    /** @test */
    public function shouldBeReturnErrorWhenValidationFails()
    {
        Event::fake();

        $this->preparePassportClient();

        User::factory()->create([
            'email' => 'myemail@email.com',
            'password' => '@$trongpwd'
        ]);
        $response = $this->post('/api/login', [
            'email' => 'myemail@email.com',
        ]);

        $response->assertStatus(422);
        Event::assertNotDispatched(UserLoggedIn::class);
    }
}
