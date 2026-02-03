<?php

namespace App\Http\Controllers;

use App\Models\Message;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ChatController extends Controller
{
    /**
     * Show chat room
     */
    public function index()
    {
        return Inertia::render('ChatRoom', [
            'messages' => Message::with([
                'user',
                'parent.user', // untuk label "Fadly ↩ Rahmat"
            ])
                ->latest()
                ->take(100)
                ->get()
                ->reverse()
                ->values(),
        ]);
    }

    /**
     * Store message / reply
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'message'   => 'required|string|max:1000',
            'parent_id' => 'nullable|exists:messages,id',
        ]);

        Message::create([
            'user_id'   => auth()->id(),
            'message'   => $validated['message'],
            'parent_id' => $validated['parent_id'] ?? null,
        ]);

        return redirect()->back();
    }
}
