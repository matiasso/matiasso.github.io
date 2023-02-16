import { D as identity, S as SvelteComponent, i as init, s as safe_not_equal, E as create_slot, a as space, c as claim_space, b as insert_hydration, F as listen, f as transition_in, g as group_outros, t as transition_out, d as check_outros, G as update_slot_base, H as get_all_dirty_from_scope, I as get_slot_changes, h as detach, J as createEventDispatcher, K as onDestroy, o as onMount, L as globals, w as construct_svelte_component, k as element, x as create_component, l as claim_element, m as children, y as claim_component, n as attr, M as null_to_empty, N as toggle_class, O as append_hydration, z as mount_component, P as is_function, A as destroy_component, Q as add_render_callback, R as create_bidirectional_transition, T as run_all, e as empty, v as binding_callbacks, C as noop, U as setContext, V as assign, q as text, W as head_selector, r as claim_text, X as set_attributes, Y as get_spread_update, Z as compute_rest_props, _ as exclude_internal_props, $ as svg_element, a0 as claim_svg_element, a1 as get_spread_object, a2 as getContext, u as set_data, a3 as bubble, a4 as set_svg_attributes, a5 as set_custom_element_data_map } from "../../chunks/index-129fd69a.js";
import { c as cubicOut, q as quintOut } from "../../chunks/index-a0c6b294.js";
import { c as classNames, F as Frame } from "../../chunks/Indicator.svelte_svelte_type_style_lang-1aff31af.js";
const index$1 = "";
const index = "";
const app = "";
function fade(node, { delay = 0, duration = 400, easing = identity } = {}) {
  const o = +getComputedStyle(node).opacity;
  return {
    delay,
    duration,
    easing,
    css: (t) => `opacity: ${t * o}`
  };
}
function slide(node, { delay = 0, duration = 400, easing = cubicOut } = {}) {
  const style = getComputedStyle(node);
  const opacity = +style.opacity;
  const height = parseFloat(style.height);
  const padding_top = parseFloat(style.paddingTop);
  const padding_bottom = parseFloat(style.paddingBottom);
  const margin_top = parseFloat(style.marginTop);
  const margin_bottom = parseFloat(style.marginBottom);
  const border_top_width = parseFloat(style.borderTopWidth);
  const border_bottom_width = parseFloat(style.borderBottomWidth);
  return {
    delay,
    duration,
    easing,
    css: (t) => `overflow: hidden;opacity: ${Math.min(t * 20, 1) * opacity};height: ${t * height}px;padding-top: ${t * padding_top}px;padding-bottom: ${t * padding_bottom}px;margin-top: ${t * margin_top}px;margin-bottom: ${t * margin_bottom}px;border-top-width: ${t * border_top_width}px;border-bottom-width: ${t * border_bottom_width}px;`
  };
}
const Modal_svelte_svelte_type_style_lang = "";
const { window: window_1 } = globals;
function create_if_block$2(ctx) {
  let div3;
  let div2;
  let div1;
  let t;
  let div0;
  let switch_instance;
  let div0_class_value;
  let div1_class_value;
  let div1_aria_label_value;
  let div1_aria_labelledby_value;
  let div1_transition;
  let div2_class_value;
  let div3_id_value;
  let div3_class_value;
  let div3_transition;
  let current;
  let mounted;
  let dispose;
  let if_block = (
    /*state*/
    ctx[1].closeButton && create_if_block_1(ctx)
  );
  var switch_value = (
    /*Component*/
    ctx[2]
  );
  function switch_props(ctx2) {
    return {};
  }
  if (switch_value) {
    switch_instance = construct_svelte_component(switch_value, switch_props());
  }
  return {
    c() {
      div3 = element("div");
      div2 = element("div");
      div1 = element("div");
      if (if_block)
        if_block.c();
      t = space();
      div0 = element("div");
      if (switch_instance)
        create_component(switch_instance.$$.fragment);
      this.h();
    },
    l(nodes) {
      div3 = claim_element(nodes, "DIV", { id: true, class: true, style: true });
      var div3_nodes = children(div3);
      div2 = claim_element(div3_nodes, "DIV", { class: true, style: true });
      var div2_nodes = children(div2);
      div1 = claim_element(div2_nodes, "DIV", {
        class: true,
        role: true,
        "aria-modal": true,
        "aria-label": true,
        "aria-labelledby": true,
        style: true
      });
      var div1_nodes = children(div1);
      if (if_block)
        if_block.l(div1_nodes);
      t = claim_space(div1_nodes);
      div0 = claim_element(div1_nodes, "DIV", { class: true, style: true });
      var div0_nodes = children(div0);
      if (switch_instance)
        claim_component(switch_instance.$$.fragment, div0_nodes);
      div0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      div3_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", div0_class_value = null_to_empty(
        /*state*/
        ctx[1].classContent
      ) + " svelte-5425ae");
      attr(
        div0,
        "style",
        /*cssContent*/
        ctx[9]
      );
      toggle_class(div0, "content", !/*unstyled*/
      ctx[0]);
      attr(div1, "class", div1_class_value = null_to_empty(
        /*state*/
        ctx[1].classWindow
      ) + " svelte-5425ae");
      attr(div1, "role", "dialog");
      attr(div1, "aria-modal", "true");
      attr(div1, "aria-label", div1_aria_label_value = /*state*/
      ctx[1].ariaLabelledBy ? null : (
        /*state*/
        ctx[1].ariaLabel || null
      ));
      attr(div1, "aria-labelledby", div1_aria_labelledby_value = /*state*/
      ctx[1].ariaLabelledBy || null);
      attr(
        div1,
        "style",
        /*cssWindow*/
        ctx[8]
      );
      toggle_class(div1, "window", !/*unstyled*/
      ctx[0]);
      attr(div2, "class", div2_class_value = null_to_empty(
        /*state*/
        ctx[1].classWindowWrap
      ) + " svelte-5425ae");
      attr(
        div2,
        "style",
        /*cssWindowWrap*/
        ctx[7]
      );
      toggle_class(div2, "wrap", !/*unstyled*/
      ctx[0]);
      attr(div3, "id", div3_id_value = /*state*/
      ctx[1].id);
      attr(div3, "class", div3_class_value = null_to_empty(
        /*state*/
        ctx[1].classBg
      ) + " svelte-5425ae");
      attr(
        div3,
        "style",
        /*cssBg*/
        ctx[6]
      );
      toggle_class(div3, "bg", !/*unstyled*/
      ctx[0]);
    },
    m(target, anchor) {
      insert_hydration(target, div3, anchor);
      append_hydration(div3, div2);
      append_hydration(div2, div1);
      if (if_block)
        if_block.m(div1, null);
      append_hydration(div1, t);
      append_hydration(div1, div0);
      if (switch_instance)
        mount_component(switch_instance, div0, null);
      ctx[50](div1);
      ctx[51](div2);
      ctx[52](div3);
      current = true;
      if (!mounted) {
        dispose = [
          listen(div1, "introstart", function() {
            if (is_function(
              /*onOpen*/
              ctx[13]
            ))
              ctx[13].apply(this, arguments);
          }),
          listen(div1, "outrostart", function() {
            if (is_function(
              /*onClose*/
              ctx[14]
            ))
              ctx[14].apply(this, arguments);
          }),
          listen(div1, "introend", function() {
            if (is_function(
              /*onOpened*/
              ctx[15]
            ))
              ctx[15].apply(this, arguments);
          }),
          listen(div1, "outroend", function() {
            if (is_function(
              /*onClosed*/
              ctx[16]
            ))
              ctx[16].apply(this, arguments);
          }),
          listen(
            div3,
            "mousedown",
            /*handleOuterMousedown*/
            ctx[20]
          ),
          listen(
            div3,
            "mouseup",
            /*handleOuterMouseup*/
            ctx[21]
          )
        ];
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (
        /*state*/
        ctx[1].closeButton
      ) {
        if (if_block) {
          if_block.p(ctx, dirty);
          if (dirty[0] & /*state*/
          2) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block_1(ctx);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(div1, t);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
      if (switch_value !== (switch_value = /*Component*/
      ctx[2])) {
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
          mount_component(switch_instance, div0, null);
        } else {
          switch_instance = null;
        }
      }
      if (!current || dirty[0] & /*state*/
      2 && div0_class_value !== (div0_class_value = null_to_empty(
        /*state*/
        ctx[1].classContent
      ) + " svelte-5425ae")) {
        attr(div0, "class", div0_class_value);
      }
      if (!current || dirty[0] & /*cssContent*/
      512) {
        attr(
          div0,
          "style",
          /*cssContent*/
          ctx[9]
        );
      }
      if (!current || dirty[0] & /*state, unstyled*/
      3) {
        toggle_class(div0, "content", !/*unstyled*/
        ctx[0]);
      }
      if (!current || dirty[0] & /*state*/
      2 && div1_class_value !== (div1_class_value = null_to_empty(
        /*state*/
        ctx[1].classWindow
      ) + " svelte-5425ae")) {
        attr(div1, "class", div1_class_value);
      }
      if (!current || dirty[0] & /*state*/
      2 && div1_aria_label_value !== (div1_aria_label_value = /*state*/
      ctx[1].ariaLabelledBy ? null : (
        /*state*/
        ctx[1].ariaLabel || null
      ))) {
        attr(div1, "aria-label", div1_aria_label_value);
      }
      if (!current || dirty[0] & /*state*/
      2 && div1_aria_labelledby_value !== (div1_aria_labelledby_value = /*state*/
      ctx[1].ariaLabelledBy || null)) {
        attr(div1, "aria-labelledby", div1_aria_labelledby_value);
      }
      if (!current || dirty[0] & /*cssWindow*/
      256) {
        attr(
          div1,
          "style",
          /*cssWindow*/
          ctx[8]
        );
      }
      if (!current || dirty[0] & /*state, unstyled*/
      3) {
        toggle_class(div1, "window", !/*unstyled*/
        ctx[0]);
      }
      if (!current || dirty[0] & /*state*/
      2 && div2_class_value !== (div2_class_value = null_to_empty(
        /*state*/
        ctx[1].classWindowWrap
      ) + " svelte-5425ae")) {
        attr(div2, "class", div2_class_value);
      }
      if (!current || dirty[0] & /*cssWindowWrap*/
      128) {
        attr(
          div2,
          "style",
          /*cssWindowWrap*/
          ctx[7]
        );
      }
      if (!current || dirty[0] & /*state, unstyled*/
      3) {
        toggle_class(div2, "wrap", !/*unstyled*/
        ctx[0]);
      }
      if (!current || dirty[0] & /*state*/
      2 && div3_id_value !== (div3_id_value = /*state*/
      ctx[1].id)) {
        attr(div3, "id", div3_id_value);
      }
      if (!current || dirty[0] & /*state*/
      2 && div3_class_value !== (div3_class_value = null_to_empty(
        /*state*/
        ctx[1].classBg
      ) + " svelte-5425ae")) {
        attr(div3, "class", div3_class_value);
      }
      if (!current || dirty[0] & /*cssBg*/
      64) {
        attr(
          div3,
          "style",
          /*cssBg*/
          ctx[6]
        );
      }
      if (!current || dirty[0] & /*state, unstyled*/
      3) {
        toggle_class(div3, "bg", !/*unstyled*/
        ctx[0]);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      if (switch_instance)
        transition_in(switch_instance.$$.fragment, local);
      add_render_callback(() => {
        if (!div1_transition)
          div1_transition = create_bidirectional_transition(
            div1,
            /*currentTransitionWindow*/
            ctx[12],
            /*state*/
            ctx[1].transitionWindowProps,
            true
          );
        div1_transition.run(1);
      });
      add_render_callback(() => {
        if (!div3_transition)
          div3_transition = create_bidirectional_transition(
            div3,
            /*currentTransitionBg*/
            ctx[11],
            /*state*/
            ctx[1].transitionBgProps,
            true
          );
        div3_transition.run(1);
      });
      current = true;
    },
    o(local) {
      transition_out(if_block);
      if (switch_instance)
        transition_out(switch_instance.$$.fragment, local);
      if (!div1_transition)
        div1_transition = create_bidirectional_transition(
          div1,
          /*currentTransitionWindow*/
          ctx[12],
          /*state*/
          ctx[1].transitionWindowProps,
          false
        );
      div1_transition.run(0);
      if (!div3_transition)
        div3_transition = create_bidirectional_transition(
          div3,
          /*currentTransitionBg*/
          ctx[11],
          /*state*/
          ctx[1].transitionBgProps,
          false
        );
      div3_transition.run(0);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div3);
      if (if_block)
        if_block.d();
      if (switch_instance)
        destroy_component(switch_instance);
      ctx[50](null);
      if (detaching && div1_transition)
        div1_transition.end();
      ctx[51](null);
      ctx[52](null);
      if (detaching && div3_transition)
        div3_transition.end();
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_if_block_1(ctx) {
  let show_if;
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block_2, create_else_block$1];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (dirty[0] & /*state*/
    2)
      show_if = null;
    if (show_if == null)
      show_if = !!/*isFunction*/
      ctx2[17](
        /*state*/
        ctx2[1].closeButton
      );
    if (show_if)
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx, [-1, -1, -1]);
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
    p(ctx2, dirty) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2, dirty);
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
function create_else_block$1(ctx) {
  let button;
  let button_class_value;
  let mounted;
  let dispose;
  return {
    c() {
      button = element("button");
      this.h();
    },
    l(nodes) {
      button = claim_element(nodes, "BUTTON", {
        class: true,
        "aria-label": true,
        style: true,
        type: true
      });
      children(button).forEach(detach);
      this.h();
    },
    h() {
      attr(button, "class", button_class_value = null_to_empty(
        /*state*/
        ctx[1].classCloseButton
      ) + " svelte-5425ae");
      attr(button, "aria-label", "Close modal");
      attr(
        button,
        "style",
        /*cssCloseButton*/
        ctx[10]
      );
      attr(button, "type", "button");
      toggle_class(button, "close", !/*unstyled*/
      ctx[0]);
    },
    m(target, anchor) {
      insert_hydration(target, button, anchor);
      if (!mounted) {
        dispose = listen(
          button,
          "click",
          /*close*/
          ctx[18]
        );
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty[0] & /*state*/
      2 && button_class_value !== (button_class_value = null_to_empty(
        /*state*/
        ctx2[1].classCloseButton
      ) + " svelte-5425ae")) {
        attr(button, "class", button_class_value);
      }
      if (dirty[0] & /*cssCloseButton*/
      1024) {
        attr(
          button,
          "style",
          /*cssCloseButton*/
          ctx2[10]
        );
      }
      if (dirty[0] & /*state, unstyled*/
      3) {
        toggle_class(button, "close", !/*unstyled*/
        ctx2[0]);
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(button);
      mounted = false;
      dispose();
    }
  };
}
function create_if_block_2(ctx) {
  let switch_instance;
  let switch_instance_anchor;
  let current;
  var switch_value = (
    /*state*/
    ctx[1].closeButton
  );
  function switch_props(ctx2) {
    return { props: { onClose: (
      /*close*/
      ctx2[18]
    ) } };
  }
  if (switch_value) {
    switch_instance = construct_svelte_component(switch_value, switch_props(ctx));
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
      if (switch_value !== (switch_value = /*state*/
      ctx2[1].closeButton)) {
        if (switch_instance) {
          group_outros();
          const old_component = switch_instance;
          transition_out(old_component.$$.fragment, 1, 0, () => {
            destroy_component(old_component, 1);
          });
          check_outros();
        }
        if (switch_value) {
          switch_instance = construct_svelte_component(switch_value, switch_props(ctx2));
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
function create_fragment$9(ctx) {
  let t;
  let current;
  let mounted;
  let dispose;
  let if_block = (
    /*Component*/
    ctx[2] && create_if_block$2(ctx)
  );
  const default_slot_template = (
    /*#slots*/
    ctx[49].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[48],
    null
  );
  return {
    c() {
      if (if_block)
        if_block.c();
      t = space();
      if (default_slot)
        default_slot.c();
    },
    l(nodes) {
      if (if_block)
        if_block.l(nodes);
      t = claim_space(nodes);
      if (default_slot)
        default_slot.l(nodes);
    },
    m(target, anchor) {
      if (if_block)
        if_block.m(target, anchor);
      insert_hydration(target, t, anchor);
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      current = true;
      if (!mounted) {
        dispose = listen(
          window_1,
          "keydown",
          /*handleKeydown*/
          ctx[19]
        );
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (
        /*Component*/
        ctx2[2]
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty[0] & /*Component*/
          4) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block$2(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(t.parentNode, t);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
      if (default_slot) {
        if (default_slot.p && (!current || dirty[1] & /*$$scope*/
        131072)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[48],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[48]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[48],
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
      transition_in(if_block);
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(t);
      if (default_slot)
        default_slot.d(detaching);
      mounted = false;
      dispose();
    }
  };
}
function bind(Component, props = {}) {
  return function ModalComponent(options) {
    return new Component({
      ...options,
      props: { ...props, ...options.props }
    });
  };
}
function instance$9($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  const dispatch = createEventDispatcher();
  const baseSetContext = setContext;
  const baseIsTabbable = (node) => node.tabIndex >= 0 && !node.hidden && !node.disabled && node.style.display !== "none" && node.type !== "hidden" && Boolean(node.offsetWidth || node.offsetHeight || node.getClientRects().length);
  let { isTabbable = baseIsTabbable } = $$props;
  let { show = null } = $$props;
  let { id = null } = $$props;
  let { key = "simple-modal" } = $$props;
  let { ariaLabel = null } = $$props;
  let { ariaLabelledBy = null } = $$props;
  let { closeButton = true } = $$props;
  let { closeOnEsc = true } = $$props;
  let { closeOnOuterClick = true } = $$props;
  let { styleBg = {} } = $$props;
  let { styleWindowWrap = {} } = $$props;
  let { styleWindow = {} } = $$props;
  let { styleContent = {} } = $$props;
  let { styleCloseButton = {} } = $$props;
  let { classBg = null } = $$props;
  let { classWindowWrap = null } = $$props;
  let { classWindow = null } = $$props;
  let { classContent = null } = $$props;
  let { classCloseButton = null } = $$props;
  let { unstyled = false } = $$props;
  let { setContext: setContext$1 = baseSetContext } = $$props;
  let { transitionBg = fade } = $$props;
  let { transitionBgProps = { duration: 250 } } = $$props;
  let { transitionWindow = transitionBg } = $$props;
  let { transitionWindowProps = transitionBgProps } = $$props;
  let { disableFocusTrap = false } = $$props;
  const defaultState = {
    id,
    ariaLabel,
    ariaLabelledBy,
    closeButton,
    closeOnEsc,
    closeOnOuterClick,
    styleBg,
    styleWindowWrap,
    styleWindow,
    styleContent,
    styleCloseButton,
    classBg,
    classWindowWrap,
    classWindow,
    classContent,
    classCloseButton,
    transitionBg,
    transitionBgProps,
    transitionWindow,
    transitionWindowProps,
    disableFocusTrap,
    isTabbable,
    unstyled
  };
  let state = { ...defaultState };
  let Component = null;
  let background;
  let wrap;
  let modalWindow;
  let scrollY;
  let cssBg;
  let cssWindowWrap;
  let cssWindow;
  let cssContent;
  let cssCloseButton;
  let currentTransitionBg;
  let currentTransitionWindow;
  let prevBodyPosition;
  let prevBodyOverflow;
  let prevBodyWidth;
  let outerClickTarget;
  const camelCaseToDash = (str) => str.replace(/([a-zA-Z])(?=[A-Z])/g, "$1-").toLowerCase();
  const toCssString = (props) => props ? Object.keys(props).reduce((str, key2) => `${str}; ${camelCaseToDash(key2)}: ${props[key2]}`, "") : "";
  const isFunction = (f) => !!(f && f.constructor && f.call && f.apply);
  const updateStyleTransition = () => {
    $$invalidate(6, cssBg = toCssString(Object.assign(
      {},
      {
        width: window.innerWidth,
        height: window.innerHeight
      },
      state.styleBg
    )));
    $$invalidate(7, cssWindowWrap = toCssString(state.styleWindowWrap));
    $$invalidate(8, cssWindow = toCssString(state.styleWindow));
    $$invalidate(9, cssContent = toCssString(state.styleContent));
    $$invalidate(10, cssCloseButton = toCssString(state.styleCloseButton));
    $$invalidate(11, currentTransitionBg = state.transitionBg);
    $$invalidate(12, currentTransitionWindow = state.transitionWindow);
  };
  const toVoid = () => {
  };
  let onOpen = toVoid;
  let onClose = toVoid;
  let onOpened = toVoid;
  let onClosed = toVoid;
  const open = (NewComponent, newProps = {}, options = {}, callbacks = {}) => {
    $$invalidate(2, Component = bind(NewComponent, newProps));
    $$invalidate(1, state = { ...defaultState, ...options });
    updateStyleTransition();
    disableScroll();
    $$invalidate(13, onOpen = (event) => {
      if (callbacks.onOpen)
        callbacks.onOpen(event);
      dispatch("open");
      dispatch("opening");
    });
    $$invalidate(14, onClose = (event) => {
      if (callbacks.onClose)
        callbacks.onClose(event);
      dispatch("close");
      dispatch("closing");
    });
    $$invalidate(15, onOpened = (event) => {
      if (callbacks.onOpened)
        callbacks.onOpened(event);
      dispatch("opened");
    });
    $$invalidate(16, onClosed = (event) => {
      if (callbacks.onClosed)
        callbacks.onClosed(event);
      dispatch("closed");
    });
  };
  const close = (callbacks = {}) => {
    if (!Component)
      return;
    $$invalidate(14, onClose = callbacks.onClose || onClose);
    $$invalidate(16, onClosed = callbacks.onClosed || onClosed);
    $$invalidate(2, Component = null);
    enableScroll();
  };
  const handleKeydown = (event) => {
    if (state.closeOnEsc && Component && event.key === "Escape") {
      event.preventDefault();
      close();
    }
    if (Component && event.key === "Tab" && !state.disableFocusTrap) {
      const nodes = modalWindow.querySelectorAll("*");
      const tabbable = Array.from(nodes).filter(state.isTabbable).sort((a, b) => a.tabIndex - b.tabIndex);
      let index2 = tabbable.indexOf(document.activeElement);
      if (index2 === -1 && event.shiftKey)
        index2 = 0;
      index2 += tabbable.length + (event.shiftKey ? -1 : 1);
      index2 %= tabbable.length;
      tabbable[index2].focus();
      event.preventDefault();
    }
  };
  const handleOuterMousedown = (event) => {
    if (state.closeOnOuterClick && (event.target === background || event.target === wrap))
      outerClickTarget = event.target;
  };
  const handleOuterMouseup = (event) => {
    if (state.closeOnOuterClick && event.target === outerClickTarget) {
      event.preventDefault();
      close();
    }
  };
  const disableScroll = () => {
    scrollY = window.scrollY;
    prevBodyPosition = document.body.style.position;
    prevBodyOverflow = document.body.style.overflow;
    prevBodyWidth = document.body.style.width;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.overflow = "hidden";
    document.body.style.width = "100%";
  };
  const enableScroll = () => {
    document.body.style.position = prevBodyPosition || "";
    document.body.style.top = "";
    document.body.style.overflow = prevBodyOverflow || "";
    document.body.style.width = prevBodyWidth || "";
    window.scrollTo({
      top: scrollY,
      left: 0,
      behavior: "instant"
    });
  };
  const context = { open, close };
  setContext$1(key, context);
  let isMounted = false;
  onDestroy(() => {
    if (isMounted)
      close();
  });
  onMount(() => {
    $$invalidate(47, isMounted = true);
  });
  function div1_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      modalWindow = $$value;
      $$invalidate(5, modalWindow);
    });
  }
  function div2_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      wrap = $$value;
      $$invalidate(4, wrap);
    });
  }
  function div3_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      background = $$value;
      $$invalidate(3, background);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("isTabbable" in $$props2)
      $$invalidate(22, isTabbable = $$props2.isTabbable);
    if ("show" in $$props2)
      $$invalidate(23, show = $$props2.show);
    if ("id" in $$props2)
      $$invalidate(24, id = $$props2.id);
    if ("key" in $$props2)
      $$invalidate(25, key = $$props2.key);
    if ("ariaLabel" in $$props2)
      $$invalidate(26, ariaLabel = $$props2.ariaLabel);
    if ("ariaLabelledBy" in $$props2)
      $$invalidate(27, ariaLabelledBy = $$props2.ariaLabelledBy);
    if ("closeButton" in $$props2)
      $$invalidate(28, closeButton = $$props2.closeButton);
    if ("closeOnEsc" in $$props2)
      $$invalidate(29, closeOnEsc = $$props2.closeOnEsc);
    if ("closeOnOuterClick" in $$props2)
      $$invalidate(30, closeOnOuterClick = $$props2.closeOnOuterClick);
    if ("styleBg" in $$props2)
      $$invalidate(31, styleBg = $$props2.styleBg);
    if ("styleWindowWrap" in $$props2)
      $$invalidate(32, styleWindowWrap = $$props2.styleWindowWrap);
    if ("styleWindow" in $$props2)
      $$invalidate(33, styleWindow = $$props2.styleWindow);
    if ("styleContent" in $$props2)
      $$invalidate(34, styleContent = $$props2.styleContent);
    if ("styleCloseButton" in $$props2)
      $$invalidate(35, styleCloseButton = $$props2.styleCloseButton);
    if ("classBg" in $$props2)
      $$invalidate(36, classBg = $$props2.classBg);
    if ("classWindowWrap" in $$props2)
      $$invalidate(37, classWindowWrap = $$props2.classWindowWrap);
    if ("classWindow" in $$props2)
      $$invalidate(38, classWindow = $$props2.classWindow);
    if ("classContent" in $$props2)
      $$invalidate(39, classContent = $$props2.classContent);
    if ("classCloseButton" in $$props2)
      $$invalidate(40, classCloseButton = $$props2.classCloseButton);
    if ("unstyled" in $$props2)
      $$invalidate(0, unstyled = $$props2.unstyled);
    if ("setContext" in $$props2)
      $$invalidate(41, setContext$1 = $$props2.setContext);
    if ("transitionBg" in $$props2)
      $$invalidate(42, transitionBg = $$props2.transitionBg);
    if ("transitionBgProps" in $$props2)
      $$invalidate(43, transitionBgProps = $$props2.transitionBgProps);
    if ("transitionWindow" in $$props2)
      $$invalidate(44, transitionWindow = $$props2.transitionWindow);
    if ("transitionWindowProps" in $$props2)
      $$invalidate(45, transitionWindowProps = $$props2.transitionWindowProps);
    if ("disableFocusTrap" in $$props2)
      $$invalidate(46, disableFocusTrap = $$props2.disableFocusTrap);
    if ("$$scope" in $$props2)
      $$invalidate(48, $$scope = $$props2.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty[0] & /*show*/
    8388608 | $$self.$$.dirty[1] & /*isMounted*/
    65536) {
      {
        if (isMounted) {
          if (isFunction(show)) {
            open(show);
          } else {
            close();
          }
        }
      }
    }
  };
  return [
    unstyled,
    state,
    Component,
    background,
    wrap,
    modalWindow,
    cssBg,
    cssWindowWrap,
    cssWindow,
    cssContent,
    cssCloseButton,
    currentTransitionBg,
    currentTransitionWindow,
    onOpen,
    onClose,
    onOpened,
    onClosed,
    isFunction,
    close,
    handleKeydown,
    handleOuterMousedown,
    handleOuterMouseup,
    isTabbable,
    show,
    id,
    key,
    ariaLabel,
    ariaLabelledBy,
    closeButton,
    closeOnEsc,
    closeOnOuterClick,
    styleBg,
    styleWindowWrap,
    styleWindow,
    styleContent,
    styleCloseButton,
    classBg,
    classWindowWrap,
    classWindow,
    classContent,
    classCloseButton,
    setContext$1,
    transitionBg,
    transitionBgProps,
    transitionWindow,
    transitionWindowProps,
    disableFocusTrap,
    isMounted,
    $$scope,
    slots,
    div1_binding,
    div2_binding,
    div3_binding
  ];
}
class Modal extends SvelteComponent {
  constructor(options) {
    super();
    init(
      this,
      options,
      instance$9,
      create_fragment$9,
      safe_not_equal,
      {
        isTabbable: 22,
        show: 23,
        id: 24,
        key: 25,
        ariaLabel: 26,
        ariaLabelledBy: 27,
        closeButton: 28,
        closeOnEsc: 29,
        closeOnOuterClick: 30,
        styleBg: 31,
        styleWindowWrap: 32,
        styleWindow: 33,
        styleContent: 34,
        styleCloseButton: 35,
        classBg: 36,
        classWindowWrap: 37,
        classWindow: 38,
        classContent: 39,
        classCloseButton: 40,
        unstyled: 0,
        setContext: 41,
        transitionBg: 42,
        transitionBgProps: 43,
        transitionWindow: 44,
        transitionWindowProps: 45,
        disableFocusTrap: 46
      },
      null,
      [-1, -1, -1]
    );
  }
}
const get_darkIcon_slot_changes = (dirty) => ({});
const get_darkIcon_slot_context = (ctx) => ({});
const get_lightIcon_slot_changes = (dirty) => ({});
const get_lightIcon_slot_context = (ctx) => ({});
function fallback_block_1(ctx) {
  let svg;
  let path;
  return {
    c() {
      svg = svg_element("svg");
      path = svg_element("path");
      this.h();
    },
    l(nodes) {
      svg = claim_svg_element(nodes, "svg", {
        class: true,
        fill: true,
        viewBox: true,
        xmlns: true
      });
      var svg_nodes = children(svg);
      path = claim_svg_element(svg_nodes, "path", {
        d: true,
        "fill-rule": true,
        "clip-rule": true
      });
      children(path).forEach(detach);
      svg_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(path, "d", "M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1\n  0 100-2H3a1 1 0 000 2h1z");
      attr(path, "fill-rule", "evenodd");
      attr(path, "clip-rule", "evenodd");
      attr(svg, "class", "w-5 h-5");
      attr(svg, "fill", "currentColor");
      attr(svg, "viewBox", "0 0 20 20");
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(target, anchor) {
      insert_hydration(target, svg, anchor);
      append_hydration(svg, path);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(svg);
    }
  };
}
function fallback_block$1(ctx) {
  let svg;
  let path;
  return {
    c() {
      svg = svg_element("svg");
      path = svg_element("path");
      this.h();
    },
    l(nodes) {
      svg = claim_svg_element(nodes, "svg", {
        class: true,
        fill: true,
        viewBox: true,
        xmlns: true
      });
      var svg_nodes = children(svg);
      path = claim_svg_element(svg_nodes, "path", { d: true });
      children(path).forEach(detach);
      svg_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(path, "d", "M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z");
      attr(svg, "class", "w-5 h-5");
      attr(svg, "fill", "currentColor");
      attr(svg, "viewBox", "0 0 20 20");
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(target, anchor) {
      insert_hydration(target, svg, anchor);
      append_hydration(svg, path);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(svg);
    }
  };
}
function create_fragment$8(ctx) {
  let script;
  let t0;
  let t1;
  let button;
  let span0;
  let t2;
  let span1;
  let button_class_value;
  let current;
  let mounted;
  let dispose;
  const lightIcon_slot_template = (
    /*#slots*/
    ctx[5].lightIcon
  );
  const lightIcon_slot = create_slot(
    lightIcon_slot_template,
    ctx,
    /*$$scope*/
    ctx[4],
    get_lightIcon_slot_context
  );
  const lightIcon_slot_or_fallback = lightIcon_slot || fallback_block_1();
  const darkIcon_slot_template = (
    /*#slots*/
    ctx[5].darkIcon
  );
  const darkIcon_slot = create_slot(
    darkIcon_slot_template,
    ctx,
    /*$$scope*/
    ctx[4],
    get_darkIcon_slot_context
  );
  const darkIcon_slot_or_fallback = darkIcon_slot || fallback_block$1();
  let button_levels = [
    { "aria-label": "Dark mode" },
    { type: "button" },
    /*$$restProps*/
    ctx[2],
    {
      class: button_class_value = classNames(
        /*btnClass*/
        ctx[0],
        /*$$props*/
        ctx[3].class
      )
    }
  ];
  let button_data = {};
  for (let i = 0; i < button_levels.length; i += 1) {
    button_data = assign(button_data, button_levels[i]);
  }
  return {
    c() {
      script = element("script");
      t0 = text("if (window) {\n      localStorage.getItem('color-theme') === 'dark' ||\n      (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)\n        ? window.document.documentElement.classList.add('dark')\n        : window.document.documentElement.classList.remove('dark');\n    }");
      t1 = space();
      button = element("button");
      span0 = element("span");
      if (lightIcon_slot_or_fallback)
        lightIcon_slot_or_fallback.c();
      t2 = space();
      span1 = element("span");
      if (darkIcon_slot_or_fallback)
        darkIcon_slot_or_fallback.c();
      this.h();
    },
    l(nodes) {
      const head_nodes = head_selector("svelte-16q53hu", document.head);
      script = claim_element(head_nodes, "SCRIPT", {});
      var script_nodes = children(script);
      t0 = claim_text(script_nodes, "if (window) {\n      localStorage.getItem('color-theme') === 'dark' ||\n      (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)\n        ? window.document.documentElement.classList.add('dark')\n        : window.document.documentElement.classList.remove('dark');\n    }");
      script_nodes.forEach(detach);
      head_nodes.forEach(detach);
      t1 = claim_space(nodes);
      button = claim_element(nodes, "BUTTON", {
        "aria-label": true,
        type: true,
        class: true
      });
      var button_nodes = children(button);
      span0 = claim_element(button_nodes, "SPAN", { class: true });
      var span0_nodes = children(span0);
      if (lightIcon_slot_or_fallback)
        lightIcon_slot_or_fallback.l(span0_nodes);
      span0_nodes.forEach(detach);
      t2 = claim_space(button_nodes);
      span1 = claim_element(button_nodes, "SPAN", { class: true });
      var span1_nodes = children(span1);
      if (darkIcon_slot_or_fallback)
        darkIcon_slot_or_fallback.l(span1_nodes);
      span1_nodes.forEach(detach);
      button_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span0, "class", "hidden dark:block");
      attr(span1, "class", "dark:hidden");
      set_attributes(button, button_data);
    },
    m(target, anchor) {
      append_hydration(document.head, script);
      append_hydration(script, t0);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, button, anchor);
      append_hydration(button, span0);
      if (lightIcon_slot_or_fallback) {
        lightIcon_slot_or_fallback.m(span0, null);
      }
      append_hydration(button, t2);
      append_hydration(button, span1);
      if (darkIcon_slot_or_fallback) {
        darkIcon_slot_or_fallback.m(span1, null);
      }
      if (button.autofocus)
        button.focus();
      current = true;
      if (!mounted) {
        dispose = listen(
          button,
          "click",
          /*toggleTheme*/
          ctx[1]
        );
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (lightIcon_slot) {
        if (lightIcon_slot.p && (!current || dirty & /*$$scope*/
        16)) {
          update_slot_base(
            lightIcon_slot,
            lightIcon_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[4],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[4]
            ) : get_slot_changes(
              lightIcon_slot_template,
              /*$$scope*/
              ctx2[4],
              dirty,
              get_lightIcon_slot_changes
            ),
            get_lightIcon_slot_context
          );
        }
      }
      if (darkIcon_slot) {
        if (darkIcon_slot.p && (!current || dirty & /*$$scope*/
        16)) {
          update_slot_base(
            darkIcon_slot,
            darkIcon_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[4],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[4]
            ) : get_slot_changes(
              darkIcon_slot_template,
              /*$$scope*/
              ctx2[4],
              dirty,
              get_darkIcon_slot_changes
            ),
            get_darkIcon_slot_context
          );
        }
      }
      set_attributes(button, button_data = get_spread_update(button_levels, [
        { "aria-label": "Dark mode" },
        { type: "button" },
        dirty & /*$$restProps*/
        4 && /*$$restProps*/
        ctx2[2],
        (!current || dirty & /*btnClass, $$props*/
        9 && button_class_value !== (button_class_value = classNames(
          /*btnClass*/
          ctx2[0],
          /*$$props*/
          ctx2[3].class
        ))) && { class: button_class_value }
      ]));
    },
    i(local) {
      if (current)
        return;
      transition_in(lightIcon_slot_or_fallback, local);
      transition_in(darkIcon_slot_or_fallback, local);
      current = true;
    },
    o(local) {
      transition_out(lightIcon_slot_or_fallback, local);
      transition_out(darkIcon_slot_or_fallback, local);
      current = false;
    },
    d(detaching) {
      detach(script);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(button);
      if (lightIcon_slot_or_fallback)
        lightIcon_slot_or_fallback.d(detaching);
      if (darkIcon_slot_or_fallback)
        darkIcon_slot_or_fallback.d(detaching);
      mounted = false;
      dispose();
    }
  };
}
function instance$8($$self, $$props, $$invalidate) {
  const omit_props_names = ["btnClass"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  let { btnClass = "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5" } = $$props;
  const toggleTheme = () => {
    const isDark = window.document.documentElement.classList.toggle("dark");
    localStorage.setItem("color-theme", isDark ? "dark" : "light");
  };
  $$self.$$set = ($$new_props) => {
    $$invalidate(3, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    $$invalidate(2, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("btnClass" in $$new_props)
      $$invalidate(0, btnClass = $$new_props.btnClass);
    if ("$$scope" in $$new_props)
      $$invalidate(4, $$scope = $$new_props.$$scope);
  };
  $$props = exclude_internal_props($$props);
  return [btnClass, toggleTheme, $$restProps, $$props, $$scope, slots];
}
class DarkMode extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$8, create_fragment$8, safe_not_equal, { btnClass: 0 });
  }
}
const get_default_slot_changes = (dirty) => ({ hidden: dirty & /*hidden*/
16 });
const get_default_slot_context = (ctx) => ({
  hidden: (
    /*hidden*/
    ctx[4]
  ),
  toggle: (
    /*toggle*/
    ctx[5]
  )
});
function create_default_slot$3(ctx) {
  let div;
  let div_class_value;
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[8].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[9],
    get_default_slot_context
  );
  return {
    c() {
      div = element("div");
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      if (default_slot)
        default_slot.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", div_class_value = classNames(
        /*navDivClass*/
        ctx[1],
        /*fluid*/
        ctx[2] && "container"
      ));
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if (default_slot) {
        default_slot.m(div, null);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope, hidden*/
        528)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[9],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[9]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[9],
              dirty,
              get_default_slot_changes
            ),
            get_default_slot_context
          );
        }
      }
      if (!current || dirty & /*navDivClass, fluid*/
      6 && div_class_value !== (div_class_value = classNames(
        /*navDivClass*/
        ctx2[1],
        /*fluid*/
        ctx2[2] && "container"
      ))) {
        attr(div, "class", div_class_value);
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
        detach(div);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function create_fragment$7(ctx) {
  let frame;
  let current;
  const frame_spread_levels = [
    { tag: "nav" },
    { color: (
      /*color*/
      ctx[3]
    ) },
    /*$$restProps*/
    ctx[6],
    {
      class: classNames(
        /*navClass*/
        ctx[0],
        /*$$props*/
        ctx[7].class
      )
    }
  ];
  let frame_props = {
    $$slots: { default: [create_default_slot$3] },
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
      const frame_changes = dirty & /*color, $$restProps, classNames, navClass, $$props*/
      201 ? get_spread_update(frame_spread_levels, [
        frame_spread_levels[0],
        dirty & /*color*/
        8 && { color: (
          /*color*/
          ctx2[3]
        ) },
        dirty & /*$$restProps*/
        64 && get_spread_object(
          /*$$restProps*/
          ctx2[6]
        ),
        dirty & /*classNames, navClass, $$props*/
        129 && {
          class: classNames(
            /*navClass*/
            ctx2[0],
            /*$$props*/
            ctx2[7].class
          )
        }
      ]) : {};
      if (dirty & /*$$scope, navDivClass, fluid, hidden*/
      534) {
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
function instance$7($$self, $$props, $$invalidate) {
  const omit_props_names = ["navClass", "navDivClass", "fluid", "color"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  let { navClass = "px-2 sm:px-4 py-2.5 w-full" } = $$props;
  let { navDivClass = "mx-auto flex flex-wrap justify-between items-center " } = $$props;
  let { fluid = true } = $$props;
  let { color = "navbar" } = $$props;
  let hidden = true;
  let toggle = () => {
    $$invalidate(4, hidden = !hidden);
  };
  $$self.$$set = ($$new_props) => {
    $$invalidate(7, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    $$invalidate(6, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("navClass" in $$new_props)
      $$invalidate(0, navClass = $$new_props.navClass);
    if ("navDivClass" in $$new_props)
      $$invalidate(1, navDivClass = $$new_props.navDivClass);
    if ("fluid" in $$new_props)
      $$invalidate(2, fluid = $$new_props.fluid);
    if ("color" in $$new_props)
      $$invalidate(3, color = $$new_props.color);
    if ("$$scope" in $$new_props)
      $$invalidate(9, $$scope = $$new_props.$$scope);
  };
  $$props = exclude_internal_props($$props);
  return [
    navClass,
    navDivClass,
    fluid,
    color,
    hidden,
    toggle,
    $$restProps,
    $$props,
    slots,
    $$scope
  ];
}
class Navbar extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$7, create_fragment$7, safe_not_equal, {
      navClass: 0,
      navDivClass: 1,
      fluid: 2,
      color: 3
    });
  }
}
function create_fragment$6(ctx) {
  let a;
  let a_class_value;
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[4].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[3],
    null
  );
  let a_levels = [
    { href: (
      /*href*/
      ctx[0]
    ) },
    /*$$restProps*/
    ctx[1],
    {
      class: a_class_value = classNames(
        "flex items-center",
        /*$$props*/
        ctx[2].class
      )
    }
  ];
  let a_data = {};
  for (let i = 0; i < a_levels.length; i += 1) {
    a_data = assign(a_data, a_levels[i]);
  }
  return {
    c() {
      a = element("a");
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      a = claim_element(nodes, "A", { href: true, class: true });
      var a_nodes = children(a);
      if (default_slot)
        default_slot.l(a_nodes);
      a_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_attributes(a, a_data);
    },
    m(target, anchor) {
      insert_hydration(target, a, anchor);
      if (default_slot) {
        default_slot.m(a, null);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        8)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[3],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[3]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[3],
              dirty,
              null
            ),
            null
          );
        }
      }
      set_attributes(a, a_data = get_spread_update(a_levels, [
        (!current || dirty & /*href*/
        1) && { href: (
          /*href*/
          ctx2[0]
        ) },
        dirty & /*$$restProps*/
        2 && /*$$restProps*/
        ctx2[1],
        (!current || dirty & /*$$props*/
        4 && a_class_value !== (a_class_value = classNames(
          "flex items-center",
          /*$$props*/
          ctx2[2].class
        ))) && { class: a_class_value }
      ]));
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
        detach(a);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function instance$6($$self, $$props, $$invalidate) {
  const omit_props_names = ["href"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  let { href = "" } = $$props;
  $$self.$$set = ($$new_props) => {
    $$invalidate(2, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    $$invalidate(1, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("href" in $$new_props)
      $$invalidate(0, href = $$new_props.href);
    if ("$$scope" in $$new_props)
      $$invalidate(3, $$scope = $$new_props.$$scope);
  };
  $$props = exclude_internal_props($$props);
  return [href, $$restProps, $$props, $$scope, slots];
}
class NavBrand extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$6, create_fragment$6, safe_not_equal, { href: 0 });
  }
}
function create_if_block$1(ctx) {
  let span;
  let t;
  return {
    c() {
      span = element("span");
      t = text(
        /*name*/
        ctx[0]
      );
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t = claim_text(
        span_nodes,
        /*name*/
        ctx[0]
      );
      span_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span, "class", "sr-only");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, t);
    },
    p(ctx2, dirty) {
      if (dirty & /*name*/
      1)
        set_data(
          t,
          /*name*/
          ctx2[0]
        );
    },
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function fallback_block(ctx) {
  let svg;
  let path;
  let svg_class_value;
  return {
    c() {
      svg = svg_element("svg");
      path = svg_element("path");
      this.h();
    },
    l(nodes) {
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
      attr(path, "fill-rule", "evenodd");
      attr(path, "d", "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z");
      attr(path, "clip-rule", "evenodd");
      attr(svg, "class", svg_class_value = /*svgSizes*/
      ctx[4][
        /*size*/
        ctx[2]
      ]);
      attr(svg, "fill", "currentColor");
      attr(svg, "viewBox", "0 0 20 20");
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(target, anchor) {
      insert_hydration(target, svg, anchor);
      append_hydration(svg, path);
    },
    p(ctx2, dirty) {
      if (dirty & /*size*/
      4 && svg_class_value !== (svg_class_value = /*svgSizes*/
      ctx2[4][
        /*size*/
        ctx2[2]
      ])) {
        attr(svg, "class", svg_class_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(svg);
    }
  };
}
function create_fragment$5(ctx) {
  let button;
  let t;
  let button_aria_label_value;
  let current;
  let mounted;
  let dispose;
  let if_block = (
    /*name*/
    ctx[0] && create_if_block$1(ctx)
  );
  const default_slot_template = (
    /*#slots*/
    ctx[8].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[7],
    null
  );
  const default_slot_or_fallback = default_slot || fallback_block(ctx);
  let button_levels = [
    { type: "button" },
    /*$$restProps*/
    ctx[5],
    { class: (
      /*buttonClass*/
      ctx[3]
    ) },
    {
      "aria-label": button_aria_label_value = /*ariaLabel*/
      ctx[1] ?? /*name*/
      ctx[0]
    }
  ];
  let button_data = {};
  for (let i = 0; i < button_levels.length; i += 1) {
    button_data = assign(button_data, button_levels[i]);
  }
  return {
    c() {
      button = element("button");
      if (if_block)
        if_block.c();
      t = space();
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
      if (if_block)
        if_block.l(button_nodes);
      t = claim_space(button_nodes);
      if (default_slot_or_fallback)
        default_slot_or_fallback.l(button_nodes);
      button_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_attributes(button, button_data);
    },
    m(target, anchor) {
      insert_hydration(target, button, anchor);
      if (if_block)
        if_block.m(button, null);
      append_hydration(button, t);
      if (default_slot_or_fallback) {
        default_slot_or_fallback.m(button, null);
      }
      if (button.autofocus)
        button.focus();
      current = true;
      if (!mounted) {
        dispose = listen(
          button,
          "click",
          /*click_handler*/
          ctx[9]
        );
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (
        /*name*/
        ctx2[0]
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block$1(ctx2);
          if_block.c();
          if_block.m(button, t);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        128)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[7],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[7]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[7],
              dirty,
              null
            ),
            null
          );
        }
      } else {
        if (default_slot_or_fallback && default_slot_or_fallback.p && (!current || dirty & /*size*/
        4)) {
          default_slot_or_fallback.p(ctx2, !current ? -1 : dirty);
        }
      }
      set_attributes(button, button_data = get_spread_update(button_levels, [
        { type: "button" },
        dirty & /*$$restProps*/
        32 && /*$$restProps*/
        ctx2[5],
        (!current || dirty & /*buttonClass*/
        8) && { class: (
          /*buttonClass*/
          ctx2[3]
        ) },
        (!current || dirty & /*ariaLabel, name*/
        3 && button_aria_label_value !== (button_aria_label_value = /*ariaLabel*/
        ctx2[1] ?? /*name*/
        ctx2[0])) && { "aria-label": button_aria_label_value }
      ]));
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
      if (if_block)
        if_block.d();
      if (default_slot_or_fallback)
        default_slot_or_fallback.d(detaching);
      mounted = false;
      dispose();
    }
  };
}
function instance$5($$self, $$props, $$invalidate) {
  const omit_props_names = ["color", "name", "ariaLabel", "size"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  const background = getContext("background");
  let { color = "default" } = $$props;
  let { name = void 0 } = $$props;
  let { ariaLabel = void 0 } = $$props;
  let { size = "md" } = $$props;
  const colors = {
    default: "hover:text-gray-900 hover:bg-gray-100 text-gray-500 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600",
    gray: "focus:ring-gray-400 hover:bg-gray-200 dark:hover:bg-gray-300",
    red: "focus:ring-red-400 hover:bg-red-200 dark:hover:bg-red-300",
    yellow: "focus:ring-yellow-400 hover:bg-yellow-200 dark:hover:bg-yellow-300",
    green: "focus:ring-green-400 hover:bg-green-200 dark:hover:bg-green-300",
    indigo: "focus:ring-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-300",
    purple: "focus:ring-purple-400 hover:bg-purple-200 dark:hover:bg-purple-300",
    pink: "focus:ring-pink-400 hover:bg-pink-200 dark:hover:bg-pink-300",
    blue: "focus:ring-blue-400 hover:bg-blue-200 dark:hover:bg-blue-300"
  };
  const sizing = {
    xs: "m-0.5 rounded focus:ring-1 p-0.5",
    sm: "m-0.5 rounded focus:ring-1 p-0.5",
    md: "rounded-lg focus:ring-2 p-1.5"
  };
  let buttonClass;
  const svgSizes = {
    xs: "w-3 h-3",
    sm: "w-3.5 h-3.5",
    md: "w-5 h-5"
  };
  function click_handler(event) {
    bubble.call(this, $$self, event);
  }
  $$self.$$set = ($$new_props) => {
    $$invalidate(13, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    $$invalidate(5, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("color" in $$new_props)
      $$invalidate(6, color = $$new_props.color);
    if ("name" in $$new_props)
      $$invalidate(0, name = $$new_props.name);
    if ("ariaLabel" in $$new_props)
      $$invalidate(1, ariaLabel = $$new_props.ariaLabel);
    if ("size" in $$new_props)
      $$invalidate(2, size = $$new_props.size);
    if ("$$scope" in $$new_props)
      $$invalidate(7, $$scope = $$new_props.$$scope);
  };
  $$self.$$.update = () => {
    $$invalidate(3, buttonClass = classNames(
      "focus:outline-none whitespace-normal",
      sizing[size],
      colors[color],
      color === "default" && (background ? "hover:bg-gray-100 dark:hover:bg-gray-600" : "hover:bg-gray-100 dark:hover:bg-gray-700"),
      $$props.class
    ));
  };
  $$props = exclude_internal_props($$props);
  return [
    name,
    ariaLabel,
    size,
    buttonClass,
    svgSizes,
    $$restProps,
    color,
    $$scope,
    slots,
    click_handler
  ];
}
class ToolbarButton extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$5, create_fragment$5, safe_not_equal, { color: 6, name: 0, ariaLabel: 1, size: 2 });
  }
}
function create_fragment$4(ctx) {
  let svg;
  let svg_class_value;
  let mounted;
  let dispose;
  let svg_levels = [
    { xmlns: "http://www.w3.org/2000/svg" },
    { width: (
      /*size*/
      ctx[0]
    ) },
    { height: (
      /*size*/
      ctx[0]
    ) },
    {
      class: svg_class_value = /*$$props*/
      ctx[4].class
    },
    /*$$restProps*/
    ctx[5],
    { "aria-label": (
      /*ariaLabel*/
      ctx[1]
    ) },
    { fill: "none" },
    { viewBox: (
      /*viewBox*/
      ctx[2]
    ) },
    { "stroke-width": "2" }
  ];
  let svg_data = {};
  for (let i = 0; i < svg_levels.length; i += 1) {
    svg_data = assign(svg_data, svg_levels[i]);
  }
  return {
    c() {
      svg = svg_element("svg");
      this.h();
    },
    l(nodes) {
      svg = claim_svg_element(nodes, "svg", {
        xmlns: true,
        width: true,
        height: true,
        class: true,
        "aria-label": true,
        fill: true,
        viewBox: true,
        "stroke-width": true
      });
      var svg_nodes = children(svg);
      svg_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_svg_attributes(svg, svg_data);
    },
    m(target, anchor) {
      insert_hydration(target, svg, anchor);
      svg.innerHTML = /*svgpath*/
      ctx[3];
      if (!mounted) {
        dispose = listen(
          svg,
          "click",
          /*click_handler*/
          ctx[8]
        );
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & /*svgpath*/
      8)
        svg.innerHTML = /*svgpath*/
        ctx2[3];
      set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [
        { xmlns: "http://www.w3.org/2000/svg" },
        dirty & /*size*/
        1 && { width: (
          /*size*/
          ctx2[0]
        ) },
        dirty & /*size*/
        1 && { height: (
          /*size*/
          ctx2[0]
        ) },
        dirty & /*$$props*/
        16 && svg_class_value !== (svg_class_value = /*$$props*/
        ctx2[4].class) && { class: svg_class_value },
        dirty & /*$$restProps*/
        32 && /*$$restProps*/
        ctx2[5],
        dirty & /*ariaLabel*/
        2 && { "aria-label": (
          /*ariaLabel*/
          ctx2[1]
        ) },
        { fill: "none" },
        dirty & /*viewBox*/
        4 && { viewBox: (
          /*viewBox*/
          ctx2[2]
        ) },
        { "stroke-width": "2" }
      ]));
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(svg);
      mounted = false;
      dispose();
    }
  };
}
function instance$4($$self, $$props, $$invalidate) {
  const omit_props_names = ["size", "color", "variation", "ariaLabel"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { size = "24" } = $$props;
  let { color = "currentColor" } = $$props;
  let { variation = "outline" } = $$props;
  let viewBox;
  let svgpath;
  let svgoutline = `<path d="M3.75 6.75H20.25M3.75 12H20.25M3.75 17.25H20.25" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> `;
  let svgsolid = `<path fill-rule="evenodd" clip-rule="evenodd" d="M3 6.75C3 6.33579 3.33579 6 3.75 6H20.25C20.6642 6 21 6.33579 21 6.75C21 7.16421 20.6642 7.5 20.25 7.5H3.75C3.33579 7.5 3 7.16421 3 6.75ZM3 12C3 11.5858 3.33579 11.25 3.75 11.25H20.25C20.6642 11.25 21 11.5858 21 12C21 12.4142 20.6642 12.75 20.25 12.75H3.75C3.33579 12.75 3 12.4142 3 12ZM3 17.25C3 16.8358 3.33579 16.5 3.75 16.5H20.25C20.6642 16.5 21 16.8358 21 17.25C21 17.6642 20.6642 18 20.25 18H3.75C3.33579 18 3 17.6642 3 17.25Z" fill="${color}"/> `;
  let { ariaLabel = "bars 3" } = $$props;
  function click_handler(event) {
    bubble.call(this, $$self, event);
  }
  $$self.$$set = ($$new_props) => {
    $$invalidate(4, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    $$invalidate(5, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("size" in $$new_props)
      $$invalidate(0, size = $$new_props.size);
    if ("color" in $$new_props)
      $$invalidate(6, color = $$new_props.color);
    if ("variation" in $$new_props)
      $$invalidate(7, variation = $$new_props.variation);
    if ("ariaLabel" in $$new_props)
      $$invalidate(1, ariaLabel = $$new_props.ariaLabel);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*variation*/
    128) {
      switch (variation) {
        case "outline":
          $$invalidate(3, svgpath = svgoutline);
          $$invalidate(2, viewBox = "0 0 24 24");
          break;
        case "solid":
          $$invalidate(3, svgpath = svgsolid);
          $$invalidate(2, viewBox = "0 0 24 24");
          break;
        default:
          $$invalidate(3, svgpath = svgoutline);
          $$invalidate(2, viewBox = "0 0 24 24");
      }
    }
  };
  $$props = exclude_internal_props($$props);
  return [
    size,
    ariaLabel,
    viewBox,
    svgpath,
    $$props,
    $$restProps,
    color,
    variation,
    click_handler
  ];
}
class Menu extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$4, create_fragment$4, safe_not_equal, {
      size: 0,
      color: 6,
      variation: 7,
      ariaLabel: 1
    });
  }
}
function create_default_slot$2(ctx) {
  let menu;
  let current;
  menu = new Menu({ props: { class: "h-6 w-6 shrink-0" } });
  return {
    c() {
      create_component(menu.$$.fragment);
    },
    l(nodes) {
      claim_component(menu.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(menu, target, anchor);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(menu.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(menu.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(menu, detaching);
    }
  };
}
function create_fragment$3(ctx) {
  let toolbarbutton;
  let current;
  const toolbarbutton_spread_levels = [
    { name: "Open main menu" },
    /*$$restProps*/
    ctx[1],
    {
      class: classNames(
        /*btnClass*/
        ctx[0],
        /*$$props*/
        ctx[2].class
      )
    }
  ];
  let toolbarbutton_props = {
    $$slots: { default: [create_default_slot$2] },
    $$scope: { ctx }
  };
  for (let i = 0; i < toolbarbutton_spread_levels.length; i += 1) {
    toolbarbutton_props = assign(toolbarbutton_props, toolbarbutton_spread_levels[i]);
  }
  toolbarbutton = new ToolbarButton({ props: toolbarbutton_props });
  toolbarbutton.$on(
    "click",
    /*click_handler*/
    ctx[3]
  );
  return {
    c() {
      create_component(toolbarbutton.$$.fragment);
    },
    l(nodes) {
      claim_component(toolbarbutton.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(toolbarbutton, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const toolbarbutton_changes = dirty & /*$$restProps, classNames, btnClass, $$props*/
      7 ? get_spread_update(toolbarbutton_spread_levels, [
        toolbarbutton_spread_levels[0],
        dirty & /*$$restProps*/
        2 && get_spread_object(
          /*$$restProps*/
          ctx2[1]
        ),
        dirty & /*classNames, btnClass, $$props*/
        5 && {
          class: classNames(
            /*btnClass*/
            ctx2[0],
            /*$$props*/
            ctx2[2].class
          )
        }
      ]) : {};
      if (dirty & /*$$scope*/
      16) {
        toolbarbutton_changes.$$scope = { dirty, ctx: ctx2 };
      }
      toolbarbutton.$set(toolbarbutton_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(toolbarbutton.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(toolbarbutton.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(toolbarbutton, detaching);
    }
  };
}
function instance$3($$self, $$props, $$invalidate) {
  const omit_props_names = ["btnClass"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { btnClass = "ml-3 md:hidden" } = $$props;
  function click_handler(event) {
    bubble.call(this, $$self, event);
  }
  $$self.$$set = ($$new_props) => {
    $$invalidate(2, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    $$invalidate(1, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("btnClass" in $$new_props)
      $$invalidate(0, btnClass = $$new_props.btnClass);
  };
  $$props = exclude_internal_props($$props);
  return [btnClass, $$restProps, $$props, click_handler];
}
class NavHamburger extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$3, create_fragment$3, safe_not_equal, { btnClass: 0 });
  }
}
function create_dynamic_element(ctx) {
  let svelte_element;
  let current;
  let mounted;
  let dispose;
  const default_slot_template = (
    /*#slots*/
    ctx[7].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[6],
    null
  );
  let svelte_element_levels = [
    { href: (
      /*href*/
      ctx[0]
    ) },
    /*$$restProps*/
    ctx[2],
    { class: (
      /*liClass*/
      ctx[1]
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
        ctx[0] ? "a" : "div"
      );
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      svelte_element = claim_element(
        nodes,
        /*href*/
        ((ctx[0] ? "a" : "div") || "null").toUpperCase(),
        { href: true, class: true }
      );
      var svelte_element_nodes = children(svelte_element);
      if (default_slot)
        default_slot.l(svelte_element_nodes);
      svelte_element_nodes.forEach(detach);
      this.h();
    },
    h() {
      if (/-/.test(
        /*href*/
        ctx[0] ? "a" : "div"
      )) {
        set_custom_element_data_map(svelte_element, svelte_element_data);
      } else {
        set_attributes(svelte_element, svelte_element_data);
      }
    },
    m(target, anchor) {
      insert_hydration(target, svelte_element, anchor);
      if (default_slot) {
        default_slot.m(svelte_element, null);
      }
      current = true;
      if (!mounted) {
        dispose = [
          listen(
            svelte_element,
            "blur",
            /*blur_handler*/
            ctx[8]
          ),
          listen(
            svelte_element,
            "change",
            /*change_handler*/
            ctx[9]
          ),
          listen(
            svelte_element,
            "click",
            /*click_handler*/
            ctx[10]
          ),
          listen(
            svelte_element,
            "focus",
            /*focus_handler*/
            ctx[11]
          ),
          listen(
            svelte_element,
            "keydown",
            /*keydown_handler*/
            ctx[12]
          ),
          listen(
            svelte_element,
            "keypress",
            /*keypress_handler*/
            ctx[13]
          ),
          listen(
            svelte_element,
            "keyup",
            /*keyup_handler*/
            ctx[14]
          ),
          listen(
            svelte_element,
            "mouseenter",
            /*mouseenter_handler*/
            ctx[15]
          ),
          listen(
            svelte_element,
            "mouseleave",
            /*mouseleave_handler*/
            ctx[16]
          ),
          listen(
            svelte_element,
            "mouseover",
            /*mouseover_handler*/
            ctx[17]
          )
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        64)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[6],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[6]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[6],
              dirty,
              null
            ),
            null
          );
        }
      }
      svelte_element_data = get_spread_update(svelte_element_levels, [
        (!current || dirty & /*href*/
        1) && { href: (
          /*href*/
          ctx2[0]
        ) },
        dirty & /*$$restProps*/
        4 && /*$$restProps*/
        ctx2[2],
        (!current || dirty & /*liClass*/
        2) && { class: (
          /*liClass*/
          ctx2[1]
        ) }
      ]);
      if (/-/.test(
        /*href*/
        ctx2[0] ? "a" : "div"
      )) {
        set_custom_element_data_map(svelte_element, svelte_element_data);
      } else {
        set_attributes(svelte_element, svelte_element_data);
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
        detach(svelte_element);
      if (default_slot)
        default_slot.d(detaching);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_fragment$2(ctx) {
  let li;
  let previous_tag = (
    /*href*/
    ctx[0] ? "a" : "div"
  );
  let current;
  let svelte_element = (
    /*href*/
    (ctx[0] ? "a" : "div") && create_dynamic_element(ctx)
  );
  return {
    c() {
      li = element("li");
      if (svelte_element)
        svelte_element.c();
    },
    l(nodes) {
      li = claim_element(nodes, "LI", {});
      var li_nodes = children(li);
      if (svelte_element)
        svelte_element.l(li_nodes);
      li_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, li, anchor);
      if (svelte_element)
        svelte_element.m(li, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (
        /*href*/
        ctx2[0] ? "a" : "div"
      ) {
        if (!previous_tag) {
          svelte_element = create_dynamic_element(ctx2);
          svelte_element.c();
          svelte_element.m(li, null);
        } else if (safe_not_equal(
          previous_tag,
          /*href*/
          ctx2[0] ? "a" : "div"
        )) {
          svelte_element.d(1);
          svelte_element = create_dynamic_element(ctx2);
          svelte_element.c();
          svelte_element.m(li, null);
        } else {
          svelte_element.p(ctx2, dirty);
        }
      } else if (previous_tag) {
        svelte_element.d(1);
        svelte_element = null;
      }
      previous_tag = /*href*/
      ctx2[0] ? "a" : "div";
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
        detach(li);
      if (svelte_element)
        svelte_element.d(detaching);
    }
  };
}
function instance$2($$self, $$props, $$invalidate) {
  const omit_props_names = ["href", "active", "activeClass", "nonActiveClass"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  let { href = "" } = $$props;
  let { active = false } = $$props;
  let { activeClass = "text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent" } = $$props;
  let { nonActiveClass = "text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" } = $$props;
  let liClass;
  function blur_handler(event) {
    bubble.call(this, $$self, event);
  }
  function change_handler(event) {
    bubble.call(this, $$self, event);
  }
  function click_handler(event) {
    bubble.call(this, $$self, event);
  }
  function focus_handler(event) {
    bubble.call(this, $$self, event);
  }
  function keydown_handler(event) {
    bubble.call(this, $$self, event);
  }
  function keypress_handler(event) {
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
  function mouseover_handler(event) {
    bubble.call(this, $$self, event);
  }
  $$self.$$set = ($$new_props) => {
    $$invalidate(18, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    $$invalidate(2, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("href" in $$new_props)
      $$invalidate(0, href = $$new_props.href);
    if ("active" in $$new_props)
      $$invalidate(3, active = $$new_props.active);
    if ("activeClass" in $$new_props)
      $$invalidate(4, activeClass = $$new_props.activeClass);
    if ("nonActiveClass" in $$new_props)
      $$invalidate(5, nonActiveClass = $$new_props.nonActiveClass);
    if ("$$scope" in $$new_props)
      $$invalidate(6, $$scope = $$new_props.$$scope);
  };
  $$self.$$.update = () => {
    $$invalidate(1, liClass = classNames("block py-2 pr-4 pl-3 md:p-0 rounded md:border-0", active ? activeClass : nonActiveClass, $$props.class));
  };
  $$props = exclude_internal_props($$props);
  return [
    href,
    liClass,
    $$restProps,
    active,
    activeClass,
    nonActiveClass,
    $$scope,
    slots,
    blur_handler,
    change_handler,
    click_handler,
    focus_handler,
    keydown_handler,
    keypress_handler,
    keyup_handler,
    mouseenter_handler,
    mouseleave_handler,
    mouseover_handler
  ];
}
class NavLi extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$2, create_fragment$2, safe_not_equal, {
      href: 0,
      active: 3,
      activeClass: 4,
      nonActiveClass: 5
    });
  }
}
function create_else_block(ctx) {
  let div;
  let ul;
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[7].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[8],
    null
  );
  let div_levels = [
    /*$$restProps*/
    ctx[4],
    { class: (
      /*_divClass*/
      ctx[2]
    ) },
    { hidden: (
      /*hidden*/
      ctx[0]
    ) }
  ];
  let div_data = {};
  for (let i = 0; i < div_levels.length; i += 1) {
    div_data = assign(div_data, div_levels[i]);
  }
  return {
    c() {
      div = element("div");
      ul = element("ul");
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      ul = claim_element(div_nodes, "UL", { class: true });
      var ul_nodes = children(ul);
      if (default_slot)
        default_slot.l(ul_nodes);
      ul_nodes.forEach(detach);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(
        ul,
        "class",
        /*_ulClass*/
        ctx[3]
      );
      set_attributes(div, div_data);
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, ul);
      if (default_slot) {
        default_slot.m(ul, null);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        256)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[8],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[8]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[8],
              dirty,
              null
            ),
            null
          );
        }
      }
      if (!current || dirty & /*_ulClass*/
      8) {
        attr(
          ul,
          "class",
          /*_ulClass*/
          ctx2[3]
        );
      }
      set_attributes(div, div_data = get_spread_update(div_levels, [
        dirty & /*$$restProps*/
        16 && /*$$restProps*/
        ctx2[4],
        (!current || dirty & /*_divClass*/
        4) && { class: (
          /*_divClass*/
          ctx2[2]
        ) },
        (!current || dirty & /*hidden*/
        1) && { hidden: (
          /*hidden*/
          ctx2[0]
        ) }
      ]));
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
        detach(div);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function create_if_block(ctx) {
  let div;
  let frame;
  let div_transition;
  let current;
  frame = new Frame({
    props: {
      tag: "ul",
      border: true,
      rounded: true,
      color: "navbarUl",
      class: (
        /*_ulClass*/
        ctx[3]
      ),
      $$slots: { default: [create_default_slot$1] },
      $$scope: { ctx }
    }
  });
  let div_levels = [
    /*$$restProps*/
    ctx[4],
    { class: (
      /*_divClass*/
      ctx[2]
    ) }
  ];
  let div_data = {};
  for (let i = 0; i < div_levels.length; i += 1) {
    div_data = assign(div_data, div_levels[i]);
  }
  return {
    c() {
      div = element("div");
      create_component(frame.$$.fragment);
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(frame.$$.fragment, div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_attributes(div, div_data);
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      mount_component(frame, div, null);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      const frame_changes = {};
      if (dirty & /*_ulClass*/
      8)
        frame_changes.class = /*_ulClass*/
        ctx[3];
      if (dirty & /*$$scope*/
      256) {
        frame_changes.$$scope = { dirty, ctx };
      }
      frame.$set(frame_changes);
      set_attributes(div, div_data = get_spread_update(div_levels, [
        dirty & /*$$restProps*/
        16 && /*$$restProps*/
        ctx[4],
        (!current || dirty & /*_divClass*/
        4) && { class: (
          /*_divClass*/
          ctx[2]
        ) }
      ]));
    },
    i(local) {
      if (current)
        return;
      transition_in(frame.$$.fragment, local);
      add_render_callback(() => {
        if (!div_transition)
          div_transition = create_bidirectional_transition(
            div,
            slide,
            /*slideParams*/
            ctx[1],
            true
          );
        div_transition.run(1);
      });
      current = true;
    },
    o(local) {
      transition_out(frame.$$.fragment, local);
      if (!div_transition)
        div_transition = create_bidirectional_transition(
          div,
          slide,
          /*slideParams*/
          ctx[1],
          false
        );
      div_transition.run(0);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_component(frame);
      if (detaching && div_transition)
        div_transition.end();
    }
  };
}
function create_default_slot$1(ctx) {
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[7].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[8],
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
        256)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[8],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[8]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[8],
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
function create_fragment$1(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block, create_else_block];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (!/*hidden*/
    ctx2[0])
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
function instance$1($$self, $$props, $$invalidate) {
  const omit_props_names = ["divClass", "ulClass", "hidden", "slideParams"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  let { divClass = "w-full md:block md:w-auto" } = $$props;
  let { ulClass = "flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium" } = $$props;
  let { hidden = true } = $$props;
  let { slideParams = {
    delay: 250,
    duration: 500,
    easing: quintOut
  } } = $$props;
  let _divClass;
  let _ulClass;
  $$self.$$set = ($$new_props) => {
    $$invalidate(9, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    $$invalidate(4, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("divClass" in $$new_props)
      $$invalidate(5, divClass = $$new_props.divClass);
    if ("ulClass" in $$new_props)
      $$invalidate(6, ulClass = $$new_props.ulClass);
    if ("hidden" in $$new_props)
      $$invalidate(0, hidden = $$new_props.hidden);
    if ("slideParams" in $$new_props)
      $$invalidate(1, slideParams = $$new_props.slideParams);
    if ("$$scope" in $$new_props)
      $$invalidate(8, $$scope = $$new_props.$$scope);
  };
  $$self.$$.update = () => {
    $$invalidate(2, _divClass = classNames(divClass, $$props.class));
    $$invalidate(3, _ulClass = classNames(
      ulClass,
      // 'divide-y md:divide-y-0 divide-gray-100 dark:divide-gray-700',
      $$props.class
    ));
  };
  $$props = exclude_internal_props($$props);
  return [
    hidden,
    slideParams,
    _divClass,
    _ulClass,
    $$restProps,
    divClass,
    ulClass,
    slots,
    $$scope
  ];
}
class NavUl extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, {
      divClass: 5,
      ulClass: 6,
      hidden: 0,
      slideParams: 1
    });
  }
}
const _layout_svelte_svelte_type_style_lang = "";
function create_default_slot_6(ctx) {
  let svg;
  let path;
  return {
    c() {
      svg = svg_element("svg");
      path = svg_element("path");
      this.h();
    },
    l(nodes) {
      svg = claim_svg_element(nodes, "svg", {
        xmlns: true,
        fill: true,
        viewBox: true,
        "stroke-width": true,
        class: true
      });
      var svg_nodes = children(svg);
      path = claim_svg_element(svg_nodes, "path", {
        "stroke-linecap": true,
        "stroke-linejoin": true,
        d: true
      });
      children(path).forEach(detach);
      svg_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(path, "stroke-linecap", "round");
      attr(path, "stroke-linejoin", "round");
      attr(path, "d", "M5.77778 10.2222V18C5.77778 19.1046 6.67321 20 7.77778 20H12M5.77778 10.2222L11.2929 4.70711C11.6834 4.31658 12.3166 4.31658 12.7071 4.70711L17.5 9.5M5.77778 10.2222L4 12M18.2222 10.2222V18C18.2222 19.1046 17.3268 20 16.2222 20H12M18.2222 10.2222L20 12M18.2222 10.2222L17.5 9.5M17.5 9.5V6M12 20V15");
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr(svg, "fill", "none");
      attr(svg, "viewBox", "0 0 24 24");
      attr(svg, "stroke-width", "1.5");
      attr(svg, "class", "w-7 h-7 stroke-black dark:stroke-white");
    },
    m(target, anchor) {
      insert_hydration(target, svg, anchor);
      append_hydration(svg, path);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(svg);
    }
  };
}
function create_lightIcon_slot(ctx) {
  let svg;
  let path;
  return {
    c() {
      svg = svg_element("svg");
      path = svg_element("path");
      this.h();
    },
    l(nodes) {
      svg = claim_svg_element(nodes, "svg", {
        xmlns: true,
        width: true,
        height: true,
        preserveAspectRatio: true,
        viewBox: true
      });
      var svg_nodes = children(svg);
      path = claim_svg_element(svg_nodes, "path", { fill: true, d: true });
      children(path).forEach(detach);
      svg_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(path, "fill", "white");
      attr(path, "d", "M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z");
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr(svg, "width", "1.5em");
      attr(svg, "height", "1.5em");
      attr(svg, "preserveAspectRatio", "xMidYMid meet");
      attr(svg, "viewBox", "0 0 32 32");
    },
    m(target, anchor) {
      insert_hydration(target, svg, anchor);
      append_hydration(svg, path);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(svg);
    }
  };
}
function create_darkIcon_slot(ctx) {
  let svg;
  let path;
  return {
    c() {
      svg = svg_element("svg");
      path = svg_element("path");
      this.h();
    },
    l(nodes) {
      svg = claim_svg_element(nodes, "svg", {
        xmlns: true,
        width: true,
        height: true,
        preserveAspectRatio: true,
        viewBox: true,
        class: true
      });
      var svg_nodes = children(svg);
      path = claim_svg_element(svg_nodes, "path", { fill: true, d: true });
      children(path).forEach(detach);
      svg_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(path, "fill", "black");
      attr(path, "d", "M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z");
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr(svg, "width", "1.5em");
      attr(svg, "height", "1.5em");
      attr(svg, "preserveAspectRatio", "xMidYMid meet");
      attr(svg, "viewBox", "0 0 32 32");
      attr(svg, "class", "hover:fill-none");
    },
    m(target, anchor) {
      insert_hydration(target, svg, anchor);
      append_hydration(svg, path);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(svg);
    }
  };
}
function create_default_slot_5(ctx) {
  let t;
  return {
    c() {
      t = text("About");
    },
    l(nodes) {
      t = claim_text(nodes, "About");
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
function create_default_slot_4(ctx) {
  let t;
  return {
    c() {
      t = text("Skills");
    },
    l(nodes) {
      t = claim_text(nodes, "Skills");
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
function create_default_slot_3(ctx) {
  let t;
  return {
    c() {
      t = text("Projects");
    },
    l(nodes) {
      t = claim_text(nodes, "Projects");
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
function create_default_slot_2(ctx) {
  let navli0;
  let t0;
  let navli1;
  let t1;
  let navli2;
  let current;
  navli0 = new NavLi({
    props: {
      class: "text-black dark:text-white text-lg",
      href: "/about",
      $$slots: { default: [create_default_slot_5] },
      $$scope: { ctx }
    }
  });
  navli1 = new NavLi({
    props: {
      class: "text-black dark:text-white text-lg",
      href: "/skills",
      $$slots: { default: [create_default_slot_4] },
      $$scope: { ctx }
    }
  });
  navli2 = new NavLi({
    props: {
      class: "text-black dark:text-white text-lg",
      href: "/projects",
      $$slots: { default: [create_default_slot_3] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(navli0.$$.fragment);
      t0 = space();
      create_component(navli1.$$.fragment);
      t1 = space();
      create_component(navli2.$$.fragment);
    },
    l(nodes) {
      claim_component(navli0.$$.fragment, nodes);
      t0 = claim_space(nodes);
      claim_component(navli1.$$.fragment, nodes);
      t1 = claim_space(nodes);
      claim_component(navli2.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(navli0, target, anchor);
      insert_hydration(target, t0, anchor);
      mount_component(navli1, target, anchor);
      insert_hydration(target, t1, anchor);
      mount_component(navli2, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const navli0_changes = {};
      if (dirty & /*$$scope*/
      2) {
        navli0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      navli0.$set(navli0_changes);
      const navli1_changes = {};
      if (dirty & /*$$scope*/
      2) {
        navli1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      navli1.$set(navli1_changes);
      const navli2_changes = {};
      if (dirty & /*$$scope*/
      2) {
        navli2_changes.$$scope = { dirty, ctx: ctx2 };
      }
      navli2.$set(navli2_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(navli0.$$.fragment, local);
      transition_in(navli1.$$.fragment, local);
      transition_in(navli2.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(navli0.$$.fragment, local);
      transition_out(navli1.$$.fragment, local);
      transition_out(navli2.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(navli0, detaching);
      if (detaching)
        detach(t0);
      destroy_component(navli1, detaching);
      if (detaching)
        detach(t1);
      destroy_component(navli2, detaching);
    }
  };
}
function create_default_slot_1(ctx) {
  let navbrand;
  let t0;
  let darkmode;
  let t1;
  let navhamburger;
  let t2;
  let navul;
  let current;
  navbrand = new NavBrand({
    props: {
      href: "/",
      $$slots: { default: [create_default_slot_6] },
      $$scope: { ctx }
    }
  });
  darkmode = new DarkMode({
    props: {
      class: "text-lg hover:bg-transparent dark:hover:bg-transparent",
      $$slots: {
        darkIcon: [create_darkIcon_slot],
        lightIcon: [create_lightIcon_slot]
      },
      $$scope: { ctx }
    }
  });
  navhamburger = new NavHamburger({
    props: { class: "text-black dark:text-white" }
  });
  navhamburger.$on("click", function() {
    if (is_function(
      /*toggle*/
      ctx[3]
    ))
      ctx[3].apply(this, arguments);
  });
  navul = new NavUl({
    props: {
      hidden: (
        /*hidden*/
        ctx[2]
      ),
      $$slots: { default: [create_default_slot_2] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(navbrand.$$.fragment);
      t0 = space();
      create_component(darkmode.$$.fragment);
      t1 = space();
      create_component(navhamburger.$$.fragment);
      t2 = space();
      create_component(navul.$$.fragment);
    },
    l(nodes) {
      claim_component(navbrand.$$.fragment, nodes);
      t0 = claim_space(nodes);
      claim_component(darkmode.$$.fragment, nodes);
      t1 = claim_space(nodes);
      claim_component(navhamburger.$$.fragment, nodes);
      t2 = claim_space(nodes);
      claim_component(navul.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(navbrand, target, anchor);
      insert_hydration(target, t0, anchor);
      mount_component(darkmode, target, anchor);
      insert_hydration(target, t1, anchor);
      mount_component(navhamburger, target, anchor);
      insert_hydration(target, t2, anchor);
      mount_component(navul, target, anchor);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      const navbrand_changes = {};
      if (dirty & /*$$scope*/
      2) {
        navbrand_changes.$$scope = { dirty, ctx };
      }
      navbrand.$set(navbrand_changes);
      const darkmode_changes = {};
      if (dirty & /*$$scope*/
      2) {
        darkmode_changes.$$scope = { dirty, ctx };
      }
      darkmode.$set(darkmode_changes);
      const navul_changes = {};
      if (dirty & /*hidden*/
      4)
        navul_changes.hidden = /*hidden*/
        ctx[2];
      if (dirty & /*$$scope*/
      2) {
        navul_changes.$$scope = { dirty, ctx };
      }
      navul.$set(navul_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(navbrand.$$.fragment, local);
      transition_in(darkmode.$$.fragment, local);
      transition_in(navhamburger.$$.fragment, local);
      transition_in(navul.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(navbrand.$$.fragment, local);
      transition_out(darkmode.$$.fragment, local);
      transition_out(navhamburger.$$.fragment, local);
      transition_out(navul.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(navbrand, detaching);
      if (detaching)
        detach(t0);
      destroy_component(darkmode, detaching);
      if (detaching)
        detach(t1);
      destroy_component(navhamburger, detaching);
      if (detaching)
        detach(t2);
      destroy_component(navul, detaching);
    }
  };
}
function create_default_slot(ctx) {
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[0].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[1],
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
        2)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[1],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[1]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[1],
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
function create_fragment(ctx) {
  let navbar;
  let t;
  let modal;
  let current;
  navbar = new Navbar({
    props: {
      color: "navbar",
      $$slots: {
        default: [
          create_default_slot_1,
          ({ hidden, toggle }) => ({ 2: hidden, 3: toggle }),
          ({ hidden, toggle }) => (hidden ? 4 : 0) | (toggle ? 8 : 0)
        ]
      },
      $$scope: { ctx }
    }
  });
  modal = new Modal({
    props: {
      styleWindow: {
        boxShadow: "0 5px 5px 0 rgba(0, 0, 0, 0.15)",
        background: "#7286D3"
      },
      styleCloseButton: { background: "#f00D", cursor: "pointer" },
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(navbar.$$.fragment);
      t = space();
      create_component(modal.$$.fragment);
    },
    l(nodes) {
      claim_component(navbar.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(modal.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(navbar, target, anchor);
      insert_hydration(target, t, anchor);
      mount_component(modal, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const navbar_changes = {};
      if (dirty & /*$$scope, hidden, toggle*/
      14) {
        navbar_changes.$$scope = { dirty, ctx: ctx2 };
      }
      navbar.$set(navbar_changes);
      const modal_changes = {};
      if (dirty & /*$$scope*/
      2) {
        modal_changes.$$scope = { dirty, ctx: ctx2 };
      }
      modal.$set(modal_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(navbar.$$.fragment, local);
      transition_in(modal.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(navbar.$$.fragment, local);
      transition_out(modal.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(navbar, detaching);
      if (detaching)
        detach(t);
      destroy_component(modal, detaching);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  $$self.$$set = ($$props2) => {
    if ("$$scope" in $$props2)
      $$invalidate(1, $$scope = $$props2.$$scope);
  };
  return [slots, $$scope];
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