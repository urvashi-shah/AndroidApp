package com.example.MyApplication;

import retrofit2.Call;
import retrofit2.http.GET;

public interface ApiService {

    @GET("/api/data")
    Call<LocationData> getData();  // Replace String with your model class
}

