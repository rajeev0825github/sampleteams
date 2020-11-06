<?php

namespace Tests\Feature\Auth;

use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Tests\TestCase;
use Illuminate\Support\Facades\Event;
use Illuminate\Foundation\Testing\RefreshDatabase;


class UserRegistrationTest extends TestCase
{
    use RefreshDatabase;


    /** @test */
    public function shouldBeAbleToRegoster()
    {
        Event::fake();

        $this->preparePassportClient();

        $response = $this->post('/api/register', [
            'name' => 'Rajeev',
            'email' => 'myemail@email.com',
            'password' => '@$trongpwd',
            'password_confirmation' => '@$trongpwd'
        ]);
        $response->assertStatus(201);

        Event::assertDispatched(Registered::class);

        $content = $response->decodeResponseJson();
        $this->assertArrayHasKey('data', $content);
        $this->assertArrayHasKey('token', $content['data']);
    }

    /** @test */
    public function shouldBeReturnErrorWhenValidationFails()
    {
        Event::fake();

        $this->preparePassportClient();

        $response = $this->post('/api/register', [
            'email' => 'myemail@email.com',
        ]);

        $response->assertStatus(422);
        Event::assertNotDispatched(Registered::class);
    }
}
