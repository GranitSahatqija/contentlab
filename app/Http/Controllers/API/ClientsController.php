<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Models\Client as Client;

class ClientsController extends Controller
{
    private $client;

    public function __construct(Client $client)
    {
        $this->client = $client;
    }

    public function getClients()
    {
        // return bcrypt('hamidi-Malisheva?17');
        return $this->client->all();
    }

    public function storeClient(Request $request)
    {
        $data = $request->all();

        $this->client->first_name = $data['first_name'];
        $this->client->last_name = $data['last_name'];
        $this->client->company_name = $data['company_name'];
        $this->client->email = $data['email'];
        $this->client->phone = $data['phone'];
        $this->client->street_address = $data['street_address'];
        $this->client->postal_code = $data['postal_code'];
        $this->client->city = $data['city'];
        $this->client->canton = $data['canton'];
        $this->client->type = $data['type'];
        $stored = $this->client->save();

        if($stored) {
            return response()->json(['success' => 'Klienti u regjistrua me sukses.'], 200);
        } else {
            return response()->json(['error' => 'Error. Klienti nuk u regjistrua.'], 500);
        }
    }
}
