package com.snapchatcamerakit.utils

import com.facebook.react.bridge.ReadableArray
import com.facebook.react.bridge.ReadableType

class DataUtils {
  companion object {
    fun readableArrayToStringArray(r: ReadableArray): Array<String?>? {
      val length = r.size()
      val strArray = arrayOfNulls<String>(length)
      for (i in 0 until length) {
        strArray[i] = r.getString(i)
      }
      return strArray
    }

    fun readableArrayToNumberArray(r: ReadableArray): Array<Number?>? {
      val length = r.size()
      val numArray = arrayOfNulls<Number>(length)
      for (i in 0 until length) {
        numArray[i] = r.getInt(i)
      }
      return numArray
    }

    fun checkReadableArrayItemsType(
      r: ReadableArray,
      type: ReadableType,
    ): Boolean {
      val length = r.size()

      // if array is empty, return false
      if (length == 0) {
        return false
      }

      for (i in 0 until length) {
        if (r.getType(i) !== type) {
          return false
        }
      }

      return true
    }

    fun readableArrayToStringSet(r: ReadableArray): Set<String> {
      val set: MutableSet<String> = HashSet()

      for (i in 0 until r.size()) {
        set.add(r.getString(i))
      }

      return set
    }
  }
}
