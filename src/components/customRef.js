import { customRef } from "vue";

export function useCustomRef(val, delay) {
  return customRef((track, trigger) => {
    return {
      get() {
        track();
        return val;
      },
      set(newval) {
        console.log("触发自定义ref");
        setTimeout(() => {
          val = newval;
          trigger();
        }, delay);
      },
    };
  });
}
