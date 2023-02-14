import { S as SvelteComponent, i as init, s as safe_not_equal, J as add_render_callback, k as element, a as space, q as text, l as claim_element, m as children, h as detach, c as claim_space, r as claim_text, n as attr, K as src_url_equal, b as insert_hydration, E as append_hydration, L as listen, C as noop, M as destroy_each, o as onMount, N as globals } from "../../chunks/index-a013620f.js";
const _page_svelte_svelte_type_style_lang = "";
const { window: window_1 } = globals;
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[5] = list[i];
  return child_ctx;
}
function create_each_block(ctx) {
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
      ctx[5].color}; width: ${/*ball*/
      ctx[5].size}px; height: ${/*ball*/
      ctx[5].size}px; 
			position: absolute; top: ${/*ball*/
      ctx[5].location.y}px; left: ${/*ball*/
      ctx[5].location.x}px;
			border-radius:50%; filter: blur(1.5vmax); animation: up-down ${animationDuration}s infinite;`);
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & /*balls*/
      1 && div_style_value !== (div_style_value = `background: ${/*ball*/
      ctx2[5].color}; width: ${/*ball*/
      ctx2[5].size}px; height: ${/*ball*/
      ctx2[5].size}px; 
			position: absolute; top: ${/*ball*/
      ctx2[5].location.y}px; left: ${/*ball*/
      ctx2[5].location.x}px;
			border-radius:50%; filter: blur(1.5vmax); animation: up-down ${animationDuration}s infinite;`)) {
        attr(div, "style", div_style_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(div);
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
  let t9;
  let div3;
  let p1;
  let t10;
  let t11;
  let a0;
  let img1;
  let img1_src_value;
  let t12;
  let a1;
  let img2;
  let img2_src_value;
  let mounted;
  let dispose;
  add_render_callback(
    /*onwindowscroll*/
    ctx[2]
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
      t3 = text("Student from Aalto-University");
      t4 = space();
      div2 = element("div");
      img0 = element("img");
      t5 = space();
      p0 = element("p");
      t6 = text("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ornare suscipit lectus,\n			vitae pharetra massa. Aenean ligula eros, sagittis a molestie a, lobortis id quam. Fusce\n			rhoncus dolor in tempor pulvinar. Fusce in ipsum vestibulum, venenatis orci nec, auctor ante.\n			Ut nisl quam, tristique ut feugiat non, commodo ac felis. Mauris vulputate molestie massa ac\n			auctor. Etiam semper finibus felis, nec luctus nunc facilisis nec. Vivamus tristique arcu quis\n			tincidunt sollicitudin. Aliquam dignissim, justo in malesuada mollis, lacus libero eleifend\n			velit, in convallis elit tortor et leo. Maecenas efficitur erat urna, eget cursus enim\n			interdum ac. Donec quam purus, maximus ut viverra quis, bibendum non leo. Cras vulputate diam\n			in volutpat finibus. Curabitur vehicula varius risus, sit amet elementum arcu tempor\n			facilisis. Fusce fermentum malesuada leo. Duis id auctor justo, ac sodales nulla. Donec neque\n			ante, aliquet vitae erat quis, placerat imperdiet risus.\n			");
      br0 = element("br");
      br1 = element("br");
      t7 = text("\n			Suspendisse volutpat sagittis urna, sed sagittis velit venenatis a. Praesent aliquam orci non finibus\n			auctor. Maecenas quis turpis vulputate, luctus ligula sed, rhoncus quam. Aliquam erat volutpat.\n			Maecenas id orci blandit, interdum enim eu, elementum purus. Nullam varius nisi venenatis, dignissim\n			ipsum ac, molestie nulla. Nulla lacinia orci ut tincidunt vestibulum. Proin fermentum placerat\n			posuere. Morbi mattis a diam quis faucibus.\n			");
      br2 = element("br");
      br3 = element("br");
      t8 = text("\n			Etiam interdum placerat dolor nec iaculis. Aenean dapibus finibus nibh eu placerat. Sed finibus\n			metus vitae orci semper, et consectetur dui hendrerit. Maecenas consequat augue ante, ut scelerisque\n			leo ornare vitae. Praesent sit amet magna dictum, tempus est ac, vulputate ipsum. Proin congue\n			mattis consectetur. Ut aliquet ante ex, sed sodales tellus lacinia consequat. Quisque iaculis,\n			augue sed auctor aliquam, erat quam ultricies ligula, eu convallis ipsum sapien id tellus. Donec\n			elementum consectetur libero, sed tempor orci. Curabitur bibendum mi ex, quis vulputate ligula\n			pharetra et. Morbi semper tortor ac dui malesuada pretium at vitae erat. Nulla quis nulla dui.\n			Duis ac augue nec nisl suscipit tempor.");
      t9 = space();
      div3 = element("div");
      p1 = element("p");
      t10 = text("You can find me here:");
      t11 = space();
      a0 = element("a");
      img1 = element("img");
      t12 = space();
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
      t3 = claim_text(h2_nodes, "Student from Aalto-University");
      h2_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      t4 = claim_space(div4_nodes);
      div2 = claim_element(div4_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      img0 = claim_element(div2_nodes, "IMG", {
        id: true,
        src: true,
        alt: true,
        class: true
      });
      div2_nodes.forEach(detach);
      t5 = claim_space(div4_nodes);
      p0 = claim_element(div4_nodes, "P", { id: true, class: true });
      var p0_nodes = children(p0);
      t6 = claim_text(p0_nodes, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ornare suscipit lectus,\n			vitae pharetra massa. Aenean ligula eros, sagittis a molestie a, lobortis id quam. Fusce\n			rhoncus dolor in tempor pulvinar. Fusce in ipsum vestibulum, venenatis orci nec, auctor ante.\n			Ut nisl quam, tristique ut feugiat non, commodo ac felis. Mauris vulputate molestie massa ac\n			auctor. Etiam semper finibus felis, nec luctus nunc facilisis nec. Vivamus tristique arcu quis\n			tincidunt sollicitudin. Aliquam dignissim, justo in malesuada mollis, lacus libero eleifend\n			velit, in convallis elit tortor et leo. Maecenas efficitur erat urna, eget cursus enim\n			interdum ac. Donec quam purus, maximus ut viverra quis, bibendum non leo. Cras vulputate diam\n			in volutpat finibus. Curabitur vehicula varius risus, sit amet elementum arcu tempor\n			facilisis. Fusce fermentum malesuada leo. Duis id auctor justo, ac sodales nulla. Donec neque\n			ante, aliquet vitae erat quis, placerat imperdiet risus.\n			");
      br0 = claim_element(p0_nodes, "BR", {});
      br1 = claim_element(p0_nodes, "BR", {});
      t7 = claim_text(p0_nodes, "\n			Suspendisse volutpat sagittis urna, sed sagittis velit venenatis a. Praesent aliquam orci non finibus\n			auctor. Maecenas quis turpis vulputate, luctus ligula sed, rhoncus quam. Aliquam erat volutpat.\n			Maecenas id orci blandit, interdum enim eu, elementum purus. Nullam varius nisi venenatis, dignissim\n			ipsum ac, molestie nulla. Nulla lacinia orci ut tincidunt vestibulum. Proin fermentum placerat\n			posuere. Morbi mattis a diam quis faucibus.\n			");
      br2 = claim_element(p0_nodes, "BR", {});
      br3 = claim_element(p0_nodes, "BR", {});
      t8 = claim_text(p0_nodes, "\n			Etiam interdum placerat dolor nec iaculis. Aenean dapibus finibus nibh eu placerat. Sed finibus\n			metus vitae orci semper, et consectetur dui hendrerit. Maecenas consequat augue ante, ut scelerisque\n			leo ornare vitae. Praesent sit amet magna dictum, tempus est ac, vulputate ipsum. Proin congue\n			mattis consectetur. Ut aliquet ante ex, sed sodales tellus lacinia consequat. Quisque iaculis,\n			augue sed auctor aliquam, erat quam ultricies ligula, eu convallis ipsum sapien id tellus. Donec\n			elementum consectetur libero, sed tempor orci. Curabitur bibendum mi ex, quis vulputate ligula\n			pharetra et. Morbi semper tortor ac dui malesuada pretium at vitae erat. Nulla quis nulla dui.\n			Duis ac augue nec nisl suscipit tempor.");
      p0_nodes.forEach(detach);
      t9 = claim_space(div4_nodes);
      div3 = claim_element(div4_nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      p1 = claim_element(div3_nodes, "P", {});
      var p1_nodes = children(p1);
      t10 = claim_text(p1_nodes, "You can find me here:");
      p1_nodes.forEach(detach);
      t11 = claim_space(div3_nodes);
      a0 = claim_element(div3_nodes, "A", { href: true });
      var a0_nodes = children(a0);
      img1 = claim_element(a0_nodes, "IMG", {
        class: true,
        src: true,
        alt: true,
        height: true
      });
      a0_nodes.forEach(detach);
      t12 = claim_space(div3_nodes);
      a1 = claim_element(div3_nodes, "A", { href: true });
      var a1_nodes = children(a1);
      img2 = claim_element(a1_nodes, "IMG", {
        class: true,
        src: true,
        alt: true,
        height: true
      });
      a1_nodes.forEach(detach);
      div3_nodes.forEach(detach);
      div4_nodes.forEach(detach);
      div5_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "ballContainer");
      attr(div0, "style", div0_style_value = `position: absolute; top: ${/*scrollY*/
      ctx[1]}px; left: 0px; width: 100%; height: 100%; overflow: hidden; pointer-events: none`);
      attr(h1, "class", "svelte-1nq51e0");
      attr(h2, "class", "svelte-1nq51e0");
      attr(div1, "class", "nameContainer svelte-1nq51e0");
      attr(img0, "id", "avatar");
      if (!src_url_equal(img0.src, img0_src_value = "https://us.123rf.com/450wm/happyvector071/happyvector0711904/happyvector071190415714/happyvector071190415714.jpg?ver=6"))
        attr(img0, "src", img0_src_value);
      attr(img0, "alt", "Avatar template");
      attr(img0, "class", "svelte-1nq51e0");
      attr(div2, "class", "imageContainer svelte-1nq51e0");
      attr(p0, "id", "contentText");
      attr(p0, "class", "svelte-1nq51e0");
      attr(img1, "class", "socialImg svelte-1nq51e0");
      if (!src_url_equal(img1.src, img1_src_value = "https://cdn-icons-png.flaticon.com/512/25/25231.png"))
        attr(img1, "src", img1_src_value);
      attr(img1, "alt", "Github logo");
      attr(img1, "height", "50px");
      attr(a0, "href", "https://github.com/matiasso");
      attr(img2, "class", "socialImg svelte-1nq51e0");
      if (!src_url_equal(img2.src, img2_src_value = "https://cdn-icons-png.flaticon.com/512/174/174857.png"))
        attr(img2, "src", img2_src_value);
      attr(img2, "alt", "LinkedIn logo");
      attr(img2, "height", "50px");
      attr(a1, "href", "https://www.linkedin.com/in/matias-sodersved/");
      attr(div3, "class", "footerContainer svelte-1nq51e0");
      attr(div4, "class", "infoBoxContainer svelte-1nq51e0");
      attr(div5, "class", "fullscreenContainer svelte-1nq51e0");
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
      append_hydration(div4, t9);
      append_hydration(div4, div3);
      append_hydration(div3, p1);
      append_hydration(p1, t10);
      append_hydration(div3, t11);
      append_hydration(div3, a0);
      append_hydration(a0, img1);
      append_hydration(div3, t12);
      append_hydration(div3, a1);
      append_hydration(a1, img2);
      if (!mounted) {
        dispose = listen(window_1, "scroll", () => {
          scrolling = true;
          clearTimeout(scrolling_timeout);
          scrolling_timeout = setTimeout(clear_scrolling, 100);
          ctx[2]();
        });
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
      2 && div0_style_value !== (div0_style_value = `position: absolute; top: ${/*scrollY*/
      ctx2[1]}px; left: 0px; width: 100%; height: 100%; overflow: hidden; pointer-events: none`)) {
        attr(div0, "style", div0_style_value);
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
      dispose();
    }
  };
}
const animationDuration = 15;
function instance($$self, $$props, $$invalidate) {
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
  };
  let { balls = [...Array(10).keys()].map((i) => ({
    id: i,
    color: getRandomColor(),
    size: 40 + Math.random() * 100,
    location: { x: 0, y: 0 }
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
  return [balls, scrollY, onwindowscroll];
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
