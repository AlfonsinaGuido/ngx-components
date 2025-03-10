import { Provider, renderStorybookUI } from "./chunk-VQTIH3SE.js";
import {
  CHANNEL_CREATED,
  addons,
  createBrowserChannel,
} from "./chunk-2IOEGHGR.js";
import "./chunk-GUVK2GTO.js";
import "./chunk-BLWCBWKL.js";
import { scope } from "./chunk-B3YDJJJH.js";
import "./chunk-ZR5JZWHI.js";
var ReactProvider = class extends Provider {
    constructor() {
      super();
      let channel = createBrowserChannel({ page: "manager" });
      addons.setChannel(channel),
        channel.emit(CHANNEL_CREATED),
        (this.addons = addons),
        (this.channel = channel),
        (scope.__STORYBOOK_ADDONS_CHANNEL__ = channel);
    }
    getElements(type) {
      return this.addons.getElements(type);
    }
    getConfig() {
      return this.addons.getConfig();
    }
    handleAPI(api) {
      this.addons.loadAddons(api);
    }
  },
  { document } = scope,
  rootEl = document.getElementById("root");
setTimeout(() => {
  renderStorybookUI(rootEl, new ReactProvider());
}, 0);
