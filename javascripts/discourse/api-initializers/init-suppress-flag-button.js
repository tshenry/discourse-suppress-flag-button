import { apiInitializer } from "discourse/lib/api";

export default apiInitializer("0.8", (api) => {
  api.reopenWidget("post-menu", {
    html(attrs, state) {
      let rawPostMenu = this._super(attrs, state);
      if (
        settings.groups.split("|").includes(attrs.primary_group_name) &&
        rawPostMenu[0].children[0] &&
        rawPostMenu[0].children[0].children
      ) {
        rawPostMenu[0].children[0].children = rawPostMenu[0].children[0].children.filter(
          (button) => button.attrs && button.attrs.id !== "flag"
        );
      }
      return rawPostMenu;
    },
  });
});
