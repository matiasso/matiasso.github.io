import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, q as text, a as space, l as claim_element, m as children, r as claim_text, h as detach, c as claim_space, n as attr, b as insert_hydration, H as append_hydration, C as noop, e as empty, t as transition_out, d as check_outros, f as transition_in, a1 as component_subscribe, g as group_outros, x as create_component, y as claim_component, z as mount_component, A as destroy_component, w as construct_svelte_component, u as set_data } from "../../../../chunks/index-81d22fb2.js";
import { p as page } from "../../../../chunks/stores-ec40dfac.js";
import "../../../../chunks/Indicator.svelte_svelte_type_style_lang-efe892ff.js";
import { A as Alert } from "../../../../chunks/Alert-59c163cd.js";
function create_fragment$1(ctx) {
  let h1;
  let t0;
  let t1;
  let p0;
  let t2;
  let t3;
  let p1;
  let t4;
  return {
    c() {
      h1 = element("h1");
      t0 = text("This view is for Beamex!");
      t1 = space();
      p0 = element("p");
      t2 = text("Description will show up here...");
      t3 = space();
      p1 = element("p");
      t4 = text("Possibly some images too???");
      this.h();
    },
    l(nodes) {
      h1 = claim_element(nodes, "H1", { class: true });
      var h1_nodes = children(h1);
      t0 = claim_text(h1_nodes, "This view is for Beamex!");
      h1_nodes.forEach(detach);
      t1 = claim_space(nodes);
      p0 = claim_element(nodes, "P", { class: true });
      var p0_nodes = children(p0);
      t2 = claim_text(p0_nodes, "Description will show up here...");
      p0_nodes.forEach(detach);
      t3 = claim_space(nodes);
      p1 = claim_element(nodes, "P", { class: true });
      var p1_nodes = children(p1);
      t4 = claim_text(p1_nodes, "Possibly some images too???");
      p1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(h1, "class", "text-gray-600 dark:text-gray-200 text-2xl");
      attr(p0, "class", "text-gray-600 dark:text-gray-200");
      attr(p1, "class", "text-gray-600 dark:text-gray-200");
    },
    m(target, anchor) {
      insert_hydration(target, h1, anchor);
      append_hydration(h1, t0);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, p0, anchor);
      append_hydration(p0, t2);
      insert_hydration(target, t3, anchor);
      insert_hydration(target, p1, anchor);
      append_hydration(p1, t4);
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
        detach(p0);
      if (detaching)
        detach(t3);
      if (detaching)
        detach(p1);
    }
  };
}
class Beamex extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment$1, safe_not_equal, {});
  }
}
function create_else_block(ctx) {
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
    p(ctx2, dirty) {
      const alert_changes = {};
      if (dirty & /*$$scope, $page*/
      5) {
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
function create_if_block(ctx) {
  let switch_instance;
  let switch_instance_anchor;
  let current;
  var switch_value = (
    /*projectComponents*/
    ctx[1][
      /*$page*/
      ctx[0].params.project
    ]
  );
  function switch_props(ctx2) {
    return {};
  }
  if (switch_value) {
    switch_instance = construct_svelte_component(switch_value, switch_props());
  }
  return {
    c() {
      if (switch_instance)
        create_component(switch_instance.$$.fragment);
      switch_instance_anchor = empty();
    },
    l(nodes) {
      if (switch_instance)
        claim_component(switch_instance.$$.fragment, nodes);
      switch_instance_anchor = empty();
    },
    m(target, anchor) {
      if (switch_instance)
        mount_component(switch_instance, target, anchor);
      insert_hydration(target, switch_instance_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (switch_value !== (switch_value = /*projectComponents*/
      ctx2[1][
        /*$page*/
        ctx2[0].params.project
      ])) {
        if (switch_instance) {
          group_outros();
          const old_component = switch_instance;
          transition_out(old_component.$$.fragment, 1, 0, () => {
            destroy_component(old_component, 1);
          });
          check_outros();
        }
        if (switch_value) {
          switch_instance = construct_svelte_component(switch_value, switch_props());
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
        } else {
          switch_instance = null;
        }
      }
    },
    i(local) {
      if (current)
        return;
      if (switch_instance)
        transition_in(switch_instance.$$.fragment, local);
      current = true;
    },
    o(local) {
      if (switch_instance)
        transition_out(switch_instance.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(switch_instance_anchor);
      if (switch_instance)
        destroy_component(switch_instance, detaching);
    }
  };
}
function create_default_slot(ctx) {
  let span;
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
      t0 = text("Error:");
      t1 = text(' project "');
      t2 = text(t2_value);
      t3 = text('" not found!');
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t0 = claim_text(span_nodes, "Error:");
      span_nodes.forEach(detach);
      t1 = claim_text(nodes, ' project "');
      t2 = claim_text(nodes, t2_value);
      t3 = claim_text(nodes, '" not found!');
      this.h();
    },
    h() {
      attr(span, "class", "font-medium");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, t0);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, t2, anchor);
      insert_hydration(target, t3, anchor);
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
      if (detaching)
        detach(t1);
      if (detaching)
        detach(t2);
      if (detaching)
        detach(t3);
    }
  };
}
function create_fragment(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block, create_else_block];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (
      /*$page*/
      ctx2[0].params.project in /*projectComponents*/
      ctx2[1]
    )
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      if_block.c();
      if_block_anchor = empty();
    },
    l(nodes) {
      if_block.l(nodes);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if_blocks[current_block_type_index].m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        } else {
          if_block.p(ctx2, dirty);
        }
        transition_in(if_block, 1);
        if_block.m(if_block_anchor.parentNode, if_block_anchor);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if_blocks[current_block_type_index].d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let $page;
  component_subscribe($$self, page, ($$value) => $$invalidate(0, $page = $$value));
  const projectComponents = { beamex: Beamex };
  return [$page, projectComponents];
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
