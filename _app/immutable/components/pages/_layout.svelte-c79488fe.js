import { S as SvelteComponent, i as init, s as safe_not_equal, D as create_slot, k as element, q as text, a as space, l as claim_element, m as children, r as claim_text, h as detach, c as claim_space, n as attr, b as insert_hydration, E as append_hydration, F as update_slot_base, G as get_all_dirty_from_scope, H as get_slot_changes, f as transition_in, t as transition_out } from "../../chunks/index-a013620f.js";
const _layout_svelte_svelte_type_style_lang = "";
function create_fragment(ctx) {
  let nav;
  let a0;
  let t0;
  let t1;
  let a1;
  let t2;
  let t3;
  let a2;
  let t4;
  let t5;
  let a3;
  let t6;
  let t7;
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[1].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[0],
    null
  );
  return {
    c() {
      nav = element("nav");
      a0 = element("a");
      t0 = text("Home");
      t1 = space();
      a1 = element("a");
      t2 = text("About me");
      t3 = space();
      a2 = element("a");
      t4 = text("Skills");
      t5 = space();
      a3 = element("a");
      t6 = text("Projects");
      t7 = space();
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      nav = claim_element(nodes, "NAV", { class: true });
      var nav_nodes = children(nav);
      a0 = claim_element(nav_nodes, "A", { href: true, class: true });
      var a0_nodes = children(a0);
      t0 = claim_text(a0_nodes, "Home");
      a0_nodes.forEach(detach);
      t1 = claim_space(nav_nodes);
      a1 = claim_element(nav_nodes, "A", { href: true, class: true });
      var a1_nodes = children(a1);
      t2 = claim_text(a1_nodes, "About me");
      a1_nodes.forEach(detach);
      t3 = claim_space(nav_nodes);
      a2 = claim_element(nav_nodes, "A", { href: true, class: true });
      var a2_nodes = children(a2);
      t4 = claim_text(a2_nodes, "Skills");
      a2_nodes.forEach(detach);
      t5 = claim_space(nav_nodes);
      a3 = claim_element(nav_nodes, "A", { href: true, class: true });
      var a3_nodes = children(a3);
      t6 = claim_text(a3_nodes, "Projects");
      a3_nodes.forEach(detach);
      nav_nodes.forEach(detach);
      t7 = claim_space(nodes);
      if (default_slot)
        default_slot.l(nodes);
      this.h();
    },
    h() {
      attr(a0, "href", "/");
      attr(a0, "class", "svelte-tanrki");
      attr(a1, "href", "/about");
      attr(a1, "class", "svelte-tanrki");
      attr(a2, "href", "/skills");
      attr(a2, "class", "svelte-tanrki");
      attr(a3, "href", "/projects");
      attr(a3, "class", "svelte-tanrki");
      attr(nav, "class", "svelte-tanrki");
    },
    m(target, anchor) {
      insert_hydration(target, nav, anchor);
      append_hydration(nav, a0);
      append_hydration(a0, t0);
      append_hydration(nav, t1);
      append_hydration(nav, a1);
      append_hydration(a1, t2);
      append_hydration(nav, t3);
      append_hydration(nav, a2);
      append_hydration(a2, t4);
      append_hydration(nav, t5);
      append_hydration(nav, a3);
      append_hydration(a3, t6);
      insert_hydration(target, t7, anchor);
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        1)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[0],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[0]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[0],
              dirty,
              null
            ),
            null
          );
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(nav);
      if (detaching)
        detach(t7);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  $$self.$$set = ($$props2) => {
    if ("$$scope" in $$props2)
      $$invalidate(0, $$scope = $$props2.$$scope);
  };
  return [$$scope, slots];
}
class Layout extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export {
  Layout as default
};
