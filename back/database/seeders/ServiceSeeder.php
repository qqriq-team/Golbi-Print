<?php

namespace Database\Seeders;
use App\Models\Service;
use Illuminate\Database\Seeder;

class ServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        Service::create([
            'name' => 'Offset Štampa',
            'description' => 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum voluptate laboriosam expedita facilis ducimus a repellendus molestias, quis placeat corrupti nobis labore ullam commodi, laudantium provident explicabo, eaque neque accusantium.' ,
            'image' => 'high-contrast-printed-paper-stack-industry-offset-sheets.png'
            ]);
        Service::create([
            'name' => 'Digitalna Štampa',
            'description' => 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum voluptate laboriosam expedita facilis ducimus a repellendus molestias, quis placeat corrupti nobis labore ullam commodi, laudantium provident explicabo, eaque neque accusantium.', 
            'image' => 'format-large-inkjet-printer-working-vinyl.png'
            ]);
        Service::create([
            'name' => 'Štampa velikog formata',
            'description' => 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum voluptate laboriosam expedita facilis ducimus a repellendus molestias, quis placeat corrupti nobis labore ullam commodi, laudantium provident explicabo, eaque neque accusantium.', 
            'image' => 'blank-advertisement-billboard-poster-busy-road.png'
            ]);
        Service::create([
            'name' => 'Dizajn',
            'description' => 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum voluptate laboriosam expedita facilis ducimus a repellendus molestias, quis placeat corrupti nobis labore ullam commodi, laudantium provident explicabo, eaque neque accusantium.', 
            'image' => 'word-design-written-top-colorful-geometric-3d-shapes.png'
            ]);
    }
}
