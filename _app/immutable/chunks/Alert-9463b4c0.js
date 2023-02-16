import { S as SvelteComponent, i as init, s as safe_not_equal, E as create_slot, k as element, l as claim_element, m as children, h as detach, n as attr, b as insert_hydration, F as listen, G as update_slot_base, H as get_all_dirty_from_scope, I as get_slot_changes, f as transition_in, t as transition_out, a2 as getContext, V as assign, _ as exclude_internal_props, a3 as bubble, q as text, a as space, $ as svg_element, r as claim_text, c as claim_space, a0 as claim_svg_element, O as append_hydration, u as set_data, x as create_component, y as claim_component, z as mount_component, Y as get_spread_update, a1 as get_spread_object, A as destroy_component, Z as compute_rest_props, ad as compute_slots, J as createEventDispatcher, N as toggle_class, g as group_outros, d as check_outros } from "./index-129fd69a.js";
import { c as classNames, F as Frame } from "./Indicator.svelte_svelte_type_style_lang-1aff31af.js";
function fallback_block(ctx) {
  let span;
  let t0;
  let t1;
  let svg;
  let path;
  let svg_class_value;
  return {
    c() {
      span = element("span");
      t0 = text(
        /*name*/
        ctx[0]
      );
      t1 = space();
      svg = svg_element("svg");
      path = svg_element("path");
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t0 = claim_text(
        span_nodes,
        /*name*/
        ctx[0]
      );
      span_nodes.forEach(detach);
      t1 = claim_space(nodes);
      svg = claim_svg_element(nodes, "svg", {
        class: true,
        fill: true,
        viewBox: true,
        xmlns: true
      });
      var svg_nodes = children(svg);
      path = claim_svg_element(svg_nodes, "path", {
        "fill-rule": true,
        d: true,
        "clip-rule": true
      });
      children(path).forEach(detach);
      svg_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span, "class", "sr-only");
      attr(path, "fill-rule", "evenodd");
      attr(path, "d", "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z");
      attr(path, "clip-rule", "evenodd");
      attr(svg, "class", svg_class_value = /*svgSizes*/
      ctx[3][
        /*size*/
        ctx[1]
      ]);
      attr(svg, "fill", "currentColor");
      attr(svg, "viewBox", "0 0 20 20");
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, t0);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, svg, anchor);
      append_hydration(svg, path);
    },
    p(ctx2, dirty) {
      if (dirty & /*name*/
      1)
        set_data(
          t0,
          /*name*/
          ctx2[0]
        );
      if (dirty & /*size*/
      2 && svg_class_value !== (svg_class_value = /*svgSizes*/
      ctx2[3][
        /*size*/
        ctx2[1]
      ])) {
        attr(svg, "class", svg_class_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(span);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(svg);
    }
  };
}
function create_fragment$1(ctx) {
  let button;
  let current;
  let mounted;
  let dispose;
  const default_slot_template = (
    /*#slots*/
    ctx[6].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[5],
    null
  );
  const default_slot_or_fallback = default_slot || fallback_block(ctx);
  return {
    c() {
      button = element("button");
      if (default_slot_or_fallback)
        default_slot_or_fallback.c();
      this.h();
    },
    l(nodes) {
      button = claim_element(nodes, "BUTTON", {
        type: true,
        class: true,
        "aria-label": true
      });
      var button_nodes = children(button);
      if (default_slot_or_fallback)
        default_slot_or_fallback.l(button_nodes);
      button_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(button, "type", "button");
      attr(
        button,
        "class",
        /*buttonClass*/
        ctx[2]
      );
      attr(button, "aria-label", "Close");
    },
    m(target, anchor) {
      insert_hydration(target, button, anchor);
      if (default_slot_or_fallback) {
        default_slot_or_fallback.m(button, null);
      }
      current = true;
      if (!mounted) {
        dispose = listen(
          button,
          "click",
          /*click_handler*/
          ctx[7]
        );
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        32)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[5],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[5]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[5],
              dirty,
              null
            ),
            null
          );
        }
      } else {
        if (default_slot_or_fallback && default_slot_or_fallback.p && (!current || dirty & /*size, name*/
        3)) {
          default_slot_or_fallback.p(ctx2, !current ? -1 : dirty);
        }
      }
      if (!current || dirty & /*buttonClass*/
      4) {
        attr(
          button,
          "class",
          /*buttonClass*/
          ctx2[2]
        );
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot_or_fallback, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot_or_fallback, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(button);
      if (default_slot_or_fallback)
        default_slot_or_fallback.d(detaching);
      mounted = false;
      dispose();
    }
  };
}
function instance$1($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  const background = getContext("background");
  let { color = "default" } = $$props;
  let { name = "Close" } = $$props;
  let { size = "md" } = $$props;
  const colors = {
    dark: "hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600",
    gray: "focus:ring-gray-400 hover:bg-gray-200 dark:hover:bg-gray-300",
    red: "focus:ring-red-400 hover:bg-red-200 dark:hover:bg-red-300",
    yellow: "focus:ring-yellow-400 hover:bg-yellow-200 dark:hover:bg-yellow-300",
    green: "focus:ring-green-400 hover:bg-green-200 dark:hover:bg-green-300",
    indigo: "focus:ring-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-300",
    purple: "focus:ring-purple-400 hover:bg-purple-200 dark:hover:bg-purple-300",
    pink: "focus:ring-pink-400 hover:bg-pink-200 dark:hover:bg-pink-300",
    blue: "focus:ring-blue-400 hover:bg-blue-200 dark:hover:bg-blue-300",
    default: "focus:ring-gray-300 "
  };
  const sizing = {
    xs: "m-0.5 rounded focus:ring-1 p-0.5",
    sm: "m-0.5 rounded focus:ring-1 p-0.5",
    md: "rounded-lg focus:ring-2 p-1.5"
  };
  let buttonClass = "";
  const svgSizes = {
    xs: "w-3 h-3",
    sm: "w-3.5 h-3.5",
    md: "w-5 h-5"
  };
  function click_handler(event) {
    bubble.call(this, $$self, event);
  }
  $$self.$$set = ($$new_props) => {
    $$invalidate(11, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    if ("color" in $$new_props)
      $$invalidate(4, color = $$new_props.color);
    if ("name" in $$new_props)
      $$invalidate(0, name = $$new_props.name);
    if ("size" in $$new_props)
      $$invalidate(1, size = $$new_props.size);
    if ("$$scope" in $$new_props)
      $$invalidate(5, $$scope = $$new_props.$$scope);
  };
  $$self.$$.update = () => {
    $$invalidate(2, buttonClass = classNames(
      "ml-auto focus:outline-none whitespace-normal",
      sizing[size],
      colors[color],
      color === "default" && (background ? "hover:bg-gray-100 dark:hover:bg-gray-600" : "hover:bg-gray-100 dark:hover:bg-gray-700"),
      $$props.class
    ));
  };
  $$props = exclude_internal_props($$props);
  return [name, size, buttonClass, svgSizes, color, $$scope, slots, click_handler];
}
class CloseButton extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, { color: 4, name: 0, size: 1 });
  }
}
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
function create_default_slot(ctx) {
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
function create_fragment(ctx) {
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
    $$slots: { default: [create_default_slot] },
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
    init(this, options, instance, create_fragment, safe_not_equal, { dismissable: 0, accent: 5 });
  }
}
export {
  Alert as A
};
