import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, x as create_component, l as claim_element, m as children, y as claim_component, h as detach, n as attr, b as insert_hydration, z as mount_component, f as transition_in, t as transition_out, A as destroy_component, q as text, r as claim_text, H as append_hydration, C as noop } from "../../../chunks/index-81d22fb2.js";
import "../../../chunks/Indicator.svelte_svelte_type_style_lang-efe892ff.js";
import { A as Alert } from "../../../chunks/Alert-59c163cd.js";
function create_default_slot(ctx) {
  let span;
  let t0;
  let t1;
  return {
    c() {
      span = element("span");
      t0 = text("Work in progress");
      t1 = text(" Making this page as a last feature...");
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t0 = claim_text(span_nodes, "Work in progress");
      span_nodes.forEach(detach);
      t1 = claim_text(nodes, " Making this page as a last feature...");
      this.h();
    },
    h() {
      attr(span, "class", "font-medium");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, t0);
      insert_hydration(target, t1, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(span);
      if (detaching)
        detach(t1);
    }
  };
}
function create_fragment(ctx) {
  let div;
  let alert;
  let current;
  alert = new Alert({
    props: {
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      div = element("div");
      create_component(alert.$$.fragment);
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(alert.$$.fragment, div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "p-8");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      mount_component(alert, div, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      const alert_changes = {};
      if (dirty & /*$$scope*/
      1) {
        alert_changes.$$scope = { dirty, ctx: ctx2 };
      }
      alert.$set(alert_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(alert.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(alert.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_component(alert);
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
