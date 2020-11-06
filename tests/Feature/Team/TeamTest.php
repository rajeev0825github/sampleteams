<?php

namespace Tests\Feature\Auth;

use App\Models\Player;
use App\Models\Team;
use App\Models\User;
use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Laravel\Passport\Passport;

class TeamTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function getAllTeams()
    {
        $user = User::factory()->create();
        Team::factory()->has(Player::factory()->count(10), 'players')->count(20)->create([
            'user_id' => $user
        ]);

        Passport::actingAs(
            $user,
            []
        );

        $response = $this->get('/api/teams');
        $response->assertStatus(200);
    }

    /** @test */
    public function shouldGetUnAuthenticated()
    {
        $user = User::factory()->create();
        Team::factory()->has(Player::factory()->count(10), 'players')->count(20)->create([
            'user_id' => $user
        ]);

        $response = $this->get('/api/teams');
        $response->assertStatus(401);
    }

    /** @test */
    public function storeTeamData()
    {
        $user = User::factory()->create();
        
        Passport::actingAs(
            $user,
            []
        );

        $response = $this->post('/api/teams', [
            'name' => 'Barcelona',
            'icon' => 'barcelona',
            'phone_number' => '123-345-678'
        ]);
        $response->assertStatus(201);
    }

    /** @test */
    public function shouldValiateTeamPostData()
    {
        $user = User::factory()->create();
        
        Passport::actingAs(
            $user,
            []
        );

        $response = $this->post('/api/teams', [
            'name' => 'Barcelona',
            'icon' => 'barcelona',
        ]);
        $response->assertStatus(422);
    }

    /** @test */
    public function getSingleTeamData()
    {
        $user = User::factory()->create();
        $teams = Team::factory()->has(Player::factory()->count(10), 'players')->count(20)->create([
            'user_id' => $user
        ]);
        Passport::actingAs(
            $user,
            []
        );
        
        $team = $teams->last();
        $response = $this->get('/api/teams/' . $team->id);
        $response->assertStatus(200);
        $content = $response->decodeResponseJson();
        $this->assertArrayHasKey('data', $content);
        $this->assertArrayHasKey('players', $content['data']);
    }

    /** @test */
    public function invalidSingleTeamData()
    {
        $user = User::factory()->create();
        $teams = Team::factory()->has(Player::factory()->count(10), 'players')->count(20)->create([
            'user_id' => $user
        ]);
        Passport::actingAs(
            $user,
            []
        );

        $user = User::factory()->create();
        $teams = Team::factory()->has(Player::factory()->count(10), 'players')->count(20)->create([
            'user_id' => $user
        ]);
        
        $team = $teams->last();
        $response = $this->get('/api/teams/' . $team->id);
        $response->assertStatus(404);
    }

   /** @test */
    public function updateTeamData()
    {
        $user = User::factory()->create();
        $team = Team::factory()->create([
            'user_id' => $user->id
        ]);
        Passport::actingAs(
            $user,
            []
        );

        $response = $this->put('/api/teams/' . $team->id, [
            'name' => 'Barcelona',
            'icon' => 'barcelona',
            'phone_number' => '123-345-678'
        ]);
        $response->assertStatus(200);
        $content = $response->decodeResponseJson();
        $this->assertArrayHasKey('data', $content);
        $this->assertSame($content['data']['name'], 'Barcelona');
    }

    /** @test */
    public function invalidTeamUpdateRequest()
    {
        $user = User::factory()->create();
        $team = Team::factory()->create([
            'user_id' => $user->id
        ]);
        Passport::actingAs(
            $user,
            []
        );

        $user = User::factory()->create();
        $team = Team::factory()->create([
            'user_id' => $user->id
        ]);

        $response = $this->put('/api/teams/' . $team->id, [
            'name' => 'Barcelona',
            'icon' => 'barcelona',
            'phone_number' => '123-345-678'
        ]);
        $response->assertStatus(404);
    }

    /** @test */
    public function deleteTeam()
    {
        $user = User::factory()->create();
        $team = Team::factory()->create([
            'user_id' => $user->id
        ]);
        Passport::actingAs(
            $user,
            []
        );

        $response = $this->delete('/api/teams/' . $team->id);
        $response->assertStatus(204);
    }

    /** @test */
    public function invalidDeleteRequest()
    {
        $user = User::factory()->create();
        $team = Team::factory()->create([
            'user_id' => $user->id
        ]);
        Passport::actingAs(
            $user,
            []
        );

        $user = User::factory()->create();
        $team = Team::factory()->create([
            'user_id' => $user->id
        ]);

        $response = $this->delete('/api/teams/' . $team->id);
        $response->assertStatus(404);
    }
}