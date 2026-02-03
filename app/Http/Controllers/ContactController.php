<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function send(Request $request)
    {
        $validated = $request->validate([
            'name'    => 'required|string|max:100',
            'email'   => 'required|email:rfc,dns|max:150',
            'message' => 'required|string|max:2000',
            'website' => 'nullable|size:0', // honeypot
        ]);

        if ($request->filled('website')) {
            abort(403);
        }

        // Kirim email (message saja)
        Mail::raw(
            $validated['message'],
            function ($mail) use ($validated) {
                $mail->to('fadlyfebro123@gmail.com')
                    ->replyTo($validated['email'], $validated['name'])
                    ->subject('New Contact Message');
            }
        );

        return redirect()->route('contact')->with('success', true);
    }
}
