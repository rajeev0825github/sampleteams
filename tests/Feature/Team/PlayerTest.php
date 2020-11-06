<?php

namespace Tests\Feature\Auth;

use App\Models\Player;
use App\Models\Team;
use App\Models\User;
use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Laravel\Passport\Passport;

class PlayerTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function storePlayerData()
    {
        $user = User::factory()->create();
        $team = Team::factory()->create([
            'user_id' => $user
        ]);
        Passport::actingAs(
            $user,
            []
        );

        $response = $this->post('/api/players', [
            'team_id' => $team->id,
            'first_name' => 'Lionel',
            'last_name' => 'Messi',
            'type' => config('player.type.captain')
        ]);
        $response->assertStatus(201);
    }

    /** @test */
    public function shouldValiatePlayerPostData()
    {
        $user = User::factory()->create();
        $team = Team::factory()->create([
            'user_id' => $user
        ]);
        
        Passport::actingAs(
            $user,
            []
        );

        $user = User::factory()->create();
        $team = Team::factory()->create([
            'user_id' => $user
        ]);

        $response = $this->post('/api/players', [
            'team_id' => $team->id,
            'first_name' => 'Lionel',
            'last_name' => 'Messi',
            'type' => config('player.type.captain')
        ]);
        $response->assertStatus(422);
    }


   /** @test */
    public function updatePlayerData()
    {
        $user = User::factory()->create();
        $team = Team::factory()->has(Player::factory()->count(10), 'players')->create([
            'user_id' => $user->id
        ]);
        Passport::actingAs(
            $user,
            []
        );

        $response = $this->put('/api/players/' . $team->players->last()->id, [
            'first_name' => 'Philippe',
            'last_name' => 'Coutinho',
            'type' => config('player.type.captain')
        ]);
        $response->assertStatus(200);
        $content = $response->decodeResponseJson();
        $this->assertArrayHasKey('data', $content);
        $this->assertSame($content['data']['first_name'], 'Philippe');
    }

    /** @test */
    public function invalidPlayerUpdateRequest()
    {
        $user = User::factory()->create();
        $team = Team::factory()->has(Player::factory()->count(10), 'players')->create([
            'user_id' => $user->id
        ]);
        Passport::actingAs(
            $user,
            []
        );
        $user = User::factory()->create();
        $team = Team::factory()->has(Player::factory()->count(10), 'players')->create([
            'user_id' => $user->id
        ]);

        $response = $this->put('/api/players/' . $team->players->last()->id, [
            'first_name' => 'Philippe',
            'last_name' => 'Coutinho',
            'type' => config('player.type.captain')
        ]);
        $response->assertStatus(404);
    }

    /** @test */
    public function deletePlayer()
    {
        $user = User::factory()->create();
        $team = Team::factory()->has(Player::factory()->count(10), 'players')->create([
            'user_id' => $user->id
        ]);
        Passport::actingAs(
            $user,
            []
        );

        $response = $this->delete('/api/players/' .  $team->players->last()->id);
        $response->assertStatus(204);
    }

    /** @test */
    public function invalidDeleteRequest()
    {
        $user = User::factory()->create();
        $team = Team::factory()->has(Player::factory()->count(10), 'players')->create([
            'user_id' => $user->id
        ]);
        Passport::actingAs(
            $user,
            []
        );

        $user = User::factory()->create();
        $team = Team::factory()->has(Player::factory()->count(10), 'players')->create([
            'user_id' => $user->id
        ]);

        $response = $this->delete('/api/players/' . $team->players->last()->id);
        $response->assertStatus(404);
    }
}