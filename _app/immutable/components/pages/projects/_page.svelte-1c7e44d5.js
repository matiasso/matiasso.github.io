import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, l as claim_element, m as children, h as detach, n as attr, b as insert_hydration, C as noop, a6 as destroy_each, a as space, q as text, c as claim_space, r as claim_text, a5 as src_url_equal, H as append_hydration } from "../../../chunks/index-81d22fb2.js";
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
    description: "This website was built in just 5 days using SvelteKit, TypeScript and TailwindCSS.",
    date: "2023 February",
    src: "/skills/svelte_logo.png",
    alt: "Svelte logo",
    href: "/projects/website-portfolio",
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
    href: "/projects/scala-regression",
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
    title: "TicTacToe game with Scala",
    description: "A simple TicTacToe game written in Scala using the ScalaFX library. The game has an AI that uses the minimax algorithm with 3 unique difficulties. It also includes 2-player mode.",
    date: "2021 December",
    src: "/skills/scala_logo.png",
    alt: "Scala logo",
    href: "/projects/scala-regression",
    isPrivate: false
  },
  {
    title: "Party game with Java (Android only)",
    description: "A party game built with Java and Android Studio. The game visualizes and simulates a regular deck of cards. All the card rules are customizable.",
    date: "2017 - 2018",
    src: "/skills/java_logo.png",
    alt: "Java logo",
    href: "/projects/partygame-android",
    isPrivate: false
  },
  {
    title: "Discord bot with Python",
    description: "I built a simple Discord bot for moderation commands, but quickly it got more popular and I kept adding more features.",
    date: "2017 - 2018",
    src: "/skills/python_logo.png",
    alt: "Python logo",
    href: "/projects/discord-bot",
    isPrivate: false
  },
  {
    title: "Image resizer for Windows",
    description: "Built a simple image resizer with a GUI. The app was built with C# using Visual Studio. The app lets you select multiple images at once, and choose the desired resolution in either absolute pixels or relative percentages. The GUI shows a realtime progressbar and thumbnails of the images that are currently being handled.",
    date: "2017",
    src: "/skills/csharp_logo.svg",
    alt: "CSharp logo",
    href: "/projects/imageresizer",
    isPrivate: false
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
  return child_ctx;
}
function create_each_block(ctx) {
  let div1;
  let a0;
  let img;
  let img_src_value;
  let t0;
  let a1;
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
  let p;
  let t5_value = (
    /*description*/
    ctx[3] + ""
  );
  let t5;
  let t6;
  return {
    c() {
      div1 = element("div");
      a0 = element("a");
      img = element("img");
      t0 = space();
      a1 = element("a");
      div0 = element("div");
      h3 = element("h3");
      t1 = text(t1_value);
      t2 = space();
      time = element("time");
      t3 = text(t3_value);
      t4 = space();
      p = element("p");
      t5 = text(t5_value);
      t6 = space();
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      a0 = claim_element(div1_nodes, "A", { href: true });
      var a0_nodes = children(a0);
      img = claim_element(a0_nodes, "IMG", { class: true, src: true, alt: true });
      a0_nodes.forEach(detach);
      t0 = claim_space(div1_nodes);
      a1 = claim_element(div1_nodes, "A", { href: true, class: true });
      var a1_nodes = children(a1);
      div0 = claim_element(a1_nodes, "DIV", { class: true });
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
      a1_nodes.forEach(detach);
      t4 = claim_space(div1_nodes);
      p = claim_element(div1_nodes, "P", { class: true });
      var p_nodes = children(p);
      t5 = claim_text(p_nodes, t5_value);
      p_nodes.forEach(detach);
      t6 = claim_space(div1_nodes);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(img, "class", "techImage svelte-6zxr8p");
      if (!src_url_equal(img.src, img_src_value = /*src*/
      ctx[4]))
        attr(img, "src", img_src_value);
      attr(
        img,
        "alt",
        /*alt*/
        ctx[5]
      );
      attr(
        a0,
        "href",
        /*href*/
        ctx[2]
      );
      attr(h3, "class", "flex items-center mb-1 text-2xl font-semibold text-gray-900 dark:text-white");
      attr(time, "class", "block mb-2 text-md font-normal leading-none text-gray-400 dark:text-gray-500");
      attr(div0, "class", "informationContainer flex flex-col items-start justify-start svelte-6zxr8p");
      attr(
        a1,
        "href",
        /*href*/
        ctx[2]
      );
      attr(a1, "class", "w-fit");
      attr(p, "class", "descriptionText text-gray-900 dark:text-white svelte-6zxr8p");
      attr(div1, "class", "containerGrid p-6 mb-6 bg-gray-50 w-[90vw] rounded-lg border border-gray-100 dark:bg-slate-900 dark:border-gray-700 svelte-6zxr8p");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, a0);
      append_hydration(a0, img);
      append_hydration(div1, t0);
      append_hydration(div1, a1);
      append_hydration(a1, div0);
      append_hydration(div0, h3);
      append_hydration(h3, t1);
      append_hydration(div0, t2);
      append_hydration(div0, time);
      append_hydration(time, t3);
      append_hydration(div1, t4);
      append_hydration(div1, p);
      append_hydration(p, t5);
      append_hydration(div1, t6);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(div1);
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
      attr(div, "class", "flex flex-col items-center w-full justify-center p-6");
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
