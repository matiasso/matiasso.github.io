import { S as SvelteComponent, i as init, s as safe_not_equal, v as binding_callbacks, ac as bind, x as create_component, a as space, y as claim_component, c as claim_space, z as mount_component, b as insert_hydration, ad as add_flush_callback, f as transition_in, t as transition_out, A as destroy_component, h as detach, q as text, r as claim_text, k as element, l as claim_element, m as children, n as attr, H as append_hydration, C as noop } from "../../../chunks/index-39b40c4e.js";
import "../../../chunks/Indicator.svelte_svelte_type_style_lang-ef2bbef9.js";
import { B as Button, M as Modal } from "../../../chunks/Modal-839d8b29.js";
function create_default_slot_3(ctx) {
  let t;
  return {
    c() {
      t = text("Default modal");
    },
    l(nodes) {
      t = claim_text(nodes, "Default modal");
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
  let p0;
  let t0;
  let t1;
  let p1;
  let t2;
  return {
    c() {
      p0 = element("p");
      t0 = text("With less than a month to go before the European Union enacts new consumer privacy laws for its\n		citizens, companies around the world are updating their terms of service agreements to comply.");
      t1 = space();
      p1 = element("p");
      t2 = text("The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25\n		and is meant to ensure a common set of data rights in the European Union. It requires\n		organizations to notify users as soon as possible of high-risk data breaches that could\n		personally affect them.");
      this.h();
    },
    l(nodes) {
      p0 = claim_element(nodes, "P", { class: true });
      var p0_nodes = children(p0);
      t0 = claim_text(p0_nodes, "With less than a month to go before the European Union enacts new consumer privacy laws for its\n		citizens, companies around the world are updating their terms of service agreements to comply.");
      p0_nodes.forEach(detach);
      t1 = claim_space(nodes);
      p1 = claim_element(nodes, "P", { class: true });
      var p1_nodes = children(p1);
      t2 = claim_text(p1_nodes, "The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25\n		and is meant to ensure a common set of data rights in the European Union. It requires\n		organizations to notify users as soon as possible of high-risk data breaches that could\n		personally affect them.");
      p1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(p0, "class", "text-base leading-relaxed text-gray-500 dark:text-gray-400");
      attr(p1, "class", "text-base leading-relaxed text-gray-500 dark:text-gray-400");
    },
    m(target, anchor) {
      insert_hydration(target, p0, anchor);
      append_hydration(p0, t0);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, p1, anchor);
      append_hydration(p1, t2);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(p0);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(p1);
    }
  };
}
function create_default_slot_1(ctx) {
  let t;
  return {
    c() {
      t = text("I accept");
    },
    l(nodes) {
      t = claim_text(nodes, "I accept");
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
function create_default_slot(ctx) {
  let t;
  return {
    c() {
      t = text("Decline");
    },
    l(nodes) {
      t = claim_text(nodes, "Decline");
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
  let button0;
  let t;
  let button1;
  let current;
  button0 = new Button({
    props: {
      $$slots: { default: [create_default_slot_1] },
      $$scope: { ctx }
    }
  });
  button0.$on(
    "click",
    /*click_handler_1*/
    ctx[2]
  );
  button1 = new Button({
    props: {
      color: "alternative",
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(button0.$$.fragment);
      t = space();
      create_component(button1.$$.fragment);
    },
    l(nodes) {
      claim_component(button0.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(button1.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(button0, target, anchor);
      insert_hydration(target, t, anchor);
      mount_component(button1, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const button0_changes = {};
      if (dirty & /*$$scope*/
      16) {
        button0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button0.$set(button0_changes);
      const button1_changes = {};
      if (dirty & /*$$scope*/
      16) {
        button1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button1.$set(button1_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(button0.$$.fragment, local);
      transition_in(button1.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(button0.$$.fragment, local);
      transition_out(button1.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(button0, detaching);
      if (detaching)
        detach(t);
      destroy_component(button1, detaching);
    }
  };
}
function create_fragment(ctx) {
  let button;
  let t;
  let modal;
  let updating_open;
  let current;
  button = new Button({
    props: {
      $$slots: { default: [create_default_slot_3] },
      $$scope: { ctx }
    }
  });
  button.$on(
    "click",
    /*click_handler*/
    ctx[1]
  );
  function modal_open_binding(value) {
    ctx[3](value);
  }
  let modal_props = {
    title: "Terms of Service",
    autoclose: true,
    $$slots: {
      footer: [create_footer_slot],
      default: [create_default_slot_2]
    },
    $$scope: { ctx }
  };
  if (
    /*defaultModal*/
    ctx[0] !== void 0
  ) {
    modal_props.open = /*defaultModal*/
    ctx[0];
  }
  modal = new Modal({ props: modal_props });
  binding_callbacks.push(() => bind(modal, "open", modal_open_binding));
  return {
    c() {
      create_component(button.$$.fragment);
      t = space();
      create_component(modal.$$.fragment);
    },
    l(nodes) {
      claim_component(button.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(modal.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(button, target, anchor);
      insert_hydration(target, t, anchor);
      mount_component(modal, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const button_changes = {};
      if (dirty & /*$$scope*/
      16) {
        button_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button.$set(button_changes);
      const modal_changes = {};
      if (dirty & /*$$scope*/
      16) {
        modal_changes.$$scope = { dirty, ctx: ctx2 };
      }
      if (!updating_open && dirty & /*defaultModal*/
      1) {
        updating_open = true;
        modal_changes.open = /*defaultModal*/
        ctx2[0];
        add_flush_callback(() => updating_open = false);
      }
      modal.$set(modal_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(button.$$.fragment, local);
      transition_in(modal.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(button.$$.fragment, local);
      transition_out(modal.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(button, detaching);
      if (detaching)
        detach(t);
      destroy_component(modal, detaching);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let defaultModal = false;
  const click_handler = () => $$invalidate(0, defaultModal = true);
  const click_handler_1 = () => alert('Handle "success"');
  function modal_open_binding(value) {
    defaultModal = value;
    $$invalidate(0, defaultModal);
  }
  return [defaultModal, click_handler, click_handler_1, modal_open_binding];
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
