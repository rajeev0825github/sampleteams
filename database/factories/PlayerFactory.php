<?php

namespace Database\Factories;

use App\Models\Player;
use App\Models\Team;
use Illuminate\Database\Eloquent\Factories\Factory;

class PlayerFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Player::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'team_id' => Team::factory(),
            'first_name' => $this->faker->firstName,
            'last_name' => $this->faker->lastName,
            'type' => [ 
                config('player.type.captain'), 
                config('player.type.player'), 
                config('player.type.substitute')][rand(0,2)]
        ];
    }
}
