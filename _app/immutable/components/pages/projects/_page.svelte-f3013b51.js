import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, l as claim_element, m as children, h as detach, n as attr, b as insert_hydration, C as noop, a5 as destroy_each, a as space, q as text, c as claim_space, r as claim_text, a7 as src_url_equal, H as append_hydration, P as svg_element, Q as claim_svg_element } from "../../../chunks/index-91def11a.js";
const projects = [
  {
    title: "Software project at Beamex",
    description: "Working in a group of 7 CS students, our task is to build a calibration helper application for Android-based glasses with React Native and TypeScript. (Still ongoing)",
    date: "2022 September - 2023 April",
    src: "/skills/react-native_logo.png",
    alt: "React Native logo",
    href: "/projects/beamex",
    isPrivate: true
  },
  {
    title: "This website",
    /* TODO: Update how many days this took when it is "ready" */
    description: "This website was built in just 6 days using SvelteKit, TypeScript and TailwindCSS. Note that I had no prior experience with Svelte or TailwindCSS before starting this project.",
    date: "2023 February",
    src: "/skills/svelte_logo.png",
    alt: "Svelte logo",
    href: "https://github.com/matiasso/matiasso.github.io",
    isPrivate: false
  },
  {
    title: "TicTacToe game with Scala",
    description: "A simple TicTacToe game written in Scala using the ScalaFX library. The game has an AI that uses the minimax algorithm with 3 unique difficulties. It also includes 2-player mode.",
    date: "2021 December",
    src: "/skills/scala_logo.png",
    alt: "Scala logo",
    href: "https://github.com/matiasso/TicTacToe",
    isPrivate: false
  },
  {
    title: "Tower Defense game with C++",
    description: "As a team of 4 people we built a Tower Defense game in C++ using the SFML library. There are different levels which vary in difficulty and the game has a highscore system.",
    date: "2021 September - 2021 December",
    src: "/skills/cpp_logo.png",
    alt: "C++ logo",
    href: "/projects/cpp-towerdefense",
    isPrivate: true
  },
  {
    title: "Regression visualizer with Scala",
    description: "A part of a programming course. The app was built with ScalaFX. It lets the user read data and plot linear or exponential regression. There's also a bunch of customization features for the plot. And most importantly there is a dark mode toggle.",
    date: "2021 March - 2021 May",
    src: "/skills/scala_logo.png",
    alt: "Scala logo",
    href: "https://github.com/matiasso/regression_visualizer",
    isPrivate: false
  },
  {
    title: "Text-based adventure game with Scala",
    description: "Worked as a pair with a friend from Aalto University. The game was text-based adventure game in Scala. We used the ScalaFX library to build the GUI, but wanted to keep the app UI as close to the terminal as possible. That's why we only used ASCII art. We ended up winning a prize for it since the teaching staff liked it so much.	",
    date: "2020 November - 2020 December",
    src: "/skills/scala_logo.png",
    alt: "Scala logo",
    href: "/projects/text-adventure-game",
    isPrivate: false
  },
  {
    title: "Party game with Java (Android only)",
    description: "A party game built with Java and Android Studio. The game visualizes and simulates a regular deck of cards. All the card rules are customizable.",
    date: "2019 - 2020",
    src: "/skills/java_logo.png",
    alt: "Java logo",
    href: "https://github.com/matiasso/juomapeli_android",
    isPrivate: false
  },
  {
    title: "Discord bot with Python",
    description: "I built a simple Discord bot for moderation commands, but it quickly got more popular and I kept adding more features.",
    date: "2017 - 2018",
    src: "/skills/python_logo.png",
    alt: "Python logo",
    href: "/projects/discord-bot",
    isPrivate: true
  },
  {
    title: "Image resizer for Windows",
    description: "Built a simple image resizer with a GUI. It was built with C# using Visual Studio. The app lets you select multiple images at once, and choose the desired resolution in either absolute pixels or relative percentages. The GUI shows a realtime progressbar and thumbnails of the images that are currently being handled.",
    date: "2017",
    src: "/skills/csharp_logo.svg",
    alt: "CSharp logo",
    href: "/projects/imageresizer",
    isPrivate: true
  }
];
const _page_svelte_svelte_type_style_lang = "";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[0] = list[i].title;
  child_ctx[1] = list[i].date;
  child_ctx[2] = list[i].href;
  child_ctx[3] = list[i].description;
  child_ctx[4] = list[i].src;
  child_ctx[5] = list[i].alt;
  child_ctx[6] = list[i].isPrivate;
  return child_ctx;
}
function create_else_block(ctx) {
  let svg;
  let path0;
  let path1;
  let t;
  return {
    c() {
      svg = svg_element("svg");
      path0 = svg_element("path");
      path1 = svg_element("path");
      t = text("\n						Public repo: View on GitHub");
      this.h();
    },
    l(nodes) {
      svg = claim_svg_element(nodes, "svg", {
        class: true,
        width: true,
        height: true,
        viewBox: true,
        fill: true,
        xmlns: true
      });
      var svg_nodes = children(svg);
      path0 = claim_svg_element(svg_nodes, "path", {
        d: true,
        "stroke-width": true,
        "stroke-linecap": true,
        "stroke-linejoin": true
      });
      children(path0).forEach(detach);
      path1 = claim_svg_element(svg_nodes, "path", {
        d: true,
        "stroke-width": true,
        "stroke-linecap": true,
        "stroke-linejoin": true
      });
      children(path1).forEach(detach);
      svg_nodes.forEach(detach);
      t = claim_text(nodes, "\n						Public repo: View on GitHub");
      this.h();
    },
    h() {
      attr(path0, "d", "M12 5C5.63636 5 2 12 2 12C2 12 5.63636 19 12 19C18.3636 19 22 12 22 12C22 12 18.3636 5 12 5Z");
      attr(path0, "stroke-width", "1.5");
      attr(path0, "stroke-linecap", "round");
      attr(path0, "stroke-linejoin", "round");
      attr(path1, "d", "M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z");
      attr(path1, "stroke-width", "1.5");
      attr(path1, "stroke-linecap", "round");
      attr(path1, "stroke-linejoin", "round");
      attr(svg, "class", "h-5 aspect-square object-contain stroke-black dark:stroke-white");
      attr(svg, "width", "40");
      attr(svg, "height", "40");
      attr(svg, "viewBox", "0 0 24 24");
      attr(svg, "fill", "none");
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(target, anchor) {
      insert_hydration(target, svg, anchor);
      append_hydration(svg, path0);
      append_hydration(svg, path1);
      insert_hydration(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(svg);
      if (detaching)
        detach(t);
    }
  };
}
function create_if_block(ctx) {
  let svg;
  let path;
  let t;
  return {
    c() {
      svg = svg_element("svg");
      path = svg_element("path");
      t = text("\n						Private repo: Show more info");
      this.h();
    },
    l(nodes) {
      svg = claim_svg_element(nodes, "svg", {
        class: true,
        width: true,
        height: true,
        viewBox: true,
        fill: true,
        xmlns: true
      });
      var svg_nodes = children(svg);
      path = claim_svg_element(svg_nodes, "path", {
        d: true,
        "stroke-width": true,
        "stroke-linecap": true,
        "stroke-linejoin": true
      });
      children(path).forEach(detach);
      svg_nodes.forEach(detach);
      t = claim_text(nodes, "\n						Private repo: Show more info");
      this.h();
    },
    h() {
      attr(path, "d", "M20 14.8335C21.3082 13.3317 22 12 22 12C22 12 18.3636 5 12 5C11.6588 5 11.3254 5.02013 11 5.05822C10.6578 5.09828 10.3244 5.15822 10 5.23552M12 9C12.3506 9 12.6872 9.06015 13 9.17071C13.8524 9.47199 14.528 10.1476 14.8293 11C14.9398 11.3128 15 11.6494 15 12M3 3L21 21M12 15C11.6494 15 11.3128 14.9398 11 14.8293C10.1476 14.528 9.47198 13.8524 9.1707 13C9.11386 12.8392 9.07034 12.6721 9.04147 12.5M4.14701 9C3.83877 9.34451 3.56234 9.68241 3.31864 10C2.45286 11.1282 2 12 2 12C2 12 5.63636 19 12 19C12.3412 19 12.6746 18.9799 13 18.9418");
      attr(path, "stroke-width", "1.5");
      attr(path, "stroke-linecap", "round");
      attr(path, "stroke-linejoin", "round");
      attr(svg, "class", "h-5 aspect-square object-contain stroke-black dark:stroke-white");
      attr(svg, "width", "40");
      attr(svg, "height", "40");
      attr(svg, "viewBox", "0 0 24 24");
      attr(svg, "fill", "none");
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(target, anchor) {
      insert_hydration(target, svg, anchor);
      append_hydration(svg, path);
      insert_hydration(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(svg);
      if (detaching)
        detach(t);
    }
  };
}
function create_each_block(ctx) {
  let a;
  let div1;
  let img;
  let img_src_value;
  let t0;
  let div0;
  let h3;
  let t1_value = (
    /*title*/
    ctx[0] + ""
  );
  let t1;
  let t2;
  let time;
  let t3_value = (
    /*date*/
    ctx[1] + ""
  );
  let t3;
  let t4;
  let p0;
  let t5_value = (
    /*description*/
    ctx[3] + ""
  );
  let t5;
  let t6;
  let p1;
  let t7;
  function select_block_type(ctx2, dirty) {
    if (
      /*isPrivate*/
      ctx2[6]
    )
      return create_if_block;
    return create_else_block;
  }
  let current_block_type = select_block_type(ctx);
  let if_block = current_block_type(ctx);
  return {
    c() {
      a = element("a");
      div1 = element("div");
      img = element("img");
      t0 = space();
      div0 = element("div");
      h3 = element("h3");
      t1 = text(t1_value);
      t2 = space();
      time = element("time");
      t3 = text(t3_value);
      t4 = space();
      p0 = element("p");
      t5 = text(t5_value);
      t6 = space();
      p1 = element("p");
      if_block.c();
      t7 = space();
      this.h();
    },
    l(nodes) {
      a = claim_element(nodes, "A", { href: true });
      var a_nodes = children(a);
      div1 = claim_element(a_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      img = claim_element(div1_nodes, "IMG", {
        class: true,
        src: true,
        alt: true,
        height: true,
        width: true
      });
      t0 = claim_space(div1_nodes);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      h3 = claim_element(div0_nodes, "H3", { class: true });
      var h3_nodes = children(h3);
      t1 = claim_text(h3_nodes, t1_value);
      h3_nodes.forEach(detach);
      t2 = claim_space(div0_nodes);
      time = claim_element(div0_nodes, "TIME", { class: true });
      var time_nodes = children(time);
      t3 = claim_text(time_nodes, t3_value);
      time_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      t4 = claim_space(div1_nodes);
      p0 = claim_element(div1_nodes, "P", { class: true });
      var p0_nodes = children(p0);
      t5 = claim_text(p0_nodes, t5_value);
      p0_nodes.forEach(detach);
      t6 = claim_space(div1_nodes);
      p1 = claim_element(div1_nodes, "P", { class: true });
      var p1_nodes = children(p1);
      if_block.l(p1_nodes);
      p1_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      t7 = claim_space(a_nodes);
      a_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(img, "class", "techImage svelte-1t5uk00");
      if (!src_url_equal(img.src, img_src_value = /*src*/
      ctx[4]))
        attr(img, "src", img_src_value);
      attr(
        img,
        "alt",
        /*alt*/
        ctx[5]
      );
      attr(img, "height", "512");
      attr(img, "width", "512");
      attr(h3, "class", "flex items-center mb-1 text-2xl font-semibold text-gray-900 dark:text-white");
      attr(time, "class", "block mb-2 text-md font-normal leading-none text-gray-400 dark:text-gray-500");
      attr(div0, "class", "informationContainer flex flex-col items-start justify-start svelte-1t5uk00");
      attr(p0, "class", "descriptionText text-gray-900 dark:text-white svelte-1t5uk00");
      attr(p1, "class", "footerText flex flex-row items-center text-md font-normal leading-none text-gray-400 dark:text-gray-500 svelte-1t5uk00");
      attr(div1, "class", "containerGrid p-6 w-[90vw] rounded-lg border bg-white border-gray-200 hover:bg-gray-100 dark:bg-slate-900 dark:border-gray-700 dark:hover:bg-slate-700 svelte-1t5uk00");
      attr(
        a,
        "href",
        /*href*/
        ctx[2]
      );
    },
    m(target, anchor) {
      insert_hydration(target, a, anchor);
      append_hydration(a, div1);
      append_hydration(div1, img);
      append_hydration(div1, t0);
      append_hydration(div1, div0);
      append_hydration(div0, h3);
      append_hydration(h3, t1);
      append_hydration(div0, t2);
      append_hydration(div0, time);
      append_hydration(time, t3);
      append_hydration(div1, t4);
      append_hydration(div1, p0);
      append_hydration(p0, t5);
      append_hydration(div1, t6);
      append_hydration(div1, p1);
      if_block.m(p1, null);
      append_hydration(a, t7);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(a);
      if_block.d();
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
      attr(div, "class", "flex flex-col items-center w-full justify-center p-6 gap-6");
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
