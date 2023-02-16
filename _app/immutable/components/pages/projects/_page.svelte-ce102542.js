import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, l as claim_element, m as children, h as detach, n as attr, b as insert_hydration, C as noop, a6 as destroy_each, q as text, a as space, r as claim_text, c as claim_space, H as append_hydration } from "../../../chunks/index-81d22fb2.js";
const projects = [
  {
    title: "Software project at Beamex",
    description: "I am currently working in a 7 member team for Beamex. Our task is to build an application for Android-based glasses with React Native and TypeScript.",
    date: "2022 September - 2023 April",
    src: "/skills/react-native_logo.png",
    alt: "React Native logo",
    href: "/projects/beamex",
    isPrivate: true
  },
  {
    title: "Test example",
    description: "Click this for unexpected results.",
    date: "???",
    src: "/skills/react-native_logo.png",
    alt: "React Native logo",
    href: "/projects/test",
    isPrivate: false
  }
];
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[0] = list[i].title;
  child_ctx[1] = list[i].date;
  child_ctx[2] = list[i].href;
  child_ctx[3] = list[i].description;
  return child_ctx;
}
function create_each_block(ctx) {
  let div;
  let a;
  let h3;
  let t0_value = (
    /*title*/
    ctx[0] + ""
  );
  let t0;
  let t1;
  let time;
  let t2_value = (
    /*date*/
    ctx[1] + ""
  );
  let t2;
  let t3;
  let p;
  let t4_value = (
    /*description*/
    ctx[3] + ""
  );
  let t4;
  let t5;
  return {
    c() {
      div = element("div");
      a = element("a");
      h3 = element("h3");
      t0 = text(t0_value);
      t1 = space();
      time = element("time");
      t2 = text(t2_value);
      t3 = space();
      p = element("p");
      t4 = text(t4_value);
      t5 = space();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      a = claim_element(div_nodes, "A", { href: true });
      var a_nodes = children(a);
      h3 = claim_element(a_nodes, "H3", { class: true });
      var h3_nodes = children(h3);
      t0 = claim_text(h3_nodes, t0_value);
      h3_nodes.forEach(detach);
      t1 = claim_space(a_nodes);
      time = claim_element(a_nodes, "TIME", { class: true });
      var time_nodes = children(time);
      t2 = claim_text(time_nodes, t2_value);
      time_nodes.forEach(detach);
      t3 = claim_space(a_nodes);
      p = claim_element(a_nodes, "P", { class: true });
      var p_nodes = children(p);
      t4 = claim_text(p_nodes, t4_value);
      p_nodes.forEach(detach);
      a_nodes.forEach(detach);
      t5 = claim_space(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(h3, "class", "flex items-center mb-1 text-2xl font-semibold text-gray-900 dark:text-white");
      attr(time, "class", "block mb-2 text-md font-normal leading-none text-gray-400 dark:text-gray-500");
      attr(p, "class", "text-gray-900 dark:text-white");
      attr(
        a,
        "href",
        /*href*/
        ctx[2]
      );
      attr(div, "class", "p-5 mb-4 bg-gray-50 rounded-lg border border-gray-100 dark:bg-gray-800 dark:border-gray-700");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, a);
      append_hydration(a, h3);
      append_hydration(h3, t0);
      append_hydration(a, t1);
      append_hydration(a, time);
      append_hydration(time, t2);
      append_hydration(a, t3);
      append_hydration(a, p);
      append_hydration(p, t4);
      append_hydration(div, t5);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function create_fragment(ctx) {
  let div;
  let each_value = projects;
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  return {
    c() {
      div = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(div_nodes);
      }
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "flex flex-col align-center justify-center p-10");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div, null);
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & /*projects*/
      0) {
        each_value = projects;
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(div, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_each(each_blocks, detaching);
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
