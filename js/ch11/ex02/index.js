// f はオブジェクトを1つ引数に取る関数
export function cache(f) {
  const cacheMap = new WeakMap();
  return (obj) => {
    if (cacheMap.has(obj)) {
      return cacheMap.get(obj);
    } else {
      const result = f(obj);
      cacheMap.set(obj, result);
      return result;
    }
  };
}

export function slowFn(obj) {
  // 時間のかかる処理
  return obj;
}

// cachedSlowFnを同じ引数で複数回呼び出すと、2回目以降はキャッシュが返る
export const cachedSlowFn = cache(slowFn);
