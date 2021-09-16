<?php

namespace App\Http\Controllers;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
    
        $category = Category::select('title')->where('parent_id',null)->get();
        $subcategory1 = Category::select('title')->where('parent_id',1)->get();
        $subcategory2 = Category::select('title')->where('parent_id',2)->get();
        $subcategory3 = Category::select('title')->where('parent_id',3)->get();
        $subcategory4 = Category::select('title')->where('parent_id',4)->get();
        $subcategory5 = Category::select('title')->where('parent_id',5)->get();
        $subcategory6 = Category::select('title')->where('parent_id',6)->get();
        $subcategory7 = Category::select('title')->where('parent_id',7)->get();
        $subcategory8 = Category::select('title')->where('parent_id',8)->get();
        $subcategory9 = Category::select('title')->where('parent_id',9)->get();


        return response(['main'=> $category, 'subcat1'=> $subcategory1,'subcat2'=>$subcategory2,'subcat3'=>$subcategory3,'subcat4'=>$subcategory4,'subcat5'=>$subcategory5,'subcat6'=>$subcategory6,'subcat7'=>$subcategory7,'subcat8'=>$subcategory8,'subcat9'=>$subcategory9], 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
