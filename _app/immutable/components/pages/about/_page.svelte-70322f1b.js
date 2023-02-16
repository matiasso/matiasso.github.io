import { S as SvelteComponent, i as init, s as safe_not_equal, E as assign, x as create_component, y as claim_component, z as mount_component, M as get_spread_update, R as get_spread_object, f as transition_in, t as transition_out, A as destroy_component, N as compute_rest_props, a9 as compute_slots, aa as createEventDispatcher, O as exclude_internal_props, U as bubble, D as create_slot, k as element, a as space, l as claim_element, m as children, c as claim_space, h as detach, ab as toggle_class, n as attr, b as insert_hydration, H as append_hydration, g as group_outros, d as check_outros, J as update_slot_base, K as get_all_dirty_from_scope, L as get_slot_changes, q as text, r as claim_text, C as noop } from "../../../chunks/index-39b40c4e.js";
import { F as Frame, c as classNames } from "../../../chunks/Indicator.svelte_svelte_type_style_lang-ef2bbef9.js";
import { C as CloseButton } from "../../../chunks/CloseButton-d19d00eb.js";
const get_extra_slot_changes = (dirty) => ({});
const get_extra_slot_context = (ctx) => ({});
const get_icon_slot_changes = (dirty) => ({});
const get_icon_slot_context = (ctx) => ({});
function create_if_block_1(ctx) {
  let current;
  const icon_slot_template = (
    /*#slots*/
    ctx[7].icon
  );
  const icon_slot = create_slot(
    icon_slot_template,
    ctx,
    /*$$scope*/
    ctx[16],
    get_icon_slot_context
  );
  return {
    c() {
      if (icon_slot)
        icon_slot.c();
    },
    l(nodes) {
      if (icon_slot)
        icon_slot.l(nodes);
    },
    m(target, anchor) {
      if (icon_slot) {
        icon_slot.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (icon_slot) {
        if (icon_slot.p && (!current || dirty & /*$$scope*/
        65536)) {
          update_slot_base(
            icon_slot,
            icon_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[16],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[16]
            ) : get_slot_changes(
              icon_slot_template,
              /*$$scope*/
              ctx2[16],
              dirty,
              get_icon_slot_changes
            ),
            get_icon_slot_context
          );
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(icon_slot, local);
      current = true;
    },
    o(local) {
      transition_out(icon_slot, local);
      current = false;
    },
    d(detaching) {
      if (icon_slot)
        icon_slot.d(detaching);
    }
  };
}
function create_if_block(ctx) {
  let closebutton;
  let current;
  closebutton = new CloseButton({
    props: {
      class: "-mx-1.5 -my-1.5",
      color: (
        /*$$restProps*/
        ctx[3].color
      )
    }
  });
  closebutton.$on(
    "click",
    /*handleHide*/
    ctx[2]
  );
  closebutton.$on(
    "click",
    /*click_handler*/
    ctx[8]
  );
  closebutton.$on(
    "change",
    /*change_handler*/
    ctx[9]
  );
  closebutton.$on(
    "keydown",
    /*keydown_handler*/
    ctx[10]
  );
  closebutton.$on(
    "keyup",
    /*keyup_handler*/
    ctx[11]
  );
  closebutton.$on(
    "focus",
    /*focus_handler*/
    ctx[12]
  );
  closebutton.$on(
    "blur",
    /*blur_handler*/
    ctx[13]
  );
  closebutton.$on(
    "mouseenter",
    /*mouseenter_handler*/
    ctx[14]
  );
  closebutton.$on(
    "mouseleave",
    /*mouseleave_handler*/
    ctx[15]
  );
  return {
    c() {
      create_component(closebutton.$$.fragment);
    },
    l(nodes) {
      claim_component(closebutton.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(closebutton, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const closebutton_changes = {};
      if (dirty & /*$$restProps*/
      8)
        closebutton_changes.color = /*$$restProps*/
        ctx2[3].color;
      closebutton.$set(closebutton_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(closebutton.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(closebutton.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(closebutton, detaching);
    }
  };
}
function create_default_slot$1(ctx) {
  let div1;
  let t0;
  let div0;
  let t1;
  let t2;
  let current;
  let if_block0 = (
    /*$$slots*/
    ctx[4].icon && create_if_block_1(ctx)
  );
  const default_slot_template = (
    /*#slots*/
    ctx[7].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[16],
    null
  );
  let if_block1 = (
    /*dismissable*/
    ctx[0] && create_if_block(ctx)
  );
  const extra_slot_template = (
    /*#slots*/
    ctx[7].extra
  );
  const extra_slot = create_slot(
    extra_slot_template,
    ctx,
    /*$$scope*/
    ctx[16],
    get_extra_slot_context
  );
  return {
    c() {
      div1 = element("div");
      if (if_block0)
        if_block0.c();
      t0 = space();
      div0 = element("div");
      if (default_slot)
        default_slot.c();
      t1 = space();
      if (if_block1)
        if_block1.c();
      t2 = space();
      if (extra_slot)
        extra_slot.c();
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      if (if_block0)
        if_block0.l(div1_nodes);
      t0 = claim_space(div1_nodes);
      div0 = claim_element(div1_nodes, "DIV", {});
      var div0_nodes = children(div0);
      if (default_slot)
        default_slot.l(div0_nodes);
      div0_nodes.forEach(detach);
      t1 = claim_space(div1_nodes);
      if (if_block1)
        if_block1.l(div1_nodes);
      div1_nodes.forEach(detach);
      t2 = claim_space(nodes);
      if (extra_slot)
        extra_slot.l(nodes);
      this.h();
    },
    h() {
      toggle_class(
        div0,
        "ml-3",
        /*$$slots*/
        ctx[4].icon
      );
      attr(div1, "class", "flex items-center");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      if (if_block0)
        if_block0.m(div1, null);
      append_hydration(div1, t0);
      append_hydration(div1, div0);
      if (default_slot) {
        default_slot.m(div0, null);
      }
      append_hydration(div1, t1);
      if (if_block1)
        if_block1.m(div1, null);
      insert_hydration(target, t2, anchor);
      if (extra_slot) {
        extra_slot.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (
        /*$$slots*/
        ctx2[4].icon
      ) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
          if (dirty & /*$$slots*/
          16) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_1(ctx2);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(div1, t0);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, () => {
          if_block0 = null;
        });
        check_outros();
      }
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        65536)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[16],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[16]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[16],
              dirty,
              null
            ),
            null
          );
        }
      }
      if (!current || dirty & /*$$slots*/
      16) {
        toggle_class(
          div0,
          "ml-3",
          /*$$slots*/
          ctx2[4].icon
        );
      }
      if (
        /*dismissable*/
        ctx2[0]
      ) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
          if (dirty & /*dismissable*/
          1) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block(ctx2);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(div1, null);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, () => {
          if_block1 = null;
        });
        check_outros();
      }
      if (extra_slot) {
        if (extra_slot.p && (!current || dirty & /*$$scope*/
        65536)) {
          update_slot_base(
            extra_slot,
            extra_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[16],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[16]
            ) : get_slot_changes(
              extra_slot_template,
              /*$$scope*/
              ctx2[16],
              dirty,
              get_extra_slot_changes
            ),
            get_extra_slot_context
          );
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block0);
      transition_in(default_slot, local);
      transition_in(if_block1);
      transition_in(extra_slot, local);
      current = true;
    },
    o(local) {
      transition_out(if_block0);
      transition_out(default_slot, local);
      transition_out(if_block1);
      transition_out(extra_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div1);
      if (if_block0)
        if_block0.d();
      if (default_slot)
        default_slot.d(detaching);
      if (if_block1)
        if_block1.d();
      if (detaching)
        detach(t2);
      if (extra_slot)
        extra_slot.d(detaching);
    }
  };
}
function create_fragment$1(ctx) {
  let frame;
  let current;
  const frame_spread_levels = [
    /*$$restProps*/
    ctx[3],
    { class: (
      /*divClass*/
      ctx[1]
    ) },
    { role: "alert" }
  ];
  let frame_props = {
    $$slots: { default: [create_default_slot$1] },
    $$scope: { ctx }
  };
  for (let i = 0; i < frame_spread_levels.length; i += 1) {
    frame_props = assign(frame_props, frame_spread_levels[i]);
  }
  frame = new Frame({ props: frame_props });
  return {
    c() {
      create_component(frame.$$.fragment);
    },
    l(nodes) {
      claim_component(frame.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(frame, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const frame_changes = dirty & /*$$restProps, divClass*/
      10 ? get_spread_update(frame_spread_levels, [
        dirty & /*$$restProps*/
        8 && get_spread_object(
          /*$$restProps*/
          ctx2[3]
        ),
        dirty & /*divClass*/
        2 && { class: (
          /*divClass*/
          ctx2[1]
        ) },
        frame_spread_levels[2]
      ]) : {};
      if (dirty & /*$$scope, $$restProps, dismissable, $$slots*/
      65561) {
        frame_changes.$$scope = { dirty, ctx: ctx2 };
      }
      frame.$set(frame_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(frame.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(frame.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(frame, detaching);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  const omit_props_names = ["dismissable", "accent"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  const $$slots = compute_slots(slots);
  const dispatch = createEventDispatcher();
  let { dismissable = false } = $$props;
  let { accent = false } = $$props;
  let hidden = false;
  const handleHide = () => {
    $$invalidate(6, hidden = !hidden);
    dispatch("close");
  };
  let divClass;
  function click_handler(event) {
    bubble.call(this, $$self, event);
  }
  function change_handler(event) {
    bubble.call(this, $$self, event);
  }
  function keydown_handler(event) {
    bubble.call(this, $$self, event);
  }
  function keyup_handler(event) {
    bubble.call(this, $$self, event);
  }
  function focus_handler(event) {
    bubble.call(this, $$self, event);
  }
  function blur_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseenter_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseleave_handler(event) {
    bubble.call(this, $$self, event);
  }
  $$self.$$set = ($$new_props) => {
    $$invalidate(18, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    $$invalidate(3, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("dismissable" in $$new_props)
      $$invalidate(0, dismissable = $$new_props.dismissable);
    if ("accent" in $$new_props)
      $$invalidate(5, accent = $$new_props.accent);
    if ("$$scope" in $$new_props)
      $$invalidate(16, $$scope = $$new_props.$$scope);
  };
  $$self.$$.update = () => {
    $$invalidate(1, divClass = classNames("p-4 text-sm", accent && "border-t-4 ", hidden && "hidden", $$props.class));
    {
      $$invalidate(3, $$restProps.color = $$restProps.color ?? "blue", $$restProps);
      $$invalidate(3, $$restProps.rounded = $$restProps.rounded ?? !accent, $$restProps);
    }
  };
  $$props = exclude_internal_props($$props);
  return [
    dismissable,
    divClass,
    handleHide,
    $$restProps,
    $$slots,
    accent,
    hidden,
    slots,
    click_handler,
    change_handler,
    keydown_handler,
    keyup_handler,
    focus_handler,
    blur_handler,
    mouseenter_handler,
    mouseleave_handler,
    $$scope
  ];
}
class Alert extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment$1, safe_not_equal, { dismissable: 0, accent: 5 });
  }
}
function create_default_slot(ctx) {
  let span;
  let t0;
  let t1;
  return {
    c() {
      span = element("span");
      t0 = text("Work in progress");
      t1 = text(" Implementing this later!");
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t0 = claim_text(span_nodes, "Work in progress");
      span_nodes.forEach(detach);
      t1 = claim_text(nodes, " Implementing this later!");
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
