package com.capacitorjs.example.remote;

import android.os.Bundle;
import android.util.Log;
import android.webkit.ServiceWorkerClient;
import android.webkit.ServiceWorkerController;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;

import androidx.annotation.Nullable;

import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        ServiceWorkerController swController = ServiceWorkerController.getInstance();

        swController.setServiceWorkerClient(new ServiceWorkerClient() {
            @Nullable
            @Override
            public WebResourceResponse shouldInterceptRequest(WebResourceRequest request) {
                Log.d("APP", request.getUrl().toString());
                return bridge.getLocalServer().shouldInterceptRequest(request);
                //return super.shouldInterceptRequest(request);
            }
        });
    }
}
