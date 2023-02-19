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
      if (!src_url_equal(img.src, img_src_value = "/projects/discord-bot/discordbot_ss" + /*imgIndex*/
      ctx[2] + ".png"))
        attr(img, "src", img_src_value);
      attr(img, "alt", "A screenshot of the discord bot commands");
      attr(img, "class", "w-3/4 my-4 object-contain rounded-lg ");
      attr(img, "width", "600");
      attr(img, "height", "200");
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
  let br4;
  let br5;
  let t3;
  let br6;
  let br7;
  let t4;
  let t5;
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
      t0 = text("Before University I learned how to program in Python with the help of online tutorials. I\n			decided to create a Discord bot, which would help me and my friends moderate our servers. The\n			bot was originally meant only for moderation commands (such as kicking users, deleting\n			messages from someone or for a certain period of time, etc.) but I quickly got more ideas what\n			the bot could do. This is where I initially realized the power of programming.\n			");
      br0 = element("br");
      br1 = element("br");
      t1 = text("\n			After some time the bot became more popular than I ever expected, and I started to get requests\n			for new features from strangers who had found my bot and wanted to use it on their servers. I was\n			happy to help, and I started to add new features to the bot.\n			");
      br2 = element("br");
      br3 = element("br");
      t2 = text("\n			After months the bot had dozens of commands, and some minigames that people could play. Some examples\n			of the minigames include TicTacToe, Connect-Four, Typeracer (where you type a given text as fast\n			as you can, and compete against others) and different kind of trivia games where the bot pulled\n			trivia questions from a free online API and the users could answer by typing the option number\n			in the chat. The bot got added into more than 30k servers, and it had over 1.1 mil unique users\n			across all the servers. At the end I also got an online friend to join the project and help me\n			with the development.\n			");
      br4 = element("br");
      br5 = element("br");
      t3 = text("\n			The project ended when Discord changed their developer terms, so that all developers who had a\n			bot in over 100 servers had to verify their account and identity. I was not willing to do this,\n			so I decided to shut the bot down and focus on different projects.\n			");
      br6 = element("br");
      br7 = element("br");
      t4 = text("\n			Here are some screenshots of the bot:");
      t5 = space();
      div = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      this.h();
    },
    l(nodes) {
      p = claim_element(nodes, "P", { class: true });
      var p_nodes = children(p);
      t0 = claim_text(p_nodes, "Before University I learned how to program in Python with the help of online tutorials. I\n			decided to create a Discord bot, which would help me and my friends moderate our servers. The\n			bot was originally meant only for moderation commands (such as kicking users, deleting\n			messages from someone or for a certain period of time, etc.) but I quickly got more ideas what\n			the bot could do. This is where I initially realized the power of programming.\n			");
      br0 = claim_element(p_nodes, "BR", {});
      br1 = claim_element(p_nodes, "BR", {});
      t1 = claim_text(p_nodes, "\n			After some time the bot became more popular than I ever expected, and I started to get requests\n			for new features from strangers who had found my bot and wanted to use it on their servers. I was\n			happy to help, and I started to add new features to the bot.\n			");
      br2 = claim_element(p_nodes, "BR", {});
      br3 = claim_element(p_nodes, "BR", {});
      t2 = claim_text(p_nodes, "\n			After months the bot had dozens of commands, and some minigames that people could play. Some examples\n			of the minigames include TicTacToe, Connect-Four, Typeracer (where you type a given text as fast\n			as you can, and compete against others) and different kind of trivia games where the bot pulled\n			trivia questions from a free online API and the users could answer by typing the option number\n			in the chat. The bot got added into more than 30k servers, and it had over 1.1 mil unique users\n			across all the servers. At the end I also got an online friend to join the project and help me\n			with the development.\n			");
      br4 = claim_element(p_nodes, "BR", {});
      br5 = claim_element(p_nodes, "BR", {});
      t3 = claim_text(p_nodes, "\n			The project ended when Discord changed their developer terms, so that all developers who had a\n			bot in over 100 servers had to verify their account and identity. I was not willing to do this,\n			so I decided to shut the bot down and focus on different projects.\n			");
      br6 = claim_element(p_nodes, "BR", {});
      br7 = claim_element(p_nodes, "BR", {});
      t4 = claim_text(p_nodes, "\n			Here are some screenshots of the bot:");
      p_nodes.forEach(detach);
      t5 = claim_space(nodes);
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
      append_hydration(p, br4);
      append_hydration(p, br5);
      append_hydration(p, t3);
      append_hydration(p, br6);
      append_hydration(p, br7);
      append_hydration(p, t4);
      insert_hydration(target, t5, anchor);
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
        detach(t5);
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
    title: "Discord bot written with Python",
    date: "2017-2018",
    logo: "/projects/discord-bot/discordbot.jpeg",
    alt: "A picture of a doge with sunglasses"
  };
  const imgCount = [1, 2, 3, 4];
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
