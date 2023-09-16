package com.snapchatcamerakit.camera.enums

class CameraFacings {
  companion object {
    const val FRONT = "front"
    const val BACK = "back"

    fun isFront(text: String): Boolean {
      return text == FRONT
    }

    fun isBack(text: String): Boolean {
      return text == BACK
    }
  }
}
