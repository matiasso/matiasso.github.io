import { D as identity, S as SvelteComponent, i as init, s as safe_not_equal, E as create_slot, a as space, c as claim_space, b as insert_hydration, F as listen, f as transition_in, g as group_outros, t as transition_out, d as check_outros, G as update_slot_base, H as get_all_dirty_from_scope, I as get_slot_changes, h as detach, J as createEventDispatcher, K as onDestroy, o as onMount, L as globals, w as construct_svelte_component, k as element, x as create_component, l as claim_element, m as children, y as claim_component, n as attr, M as null_to_empty, N as toggle_class, O as append_hydration, z as mount_component, P as is_function, A as destroy_component, Q as add_render_callback, R as create_bidirectional_transition, T as run_all, e as empty, v as binding_callbacks, C as noop, U as setContext, q as text, r as claim_text } from "../../chunks/index-046539a1.js";
function fade(node, { delay = 0, duration = 400, easing = identity } = {}) {
  const o = +getComputedStyle(node).opacity;
  return {
    delay,
    duration,
    easing,
    css: (t) => `opacity: ${t * o}`
  };
}
const Modal_svelte_svelte_type_style_lang = "";
const { window: window_1 } = globals;
function create_if_block(ctx) {
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
      ) + " svelte-n7cvum");
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
      ) + " svelte-n7cvum");
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
      ) + " svelte-n7cvum");
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
      ) + " svelte-n7cvum");
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
      ) + " svelte-n7cvum")) {
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
      ) + " svelte-n7cvum")) {
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
      ) + " svelte-n7cvum")) {
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
      ) + " svelte-n7cvum")) {
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
  const if_block_creators = [create_if_block_2, create_else_block];
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
function create_else_block(ctx) {
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
      ) + " svelte-n7cvum");
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
      ) + " svelte-n7cvum")) {
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
function create_fragment$1(ctx) {
  let t;
  let current;
  let mounted;
  let dispose;
  let if_block = (
    /*Component*/
    ctx[2] && create_if_block(ctx)
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
          if_block = create_if_block(ctx2);
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
function instance$1($$self, $$props, $$invalidate) {
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
      let index = tabbable.indexOf(document.activeElement);
      if (index === -1 && event.shiftKey)
        index = 0;
      index += tabbable.length + (event.shiftKey ? -1 : 1);
      index %= tabbable.length;
      tabbable[index].focus();
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
      instance$1,
      create_fragment$1,
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
const _layout_svelte_svelte_type_style_lang = "";
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
  let modal;
  let current;
  modal = new Modal({
    props: {
      styleWindow: {
        boxShadow: "0 5px 5px 0 rgba(0, 0, 0, 0.15)",
        background: "#3D3A50"
      },
      styleCloseButton: { background: "#f008", cursor: "pointer" },
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx }
    }
  });
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
      create_component(modal.$$.fragment);
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
      claim_component(modal.$$.fragment, nodes);
      this.h();
    },
    h() {
      attr(a0, "href", "/");
      attr(a0, "class", "svelte-1asrvai");
      attr(a1, "href", "/about");
      attr(a1, "class", "svelte-1asrvai");
      attr(a2, "href", "/skills");
      attr(a2, "class", "svelte-1asrvai");
      attr(a3, "href", "/projects");
      attr(a3, "class", "svelte-1asrvai");
      attr(nav, "class", "svelte-1asrvai");
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
      mount_component(modal, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
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
      transition_in(modal.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(modal.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(nav);
      if (detaching)
        detach(t7);
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
