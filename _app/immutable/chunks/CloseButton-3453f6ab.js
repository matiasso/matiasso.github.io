import { S as SvelteComponent, i as init, s as safe_not_equal, D as create_slot, k as element, l as claim_element, m as children, h as detach, n as attr, b as insert_hydration, I as listen, J as update_slot_base, K as get_all_dirty_from_scope, L as get_slot_changes, f as transition_in, t as transition_out, T as getContext, E as assign, O as exclude_internal_props, U as bubble, q as text, a as space, P as svg_element, r as claim_text, c as claim_space, Q as claim_svg_element, H as append_hydration, u as set_data } from "./index-81d22fb2.js";
import { c as classNames } from "./Indicator.svelte_svelte_type_style_lang-efe892ff.js";
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
function create_fragment(ctx) {
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
function instance($$self, $$props, $$invalidate) {
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
    init(this, options, instance, create_fragment, safe_not_equal, { color: 4, name: 0, size: 1 });
  }
}
export {
  CloseButton as C
};
