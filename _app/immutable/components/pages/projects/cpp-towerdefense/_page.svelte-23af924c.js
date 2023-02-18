import { S as SvelteComponent, i as init, s as safe_not_equal, x as create_component, y as claim_component, z as mount_component, f as transition_in, t as transition_out, A as destroy_component, E as assign, M as get_spread_update, R as get_spread_object, k as element, q as text, a as space, l as claim_element, m as children, r as claim_text, h as detach, c as claim_space, n as attr, b as insert_hydration, H as append_hydration, a5 as destroy_each, a7 as src_url_equal, C as noop } from "../../../../chunks/index-91def11a.js";
import { D as Dialog } from "../../../../chunks/dialog-9b3b9764.js";
import { P as Projectgrid } from "../../../../chunks/projectgrid-06633ab8.js";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[2] = list[i];
  return child_ctx;
}
function create_each_block(ctx) {
  let img;
  let img_src_value;
  return {
    c() {
      img = element("img");
      this.h();
    },
    l(nodes) {
      img = claim_element(nodes, "IMG", {
        src: true,
        alt: true,
        class: true,
        width: true,
        height: true
      });
      this.h();
    },
    h() {
      if (!src_url_equal(img.src, img_src_value = "/projects/tower-defense/tower_defense_ss" + /*imgIndex*/
      ctx[2] + ".png"))
        attr(img, "src", img_src_value);
      attr(img, "alt", "A screenshot of the tower defense game");
      attr(img, "class", "w-3/4 my-4 object-contain rounded-lg ");
      attr(img, "width", "500");
      attr(img, "height", "500");
    },
    m(target, anchor) {
      insert_hydration(target, img, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(img);
    }
  };
}
function create_default_slot_1(ctx) {
  let p;
  let t0;
  let br0;
  let br1;
  let t1;
  let br2;
  let br3;
  let t2;
  let t3;
  let div;
  let each_value = (
    /*imgCount*/
    ctx[1]
  );
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  return {
    c() {
      p = element("p");
      t0 = text("Ut sunt consequat do qui ipsum aliquip ipsum nostrud in nostrud do id. Ipsum tempor ullamco\n			veniam occaecat esse esse culpa aliqua mollit eu. Magna minim ad aliqua ullamco occaecat.\n			");
      br0 = element("br");
      br1 = element("br");
      t1 = text("\n			Consequat anim consectetur nisi do minim est eu. Nulla nisi anim consequat in eu cillum mollit\n			occaecat aliqua amet ea. Lorem sit quis tempor Lorem ut esse id pariatur veniam. Quis dolore voluptate\n			ea occaecat esse. Ipsum consequat commodo veniam aute.\n			");
      br2 = element("br");
      br3 = element("br");
      t2 = text("\n			Here are some screenshots of the game:");
      t3 = space();
      div = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      this.h();
    },
    l(nodes) {
      p = claim_element(nodes, "P", { class: true });
      var p_nodes = children(p);
      t0 = claim_text(p_nodes, "Ut sunt consequat do qui ipsum aliquip ipsum nostrud in nostrud do id. Ipsum tempor ullamco\n			veniam occaecat esse esse culpa aliqua mollit eu. Magna minim ad aliqua ullamco occaecat.\n			");
      br0 = claim_element(p_nodes, "BR", {});
      br1 = claim_element(p_nodes, "BR", {});
      t1 = claim_text(p_nodes, "\n			Consequat anim consectetur nisi do minim est eu. Nulla nisi anim consequat in eu cillum mollit\n			occaecat aliqua amet ea. Lorem sit quis tempor Lorem ut esse id pariatur veniam. Quis dolore voluptate\n			ea occaecat esse. Ipsum consequat commodo veniam aute.\n			");
      br2 = claim_element(p_nodes, "BR", {});
      br3 = claim_element(p_nodes, "BR", {});
      t2 = claim_text(p_nodes, "\n			Here are some screenshots of the game:");
      p_nodes.forEach(detach);
      t3 = claim_space(nodes);
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(div_nodes);
      }
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(p, "class", "text-black dark:text-white leading-relaxed");
      attr(div, "class", "flex flex-row flex-wrap justify-center");
    },
    m(target, anchor) {
      insert_hydration(target, p, anchor);
      append_hydration(p, t0);
      append_hydration(p, br0);
      append_hydration(p, br1);
      append_hydration(p, t1);
      append_hydration(p, br2);
      append_hydration(p, br3);
      append_hydration(p, t2);
      insert_hydration(target, t3, anchor);
      insert_hydration(target, div, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div, null);
      }
    },
    p(ctx2, dirty) {
      if (dirty & /*imgCount*/
      2) {
        each_value = /*imgCount*/
        ctx2[1];
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
    d(detaching) {
      if (detaching)
        detach(p);
      if (detaching)
        detach(t3);
      if (detaching)
        detach(div);
      destroy_each(each_blocks, detaching);
    }
  };
}
function create_default_slot(ctx) {
  let projectgrid;
  let current;
  const projectgrid_spread_levels = [
    /*projectProps*/
    ctx[0]
  ];
  let projectgrid_props = {
    $$slots: { default: [create_default_slot_1] },
    $$scope: { ctx }
  };
  for (let i = 0; i < projectgrid_spread_levels.length; i += 1) {
    projectgrid_props = assign(projectgrid_props, projectgrid_spread_levels[i]);
  }
  projectgrid = new Projectgrid({ props: projectgrid_props });
  return {
    c() {
      create_component(projectgrid.$$.fragment);
    },
    l(nodes) {
      claim_component(projectgrid.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(projectgrid, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const projectgrid_changes = dirty & /*projectProps*/
      1 ? get_spread_update(projectgrid_spread_levels, [get_spread_object(
        /*projectProps*/
        ctx2[0]
      )]) : {};
      if (dirty & /*$$scope*/
      32) {
        projectgrid_changes.$$scope = { dirty, ctx: ctx2 };
      }
      projectgrid.$set(projectgrid_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(projectgrid.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(projectgrid.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(projectgrid, detaching);
    }
  };
}
function create_fragment(ctx) {
  let dialog;
  let current;
  dialog = new Dialog({
    props: {
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(dialog.$$.fragment);
    },
    l(nodes) {
      claim_component(dialog.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(dialog, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const dialog_changes = {};
      if (dirty & /*$$scope*/
      32) {
        dialog_changes.$$scope = { dirty, ctx: ctx2 };
      }
      dialog.$set(dialog_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(dialog.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(dialog.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(dialog, detaching);
    }
  };
}
function instance($$self) {
  const projectProps = {
    title: "Tower Defense game written in C++",
    date: "2021 September - 2021 December",
    logo: "/skills/cpp_logo.png",
    alt: "A picture of C++ logo"
  };
  const imgCount = [1, 2];
  return [projectProps, imgCount];
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
