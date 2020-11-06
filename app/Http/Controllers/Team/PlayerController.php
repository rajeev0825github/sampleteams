<?php

namespace App\Http\Controllers\Team;

use App\Events\Team\PlayerCreated;
use App\Events\Team\PlayerDestroyed;
use App\Events\Team\PlayerUpdated;
use App\Http\Controllers\Controller;
use App\Http\Resources\Player as PlayerResource;
use App\Models\Player;
use App\Models\Team;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PlayerController extends Controller
{

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = $this->validator($request->all());

        if ($validator->fails()) {
            return response(['errors' => $validator->errors()->all()], 422);
        }

        // Create
        $data = $request->all();
        $player = Player::create([
            'team_id' => $data['team_id'],
            'first_name' => $data['first_name'],
            'last_name' => $data['last_name'],
            'type' => $data['type']
        ]);
        // Trigger Event
        event(new PlayerCreated($player));

        return new PlayerResource($player);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        // Validate
        $validator = $this->validator($request->all(), true);

        if ($validator->fails()) {
            return response(['errors' => $validator->errors()->all()], 422);
        }

        // Create
        $data = $request->all();
        $player = Player::find($id);
        if (!$player || $player->team->user_id != auth()->user()->id) {
            return response(['error' => 'Requested resource is not found.'], 404);
        }
        $player->first_name = $data['first_name'];
        $player->last_name = $data['last_name'];
        $player->type = $data['type'];
        $player->save();
        $player->refresh();
        // Trigger Event
        event(new PlayerUpdated($player));

        return new PlayerResource($player);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $player = Player::find($id);
        if (!$player || $player->team->user_id != auth()->user()->id) {
            return response(['error' => 'Requested resource is not found.'], 404);
        }
        event(new PlayerDestroyed($player));
        $player->delete();

        return response(['success' => true], 204);
    }

    /**
     * Build validator
     *
     * @param array $data
     * @return Validator instance
     */
    private function validator(array $data, bool $isUpdate = false)
    {
        $rules = [
            'first_name' => 'required|string|max:200',
            'last_name' => 'required|string|max:200',
            'type' => 'required|string',
        ];
        if (!$isUpdate) {
            $rules['team_id'] = 'required';
        }

        // Validate
        $validator = Validator::make($data, $rules);

        if (!$isUpdate) {
            // Validate the request is authorized by checking team_id with user session.
            $validator->after(function ($validator) {
                $teamValid = Team::where('user_id', auth()->user()->id)
                    ->where('id', $validator->getData()['team_id'])->first();
                if (!$teamValid) {
                    $validator->errors()->add('team_id', 'Unauthorized!');
                }
            });
        }

        return $validator;
    }
}
