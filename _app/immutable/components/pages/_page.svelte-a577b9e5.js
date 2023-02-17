import { E as assign, a2 as now, a3 as loop, a4 as identity, S as SvelteComponent, i as init, s as safe_not_equal, Y as add_render_callback, k as element, a as space, q as text, l as claim_element, m as children, h as detach, c as claim_space, r as claim_text, n as attr, a5 as src_url_equal, p as set_style, b as insert_hydration, H as append_hydration, I as listen, C as noop, a6 as destroy_each, X as run_all, a1 as component_subscribe, o as onMount, a7 as globals, e as empty, a8 as set_store_value } from "../../chunks/index-81d22fb2.js";
import { w as writable } from "../../chunks/index-a62f8b0d.js";
import { c as cubicOut } from "../../chunks/index-1a7b297b.js";
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function get_interpolator(a, b) {
  if (a === b || a !== a)
    return () => a;
  const type = typeof a;
  if (type !== typeof b || Array.isArray(a) !== Array.isArray(b)) {
    throw new Error("Cannot interpolate values of different type");
  }
  if (Array.isArray(a)) {
    const arr = b.map((bi, i) => {
      return get_interpolator(a[i], bi);
    });
    return (t) => arr.map((fn) => fn(t));
  }
  if (type === "object") {
    if (!a || !b)
      throw new Error("Object cannot be null");
    if (is_date(a) && is_date(b)) {
      a = a.getTime();
      b = b.getTime();
      const delta = b - a;
      return (t) => new Date(a + t * delta);
    }
    const keys = Object.keys(b);
    const interpolators = {};
    keys.forEach((key) => {
      interpolators[key] = get_interpolator(a[key], b[key]);
    });
    return (t) => {
      const result = {};
      keys.forEach((key) => {
        result[key] = interpolators[key](t);
      });
      return result;
    };
  }
  if (type === "number") {
    const delta = b - a;
    return (t) => a + t * delta;
  }
  throw new Error(`Cannot interpolate ${type} values`);
}
function tweened(value, defaults = {}) {
  const store = writable(value);
  let task;
  let target_value = value;
  function set(new_value, opts) {
    if (value == null) {
      store.set(value = new_value);
      return Promise.resolve();
    }
    target_value = new_value;
    let previous_task = task;
    let started = false;
    let { delay = 0, duration = 400, easing = identity, interpolate = get_interpolator } = assign(assign({}, defaults), opts);
    if (duration === 0) {
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      store.set(value = target_value);
      return Promise.resolve();
    }
    const start = now() + delay;
    let fn;
    task = loop((now2) => {
      if (now2 < start)
        return true;
      if (!started) {
        fn = interpolate(value, new_value);
        if (typeof duration === "function")
          duration = duration(value, new_value);
        started = true;
      }
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      const elapsed = now2 - start;
      if (elapsed > duration) {
        store.set(value = new_value);
        return false;
      }
      store.set(value = fn(easing(elapsed / duration)));
      return true;
    });
    return task.promise;
  }
  return {
    set,
    update: (fn, opts) => set(fn(target_value, value), opts),
    subscribe: store.subscribe
  };
}
const _page_svelte_svelte_type_style_lang = "";
const { window: window_1 } = globals;
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[9] = list[i];
  return child_ctx;
}
function create_if_block(ctx) {
  let div;
  let div_style_value;
  return {
    c() {
      div = element("div");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true, style: true });
      children(div).forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "ball");
      attr(div, "style", div_style_value = `background: ${/*ball*/
      ctx[9].color}; width: ${/*ball*/
      ctx[9].size}px; height: ${/*ball*/
      ctx[9].size}px; 
			position: absolute; top: ${/*ball*/
      ctx[9].location.y}px; left: ${/*ball*/
      ctx[9].location.x}px;
			border-radius:50%; filter: blur(0.7vmax); animation: up-down ${animationDuration}s infinite;`);
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & /*balls*/
      1 && div_style_value !== (div_style_value = `background: ${/*ball*/
      ctx2[9].color}; width: ${/*ball*/
      ctx2[9].size}px; height: ${/*ball*/
      ctx2[9].size}px; 
			position: absolute; top: ${/*ball*/
      ctx2[9].location.y}px; left: ${/*ball*/
      ctx2[9].location.x}px;
			border-radius:50%; filter: blur(0.7vmax); animation: up-down ${animationDuration}s infinite;`)) {
        attr(div, "style", div_style_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function create_each_block(ctx) {
  let if_block_anchor;
  let if_block = (
    /*ball*/
    ctx[9].location.x >= 0 && /*ball*/
    ctx[9].location.y >= 0 && create_if_block(ctx)
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
    },
    p(ctx2, dirty) {
      if (
        /*ball*/
        ctx2[9].location.x >= 0 && /*ball*/
        ctx2[9].location.y >= 0
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block(ctx2);
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    d(detaching) {
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function create_fragment(ctx) {
  let scrolling = false;
  let clear_scrolling = () => {
    scrolling = false;
  };
  let scrolling_timeout;
  let div0;
  let div0_style_value;
  let t0;
  let div5;
  let div4;
  let div1;
  let h1;
  let t1;
  let t2;
  let h2;
  let t3;
  let t4;
  let div2;
  let img0;
  let img0_src_value;
  let t5;
  let p0;
  let t6;
  let br0;
  let br1;
  let t7;
  let br2;
  let br3;
  let t8;
  let br4;
  let br5;
  let t9;
  let t10;
  let div3;
  let p1;
  let t11;
  let t12;
  let a0;
  let img1;
  let img1_src_value;
  let t13;
  let a1;
  let img2;
  let img2_src_value;
  let mounted;
  let dispose;
  add_render_callback(
    /*onwindowscroll*/
    ctx[6]
  );
  let each_value = (
    /*balls*/
    ctx[0]
  );
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  return {
    c() {
      div0 = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      t0 = space();
      div5 = element("div");
      div4 = element("div");
      div1 = element("div");
      h1 = element("h1");
      t1 = text("Matias Södersved");
      t2 = space();
      h2 = element("h2");
      t3 = text("Student from Aalto University");
      t4 = space();
      div2 = element("div");
      img0 = element("img");
      t5 = space();
      p0 = element("p");
      t6 = text("I'm a 3rd year computer science student at Aalto University, with minors in Data Science and\n			Mathematics. I'm a highly motivated individual who is passionate about exploring the limitless\n			possibilities that technology has to offer. During my studies, I have developed a good\n			understanding of programming languages such as Python, Scala and TypeScript, which has enabled\n			me to take on projects ranging from simple web applications to more-complex algorithms.\n			");
      br0 = element("br");
      br1 = element("br");
      t7 = text("\n			As a part of my academic journey, I have had the opportunity to work on exciting projects such\n			as the implementation of a tool for calibration technicians at Beamex. The project involved using\n			React Native to develop an android-based application for calibration technicians to perform their\n			work more efficiently. The experience allowed me to understand the significance of solving real-world\n			problems and the importance of collaboration in the process. I learned how to work as a team and\n			contribute towards a common goal.\n			");
      br2 = element("br");
      br3 = element("br");
      t8 = text("\n			One of my core strengths is my ability to work with Git and collaborate effectively with team members.\n			I understand that each team member brings their unique skill set and perspective to the table,\n			and it is crucial to consider everyone's input while working on a project. I believe that being\n			transparent, communicating effectively, and ensuring equal participation from all members of the\n			team is the key to successful collaboration.\n			");
      br4 = element("br");
      br5 = element("br");
      t9 = text("\n			I'm interested in exploring new frameworks and technologies and continuously strive to expand my\n			knowledge in the field. I strongly believe that technology has the power to bring positive change\n			to the world, and I hope to contribute to this through my work.");
      t10 = space();
      div3 = element("div");
      p1 = element("p");
      t11 = text("You can find me on:");
      t12 = space();
      a0 = element("a");
      img1 = element("img");
      t13 = space();
      a1 = element("a");
      img2 = element("img");
      this.h();
    },
    l(nodes) {
      div0 = claim_element(nodes, "DIV", { class: true, style: true });
      var div0_nodes = children(div0);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(div0_nodes);
      }
      div0_nodes.forEach(detach);
      t0 = claim_space(nodes);
      div5 = claim_element(nodes, "DIV", { class: true });
      var div5_nodes = children(div5);
      div4 = claim_element(div5_nodes, "DIV", { class: true });
      var div4_nodes = children(div4);
      div1 = claim_element(div4_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      h1 = claim_element(div1_nodes, "H1", { class: true });
      var h1_nodes = children(h1);
      t1 = claim_text(h1_nodes, "Matias Södersved");
      h1_nodes.forEach(detach);
      t2 = claim_space(div1_nodes);
      h2 = claim_element(div1_nodes, "H2", { class: true });
      var h2_nodes = children(h2);
      t3 = claim_text(h2_nodes, "Student from Aalto University");
      h2_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      t4 = claim_space(div4_nodes);
      div2 = claim_element(div4_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      img0 = claim_element(div2_nodes, "IMG", {
        id: true,
        src: true,
        alt: true,
        style: true,
        class: true
      });
      div2_nodes.forEach(detach);
      t5 = claim_space(div4_nodes);
      p0 = claim_element(div4_nodes, "P", { id: true, class: true });
      var p0_nodes = children(p0);
      t6 = claim_text(p0_nodes, "I'm a 3rd year computer science student at Aalto University, with minors in Data Science and\n			Mathematics. I'm a highly motivated individual who is passionate about exploring the limitless\n			possibilities that technology has to offer. During my studies, I have developed a good\n			understanding of programming languages such as Python, Scala and TypeScript, which has enabled\n			me to take on projects ranging from simple web applications to more-complex algorithms.\n			");
      br0 = claim_element(p0_nodes, "BR", {});
      br1 = claim_element(p0_nodes, "BR", {});
      t7 = claim_text(p0_nodes, "\n			As a part of my academic journey, I have had the opportunity to work on exciting projects such\n			as the implementation of a tool for calibration technicians at Beamex. The project involved using\n			React Native to develop an android-based application for calibration technicians to perform their\n			work more efficiently. The experience allowed me to understand the significance of solving real-world\n			problems and the importance of collaboration in the process. I learned how to work as a team and\n			contribute towards a common goal.\n			");
      br2 = claim_element(p0_nodes, "BR", {});
      br3 = claim_element(p0_nodes, "BR", {});
      t8 = claim_text(p0_nodes, "\n			One of my core strengths is my ability to work with Git and collaborate effectively with team members.\n			I understand that each team member brings their unique skill set and perspective to the table,\n			and it is crucial to consider everyone's input while working on a project. I believe that being\n			transparent, communicating effectively, and ensuring equal participation from all members of the\n			team is the key to successful collaboration.\n			");
      br4 = claim_element(p0_nodes, "BR", {});
      br5 = claim_element(p0_nodes, "BR", {});
      t9 = claim_text(p0_nodes, "\n			I'm interested in exploring new frameworks and technologies and continuously strive to expand my\n			knowledge in the field. I strongly believe that technology has the power to bring positive change\n			to the world, and I hope to contribute to this through my work.");
      p0_nodes.forEach(detach);
      t10 = claim_space(div4_nodes);
      div3 = claim_element(div4_nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      p1 = claim_element(div3_nodes, "P", { class: true });
      var p1_nodes = children(p1);
      t11 = claim_text(p1_nodes, "You can find me on:");
      p1_nodes.forEach(detach);
      t12 = claim_space(div3_nodes);
      a0 = claim_element(div3_nodes, "A", { href: true });
      var a0_nodes = children(a0);
      img1 = claim_element(a0_nodes, "IMG", { class: true, src: true, alt: true });
      a0_nodes.forEach(detach);
      t13 = claim_space(div3_nodes);
      a1 = claim_element(div3_nodes, "A", { href: true });
      var a1_nodes = children(a1);
      img2 = claim_element(a1_nodes, "IMG", { class: true, src: true, alt: true });
      a1_nodes.forEach(detach);
      div3_nodes.forEach(detach);
      div4_nodes.forEach(detach);
      div5_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "bg-lightbg dark:bg-darkbg");
      attr(div0, "style", div0_style_value = `position: absolute; z-index: -1; top: ${/*scrollY*/
      ctx[1]}px; left: 0px; width: 100%; height: 100vh; overflow: hidden; pointer-events: none`);
      attr(h1, "class", "text-gray-700 dark:text-white svelte-h91hx4");
      attr(h2, "class", "text-gray-600 dark:text-white svelte-h91hx4");
      attr(div1, "class", "nameContainer svelte-h91hx4");
      attr(img0, "id", "avatar");
      if (!src_url_equal(img0.src, img0_src_value = "/profile_avatar.jpg"))
        attr(img0, "src", img0_src_value);
      attr(img0, "alt", "Profile");
      set_style(
        img0,
        "border-radius",
        /*$imgRadius*/
        ctx[2] + "%"
      );
      attr(img0, "class", "svelte-h91hx4");
      attr(div2, "class", "imageContainer svelte-h91hx4");
      attr(p0, "id", "contentText");
      attr(p0, "class", "text-black dark:text-white svelte-h91hx4");
      attr(p1, "class", "text-black dark:text-white");
      attr(img1, "class", "socialIcon svelte-h91hx4");
      if (!src_url_equal(img1.src, img1_src_value = "/github_logo.png"))
        attr(img1, "src", img1_src_value);
      attr(img1, "alt", "Github logo");
      attr(a0, "href", "https://github.com/matiasso");
      attr(img2, "class", "socialIcon svelte-h91hx4");
      if (!src_url_equal(img2.src, img2_src_value = "/linkedin_logo.png"))
        attr(img2, "src", img2_src_value);
      attr(img2, "alt", "LinkedIn logo");
      attr(a1, "href", "https://www.linkedin.com/in/matias-sodersved/");
      attr(div3, "class", "footerContainer svelte-h91hx4");
      attr(div4, "class", "infoBoxContainer bg-white/70 dark:bg-darkwindow svelte-h91hx4");
      attr(div5, "class", "fullscreenContainer svelte-h91hx4");
    },
    m(target, anchor) {
      insert_hydration(target, div0, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div0, null);
      }
      insert_hydration(target, t0, anchor);
      insert_hydration(target, div5, anchor);
      append_hydration(div5, div4);
      append_hydration(div4, div1);
      append_hydration(div1, h1);
      append_hydration(h1, t1);
      append_hydration(div1, t2);
      append_hydration(div1, h2);
      append_hydration(h2, t3);
      append_hydration(div4, t4);
      append_hydration(div4, div2);
      append_hydration(div2, img0);
      append_hydration(div4, t5);
      append_hydration(div4, p0);
      append_hydration(p0, t6);
      append_hydration(p0, br0);
      append_hydration(p0, br1);
      append_hydration(p0, t7);
      append_hydration(p0, br2);
      append_hydration(p0, br3);
      append_hydration(p0, t8);
      append_hydration(p0, br4);
      append_hydration(p0, br5);
      append_hydration(p0, t9);
      append_hydration(div4, t10);
      append_hydration(div4, div3);
      append_hydration(div3, p1);
      append_hydration(p1, t11);
      append_hydration(div3, t12);
      append_hydration(div3, a0);
      append_hydration(a0, img1);
      append_hydration(div3, t13);
      append_hydration(div3, a1);
      append_hydration(a1, img2);
      if (!mounted) {
        dispose = [
          listen(window_1, "scroll", () => {
            scrolling = true;
            clearTimeout(scrolling_timeout);
            scrolling_timeout = setTimeout(clear_scrolling, 100);
            ctx[6]();
          }),
          listen(
            div2,
            "mouseover",
            /*squareCorners*/
            ctx[4]
          ),
          listen(
            div2,
            "focus",
            /*squareCorners*/
            ctx[4]
          ),
          listen(
            div2,
            "mouseleave",
            /*roundCorners*/
            ctx[5]
          ),
          listen(
            div2,
            "blur",
            /*roundCorners*/
            ctx[5]
          )
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & /*scrollY*/
      2 && !scrolling) {
        scrolling = true;
        clearTimeout(scrolling_timeout);
        scrollTo(
          window_1.pageXOffset,
          /*scrollY*/
          ctx2[1]
        );
        scrolling_timeout = setTimeout(clear_scrolling, 100);
      }
      if (dirty & /*balls, animationDuration*/
      1) {
        each_value = /*balls*/
        ctx2[0];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(div0, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
      if (dirty & /*scrollY*/
      2 && div0_style_value !== (div0_style_value = `position: absolute; z-index: -1; top: ${/*scrollY*/
      ctx2[1]}px; left: 0px; width: 100%; height: 100vh; overflow: hidden; pointer-events: none`)) {
        attr(div0, "style", div0_style_value);
      }
      if (dirty & /*$imgRadius*/
      4) {
        set_style(
          img0,
          "border-radius",
          /*$imgRadius*/
          ctx2[2] + "%"
        );
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div0);
      destroy_each(each_blocks, detaching);
      if (detaching)
        detach(t0);
      if (detaching)
        detach(div5);
      mounted = false;
      run_all(dispose);
    }
  };
}
const animationDuration = 15;
function instance($$self, $$props, $$invalidate) {
  let $imgRadius;
  const imgRadius = tweened(50, { duration: 1e3, easing: cubicOut });
  component_subscribe($$self, imgRadius, (value) => $$invalidate(2, $imgRadius = value));
  const squareCorners = () => {
    set_store_value(imgRadius, $imgRadius = 5, $imgRadius);
  };
  const roundCorners = () => {
    set_store_value(imgRadius, $imgRadius = 50, $imgRadius);
  };
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
  };
  let { balls = [...Array(8).keys()].map((i) => ({
    id: i,
    color: getRandomColor(),
    size: 50 + Math.random() * 200,
    location: { x: -1, y: -1 }
  })) } = $$props;
  function randomizeBallLocationsAndColors() {
    for (var i = 0; i < balls.length; i++) {
      $$invalidate(0, balls[i].color = getRandomColor(), balls);
      $$invalidate(0, balls[i].location.x = Math.random() * window.innerWidth, balls);
      $$invalidate(0, balls[i].location.y = Math.random() * window.innerHeight, balls);
    }
  }
  let scrollY = 0;
  onMount(() => {
    randomizeBallLocationsAndColors();
    const interval = setInterval(
      () => {
        randomizeBallLocationsAndColors();
      },
      animationDuration * 1e3
    );
    return () => clearInterval(interval);
  });
  function onwindowscroll() {
    $$invalidate(1, scrollY = window_1.pageYOffset);
  }
  $$self.$$set = ($$props2) => {
    if ("balls" in $$props2)
      $$invalidate(0, balls = $$props2.balls);
  };
  return [
    balls,
    scrollY,
    $imgRadius,
    imgRadius,
    squareCorners,
    roundCorners,
    onwindowscroll
  ];
}
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, { balls: 0 });
  }
}
export {
  Page as default
};
