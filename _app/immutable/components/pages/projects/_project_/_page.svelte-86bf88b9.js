import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, x as create_component, l as claim_element, m as children, y as claim_component, h as detach, n as attr, b as insert_hydration, z as mount_component, f as transition_in, t as transition_out, A as destroy_component, a1 as component_subscribe, q as text, r as claim_text, H as append_hydration, u as set_data } from "../../../../chunks/index-81d22fb2.js";
import { p as page } from "../../../../chunks/stores-ec40dfac.js";
import "../../../../chunks/Indicator.svelte_svelte_type_style_lang-efe892ff.js";
import { A as Alert } from "../../../../chunks/Alert-59c163cd.js";
function create_default_slot(ctx) {
  let span;
  let strong;
  let t0;
  let t1;
  let t2_value = (
    /*$page*/
    ctx[0].params.project + ""
  );
  let t2;
  let t3;
  return {
    c() {
      span = element("span");
      strong = element("strong");
      t0 = text("Error:");
      t1 = text(' project "');
      t2 = text(t2_value);
      t3 = text('" not found!');
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      strong = claim_element(span_nodes, "STRONG", {});
      var strong_nodes = children(strong);
      t0 = claim_text(strong_nodes, "Error:");
      strong_nodes.forEach(detach);
      t1 = claim_text(span_nodes, ' project "');
      t2 = claim_text(span_nodes, t2_value);
      t3 = claim_text(span_nodes, '" not found!');
      span_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span, "class", "text-lg");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, strong);
      append_hydration(strong, t0);
      append_hydration(span, t1);
      append_hydration(span, t2);
      append_hydration(span, t3);
    },
    p(ctx2, dirty) {
      if (dirty & /*$page*/
      1 && t2_value !== (t2_value = /*$page*/
      ctx2[0].params.project + ""))
        set_data(t2, t2_value);
    },
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_fragment(ctx) {
  let div;
  let alert;
  let current;
  alert = new Alert({
    props: {
      class: "max-w-[80%] p-6 mx-auto",
      color: "red",
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
      attr(div, "class", "m-5");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      mount_component(alert, div, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      const alert_changes = {};
      if (dirty & /*$$scope, $page*/
      3) {
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
function instance($$self, $$props, $$invalidate) {
  let $page;
  component_subscribe($$self, page, ($$value) => $$invalidate(0, $page = $$value));
  return [$page];
}
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export {
  Page as default
};
