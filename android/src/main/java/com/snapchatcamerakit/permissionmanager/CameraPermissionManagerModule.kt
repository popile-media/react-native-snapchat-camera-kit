package com.snapchatcamerakit.permissionmanager

import android.Manifest
import android.content.pm.PackageManager
import android.os.Build
import androidx.core.content.ContextCompat
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.module.annotations.ReactModule
import com.facebook.react.modules.core.PermissionAwareActivity
import com.facebook.react.modules.core.PermissionListener
import com.snapchatcamerakit.permissionmanager.enums.PermissionStatus

@ReactModule(name = CameraPermissionManagerModule.NAME)
class CameraPermissionManagerModule(context: ReactApplicationContext) : ReactContextBaseJavaModule(context) {
  companion object {
    const val NAME = "CameraPermissionManagerModule"
    var REQUEST_CODE = 10

    fun parsePermissionStatus(status: Int): String {
      return when (status) {
        PackageManager.PERMISSION_DENIED -> PermissionStatus.DENIED
        PackageManager.PERMISSION_GRANTED -> PermissionStatus.AUTHORIZED
        else -> PermissionStatus.NOT_DETERMINED
      }
    }
  }

  override fun getName(): String = NAME

  private val reactApplicationContext = context

  @ReactMethod
  fun getCameraPermissionStatus(promise: Promise) {
    val status = ContextCompat.checkSelfPermission(reactApplicationContext, Manifest.permission.CAMERA)
    promise.resolve(parsePermissionStatus(status))
  }

  @ReactMethod
  fun getMicrophonePermissionStatus(promise: Promise) {
    val status = ContextCompat.checkSelfPermission(reactApplicationContext, Manifest.permission.RECORD_AUDIO)
    promise.resolve(parsePermissionStatus(status))
  }

  @ReactMethod
  fun requestCameraPermission(promise: Promise) {
    if (Build.VERSION.SDK_INT < Build.VERSION_CODES.M) {
      // API 21 and below always grants permission on app install
      return promise.resolve(PermissionStatus.AUTHORIZED)
    }

    val activity = reactApplicationContext.currentActivity
    if (activity is PermissionAwareActivity) {
      val currentRequestCode = REQUEST_CODE++
      val listener =
        PermissionListener { requestCode: Int, _: Array<String>, grantResults: IntArray ->
          if (requestCode == currentRequestCode) {
            val permissionStatus = if (grantResults.isNotEmpty()) grantResults[0] else PackageManager.PERMISSION_DENIED
            promise.resolve(parsePermissionStatus(permissionStatus))
            return@PermissionListener true
          }
          return@PermissionListener false
        }
      activity.requestPermissions(arrayOf(Manifest.permission.CAMERA), currentRequestCode, listener)
    } else {
      promise.reject("NO_ACTIVITY", "No PermissionAwareActivity was found! Make sure the app has launched before calling this function.")
    }
  }

  @ReactMethod
  fun requestMicrophonePermission(promise: Promise) {
    if (Build.VERSION.SDK_INT < Build.VERSION_CODES.M) {
      // API 21 and below always grants permission on app install
      return promise.resolve("authorized")
    }

    val activity = reactApplicationContext.currentActivity
    if (activity is PermissionAwareActivity) {
      val currentRequestCode = REQUEST_CODE++
      val listener =
        PermissionListener { requestCode: Int, _: Array<String>, grantResults: IntArray ->
          if (requestCode == currentRequestCode) {
            val permissionStatus = if (grantResults.isNotEmpty()) grantResults[0] else PackageManager.PERMISSION_DENIED
            promise.resolve(parsePermissionStatus(permissionStatus))
            return@PermissionListener true
          }
          return@PermissionListener false
        }
      activity.requestPermissions(arrayOf(Manifest.permission.RECORD_AUDIO), currentRequestCode, listener)
    } else {
      promise.reject("NO_ACTIVITY", "No PermissionAwareActivity was found! Make sure the app has launched before calling this function.")
    }
  }
}
