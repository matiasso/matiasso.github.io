import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, q as text, a as space, l as claim_element, m as children, r as claim_text, h as detach, c as claim_space, b as insert_hydration, O as append_hydration, u as set_data, C as noop, n as attr, X as destroy_each, Y as getContext, W as src_url_equal, F as listen } from "../../../chunks/index-046539a1.js";
function create_fragment$1(ctx) {
  let h1;
  let t0;
  let t1;
  let p;
  let t2;
  return {
    c() {
      h1 = element("h1");
      t0 = text(
        /*title*/
        ctx[0]
      );
      t1 = space();
      p = element("p");
      t2 = text(
        /*description*/
        ctx[1]
      );
    },
    l(nodes) {
      h1 = claim_element(nodes, "H1", {});
      var h1_nodes = children(h1);
      t0 = claim_text(
        h1_nodes,
        /*title*/
        ctx[0]
      );
      h1_nodes.forEach(detach);
      t1 = claim_space(nodes);
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t2 = claim_text(
        p_nodes,
        /*description*/
        ctx[1]
      );
      p_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, h1, anchor);
      append_hydration(h1, t0);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, p, anchor);
      append_hydration(p, t2);
    },
    p(ctx2, [dirty]) {
      if (dirty & /*title*/
      1)
        set_data(
          t0,
          /*title*/
          ctx2[0]
        );
      if (dirty & /*description*/
      2)
        set_data(
          t2,
          /*description*/
          ctx2[1]
        );
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(h1);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(p);
    }
  };
}
function instance$1($$self, $$props, $$invalidate) {
  let { title = "Skill title" } = $$props;
  let { description = "Skill description" } = $$props;
  $$self.$$set = ($$props2) => {
    if ("title" in $$props2)
      $$invalidate(0, title = $$props2.title);
    if ("description" in $$props2)
      $$invalidate(1, description = $$props2.description);
  };
  return [title, description];
}
class Skill_popup extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, { title: 0, description: 1 });
  }
}
const _page_svelte_svelte_type_style_lang = "";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[6] = list[i];
  return child_ctx;
}
function get_each_context_1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[6] = list[i];
  return child_ctx;
}
function get_each_context_2(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[6] = list[i];
  return child_ctx;
}
function create_each_block_2(ctx) {
  let div;
  let button;
  let img;
  let img_src_value;
  let t0;
  let p;
  let t1_value = (
    /*skill*/
    ctx[6].name + ""
  );
  let t1;
  let t2;
  let mounted;
  let dispose;
  function click_handler() {
    return (
      /*click_handler*/
      ctx[2](
        /*skill*/
        ctx[6]
      )
    );
  }
  return {
    c() {
      div = element("div");
      button = element("button");
      img = element("img");
      t0 = space();
      p = element("p");
      t1 = text(t1_value);
      t2 = space();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      button = claim_element(div_nodes, "BUTTON", { class: true });
      var button_nodes = children(button);
      img = claim_element(button_nodes, "IMG", { class: true, src: true, alt: true });
      button_nodes.forEach(detach);
      t0 = claim_space(div_nodes);
      p = claim_element(div_nodes, "P", {});
      var p_nodes = children(p);
      t1 = claim_text(p_nodes, t1_value);
      p_nodes.forEach(detach);
      t2 = claim_space(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(img, "class", "skillImgIcon svelte-1lbnnri");
      if (!src_url_equal(img.src, img_src_value = /*skill*/
      ctx[6].img))
        attr(img, "src", img_src_value);
      attr(
        img,
        "alt",
        /*skill*/
        ctx[6].alt
      );
      attr(button, "class", "skillImgHolder svelte-1lbnnri");
      attr(div, "class", "skillContainer svelte-1lbnnri");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, button);
      append_hydration(button, img);
      append_hydration(div, t0);
      append_hydration(div, p);
      append_hydration(p, t1);
      append_hydration(div, t2);
      if (!mounted) {
        dispose = listen(button, "click", click_handler);
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      mounted = false;
      dispose();
    }
  };
}
function create_each_block_1(ctx) {
  let div;
  let button;
  let img;
  let img_src_value;
  let t0;
  let p;
  let t1_value = (
    /*skill*/
    ctx[6].name + ""
  );
  let t1;
  let t2;
  let mounted;
  let dispose;
  function click_handler_1() {
    return (
      /*click_handler_1*/
      ctx[3](
        /*skill*/
        ctx[6]
      )
    );
  }
  return {
    c() {
      div = element("div");
      button = element("button");
      img = element("img");
      t0 = space();
      p = element("p");
      t1 = text(t1_value);
      t2 = space();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      button = claim_element(div_nodes, "BUTTON", { class: true });
      var button_nodes = children(button);
      img = claim_element(button_nodes, "IMG", { class: true, src: true, alt: true });
      button_nodes.forEach(detach);
      t0 = claim_space(div_nodes);
      p = claim_element(div_nodes, "P", {});
      var p_nodes = children(p);
      t1 = claim_text(p_nodes, t1_value);
      p_nodes.forEach(detach);
      t2 = claim_space(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(img, "class", "skillImgIcon svelte-1lbnnri");
      if (!src_url_equal(img.src, img_src_value = /*skill*/
      ctx[6].img))
        attr(img, "src", img_src_value);
      attr(
        img,
        "alt",
        /*skill*/
        ctx[6].alt
      );
      attr(button, "class", "skillImgHolder svelte-1lbnnri");
      attr(div, "class", "skillContainer svelte-1lbnnri");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, button);
      append_hydration(button, img);
      append_hydration(div, t0);
      append_hydration(div, p);
      append_hydration(p, t1);
      append_hydration(div, t2);
      if (!mounted) {
        dispose = listen(button, "click", click_handler_1);
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      mounted = false;
      dispose();
    }
  };
}
function create_each_block(ctx) {
  let div;
  let button;
  let img;
  let img_src_value;
  let t0;
  let p;
  let t1_value = (
    /*skill*/
    ctx[6].name + ""
  );
  let t1;
  let t2;
  let mounted;
  let dispose;
  function click_handler_2() {
    return (
      /*click_handler_2*/
      ctx[4](
        /*skill*/
        ctx[6]
      )
    );
  }
  return {
    c() {
      div = element("div");
      button = element("button");
      img = element("img");
      t0 = space();
      p = element("p");
      t1 = text(t1_value);
      t2 = space();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      button = claim_element(div_nodes, "BUTTON", { class: true });
      var button_nodes = children(button);
      img = claim_element(button_nodes, "IMG", { class: true, src: true, alt: true });
      button_nodes.forEach(detach);
      t0 = claim_space(div_nodes);
      p = claim_element(div_nodes, "P", {});
      var p_nodes = children(p);
      t1 = claim_text(p_nodes, t1_value);
      p_nodes.forEach(detach);
      t2 = claim_space(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(img, "class", "skillImgIcon svelte-1lbnnri");
      if (!src_url_equal(img.src, img_src_value = /*skill*/
      ctx[6].img))
        attr(img, "src", img_src_value);
      attr(
        img,
        "alt",
        /*skill*/
        ctx[6].alt
      );
      attr(button, "class", "skillImgHolder svelte-1lbnnri");
      attr(div, "class", "skillContainer svelte-1lbnnri");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, button);
      append_hydration(button, img);
      append_hydration(div, t0);
      append_hydration(div, p);
      append_hydration(p, t1);
      append_hydration(div, t2);
      if (!mounted) {
        dispose = listen(button, "click", click_handler_2);
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      mounted = false;
      dispose();
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
  let each_value_2 = (
    /*skills*/
    ctx[1].programming
  );
  let each_blocks_2 = [];
  for (let i = 0; i < each_value_2.length; i += 1) {
    each_blocks_2[i] = create_each_block_2(get_each_context_2(ctx, each_value_2, i));
  }
  let each_value_1 = (
    /*skills*/
    ctx[1].useful
  );
  let each_blocks_1 = [];
  for (let i = 0; i < each_value_1.length; i += 1) {
    each_blocks_1[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
  }
  let each_value = (
    /*skills*/
    ctx[1].other
  );
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
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
      attr(h10, "class", "svelte-1lbnnri");
      attr(div0, "class", "skillTypeContainer svelte-1lbnnri");
      attr(h11, "class", "svelte-1lbnnri");
      attr(div1, "class", "skillTypeContainer svelte-1lbnnri");
      attr(h12, "class", "svelte-1lbnnri");
      attr(div2, "class", "skillTypeContainer svelte-1lbnnri");
      attr(div3, "class", "fullscreenContainer svelte-1lbnnri");
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
    },
    p(ctx2, [dirty]) {
      if (dirty & /*skills, openModal*/
      3) {
        each_value_2 = /*skills*/
        ctx2[1].programming;
        let i;
        for (i = 0; i < each_value_2.length; i += 1) {
          const child_ctx = get_each_context_2(ctx2, each_value_2, i);
          if (each_blocks_2[i]) {
            each_blocks_2[i].p(child_ctx, dirty);
          } else {
            each_blocks_2[i] = create_each_block_2(child_ctx);
            each_blocks_2[i].c();
            each_blocks_2[i].m(div0, null);
          }
        }
        for (; i < each_blocks_2.length; i += 1) {
          each_blocks_2[i].d(1);
        }
        each_blocks_2.length = each_value_2.length;
      }
      if (dirty & /*skills, openModal*/
      3) {
        each_value_1 = /*skills*/
        ctx2[1].useful;
        let i;
        for (i = 0; i < each_value_1.length; i += 1) {
          const child_ctx = get_each_context_1(ctx2, each_value_1, i);
          if (each_blocks_1[i]) {
            each_blocks_1[i].p(child_ctx, dirty);
          } else {
            each_blocks_1[i] = create_each_block_1(child_ctx);
            each_blocks_1[i].c();
            each_blocks_1[i].m(div1, null);
          }
        }
        for (; i < each_blocks_1.length; i += 1) {
          each_blocks_1[i].d(1);
        }
        each_blocks_1.length = each_value_1.length;
      }
      if (dirty & /*skills, openModal*/
      3) {
        each_value = /*skills*/
        ctx2[1].other;
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(div2, null);
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
        detach(div3);
      destroy_each(each_blocks_2, detaching);
      destroy_each(each_blocks_1, detaching);
      destroy_each(each_blocks, detaching);
    }
  };
}
function instance($$self) {
  const { open } = getContext("simple-modal");
  const openModal = (props) => {
    open(Skill_popup, props);
  };
  const skills = {
    programming: [
      {
        name: "Scala",
        img: "/skills/scala_logo.png",
        alt: "Scala logo",
        description: `Scala is maybe one of my strongest programming languages, because at Aalto-University 
				most of the programming courses require you to write Scala code, so I have became quite familiar with it.`
      },
      {
        name: "Python",
        img: "/skills/python_logo.png",
        alt: "Python logo",
        description: `Python was the first programming language that I learned back in 2018, and I have been using it for small everyday scripts since then. 
					I have also used it in the "Machine learning" course at Aalto-University, where we learned some basics of scikit-learn library.`
      },
      {
        name: "Typescript",
        img: "/skills/typescript_logo.png",
        alt: "Typescript logo",
        description: `TypeScript is quite new addition to my skills. I have completed the "Web Software Development" course at Aalto-University (2021-2022), 
				where we learned some JavaScript. After that I learned the basics of TypeScript during a "Software project" course at Aalto-University (2022-2023). 
				During that course we worked as a 7 member team and built an application for Android-based glasses with React Native and TypeScript.
				This website is also in-fact built with Typescript (and Svelte).`
      },
      {
        name: "React",
        img: "/skills/react-native_logo.png",
        alt: "React logo",
        description: `I got to know React and React Native during a "Software project" course at Aalto-University (2022-2023). 
				During that project we worked as a 7 member team and built an application for Android-based glasses with React Native and TypeScript.`
      },
      {
        name: "Svelte",
        img: "/skills/svelte_logo.png",
        alt: "Svelte logo",
        description: `After learning React and React Native I decided to try something new, and heard about Svelte. 
				This website is built with Svelte (and TypeScript). So far I'm still a beginner with Svelte, but I'm really enjoying it.`
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
        description: `I have completed the "Basics of C++ course, which also included a group project, 
				in which we built a simple Tower Defense game.`
      }
    ],
    useful: [
      {
        name: "Git",
        img: "/skills/git_logo.png",
        alt: "Git logo",
        description: `I have used Git for version control in most of my personal projects. 
				I have also used Git for version control during all the group projects at Aalto-University.`
      },
      {
        name: "Figma",
        img: "/skills/figma_logo.svg",
        alt: "Figma logo",
        description: `Figma is a tool that I really love. I have used it for designing this website, 
				and for sketching out some design visions during our group projects at Aalto-University.`
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
        description: `I have learned the basics of SQL during 2022, when I had "Databases" -course at Aalto-University. We had lots of exercises, 
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
  const click_handler = (skill) => openModal({
    title: `About ${skill.name}`,
    description: `${skill.description}`
  });
  const click_handler_1 = (skill) => openModal({
    title: `About ${skill.name}`,
    description: `${skill.description}`
  });
  const click_handler_2 = (skill) => openModal({
    title: `About ${skill.name}`,
    description: `${skill.description}`
  });
  return [openModal, skills, click_handler, click_handler_1, click_handler_2];
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
