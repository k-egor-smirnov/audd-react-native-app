package com.audd_react_native;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.cmcewen.blurview.BlurViewPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.RNFetchBlob.RNFetchBlobPackage;
import com.rnfs.RNFSPackage;
import com.rnim.rn.audio.ReactNativeAudioPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new BlurViewPackage(),
            new VectorIconsPackage(),
            new RNFetchBlobPackage(),
            new RNFSPackage(),
            new ReactNativeAudioPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
