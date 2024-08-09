import { h } from "vue";

export class DialogManager {
  static showDialog(component, props, children) {
    return h(component, props, children);
  }
}
