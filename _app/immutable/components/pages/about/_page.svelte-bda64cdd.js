import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, q as text, a as space, l as claim_element, m as children, r as claim_text, h as detach, c as claim_space, p as set_style, b as insert_hydration, O as append_hydration, C as noop } from "../../../chunks/index-046539a1.js";
function create_fragment(ctx) {
  let h1;
  let t0;
  let t1;
  let p;
  let t2;
  return {
    c() {
      h1 = element("h1");
      t0 = text("About me");
      t1 = space();
      p = element("p");
      t2 = text("TODO...");
      this.h();
    },
    l(nodes) {
      h1 = claim_element(nodes, "H1", { style: true });
      var h1_nodes = children(h1);
      t0 = claim_text(h1_nodes, "About me");
      h1_nodes.forEach(detach);
      t1 = claim_space(nodes);
      p = claim_element(nodes, "P", { style: true });
      var p_nodes = children(p);
      t2 = claim_text(p_nodes, "TODO...");
      p_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_style(h1, "color", "black");
      set_style(p, "color", "black");
    },
    m(target, anchor) {
      insert_hydration(target, h1, anchor);
      append_hydration(h1, t0);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, p, anchor);
      append_hydration(p, t2);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(h1);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(p);
    }
  };
}
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment, safe_not_equal, {});
  }
}
export {
  Page as default
};
