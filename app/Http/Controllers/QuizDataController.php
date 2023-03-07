<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\QuizData;

class QuizDataController extends Controller
{
    public function createQuiz(Request $request){

        $res = new QuizData;

        // $res->title = 'sad';
        // $res->description = $request->description;
        // $res->question = $request->question;
        // $res->answer = $request->answer;
        // $res->save();
// $data = $request->all();

// dd($data);
        $res->insert($data);
        
        return response()->json([
            'title' => $request->title,
            'description' => $request->description,
            'question' => $request->question,
            'answer' => $request->answer
        ], 201);
    }
}
