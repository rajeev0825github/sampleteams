<?php

namespace App\Http\Controllers\Team;

use App\Events\Team\TeamCreated;
use App\Events\Team\TeamDestroyed;
use App\Events\Team\TeamUpdated;
use App\Http\Controllers\Controller;
use App\Http\Resources\Team as TeamResource;
use App\Models\Team;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TeamController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $teams = Team::where('user_id', auth()->user()->id)->latest()->get();
        return TeamResource::collection($teams);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // Validate
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:200',
            'icon' => 'required|string|max:50',
            'phone_number' => 'required|string|max:20',
        ]);
        if ($validator->fails()) {
            return response(['errors' => $validator->errors()->all()], 422);
        }

        // Create
        $data = $request->all();
        $team = Team::create([
            'user_id' => auth()->user()->id,
            'name' => $data['name'],
            'icon' => $data['icon'],
            'phone_number' => $data['phone_number']
        ]);
        // Trigger Event
        event(new TeamCreated($team));

        return new TeamResource($team->load('players'));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $team = Team::where('user_id', auth()->user()->id)->where('id', $id)->first();
        if ($team) {
            return new TeamResource($team->load('players'));
        }
        return response(['error' => 'Requested resource is not found.'], 404);
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
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:200',
            'icon' => 'required|string|max:50',
            'phone_number' => 'required|string|max:20',
        ]);
        if ($validator->fails()) {
            return response(['errors' => $validator->errors()->all()], 422);
        }

        // Create
        $data = $request->all();
        $team = Team::where('user_id', auth()->user()->id)->where('id', $id)->first();
        if (!$team) {
            return response(['error' => 'Requested resource is not found.'], 404);
        }
        $team->name = $data['name'];
        $team->icon = $data['icon'];
        $team->phone_number = $data['phone_number'];
        $team->save();
        $team->refresh();
        // Trigger Event
        event(new TeamUpdated($team));

        return new TeamResource($team);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $team = Team::where('user_id', auth()->user()->id)->where('id', $id)->first();
        if (!$team) {
            return response(['error' => 'Requested resource is not found.'], 404);
        }
        event(new TeamDestroyed($team));
        $team->delete();
        
        return response(['success' => true], 204);
    }
}