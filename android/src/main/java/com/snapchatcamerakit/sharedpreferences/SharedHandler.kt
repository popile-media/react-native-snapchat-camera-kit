package com.snapchatcamerakit.sharedpreferences

import android.content.Context
import android.content.SharedPreferences

class SharedHandler(context: Context, name: String?) {
  val mSharedPreferences: SharedPreferences

  init {
    mSharedPreferences = context.getSharedPreferences(name, Context.MODE_PRIVATE)
  }

  fun putExtra(
    key: String?,
    value: Any?,
  ) {
    val editor = mSharedPreferences.edit()

    when (value) {
      is String -> editor.putString(key, value as String?).apply()
      is Boolean -> editor.putBoolean(key, (value as Boolean?)!!).apply()
      is Int -> editor.putInt(key, (value as Int?)!!).apply()
      is Long -> editor.putLong(key, (value as Long?)!!).apply()
      is Float -> editor.putFloat(key, (value as Float?)!!).apply()
    }
  }

  fun getString(key: String?): String? {
    return mSharedPreferences.getString(key, null)
  }

  fun getFloat(key: String?): Float {
    return mSharedPreferences.getFloat(key, 0f)
  }

  fun getLong(key: String?): Long {
    return mSharedPreferences.getLong(key, 0)
  }

  fun getBoolean(key: String?): Boolean {
    return mSharedPreferences.getBoolean(key, false)
  }

  fun getInt(key: String?): Int {
    return mSharedPreferences.getInt(key, 0)
  }

  fun clear() {
    mSharedPreferences.edit().clear().apply()
  }

  val allSharedData: Map<String, *>
    get() = mSharedPreferences.all

  fun deleteKey(key: String?) {
    val editor = mSharedPreferences.edit()
    editor.remove(key)
    editor.apply()
  }

  companion object {
    var instance: SharedHandler? = null
      private set

    fun init(
      context: Context,
      name: String?,
    ) {
      if (instance == null) {
        instance = SharedHandler(context, name)
      }
    }
  }
}
