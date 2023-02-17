import { S as SvelteComponent, i as init, s as safe_not_equal, e as empty, b as insert_hydration, f as transition_in, t as transition_out, h as detach, N as compute_rest_props, T as getContext, E as assign, O as exclude_internal_props, k as element, l as claim_element, m as children, W as set_custom_element_data_map, G as set_attributes, I as listen, g as group_outros, d as check_outros, M as get_spread_update, X as run_all, U as bubble, D as create_slot, J as update_slot_base, K as get_all_dirty_from_scope, L as get_slot_changes, n as attr, a9 as compute_slots, aa as createEventDispatcher, a as space, x as create_component, c as claim_space, y as claim_component, H as append_hydration, z as mount_component, ac as prevent_default, a0 as action_destroyer, _ as is_function, R as get_spread_object, A as destroy_component, ad as stop_propagation, q as text, r as claim_text, u as set_data, v as binding_callbacks, ae as bind, a5 as src_url_equal, af as add_flush_callback, a6 as destroy_each, C as noop } from "../../../chunks/index-81d22fb2.js";
import { c as classNames, F as Frame } from "../../../chunks/Indicator.svelte_svelte_type_style_lang-efe892ff.js";
import { C as CloseButton } from "../../../chunks/CloseButton-3453f6ab.js";
function create_else_block(ctx) {
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[13].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[12],
    null
  );
  return {
    c() {
      if (default_slot)
        default_slot.c();
    },
    l(nodes) {
      if (default_slot)
        default_slot.l(nodes);
    },
    m(target, anchor) {
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        4096)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[12],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[12]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[12],
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
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function create_if_block$1(ctx) {
  let span;
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[13].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[12],
    null
  );
  return {
    c() {
      span = element("span");
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      if (default_slot)
        default_slot.l(span_nodes);
      span_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(
        span,
        "class",
        /*gradientOutlineClass*/
        ctx[5]
      );
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      if (default_slot) {
        default_slot.m(span, null);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        4096)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[12],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[12]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[12],
              dirty,
              null
            ),
            null
          );
        }
      }
      if (!current || dirty & /*gradientOutlineClass*/
      32) {
        attr(
          span,
          "class",
          /*gradientOutlineClass*/
          ctx2[5]
        );
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
        detach(span);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function create_dynamic_element(ctx) {
  let svelte_element;
  let current_block_type_index;
  let if_block;
  let svelte_element_type_value;
  let current;
  let mounted;
  let dispose;
  const if_block_creators = [create_if_block$1, create_else_block];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (
      /*outline*/
      ctx2[0] && /*gradient*/
      ctx2[1]
    )
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  let svelte_element_levels = [
    {
      type: svelte_element_type_value = /*href*/
      ctx[2] ? void 0 : (
        /*type*/
        ctx[3]
      )
    },
    { href: (
      /*href*/
      ctx[2]
    ) },
    /*$$restProps*/
    ctx[6],
    { class: (
      /*buttonClass*/
      ctx[4]
    ) }
  ];
  let svelte_element_data = {};
  for (let i = 0; i < svelte_element_levels.length; i += 1) {
    svelte_element_data = assign(svelte_element_data, svelte_element_levels[i]);
  }
  return {
    c() {
      svelte_element = element(
        /*href*/
        ctx[2] ? "a" : "button"
      );
      if_block.c();
      this.h();
    },
    l(nodes) {
      svelte_element = claim_element(
        nodes,
        /*href*/
        ((ctx[2] ? "a" : "button") || "null").toUpperCase(),
        { type: true, href: true, class: true }
      );
      var svelte_element_nodes = children(svelte_element);
      if_block.l(svelte_element_nodes);
      svelte_element_nodes.forEach(detach);
      this.h();
    },
    h() {
      if (/-/.test(
        /*href*/
        ctx[2] ? "a" : "button"
      )) {
        set_custom_element_data_map(svelte_element, svelte_element_data);
      } else {
        set_attributes(svelte_element, svelte_element_data);
      }
    },
    m(target, anchor) {
      insert_hydration(target, svelte_element, anchor);
      if_blocks[current_block_type_index].m(svelte_element, null);
      current = true;
      if (!mounted) {
        dispose = [
          listen(
            svelte_element,
            "click",
            /*click_handler*/
            ctx[14]
          ),
          listen(
            svelte_element,
            "change",
            /*change_handler*/
            ctx[15]
          ),
          listen(
            svelte_element,
            "keydown",
            /*keydown_handler*/
            ctx[16]
          ),
          listen(
            svelte_element,
            "keyup",
            /*keyup_handler*/
            ctx[17]
          ),
          listen(
            svelte_element,
            "mouseenter",
            /*mouseenter_handler*/
            ctx[18]
          ),
          listen(
            svelte_element,
            "mouseleave",
            /*mouseleave_handler*/
            ctx[19]
          )
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
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
        if_block.m(svelte_element, null);
      }
      svelte_element_data = get_spread_update(svelte_element_levels, [
        (!current || dirty & /*href, type*/
        12 && svelte_element_type_value !== (svelte_element_type_value = /*href*/
        ctx2[2] ? void 0 : (
          /*type*/
          ctx2[3]
        ))) && { type: svelte_element_type_value },
        (!current || dirty & /*href*/
        4) && { href: (
          /*href*/
          ctx2[2]
        ) },
        dirty & /*$$restProps*/
        64 && /*$$restProps*/
        ctx2[6],
        (!current || dirty & /*buttonClass*/
        16) && { class: (
          /*buttonClass*/
          ctx2[4]
        ) }
      ]);
      if (/-/.test(
        /*href*/
        ctx2[2] ? "a" : "button"
      )) {
        set_custom_element_data_map(svelte_element, svelte_element_data);
      } else {
        set_attributes(svelte_element, svelte_element_data);
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
      if (detaching)
        detach(svelte_element);
      if_blocks[current_block_type_index].d();
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_fragment$3(ctx) {
  let previous_tag = (
    /*href*/
    ctx[2] ? "a" : "button"
  );
  let svelte_element_anchor;
  let current;
  let svelte_element = (
    /*href*/
    (ctx[2] ? "a" : "button") && create_dynamic_element(ctx)
  );
  return {
    c() {
      if (svelte_element)
        svelte_element.c();
      svelte_element_anchor = empty();
    },
    l(nodes) {
      if (svelte_element)
        svelte_element.l(nodes);
      svelte_element_anchor = empty();
    },
    m(target, anchor) {
      if (svelte_element)
        svelte_element.m(target, anchor);
      insert_hydration(target, svelte_element_anchor, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (
        /*href*/
        ctx2[2] ? "a" : "button"
      ) {
        if (!previous_tag) {
          svelte_element = create_dynamic_element(ctx2);
          svelte_element.c();
          svelte_element.m(svelte_element_anchor.parentNode, svelte_element_anchor);
        } else if (safe_not_equal(
          previous_tag,
          /*href*/
          ctx2[2] ? "a" : "button"
        )) {
          svelte_element.d(1);
          svelte_element = create_dynamic_element(ctx2);
          svelte_element.c();
          svelte_element.m(svelte_element_anchor.parentNode, svelte_element_anchor);
        } else {
          svelte_element.p(ctx2, dirty);
        }
      } else if (previous_tag) {
        svelte_element.d(1);
        svelte_element = null;
      }
      previous_tag = /*href*/
      ctx2[2] ? "a" : "button";
    },
    i(local) {
      if (current)
        return;
      transition_in(svelte_element);
      current = true;
    },
    o(local) {
      transition_out(svelte_element);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(svelte_element_anchor);
      if (svelte_element)
        svelte_element.d(detaching);
    }
  };
}
function instance$3($$self, $$props, $$invalidate) {
  const omit_props_names = ["pill", "outline", "gradient", "size", "href", "btnClass", "type", "color", "shadow"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  const group = getContext("group");
  let { pill = false } = $$props;
  let { outline = false } = $$props;
  let { gradient = false } = $$props;
  let { size = group ? "sm" : "md" } = $$props;
  let { href = void 0 } = $$props;
  let { btnClass = void 0 } = $$props;
  let { type = "button" } = $$props;
  let { color = group ? outline ? "dark" : "alternative" : "blue" } = $$props;
  let { shadow = null } = $$props;
  const colorClasses = {
    blue: "text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
    dark: "text-white bg-gray-800 hover:bg-gray-900 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700",
    alternative: "text-gray-900 bg-white border border-gray-200 dark:border-gray-600 hover:bg-gray-100 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 hover:text-blue-700 focus:text-blue-700 dark:focus:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700",
    light: "text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700",
    green: "text-white bg-green-700 hover:bg-green-800 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800",
    red: "text-white bg-red-700 hover:bg-red-800 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900",
    yellow: "text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-yellow-300 dark:focus:ring-yellow-900",
    primary: "text-white bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800",
    purple: "text-white bg-purple-700 hover:bg-purple-800 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
  };
  const gradientClasses = {
    blue: "text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-blue-300 dark:focus:ring-blue-800 ",
    green: "text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-green-300 dark:focus:ring-green-800",
    cyan: "text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-cyan-300 dark:focus:ring-cyan-800",
    teal: "text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-teal-300 dark:focus:ring-teal-800",
    lime: "text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-lime-300 dark:focus:ring-lime-800",
    red: "text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-red-300 dark:focus:ring-red-800",
    pink: "text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-pink-300 dark:focus:ring-pink-800",
    purple: "text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-purple-300 dark:focus:ring-purple-800",
    purpleToBlue: "text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800",
    cyanToBlue: "text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-cyan-300 dark:focus:ring-cyan-800",
    greenToBlue: "text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-green-200 dark:focus:ring-green-800",
    purpleToPink: "text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-purple-200 dark:focus:ring-purple-800",
    pinkToOrange: "text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-pink-200 dark:focus:ring-pink-800",
    tealToLime: "text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l focus:ring-lime-200 dark:focus:ring-teal-700",
    redToYellow: "text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-red-100 dark:focus:ring-red-400"
  };
  const coloredShadowClasses = {
    blue: "shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80",
    green: "shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80",
    cyan: "shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80",
    teal: "shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 ",
    lime: "shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80",
    red: "shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 ",
    pink: "shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80",
    purple: "shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80"
  };
  const outlineClasses = {
    blue: "text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800",
    light: "text-gray-500 hover:text-gray-900 bg-white border border-gray-200 dark:border-gray-600 dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-400",
    dark: "text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:bg-gray-900 focus:text-white focus:ring-gray-300 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800",
    green: "text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-green-300 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800",
    red: "text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-red-300 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900",
    yellow: "text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-yellow-300 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900",
    purple: "text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-purple-300 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"
  };
  const sizeClasses = {
    xs: "px-3 py-2 text-xs",
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-5 py-3 text-base",
    xl: "px-6 py-3.5 text-base"
  };
  function rounded(gradientOutline = false) {
    if (group) {
      return pill ? "first:rounded-l-full last:rounded-r-full" : gradientOutline ? "first:rounded-l-md last:rounded-r-md" : "first:rounded-l-lg last:rounded-r-lg";
    }
    return pill ? "rounded-full" : gradientOutline ? "rounded-md" : "rounded-lg";
  }
  const hasBorder = () => outline || color === "alternative" || color === "light";
  let buttonClass;
  let gradientOutlineClass;
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
  function mouseenter_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseleave_handler(event) {
    bubble.call(this, $$self, event);
  }
  $$self.$$set = ($$new_props) => {
    $$invalidate(28, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    $$invalidate(6, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("pill" in $$new_props)
      $$invalidate(7, pill = $$new_props.pill);
    if ("outline" in $$new_props)
      $$invalidate(0, outline = $$new_props.outline);
    if ("gradient" in $$new_props)
      $$invalidate(1, gradient = $$new_props.gradient);
    if ("size" in $$new_props)
      $$invalidate(8, size = $$new_props.size);
    if ("href" in $$new_props)
      $$invalidate(2, href = $$new_props.href);
    if ("btnClass" in $$new_props)
      $$invalidate(9, btnClass = $$new_props.btnClass);
    if ("type" in $$new_props)
      $$invalidate(3, type = $$new_props.type);
    if ("color" in $$new_props)
      $$invalidate(10, color = $$new_props.color);
    if ("shadow" in $$new_props)
      $$invalidate(11, shadow = $$new_props.shadow);
    if ("$$scope" in $$new_props)
      $$invalidate(12, $$scope = $$new_props.$$scope);
  };
  $$self.$$.update = () => {
    $$invalidate(4, buttonClass = btnClass ? btnClass : classNames(
      "text-center font-medium",
      group ? "focus:ring-2" : "focus:ring-4",
      group && "focus:z-10",
      group || "focus:outline-none",
      outline && gradient ? "p-0.5" : "inline-flex items-center justify-center " + sizeClasses[size],
      gradient ? gradientClasses[color] : outline ? outlineClasses[color] : colorClasses[color],
      color === "alternative" && (group ? "dark:bg-gray-700 dark:text-white dark:border-gray-700 dark:hover:border-gray-600 dark:hover:bg-gray-600" : "dark:bg-transparent dark:border-gray-800 dark:hover:border-gray-700"),
      outline && color === "dark" && (group ? "dark:text-white dark:border-white" : "dark:text-gray-400 dark:border-gray-700"),
      hasBorder() && group && "border-l-0 first:border-l",
      rounded(false),
      shadow && coloredShadowClasses[shadow],
      $$props.disabled && "cursor-not-allowed opacity-50",
      $$props.class
    ));
    if ($$self.$$.dirty & /*size*/
    256) {
      $$invalidate(5, gradientOutlineClass = classNames("inline-flex items-center justify-center", sizeClasses[size], rounded(true), "bg-white text-gray-900 dark:bg-gray-900 dark:text-white", "transition-all duration-75 ease-in group-hover:bg-opacity-0 group-hover:text-inherit"));
    }
  };
  $$props = exclude_internal_props($$props);
  return [
    outline,
    gradient,
    href,
    type,
    buttonClass,
    gradientOutlineClass,
    $$restProps,
    pill,
    size,
    btnClass,
    color,
    shadow,
    $$scope,
    slots,
    click_handler,
    change_handler,
    keydown_handler,
    keyup_handler,
    mouseenter_handler,
    mouseleave_handler
  ];
}
class Button extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$3, create_fragment$3, safe_not_equal, {
      pill: 7,
      outline: 0,
      gradient: 1,
      size: 8,
      href: 2,
      btnClass: 9,
      type: 3,
      color: 10,
      shadow: 11
    });
  }
}
const selectorTabbable = `
  a[href], area[href], input:not([disabled]):not([tabindex='-1']),
  button:not([disabled]):not([tabindex='-1']),select:not([disabled]):not([tabindex='-1']),
  textarea:not([disabled]):not([tabindex='-1']),
  iframe, object, embed, *[tabindex]:not([tabindex='-1']):not([disabled]), *[contenteditable=true]
`;
function focusTrap(node) {
  const tabbable = Array.from(node.querySelectorAll(selectorTabbable));
  function handleFocusTrap(e) {
    let isTabPressed = e.key === "Tab" || e.keyCode === 9;
    if (!isTabPressed) {
      return;
    }
    let index = tabbable.indexOf(document.activeElement);
    if (index === -1 && e.shiftKey)
      index = 0;
    index += tabbable.length + (e.shiftKey ? -1 : 1);
    index %= tabbable.length;
    tabbable[index].focus();
    e.preventDefault();
  }
  document.addEventListener("keydown", handleFocusTrap, true);
  return {
    destroy() {
      document.removeEventListener("keydown", handleFocusTrap, true);
    }
  };
}
const get_footer_slot_changes = (dirty) => ({});
const get_footer_slot_context = (ctx) => ({});
const get_header_slot_changes = (dirty) => ({});
const get_header_slot_context = (ctx) => ({});
function create_if_block(ctx) {
  let div0;
  let div0_class_value;
  let t;
  let div2;
  let div1;
  let frame;
  let div1_class_value;
  let current;
  let mounted;
  let dispose;
  const frame_spread_levels = [
    { rounded: true },
    { shadow: true },
    /*$$restProps*/
    ctx[14],
    { class: (
      /*frameClass*/
      ctx[6]
    ) }
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
      div0 = element("div");
      t = space();
      div2 = element("div");
      div1 = element("div");
      create_component(frame.$$.fragment);
      this.h();
    },
    l(nodes) {
      div0 = claim_element(nodes, "DIV", { class: true });
      children(div0).forEach(detach);
      t = claim_space(nodes);
      div2 = claim_element(nodes, "DIV", {
        class: true,
        tabindex: true,
        "aria-modal": true,
        role: true
      });
      var div2_nodes = children(div2);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      claim_component(frame.$$.fragment, div1_nodes);
      div1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", div0_class_value = classNames(
        "fixed inset-0 z-40",
        /*backdropClasses*/
        ctx[5]
      ));
      attr(div1, "class", div1_class_value = "flex relative " + /*sizes*/
      ctx[9][
        /*size*/
        ctx[2]
      ] + " w-full max-h-full");
      attr(div2, "class", classNames("fixed top-0 left-0 right-0 h-modal md:inset-0 md:h-full z-50 w-full p-4 flex", .../*getPlacementClasses*/
      ctx[8]()));
      attr(div2, "tabindex", "-1");
      attr(div2, "aria-modal", "true");
      attr(div2, "role", "dialog");
    },
    m(target, anchor) {
      insert_hydration(target, div0, anchor);
      insert_hydration(target, t, anchor);
      insert_hydration(target, div2, anchor);
      append_hydration(div2, div1);
      mount_component(frame, div1, null);
      current = true;
      if (!mounted) {
        dispose = [
          listen(
            div2,
            "keydown",
            /*handleKeys*/
            ctx[13]
          ),
          listen(div2, "wheel", prevent_default(
            /*wheel_handler*/
            ctx[18]
          )),
          action_destroyer(
            /*prepareFocus*/
            ctx[7].call(null, div2)
          ),
          action_destroyer(focusTrap.call(null, div2)),
          listen(div2, "click", function() {
            if (is_function(
              /*autoclose*/
              ctx[3] ? (
                /*onAutoClose*/
                ctx[10]
              ) : null
            ))
              /*autoclose*/
              (ctx[3] ? (
                /*onAutoClose*/
                ctx[10]
              ) : null).apply(this, arguments);
          })
        ];
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (!current || dirty & /*backdropClasses*/
      32 && div0_class_value !== (div0_class_value = classNames(
        "fixed inset-0 z-40",
        /*backdropClasses*/
        ctx[5]
      ))) {
        attr(div0, "class", div0_class_value);
      }
      const frame_changes = dirty & /*$$restProps, frameClass*/
      16448 ? get_spread_update(frame_spread_levels, [
        frame_spread_levels[0],
        frame_spread_levels[1],
        dirty & /*$$restProps*/
        16384 && get_spread_object(
          /*$$restProps*/
          ctx[14]
        ),
        dirty & /*frameClass*/
        64 && { class: (
          /*frameClass*/
          ctx[6]
        ) }
      ]) : {};
      if (dirty & /*$$scope, $$restProps, $$slots, permanent, title*/
      573458) {
        frame_changes.$$scope = { dirty, ctx };
      }
      frame.$set(frame_changes);
      if (!current || dirty & /*size*/
      4 && div1_class_value !== (div1_class_value = "flex relative " + /*sizes*/
      ctx[9][
        /*size*/
        ctx[2]
      ] + " w-full max-h-full")) {
        attr(div1, "class", div1_class_value);
      }
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
      if (detaching)
        detach(div0);
      if (detaching)
        detach(t);
      if (detaching)
        detach(div2);
      destroy_component(frame);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_if_block_4(ctx) {
  let closebutton;
  let current;
  closebutton = new CloseButton({
    props: {
      name: "Close modal",
      class: "absolute top-3 right-2.5",
      color: (
        /*$$restProps*/
        ctx[14].color
      )
    }
  });
  closebutton.$on(
    "click",
    /*hide*/
    ctx[11]
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
      16384)
        closebutton_changes.color = /*$$restProps*/
        ctx2[14].color;
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
function create_if_block_2(ctx) {
  let frame;
  let current;
  frame = new Frame({
    props: {
      color: (
        /*$$restProps*/
        ctx[14].color
      ),
      class: "flex justify-between items-center p-4 rounded-t border-b",
      $$slots: { default: [create_default_slot_2] },
      $$scope: { ctx }
    }
  });
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
    p(ctx2, dirty) {
      const frame_changes = {};
      if (dirty & /*$$restProps*/
      16384)
        frame_changes.color = /*$$restProps*/
        ctx2[14].color;
      if (dirty & /*$$scope, $$restProps, permanent, title*/
      540690) {
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
function fallback_block(ctx) {
  let h3;
  let t;
  let h3_class_value;
  return {
    c() {
      h3 = element("h3");
      t = text(
        /*title*/
        ctx[1]
      );
      this.h();
    },
    l(nodes) {
      h3 = claim_element(nodes, "H3", { class: true });
      var h3_nodes = children(h3);
      t = claim_text(
        h3_nodes,
        /*title*/
        ctx[1]
      );
      h3_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(h3, "class", h3_class_value = "text-xl font-semibold " + /*$$restProps*/
      (ctx[14].color ? "" : "text-gray-900 dark:text-white") + " p-0");
    },
    m(target, anchor) {
      insert_hydration(target, h3, anchor);
      append_hydration(h3, t);
    },
    p(ctx2, dirty) {
      if (dirty & /*title*/
      2)
        set_data(
          t,
          /*title*/
          ctx2[1]
        );
      if (dirty & /*$$restProps*/
      16384 && h3_class_value !== (h3_class_value = "text-xl font-semibold " + /*$$restProps*/
      (ctx2[14].color ? "" : "text-gray-900 dark:text-white") + " p-0")) {
        attr(h3, "class", h3_class_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(h3);
    }
  };
}
function create_if_block_3(ctx) {
  let closebutton;
  let current;
  closebutton = new CloseButton({
    props: {
      name: "Close modal",
      color: (
        /*$$restProps*/
        ctx[14].color
      )
    }
  });
  closebutton.$on(
    "click",
    /*hide*/
    ctx[11]
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
      16384)
        closebutton_changes.color = /*$$restProps*/
        ctx2[14].color;
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
function create_default_slot_2(ctx) {
  let t;
  let if_block_anchor;
  let current;
  const header_slot_template = (
    /*#slots*/
    ctx[17].header
  );
  const header_slot = create_slot(
    header_slot_template,
    ctx,
    /*$$scope*/
    ctx[19],
    get_header_slot_context
  );
  const header_slot_or_fallback = header_slot || fallback_block(ctx);
  let if_block = !/*permanent*/
  ctx[4] && create_if_block_3(ctx);
  return {
    c() {
      if (header_slot_or_fallback)
        header_slot_or_fallback.c();
      t = space();
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
    },
    l(nodes) {
      if (header_slot_or_fallback)
        header_slot_or_fallback.l(nodes);
      t = claim_space(nodes);
      if (if_block)
        if_block.l(nodes);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if (header_slot_or_fallback) {
        header_slot_or_fallback.m(target, anchor);
      }
      insert_hydration(target, t, anchor);
      if (if_block)
        if_block.m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (header_slot) {
        if (header_slot.p && (!current || dirty & /*$$scope*/
        524288)) {
          update_slot_base(
            header_slot,
            header_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[19],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[19]
            ) : get_slot_changes(
              header_slot_template,
              /*$$scope*/
              ctx2[19],
              dirty,
              get_header_slot_changes
            ),
            get_header_slot_context
          );
        }
      } else {
        if (header_slot_or_fallback && header_slot_or_fallback.p && (!current || dirty & /*$$restProps, title*/
        16386)) {
          header_slot_or_fallback.p(ctx2, !current ? -1 : dirty);
        }
      }
      if (!/*permanent*/
      ctx2[4]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & /*permanent*/
          16) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block_3(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(header_slot_or_fallback, local);
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(header_slot_or_fallback, local);
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (header_slot_or_fallback)
        header_slot_or_fallback.d(detaching);
      if (detaching)
        detach(t);
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function create_if_block_1(ctx) {
  let frame;
  let current;
  frame = new Frame({
    props: {
      color: (
        /*$$restProps*/
        ctx[14].color
      ),
      class: "flex items-center p-6 space-x-2 rounded-b border-t",
      $$slots: { default: [create_default_slot_1$1] },
      $$scope: { ctx }
    }
  });
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
    p(ctx2, dirty) {
      const frame_changes = {};
      if (dirty & /*$$restProps*/
      16384)
        frame_changes.color = /*$$restProps*/
        ctx2[14].color;
      if (dirty & /*$$scope*/
      524288) {
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
function create_default_slot_1$1(ctx) {
  let current;
  const footer_slot_template = (
    /*#slots*/
    ctx[17].footer
  );
  const footer_slot = create_slot(
    footer_slot_template,
    ctx,
    /*$$scope*/
    ctx[19],
    get_footer_slot_context
  );
  return {
    c() {
      if (footer_slot)
        footer_slot.c();
    },
    l(nodes) {
      if (footer_slot)
        footer_slot.l(nodes);
    },
    m(target, anchor) {
      if (footer_slot) {
        footer_slot.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (footer_slot) {
        if (footer_slot.p && (!current || dirty & /*$$scope*/
        524288)) {
          update_slot_base(
            footer_slot,
            footer_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[19],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[19]
            ) : get_slot_changes(
              footer_slot_template,
              /*$$scope*/
              ctx2[19],
              dirty,
              get_footer_slot_changes
            ),
            get_footer_slot_context
          );
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(footer_slot, local);
      current = true;
    },
    o(local) {
      transition_out(footer_slot, local);
      current = false;
    },
    d(detaching) {
      if (footer_slot)
        footer_slot.d(detaching);
    }
  };
}
function create_default_slot$1(ctx) {
  let current_block_type_index;
  let if_block0;
  let t0;
  let div;
  let t1;
  let if_block1_anchor;
  let current;
  let mounted;
  let dispose;
  const if_block_creators = [create_if_block_2, create_if_block_4];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (
      /*$$slots*/
      ctx2[15].header || /*title*/
      ctx2[1]
    )
      return 0;
    if (!/*permanent*/
    ctx2[4])
      return 1;
    return -1;
  }
  if (~(current_block_type_index = select_block_type(ctx))) {
    if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  }
  const default_slot_template = (
    /*#slots*/
    ctx[17].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[19],
    null
  );
  let if_block1 = (
    /*$$slots*/
    ctx[15].footer && create_if_block_1(ctx)
  );
  return {
    c() {
      if (if_block0)
        if_block0.c();
      t0 = space();
      div = element("div");
      if (default_slot)
        default_slot.c();
      t1 = space();
      if (if_block1)
        if_block1.c();
      if_block1_anchor = empty();
      this.h();
    },
    l(nodes) {
      if (if_block0)
        if_block0.l(nodes);
      t0 = claim_space(nodes);
      div = claim_element(nodes, "DIV", { id: true, class: true });
      var div_nodes = children(div);
      if (default_slot)
        default_slot.l(div_nodes);
      div_nodes.forEach(detach);
      t1 = claim_space(nodes);
      if (if_block1)
        if_block1.l(nodes);
      if_block1_anchor = empty();
      this.h();
    },
    h() {
      attr(div, "id", "modal");
      attr(div, "class", "p-6 space-y-6 flex-1 overflow-y-auto overscroll-contain");
    },
    m(target, anchor) {
      if (~current_block_type_index) {
        if_blocks[current_block_type_index].m(target, anchor);
      }
      insert_hydration(target, t0, anchor);
      insert_hydration(target, div, anchor);
      if (default_slot) {
        default_slot.m(div, null);
      }
      insert_hydration(target, t1, anchor);
      if (if_block1)
        if_block1.m(target, anchor);
      insert_hydration(target, if_block1_anchor, anchor);
      current = true;
      if (!mounted) {
        dispose = [
          listen(div, "keydown", stop_propagation(
            /*handleKeys*/
            ctx[13]
          )),
          listen(div, "wheel", stop_propagation(
            /*preventWheelDefault*/
            ctx[12]
          ))
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index === previous_block_index) {
        if (~current_block_type_index) {
          if_blocks[current_block_type_index].p(ctx2, dirty);
        }
      } else {
        if (if_block0) {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, () => {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
        }
        if (~current_block_type_index) {
          if_block0 = if_blocks[current_block_type_index];
          if (!if_block0) {
            if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
            if_block0.c();
          } else {
            if_block0.p(ctx2, dirty);
          }
          transition_in(if_block0, 1);
          if_block0.m(t0.parentNode, t0);
        } else {
          if_block0 = null;
        }
      }
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        524288)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[19],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[19]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[19],
              dirty,
              null
            ),
            null
          );
        }
      }
      if (
        /*$$slots*/
        ctx2[15].footer
      ) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
          if (dirty & /*$$slots*/
          32768) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block_1(ctx2);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, () => {
          if_block1 = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block0);
      transition_in(default_slot, local);
      transition_in(if_block1);
      current = true;
    },
    o(local) {
      transition_out(if_block0);
      transition_out(default_slot, local);
      transition_out(if_block1);
      current = false;
    },
    d(detaching) {
      if (~current_block_type_index) {
        if_blocks[current_block_type_index].d(detaching);
      }
      if (detaching)
        detach(t0);
      if (detaching)
        detach(div);
      if (default_slot)
        default_slot.d(detaching);
      if (detaching)
        detach(t1);
      if (if_block1)
        if_block1.d(detaching);
      if (detaching)
        detach(if_block1_anchor);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_fragment$2(ctx) {
  let if_block_anchor;
  let current;
  let if_block = (
    /*open*/
    ctx[0] && create_if_block(ctx)
  );
  return {
    c() {
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
    },
    l(nodes) {
      if (if_block)
        if_block.l(nodes);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if (if_block)
        if_block.m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (
        /*open*/
        ctx2[0]
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & /*open*/
          1) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
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
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function instance$2($$self, $$props, $$invalidate) {
  const omit_props_names = ["open", "title", "size", "placement", "autoclose", "permanent", "backdropClasses"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  const $$slots = compute_slots(slots);
  let { open = false } = $$props;
  let { title = "" } = $$props;
  let { size = "md" } = $$props;
  let { placement = "center" } = $$props;
  let { autoclose = false } = $$props;
  let { permanent = false } = $$props;
  let { backdropClasses = "bg-gray-900 bg-opacity-50 dark:bg-opacity-80" } = $$props;
  const dispatch = createEventDispatcher();
  function prepareFocus(node) {
    const walker = document.createTreeWalker(node, NodeFilter.SHOW_ELEMENT);
    let n;
    while (n = walker.nextNode()) {
      if (n instanceof HTMLElement) {
        const el = n;
        const [x, y] = isScrollable(el);
        if (x || y)
          el.tabIndex = 0;
      }
    }
    node.focus();
  }
  const getPlacementClasses = () => {
    switch (placement) {
      case "top-left":
        return ["justify-start", "items-start"];
      case "top-center":
        return ["justify-center", "items-start"];
      case "top-right":
        return ["justify-end", "items-start"];
      case "center-left":
        return ["justify-start", "items-center"];
      case "center":
        return ["justify-center", "items-center"];
      case "center-right":
        return ["justify-end", "items-center"];
      case "bottom-left":
        return ["justify-start", "items-end"];
      case "bottom-center":
        return ["justify-center", "items-end"];
      case "bottom-right":
        return ["justify-end", "items-end"];
      default:
        return ["justify-center", "items-center"];
    }
  };
  const sizes = {
    xs: "max-w-md",
    sm: "max-w-lg",
    md: "max-w-2xl",
    lg: "max-w-4xl",
    xl: "max-w-7xl"
  };
  const onAutoClose = (e) => {
    const target = e.target;
    if (autoclose && (target == null ? void 0 : target.tagName) === "BUTTON")
      hide(e);
  };
  const hide = (e) => {
    e.preventDefault();
    $$invalidate(0, open = false);
  };
  let frameClass;
  const isScrollable = (e) => [
    e.scrollWidth > e.clientWidth && ["scroll", "auto"].indexOf(getComputedStyle(e).overflowX) >= 0,
    e.scrollHeight > e.clientHeight && ["scroll", "auto"].indexOf(getComputedStyle(e).overflowY) >= 0
  ];
  function preventWheelDefault(e) {
    const [x, y] = isScrollable(this);
    return x || y || e.preventDefault();
  }
  function handleKeys(e) {
    if (e.key === "Escape" && !permanent)
      return hide(e);
  }
  function wheel_handler(event) {
    bubble.call(this, $$self, event);
  }
  $$self.$$set = ($$new_props) => {
    $$invalidate(22, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    $$invalidate(14, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("open" in $$new_props)
      $$invalidate(0, open = $$new_props.open);
    if ("title" in $$new_props)
      $$invalidate(1, title = $$new_props.title);
    if ("size" in $$new_props)
      $$invalidate(2, size = $$new_props.size);
    if ("placement" in $$new_props)
      $$invalidate(16, placement = $$new_props.placement);
    if ("autoclose" in $$new_props)
      $$invalidate(3, autoclose = $$new_props.autoclose);
    if ("permanent" in $$new_props)
      $$invalidate(4, permanent = $$new_props.permanent);
    if ("backdropClasses" in $$new_props)
      $$invalidate(5, backdropClasses = $$new_props.backdropClasses);
    if ("$$scope" in $$new_props)
      $$invalidate(19, $$scope = $$new_props.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*open*/
    1) {
      dispatch(open ? "open" : "hide");
    }
    $$invalidate(6, frameClass = classNames("relative flex flex-col mx-auto", $$props.class));
  };
  $$props = exclude_internal_props($$props);
  return [
    open,
    title,
    size,
    autoclose,
    permanent,
    backdropClasses,
    frameClass,
    prepareFocus,
    getPlacementClasses,
    sizes,
    onAutoClose,
    hide,
    preventWheelDefault,
    handleKeys,
    $$restProps,
    $$slots,
    placement,
    slots,
    wheel_handler,
    $$scope
  ];
}
class Modal extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$2, create_fragment$2, safe_not_equal, {
      open: 0,
      title: 1,
      size: 2,
      placement: 16,
      autoclose: 3,
      permanent: 4,
      backdropClasses: 5
    });
  }
}
function create_default_slot_1(ctx) {
  let p;
  let t_value = (
    /*skill*/
    ctx[0].description + ""
  );
  let t;
  return {
    c() {
      p = element("p");
      t = text(t_value);
      this.h();
    },
    l(nodes) {
      p = claim_element(nodes, "P", { class: true });
      var p_nodes = children(p);
      t = claim_text(p_nodes, t_value);
      p_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(p, "class", "text-base text-lg leading-relaxed text-gray-500 dark:text-gray-400");
    },
    m(target, anchor) {
      insert_hydration(target, p, anchor);
      append_hydration(p, t);
    },
    p(ctx2, dirty) {
      if (dirty & /*skill*/
      1 && t_value !== (t_value = /*skill*/
      ctx2[0].description + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(p);
    }
  };
}
function create_default_slot(ctx) {
  let t;
  return {
    c() {
      t = text("Close");
    },
    l(nodes) {
      t = claim_text(nodes, "Close");
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_footer_slot(ctx) {
  let button;
  let current;
  button = new Button({
    props: {
      class: "mx-auto",
      gradient: true,
      color: "cyanToBlue",
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(button.$$.fragment);
    },
    l(nodes) {
      claim_component(button.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(button, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const button_changes = {};
      if (dirty & /*$$scope*/
      16) {
        button_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button.$set(button_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(button.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(button.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(button, detaching);
    }
  };
}
function create_fragment$1(ctx) {
  let div;
  let button;
  let img;
  let img_src_value;
  let img_alt_value;
  let t0;
  let p;
  let t1_value = (
    /*skill*/
    ctx[0].name + ""
  );
  let t1;
  let t2;
  let modal;
  let updating_open;
  let current;
  let mounted;
  let dispose;
  function modal_open_binding(value) {
    ctx[3](value);
  }
  let modal_props = {
    title: `About ${/*skill*/
    ctx[0].name}`,
    autoclose: true,
    $$slots: {
      footer: [create_footer_slot],
      default: [create_default_slot_1]
    },
    $$scope: { ctx }
  };
  if (
    /*defaultModal*/
    ctx[1] !== void 0
  ) {
    modal_props.open = /*defaultModal*/
    ctx[1];
  }
  modal = new Modal({ props: modal_props });
  binding_callbacks.push(() => bind(modal, "open", modal_open_binding));
  return {
    c() {
      div = element("div");
      button = element("button");
      img = element("img");
      t0 = space();
      p = element("p");
      t1 = text(t1_value);
      t2 = space();
      create_component(modal.$$.fragment);
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      button = claim_element(div_nodes, "BUTTON", { class: true });
      var button_nodes = children(button);
      img = claim_element(button_nodes, "IMG", {
        class: true,
        draggable: true,
        src: true,
        alt: true
      });
      button_nodes.forEach(detach);
      t0 = claim_space(div_nodes);
      p = claim_element(div_nodes, "P", { class: true });
      var p_nodes = children(p);
      t1 = claim_text(p_nodes, t1_value);
      p_nodes.forEach(detach);
      div_nodes.forEach(detach);
      t2 = claim_space(nodes);
      claim_component(modal.$$.fragment, nodes);
      this.h();
    },
    h() {
      attr(img, "class", "max-h-[100%] max-w-[100%] min-w-[30px] min-h-[30px] aspect-square object-contain drop-shadow-lg");
      attr(img, "draggable", "false");
      if (!src_url_equal(img.src, img_src_value = /*skill*/
      ctx[0].img))
        attr(img, "src", img_src_value);
      attr(img, "alt", img_alt_value = /*skill*/
      ctx[0].alt);
      attr(button, "class", "inline-flex items-center justify-center max-h-[15vh] max-w-[30vw] min-w-[50px] min-h-[50px] p-[15%] aspect-square cursor-pointer border-2 border-gray-800 dark:border-white rounded-full object-contain hover:border-green-600 dark:hover:border-green-400 hover:animate-wiggle bg-white/70 dark:bg-secondary/10");
      attr(p, "class", "text-black dark:text-white p-3");
      attr(div, "class", "flex flex-col items-center justify-center p-2");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, button);
      append_hydration(button, img);
      append_hydration(div, t0);
      append_hydration(div, p);
      append_hydration(p, t1);
      insert_hydration(target, t2, anchor);
      mount_component(modal, target, anchor);
      current = true;
      if (!mounted) {
        dispose = listen(
          button,
          "click",
          /*click_handler*/
          ctx[2]
        );
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (!current || dirty & /*skill*/
      1 && !src_url_equal(img.src, img_src_value = /*skill*/
      ctx2[0].img)) {
        attr(img, "src", img_src_value);
      }
      if (!current || dirty & /*skill*/
      1 && img_alt_value !== (img_alt_value = /*skill*/
      ctx2[0].alt)) {
        attr(img, "alt", img_alt_value);
      }
      if ((!current || dirty & /*skill*/
      1) && t1_value !== (t1_value = /*skill*/
      ctx2[0].name + ""))
        set_data(t1, t1_value);
      const modal_changes = {};
      if (dirty & /*skill*/
      1)
        modal_changes.title = `About ${/*skill*/
        ctx2[0].name}`;
      if (dirty & /*$$scope, skill*/
      17) {
        modal_changes.$$scope = { dirty, ctx: ctx2 };
      }
      if (!updating_open && dirty & /*defaultModal*/
      2) {
        updating_open = true;
        modal_changes.open = /*defaultModal*/
        ctx2[1];
        add_flush_callback(() => updating_open = false);
      }
      modal.$set(modal_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(modal.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(modal.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if (detaching)
        detach(t2);
      destroy_component(modal, detaching);
      mounted = false;
      dispose();
    }
  };
}
function instance$1($$self, $$props, $$invalidate) {
  let defaultModal = false;
  let { skill = {
    name: "",
    img: "",
    alt: "",
    description: ""
  } } = $$props;
  const click_handler = () => {
    $$invalidate(1, defaultModal = true);
  };
  function modal_open_binding(value) {
    defaultModal = value;
    $$invalidate(1, defaultModal);
  }
  $$self.$$set = ($$props2) => {
    if ("skill" in $$props2)
      $$invalidate(0, skill = $$props2.skill);
  };
  return [skill, defaultModal, click_handler, modal_open_binding];
}
class SkillInfoContainer extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, { skill: 0 });
  }
}
const _page_svelte_svelte_type_style_lang = "";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[1] = list[i];
  return child_ctx;
}
function get_each_context_1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[1] = list[i];
  return child_ctx;
}
function get_each_context_2(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[1] = list[i];
  return child_ctx;
}
function create_each_block_2(ctx) {
  let skilltypecontainer;
  let current;
  skilltypecontainer = new SkillInfoContainer({ props: { skill: (
    /*skill*/
    ctx[1]
  ) } });
  return {
    c() {
      create_component(skilltypecontainer.$$.fragment);
    },
    l(nodes) {
      claim_component(skilltypecontainer.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(skilltypecontainer, target, anchor);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(skilltypecontainer.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(skilltypecontainer.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(skilltypecontainer, detaching);
    }
  };
}
function create_each_block_1(ctx) {
  let skilltypecontainer;
  let current;
  skilltypecontainer = new SkillInfoContainer({ props: { skill: (
    /*skill*/
    ctx[1]
  ) } });
  return {
    c() {
      create_component(skilltypecontainer.$$.fragment);
    },
    l(nodes) {
      claim_component(skilltypecontainer.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(skilltypecontainer, target, anchor);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(skilltypecontainer.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(skilltypecontainer.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(skilltypecontainer, detaching);
    }
  };
}
function create_each_block(ctx) {
  let skilltypecontainer;
  let current;
  skilltypecontainer = new SkillInfoContainer({ props: { skill: (
    /*skill*/
    ctx[1]
  ) } });
  return {
    c() {
      create_component(skilltypecontainer.$$.fragment);
    },
    l(nodes) {
      claim_component(skilltypecontainer.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(skilltypecontainer, target, anchor);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(skilltypecontainer.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(skilltypecontainer.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(skilltypecontainer, detaching);
    }
  };
}
function create_fragment(ctx) {
  let div3;
  let h10;
  let t0;
  let t1;
  let div0;
  let t2;
  let h11;
  let t3;
  let t4;
  let div1;
  let t5;
  let h12;
  let t6;
  let t7;
  let div2;
  let current;
  let each_value_2 = (
    /*skills*/
    ctx[0].programming
  );
  let each_blocks_2 = [];
  for (let i = 0; i < each_value_2.length; i += 1) {
    each_blocks_2[i] = create_each_block_2(get_each_context_2(ctx, each_value_2, i));
  }
  const out = (i) => transition_out(each_blocks_2[i], 1, 1, () => {
    each_blocks_2[i] = null;
  });
  let each_value_1 = (
    /*skills*/
    ctx[0].useful
  );
  let each_blocks_1 = [];
  for (let i = 0; i < each_value_1.length; i += 1) {
    each_blocks_1[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
  }
  const out_1 = (i) => transition_out(each_blocks_1[i], 1, 1, () => {
    each_blocks_1[i] = null;
  });
  let each_value = (
    /*skills*/
    ctx[0].other
  );
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  const out_2 = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  return {
    c() {
      div3 = element("div");
      h10 = element("h1");
      t0 = text("Programming languages & frameworks");
      t1 = space();
      div0 = element("div");
      for (let i = 0; i < each_blocks_2.length; i += 1) {
        each_blocks_2[i].c();
      }
      t2 = space();
      h11 = element("h1");
      t3 = text("Useful skills");
      t4 = space();
      div1 = element("div");
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        each_blocks_1[i].c();
      }
      t5 = space();
      h12 = element("h1");
      t6 = text("Other skills");
      t7 = space();
      div2 = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      this.h();
    },
    l(nodes) {
      div3 = claim_element(nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      h10 = claim_element(div3_nodes, "H1", { class: true });
      var h10_nodes = children(h10);
      t0 = claim_text(h10_nodes, "Programming languages & frameworks");
      h10_nodes.forEach(detach);
      t1 = claim_space(div3_nodes);
      div0 = claim_element(div3_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      for (let i = 0; i < each_blocks_2.length; i += 1) {
        each_blocks_2[i].l(div0_nodes);
      }
      div0_nodes.forEach(detach);
      t2 = claim_space(div3_nodes);
      h11 = claim_element(div3_nodes, "H1", { class: true });
      var h11_nodes = children(h11);
      t3 = claim_text(h11_nodes, "Useful skills");
      h11_nodes.forEach(detach);
      t4 = claim_space(div3_nodes);
      div1 = claim_element(div3_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        each_blocks_1[i].l(div1_nodes);
      }
      div1_nodes.forEach(detach);
      t5 = claim_space(div3_nodes);
      h12 = claim_element(div3_nodes, "H1", { class: true });
      var h12_nodes = children(h12);
      t6 = claim_text(h12_nodes, "Other skills");
      h12_nodes.forEach(detach);
      t7 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(div2_nodes);
      }
      div2_nodes.forEach(detach);
      div3_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(h10, "class", "text-black dark:text-white svelte-1x19hjh");
      attr(div0, "class", "skillTypeContainer svelte-1x19hjh");
      attr(h11, "class", "text-black dark:text-white svelte-1x19hjh");
      attr(div1, "class", "skillTypeContainer svelte-1x19hjh");
      attr(h12, "class", "text-black dark:text-white svelte-1x19hjh");
      attr(div2, "class", "skillTypeContainer svelte-1x19hjh");
      attr(div3, "class", "fullscreenContainer svelte-1x19hjh");
    },
    m(target, anchor) {
      insert_hydration(target, div3, anchor);
      append_hydration(div3, h10);
      append_hydration(h10, t0);
      append_hydration(div3, t1);
      append_hydration(div3, div0);
      for (let i = 0; i < each_blocks_2.length; i += 1) {
        each_blocks_2[i].m(div0, null);
      }
      append_hydration(div3, t2);
      append_hydration(div3, h11);
      append_hydration(h11, t3);
      append_hydration(div3, t4);
      append_hydration(div3, div1);
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        each_blocks_1[i].m(div1, null);
      }
      append_hydration(div3, t5);
      append_hydration(div3, h12);
      append_hydration(h12, t6);
      append_hydration(div3, t7);
      append_hydration(div3, div2);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div2, null);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if (dirty & /*skills*/
      1) {
        each_value_2 = /*skills*/
        ctx2[0].programming;
        let i;
        for (i = 0; i < each_value_2.length; i += 1) {
          const child_ctx = get_each_context_2(ctx2, each_value_2, i);
          if (each_blocks_2[i]) {
            each_blocks_2[i].p(child_ctx, dirty);
            transition_in(each_blocks_2[i], 1);
          } else {
            each_blocks_2[i] = create_each_block_2(child_ctx);
            each_blocks_2[i].c();
            transition_in(each_blocks_2[i], 1);
            each_blocks_2[i].m(div0, null);
          }
        }
        group_outros();
        for (i = each_value_2.length; i < each_blocks_2.length; i += 1) {
          out(i);
        }
        check_outros();
      }
      if (dirty & /*skills*/
      1) {
        each_value_1 = /*skills*/
        ctx2[0].useful;
        let i;
        for (i = 0; i < each_value_1.length; i += 1) {
          const child_ctx = get_each_context_1(ctx2, each_value_1, i);
          if (each_blocks_1[i]) {
            each_blocks_1[i].p(child_ctx, dirty);
            transition_in(each_blocks_1[i], 1);
          } else {
            each_blocks_1[i] = create_each_block_1(child_ctx);
            each_blocks_1[i].c();
            transition_in(each_blocks_1[i], 1);
            each_blocks_1[i].m(div1, null);
          }
        }
        group_outros();
        for (i = each_value_1.length; i < each_blocks_1.length; i += 1) {
          out_1(i);
        }
        check_outros();
      }
      if (dirty & /*skills*/
      1) {
        each_value = /*skills*/
        ctx2[0].other;
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(div2, null);
          }
        }
        group_outros();
        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out_2(i);
        }
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      for (let i = 0; i < each_value_2.length; i += 1) {
        transition_in(each_blocks_2[i]);
      }
      for (let i = 0; i < each_value_1.length; i += 1) {
        transition_in(each_blocks_1[i]);
      }
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      each_blocks_2 = each_blocks_2.filter(Boolean);
      for (let i = 0; i < each_blocks_2.length; i += 1) {
        transition_out(each_blocks_2[i]);
      }
      each_blocks_1 = each_blocks_1.filter(Boolean);
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        transition_out(each_blocks_1[i]);
      }
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div3);
      destroy_each(each_blocks_2, detaching);
      destroy_each(each_blocks_1, detaching);
      destroy_each(each_blocks, detaching);
    }
  };
}
function instance($$self) {
  const skills = {
    programming: [
      {
        name: "Scala",
        img: "/skills/scala_logo.png",
        alt: "Scala logo",
        description: `Scala is maybe one of my strongest programming languages, because at Aalto University 
				most of the programming courses require you to write Scala code, so I have become quite familiar with it.`
      },
      {
        name: "Python",
        img: "/skills/python_logo.png",
        alt: "Python logo",
        description: `Python was the first programming language that I learned back in 2018, and I have been using it for small everyday scripts since then. 
					I also used it in the "Machine learning" course at Aalto University, where we learned some basics of the scikit-learn library.`
      },
      {
        name: "TypeScript",
        img: "/skills/typescript_logo.png",
        alt: "TypeScript logo",
        description: `TypeScript is quite new addition to my skills. I completed the "Web Software Development" course at Aalto University (2021-2022), 
				where we learned some JavaScript. After that I learned the basics of TypeScript during a "Software project" course at Aalto University (2022-2023). 
				During that course we worked as a 7 member team and built an application for Android-based glasses with React Native and TypeScript.
				This website is also in-fact built with TypeScript (and SvelteKit).`
      },
      {
        name: "React",
        img: "/skills/react-native_logo.png",
        alt: "React logo",
        description: `I got to know React and React Native during a "Software project" course at Aalto University (2022-2023). 
				During that project we worked as a 7 member team and built an application for Android-based glasses with React Native and TypeScript.`
      },
      {
        name: "Svelte",
        img: "/skills/svelte_logo.png",
        alt: "Svelte logo",
        description: `After learning React and React Native I decided to try something new, and heard about Svelte. 
				This website is built with SvelteKit (and TypeScript). So far I'm still a beginner with Svelte, but I'm really enjoying it.`
      },
      {
        name: "R",
        img: "/skills/r_logo.png",
        alt: "R logo",
        description: `I have learned the basics of R during 2022-2023, when three of my mathemathics courses required us to use R.
				I will continue to learn more R during my master's studies.`
      },
      {
        name: "C++",
        img: "/skills/cpp_logo.png",
        alt: "C++ logo",
        description: `I have completed the "Basics of C++" course, which also included a group project, 
				in which we built a simple Tower Defense game.`
      }
    ],
    useful: [
      {
        name: "Git",
        img: "/skills/git_logo.png",
        alt: "Git logo",
        description: `I have used Git for version control in most of my personal projects. 
				I have also used Git during all the group projects at Aalto University.`
      },
      {
        name: "Figma",
        img: "/skills/figma_logo.svg",
        alt: "Figma logo",
        description: `Figma is a tool that I really love. I have used it for designing this website, 
				and for sketching out some design visions during our group projects at Aalto University.`
      },
      {
        name: "Gimp",
        img: "/skills/gimp_logo.png",
        alt: "Gimp logo",
        description: `I have always enjoyed photographing a variety of things, especially nature and animals. That lead me to learning how to edit photos with Gimp.
				I would say that I'm pretty good at using all the features of Gimp (layers, masks, filters, etc.).`
      },
      {
        name: "RegEx",
        img: "/skills/regex_logo.png",
        alt: "RegEx logo",
        description: `I learned RegEx originally in 2019, when I was writing some Python scripts for personal use and I needed to parse some text files.
				I found that RegEx is a very powerful tool for parsing text files, and I have been using it ever since for many everyday string operations.`
      },
      {
        name: "SQL",
        img: "/skills/sql_logo.png",
        alt: "SQL logo",
        description: `I have learned the basics of SQL during 2022, when I had "Databases" -course at Aalto University. We had lots of exercises, 
				where we had to write SQL queries to fetch data from a database. I haven't had the opportunity to use SQL in any of my projects yet, but I have a few projects
				in mind, in which I could use SQL.`
      },
      {
        name: "Linux",
        img: "/skills/linux_logo.png",
        alt: "Linux logo",
        description: `I had been using Windows as a daily-driver until 2021, but then I decided to try Linux, because in many cases
				it seemed to be simpler than Windows to setup for different programming environments. Ever since the switch I have been using Linux as my daily-driver. 
				I started with Ubuntu 20.04, updated it to the new LTS version 22.04, and enjoyed using it till the end of 2022. After that I got interested in other 
				Linux distributions, and decided to switch to Fedora Linux (KDE spin). Apart from a few minor issues and bugs, I have been loving both Ubuntu and Fedora.`
      }
    ],
    other: [
      {
        name: "Rubik's cube",
        img: "/skills/rubiks_cube.png",
        alt: "An icon containing a Rubik's cube",
        description: `I remember when I found my old Rubik's cube in the closet and decided to give it a go. 
				It took some time to solve, but with the help of online tutorials I managed to quickly learn the "Beginner's method" for solving it. 
				I used that method and got a little bit faster at solving the cube, but then I decided to learn the "CFOP method" for solving the cube. 
				That method is a bit more complicated (meaning it has more algorithms you have to memorize), but it is also a lot faster. 
				I have been using the CFOP method for solving the cube ever since and most of my solves range around 40 and 60 seconds, which is not great, but decent.
				At some point I got an idea to learn the cube blindfolded, and I spent a few hours learning "Pochmann method" and later "M2 method" 
				which are both meant for blindfolded solving. I learned both methods pretty quickly, but I think I have forgotten some of the algorithms already.`
      },
      {
        name: "Photography",
        img: "/skills/photography.png",
        alt: "An icon about Photography",
        description: `I have always enjoyed photographing a variety of things, especially nature and animals. As a kid I owned a compact camera, which
				I used to record lots of memories. I quickly got interested in photography and wanted to learn more so I could get higher quality images. 
				I wanted to learn how the camera settings affect the final image, and how to manipulate the image in post-processing.
				When I was 14 years old I got my first DSLR camera, which gave me a huge motivation boost to continue photographing. 
				I still own that DSLR and I have bought a few new lenses for it.`
      }
    ]
  };
  return [skills];
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
