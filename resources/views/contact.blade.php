@extends('layouts.app')

@section('content')
<div class="container">
    <div class="col-md-8 offset-2">
        <form action="{{url('/contact')}}" method="post">
            @csrf
            <div class="form-group">
                <label for="">Name</label>
                <input type="text" name="name" class="form-control" required>
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" name="email" class="form-control" id="exampleInputEmail1"
                    aria-describedby="emailHelp" required>
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Phone Number</label>
                <input type="integer" name="phone" class="form-control" placeholder="phone number" required>
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Message</label>
                <textarea name="message" id="" cols="30" rows="10" class="form-control"
                    placeholder="your message..." required></textarea>
            </div>
            <button type="submit" class="btn btn-info float-right">Submit</button>
        </form>
    </div>
</div>

@endsection
