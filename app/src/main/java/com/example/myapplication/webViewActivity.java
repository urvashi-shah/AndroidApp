package com.example.myapplication;

import android.os.Bundle;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import androidx.appcompat.app.AppCompatActivity;

class WebViewActivity extends AppCompatActivity {

    private WebView webView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_webview); // make sure your XML name matches!

        webView = findViewById(R.id.webView);

        webView.setWebViewClient(new WebViewClient()); // Important so it loads inside app, not Chrome
        webView.getSettings().setJavaScriptEnabled(true); // If your HTML uses JavaScript
        webView.loadUrl("file:///android_asset/login.html"); // VERY IMPORTANT
    }
}

