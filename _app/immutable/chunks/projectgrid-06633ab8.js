import { S as SvelteComponent, i as init, s as safe_not_equal, D as create_slot, k as element, q as text, a as space, l as claim_element, m as children, r as claim_text, h as detach, c as claim_space, n as attr, a7 as src_url_equal, b as insert_hydration, H as append_hydration, u as set_data, J as update_slot_base, K as get_all_dirty_from_scope, L as get_slot_changes, f as transition_in, t as transition_out } from "./index-91def11a.js";
const projectgrid_svelte_svelte_type_style_lang = "";
function create_fragment(ctx) {
  let div3;
  let div0;
  let h1;
  let t0;
  let t1;
  let h2;
  let t2;
  let t3;
  let t4;
  let img;
  let img_src_value;
  let t5;
  let div1;
  let t6;
  let div2;
  let p;
  let t7;
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[5].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[4],
    null
  );
  return {
    c() {
      div3 = element("div");
      div0 = element("div");
      h1 = element("h1");
      t0 = text(
        /*title*/
        ctx[0]
      );
      t1 = space();
      h2 = element("h2");
      t2 = text("Date: ");
      t3 = text(
        /*date*/
        ctx[1]
      );
      t4 = space();
      img = element("img");
      t5 = space();
      div1 = element("div");
      if (default_slot)
        default_slot.c();
      t6 = space();
      div2 = element("div");
      p = element("p");
      t7 = text("Note: code repository is private");
      this.h();
    },
    l(nodes) {
      div3 = claim_element(nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      div0 = claim_element(div3_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      h1 = claim_element(div0_nodes, "H1", { class: true });
      var h1_nodes = children(h1);
      t0 = claim_text(
        h1_nodes,
        /*title*/
        ctx[0]
      );
      h1_nodes.forEach(detach);
      t1 = claim_space(div0_nodes);
      h2 = claim_element(div0_nodes, "H2", { class: true });
      var h2_nodes = children(h2);
      t2 = claim_text(h2_nodes, "Date: ");
      t3 = claim_text(
        h2_nodes,
        /*date*/
        ctx[1]
      );
      h2_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      t4 = claim_space(div3_nodes);
      img = claim_element(div3_nodes, "IMG", {
        class: true,
        src: true,
        alt: true,
        width: true,
        height: true
      });
      t5 = claim_space(div3_nodes);
      div1 = claim_element(div3_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      if (default_slot)
        default_slot.l(div1_nodes);
      div1_nodes.forEach(detach);
      t6 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      p = claim_element(div2_nodes, "P", { class: true });
      var p_nodes = children(p);
      t7 = claim_text(p_nodes, "Note: code repository is private");
      p_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      div3_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(h1, "class", "text-gray-700 dark:text-gray-200 text-4xl  svelte-3txohq");
      attr(h2, "class", "text-gray-600 dark:text-gray-300 text-2xl svelte-3txohq");
      attr(div0, "class", "titleContent svelte-3txohq");
      attr(img, "class", "imgContent svelte-3txohq");
      if (!src_url_equal(img.src, img_src_value = /*logo*/
      ctx[2]))
        attr(img, "src", img_src_value);
      attr(
        img,
        "alt",
        /*alt*/
        ctx[3]
      );
      attr(img, "width", "400");
      attr(img, "height", "400");
      attr(div1, "class", "content svelte-3txohq");
      attr(p, "class", "text-gray-500 dark:text-gray-300");
      attr(div2, "class", "footer");
      attr(div3, "class", "gridContainer svelte-3txohq");
    },
    m(target, anchor) {
      insert_hydration(target, div3, anchor);
      append_hydration(div3, div0);
      append_hydration(div0, h1);
      append_hydration(h1, t0);
      append_hydration(div0, t1);
      append_hydration(div0, h2);
      append_hydration(h2, t2);
      append_hydration(h2, t3);
      append_hydration(div3, t4);
      append_hydration(div3, img);
      append_hydration(div3, t5);
      append_hydration(div3, div1);
      if (default_slot) {
        default_slot.m(div1, null);
      }
      append_hydration(div3, t6);
      append_hydration(div3, div2);
      append_hydration(div2, p);
      append_hydration(p, t7);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (!current || dirty & /*title*/
      1)
        set_data(
          t0,
          /*title*/
          ctx2[0]
        );
      if (!current || dirty & /*date*/
      2)
        set_data(
          t3,
          /*date*/
          ctx2[1]
        );
      if (!current || dirty & /*logo*/
      4 && !src_url_equal(img.src, img_src_value = /*logo*/
      ctx2[2])) {
        attr(img, "src", img_src_value);
      }
      if (!current || dirty & /*alt*/
      8) {
        attr(
          img,
          "alt",
          /*alt*/
          ctx2[3]
        );
      }
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        16)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[4],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[4]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[4],
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
        detach(div3);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  let { title } = $$props;
  let { date } = $$props;
  let { logo } = $$props;
  let { alt } = $$props;
  $$self.$$set = ($$props2) => {
    if ("title" in $$props2)
      $$invalidate(0, title = $$props2.title);
    if ("date" in $$props2)
      $$invalidate(1, date = $$props2.date);
    if ("logo" in $$props2)
      $$invalidate(2, logo = $$props2.logo);
    if ("alt" in $$props2)
      $$invalidate(3, alt = $$props2.alt);
    if ("$$scope" in $$props2)
      $$invalidate(4, $$scope = $$props2.$$scope);
  };
  return [title, date, logo, alt, $$scope, slots];
}
class Projectgrid extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, { title: 0, date: 1, logo: 2, alt: 3 });
  }
}
export {
  Projectgrid as P
};
