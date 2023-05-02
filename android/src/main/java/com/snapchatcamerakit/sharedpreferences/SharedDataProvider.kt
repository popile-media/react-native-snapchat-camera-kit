package com.snapchatcamerakit.sharedpreferences

object SharedDataProvider {
    fun getMultiSharedValues(keys: Array<String?>): Array<Array<String?>> {
        val sharedHandler = SharedHandler.instance
        val results = Array(keys.size) {
            arrayOfNulls<String>(
                2
            )
        }
        for (i in keys.indices) {
            results[i][0] = keys[i]
            results[i][1] = sharedHandler?.getString(keys[i]).toString()
        }
        return results
    }

    val allSharedValues: Array<Array<String?>>
        get() {
            val keyValues = SharedHandler.instance?.mSharedPreferences?.all
            val keys: List<String> = ArrayList(keyValues?.keys)
            val results = Array(keys.size) {
                arrayOfNulls<String>(
                    2
                )
            }
            for (i in keys.indices) {
                results[i][0] = keys[i]
                results[i][1] = keyValues?.get(keys[i])?.toString()
            }
            return results
        }

    val allKeys: Array<String?>
        get() {
            val keyValues = SharedHandler.instance?.allSharedData
            val keys = ArrayList(keyValues?.keys)
            val results = arrayOfNulls<String>(keys.size)
            for (i in keys.indices) {
                results[i] = keys[i]
            }
            return results
        }

    fun getSharedValue(key: String): String? {
        return SharedHandler.instance?.getString(key)
    }

    fun putSharedValue(key: String?, value: String?) {
        SharedHandler.instance?.putExtra(key, value)
    }

    fun clear() {
        SharedHandler.instance?.clear()
    }

    fun deleteSharedValue(key: String?) {
        SharedHandler.instance?.deleteKey(key)
    }
}
