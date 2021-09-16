<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Category;
class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // categories
        Category::create([
            'id' => 1,
            'title' => 'Štampa'
        ]);
        Category::create([
            'id' => 2,
            'title' => 'Blokovska roba'
        ]);
        Category::create([
            'id' => 3,
            'title' => 'Kancelarijski materijal'
        ]);
        Category::create([
            'id' => 4,
            'title' => 'Materijali za događaje'
        ]);
        Category::create([
            'id' => 5,
            'title' => 'Reklamni materijali'
        ]);
        Category::create([
            'id' => 6,
            'title' => 'Naljepnice / Etikete / Deklaracije'
        ]);
        Category::create([
            'id' => 7,
            'title' => 'Kalendari'
        ]);
        Category::create([
            'id' => 8,
            'title' => 'Meniji / Jelovnici'
        ]);
        Category::create([
            'id' => 9,
            'title' => 'Ostalo'
        ]);
    //    subcategories
        Category::create([
            'id' => 10,
            'parent_id' => 1,
            'title' => 'Knjige'
        ]);
        Category::create([
            'id' => 11,
            'parent_id' => 1,
            'title' => 'Katalozi'
        ]);
        Category::create([
            'id' => 12,
            'parent_id' => 1,
            'title' => 'Zbornici'
        ]);
        Category::create([
            'id' => 13,
            'parent_id' => 1,
            'title' => 'Brošure'
        ]);
        Category::create([
            'id' => 14,
            'parent_id' => 1,
            'title' => 'Časopisi'
        ]);
        Category::create([
            'id' => 15,
            'parent_id' => 2,
            'title' => 'Spiralni povez'
        ]);
        Category::create([
            'id' => 16,
            'parent_id' => 2,
            'title' => 'Lijepljenje'
        ]);
        Category::create([
            'id' => 17,
            'parent_id' => 2,
            'title' => 'Samokopirajući'
        ]);
        Category::create([
            'id' => 18,
            'parent_id' => 2,
            'title' => 'Blokovi'
        ]);
        Category::create([
            'id' => 19,
            'parent_id' => 3,
            'title' => 'Vizit karta'
        ]);
        Category::create([
            'id' => 20,
            'parent_id' => 3,
            'title' => 'Memorandumi'
        ]);
        Category::create([
            'id' => 21,
            'parent_id' => 3,
            'title' => 'Koverte'
        ]);
        Category::create([
            'id' => 22,
            'parent_id' => 3,
            'title' => 'Fascikle'
        ]);
        Category::create([
            'id' => 23,
            'parent_id' => 4,
            'title' => 'Ulaznice'
        ]);
        Category::create([
            'id' => 24,
            'parent_id' => 4,
            'title' => 'Pozivnice'
        ]);
        Category::create([
            'id' => 25,
            'parent_id' => 4,
            'title' => 'Čestitke'
        ]);
        Category::create([
            'id' => 26,
            'parent_id' => 4,
            'title' => 'Razglednice'
        ]);
        Category::create([
            'id' => 27,
            'parent_id' => 4,
            'title' => 'Posteri / Plakati'
        ]);
        Category::create([
            'id' => 28,
            'parent_id' => 4,
            'title' => 'Kese'
        ]);
        Category::create([
            'id' => 29,
            'parent_id' => 5,
            'title' => 'Flajeri'
        ]);
        
        Category::create([
            'id' => 30,
            'parent_id' => 5,
            'title' => 'Posteri / Plakati'
        ]);
        Category::create([
            'id' => 31,
            'parent_id' => 5,
            'title' => 'Kese'
        ]);
        Category::create([
            'id' => 32,
            'parent_id' => 5,
            'title' => 'Door hangeri'
        ]);
        Category::create([
            'id' => 33,
            'parent_id' => 5,
            'title' => 'Wobleri'
        ]);
        Category::create([
            'id' => 34,
            'parent_id' => 5,
            'title' => 'Roll up baneri'
        ]);
        Category::create([
            'id' => 35,
            'parent_id' => 5,
            'title' => 'A stand'
        ]);
        Category::create([
            'id' => 36,
            'parent_id' => 5,
            'title' => 'Bilbordi'
        ]);
        Category::create([
            'id' => 37,
            'parent_id' => 6,
            'title' => 'Rezanje na format'
        ]);
        Category::create([
            'id' => 38,
            'parent_id' => 6,
            'title' => 'Katovane'
        ]);
        Category::create([
            'id' => 39,
            'parent_id' => 7,
            'title' => 'Zidni kalendar'
        ]);
        Category::create([
            'id' => 40,
            'parent_id' => 7,
            'title' => 'Stoni kalendar'
        ]);
        Category::create([
            'id' => 41,
            'parent_id' => 8,
            'title' => 'Heftanje'
        ]);
        Category::create([
            'id' => 42,
            'parent_id' => 8,
            'title' => 'Tvrdi povez'
        ]);
        Category::create([
            'id' => 43,
            'parent_id' => 9,
            'title' => 'Kutija / Ambalaža'
        ]);
        Category::create([
            'id' => 44,
            'parent_id' => 9,
            'title' => 'Posebni zahtjevi'
        ]);
    }
}
