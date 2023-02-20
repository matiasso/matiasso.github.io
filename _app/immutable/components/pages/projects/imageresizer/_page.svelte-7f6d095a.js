import { S as SvelteComponent, i as init, s as safe_not_equal, x as create_component, y as claim_component, z as mount_component, f as transition_in, t as transition_out, A as destroy_component, E as assign, M as get_spread_update, R as get_spread_object, k as element, q as text, l as claim_element, m as children, r as claim_text, h as detach, n as attr, b as insert_hydration, H as append_hydration, C as noop } from "../../../../chunks/index-91def11a.js";
import { D as Dialog } from "../../../../chunks/dialog-9b3b9764.js";
import { P as Projectgrid } from "../../../../chunks/projectgrid-06633ab8.js";
function create_default_slot_1(ctx) {
  let p;
  let t0;
  let br0;
  let br1;
  let t1;
  let br2;
  let br3;
  return {
    c() {
      p = element("p");
      t0 = text("After getting interested in photography, I needed a quick way to resize my images to specific\n			size so that I could upload smaller images to cloud storage and share them with friends. I\n			decided to write a small program to do this for me. I used C# and Visual Studio IDE to create\n			a Windows Forms application.\n			");
      br0 = element("br");
      br1 = element("br");
      t1 = text('\n			The program allows the user to select multiple images at once, and then choose a desired resolution\n			in pixels or percentages. The user can also select whether to overwrite the existing images, or\n			to save them in a different folder. After clicking on "start", the program will start a background\n			worker, which makes sure the UI is responsive. The program will then resize all images and show\n			which images are currently being processed. There is also a progress bar to show the progress of\n			the resizing.\n			');
      br2 = element("br");
      br3 = element("br");
      this.h();
    },
    l(nodes) {
      p = claim_element(nodes, "P", { class: true });
      var p_nodes = children(p);
      t0 = claim_text(p_nodes, "After getting interested in photography, I needed a quick way to resize my images to specific\n			size so that I could upload smaller images to cloud storage and share them with friends. I\n			decided to write a small program to do this for me. I used C# and Visual Studio IDE to create\n			a Windows Forms application.\n			");
      br0 = claim_element(p_nodes, "BR", {});
      br1 = claim_element(p_nodes, "BR", {});
      t1 = claim_text(p_nodes, '\n			The program allows the user to select multiple images at once, and then choose a desired resolution\n			in pixels or percentages. The user can also select whether to overwrite the existing images, or\n			to save them in a different folder. After clicking on "start", the program will start a background\n			worker, which makes sure the UI is responsive. The program will then resize all images and show\n			which images are currently being processed. There is also a progress bar to show the progress of\n			the resizing.\n			');
      br2 = claim_element(p_nodes, "BR", {});
      br3 = claim_element(p_nodes, "BR", {});
      p_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(p, "class", "text-black dark:text-white leading-relaxed");
    },
    m(target, anchor) {
      insert_hydration(target, p, anchor);
      append_hydration(p, t0);
      append_hydration(p, br0);
      append_hydration(p, br1);
      append_hydration(p, t1);
      append_hydration(p, br2);
      append_hydration(p, br3);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(p);
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
      2) {
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
      2) {
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
    title: "Image resizer for Windows",
    date: "2017",
    logo: "/skills/csharp_logo.svg  ",
    alt: "C sharp logo"
  };
  return [projectProps];
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
