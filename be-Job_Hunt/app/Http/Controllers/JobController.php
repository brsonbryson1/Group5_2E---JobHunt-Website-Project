<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Job;

class JobController extends Controller
{
    public function index()
    {
        return Job::paginate(10); // List all jobs, paginated
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'location' => 'required|string',
            // Add other job fields and validation rules
        ]);

        return Job::create($request->all()); // Create a new job
    }

    public function show($id)
    {
        return Job::findOrFail($id); // Show a specific job by ID
    }

    public function update(Request $request, $id)
    {
        $job = Job::findOrFail($id);

        $request->validate([
            'title' => 'string|max:255',
            'description' => 'string',
            'location' => 'string',
            // Add other fields and validation rules for update
        ]);

        $job->update($request->all()); // Update job with new data

        return $job;
    }

    public function destroy($id)
    {
        $job = Job::findOrFail($id);
        $job->delete(); // Delete the job

        return response()->json(['message' => 'Job deleted successfully']);
    }
}
