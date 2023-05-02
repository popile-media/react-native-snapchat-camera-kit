package com.snapchatcamerakit.camera.utils

import android.content.Context
import android.content.pm.FeatureInfo

class OpenGLES {
    companion object {
        /**
         * This method returns the version code of OpenGL ES on the system. If the
         * version could not be determined, version 1 is assumed. This code came
         * from;
         *
         * http://stackoverflow.com/questions/6450709/detect-if-opengl-es-2-0-is-available-or-not
         *
         * @param context A Context instance.
         * @return The OpenGL ES version.
         */
        fun getVersionCode(context: Context): Int {
            val packageManager = context.packageManager
            val featureInfoList = packageManager.systemAvailableFeatures
            if (featureInfoList.isNotEmpty()) {
                for (featureInfo in featureInfoList) {
                    // Null feature name means this feature is the open gl es version feature.
                    if (featureInfo.name == null) {
                        return if (featureInfo.reqGlEsVersion != FeatureInfo.GL_ES_VERSION_UNDEFINED) {
                            featureInfo.reqGlEsVersion
                        } else {
                            1 shl 16 // Lack of property means OpenGL ES version 1
                        }
                    }
                }
            }
            return 1
        }

        fun getVersionName(code: Int): String? {
            return when (code) {
                65536 -> "OpenGL ES 1.0"
                65537 -> "OpenGL ES 1.1"
                131072 -> "OpenGL ES 2.0"
                196608 -> "OpenGL ES 3.0"
                196609 -> "OpenGL ES 3.1"
                196610 -> "OpenGL ES 3.2"
                else -> {
                    null
                }
            }
        }
    }
}
