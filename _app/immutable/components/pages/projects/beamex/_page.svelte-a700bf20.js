import { S as SvelteComponent, i as init, s as safe_not_equal, x as create_component, y as claim_component, z as mount_component, f as transition_in, t as transition_out, A as destroy_component, E as assign, M as get_spread_update, R as get_spread_object, k as element, q as text, a as space, l as claim_element, m as children, r as claim_text, h as detach, c as claim_space, n as attr, a7 as src_url_equal, b as insert_hydration, H as append_hydration, C as noop } from "../../../../chunks/index-91def11a.js";
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
  let t2;
  let br4;
  let br5;
  let t3;
  let t4;
  let img;
  let img_src_value;
  return {
    c() {
      p = element("p");
      t0 = text('I got the chance to work with Beamex through a "Software project" course at Aalto University.\n			The course is taught in collaboration with multiple companies, and the students are divided\n			into groups of roughly 8 students. Each group is assigned a company to work with, and the\n			company provides a real-world problem for the students to work on. My group consists of 7\n			computer science students.\n			');
      br0 = element("br");
      br1 = element("br");
      t1 = text("\n			Beamex is a company that develops and sells calibration solutions and equipment for industrial\n			use. Calibration technicians are responsible for ensuring that equipment is calibrated correctly\n			and operates as intended. The calibration process can be complex and requires technicians to be\n			precise in their work. That's where our application comes in. It is an application that runs on\n			a Head Mounted Display (HMD) and provides the technician with instructions about the calibration\n			process. It also provides the technician with a way to record the results of the calibration process\n			via the camera module. The images are then processed with an AI model, which returns the output\n			values to the user who then checks that everything looks fine. There is no need to manually write\n			any values down, which reduces the risk of human error.\n			");
      br2 = element("br");
      br3 = element("br");
      t2 = text("\n			Our goal during this course is not to build a final product, but instead build a proof-of-concept\n			that demonstrates the feasibility of the idea. We are using React Native and TypeScript, because\n			the HMD is an android-based device. This way we can also enable the users to run the application\n			on other Android or even iOS devices.\n			");
      br4 = element("br");
      br5 = element("br");
      t3 = text("\n			The challenge in this project is probably the fact that we are developing a project primarily for\n			a HMD device. The interactions are very different from a regular mobile device, where you can tap\n			on the screen, because on this specific HMD you can only interact with the device by using voice\n			commands. The screen is also very small, which forces us to design the application in a way that\n			all the information is easily accessible and understandable.");
      t4 = space();
      img = element("img");
      this.h();
    },
    l(nodes) {
      p = claim_element(nodes, "P", { class: true });
      var p_nodes = children(p);
      t0 = claim_text(p_nodes, 'I got the chance to work with Beamex through a "Software project" course at Aalto University.\n			The course is taught in collaboration with multiple companies, and the students are divided\n			into groups of roughly 8 students. Each group is assigned a company to work with, and the\n			company provides a real-world problem for the students to work on. My group consists of 7\n			computer science students.\n			');
      br0 = claim_element(p_nodes, "BR", {});
      br1 = claim_element(p_nodes, "BR", {});
      t1 = claim_text(p_nodes, "\n			Beamex is a company that develops and sells calibration solutions and equipment for industrial\n			use. Calibration technicians are responsible for ensuring that equipment is calibrated correctly\n			and operates as intended. The calibration process can be complex and requires technicians to be\n			precise in their work. That's where our application comes in. It is an application that runs on\n			a Head Mounted Display (HMD) and provides the technician with instructions about the calibration\n			process. It also provides the technician with a way to record the results of the calibration process\n			via the camera module. The images are then processed with an AI model, which returns the output\n			values to the user who then checks that everything looks fine. There is no need to manually write\n			any values down, which reduces the risk of human error.\n			");
      br2 = claim_element(p_nodes, "BR", {});
      br3 = claim_element(p_nodes, "BR", {});
      t2 = claim_text(p_nodes, "\n			Our goal during this course is not to build a final product, but instead build a proof-of-concept\n			that demonstrates the feasibility of the idea. We are using React Native and TypeScript, because\n			the HMD is an android-based device. This way we can also enable the users to run the application\n			on other Android or even iOS devices.\n			");
      br4 = claim_element(p_nodes, "BR", {});
      br5 = claim_element(p_nodes, "BR", {});
      t3 = claim_text(p_nodes, "\n			The challenge in this project is probably the fact that we are developing a project primarily for\n			a HMD device. The interactions are very different from a regular mobile device, where you can tap\n			on the screen, because on this specific HMD you can only interact with the device by using voice\n			commands. The screen is also very small, which forces us to design the application in a way that\n			all the information is easily accessible and understandable.");
      p_nodes.forEach(detach);
      t4 = claim_space(nodes);
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
      attr(p, "class", "text-black dark:text-white leading-relaxed");
      if (!src_url_equal(img.src, img_src_value = "/projects/beamex/ar_tech.jpg"))
        attr(img, "src", img_src_value);
      attr(img, "alt", "A user with Head mounted device");
      attr(img, "class", "w-3/4 my-4 object-contain rounded-lg mx-auto");
      attr(img, "width", "600");
      attr(img, "height", "200");
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
      insert_hydration(target, t4, anchor);
      insert_hydration(target, img, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(p);
      if (detaching)
        detach(t4);
      if (detaching)
        detach(img);
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
    title: "Software project at Beamex",
    date: "2022-2023",
    logo: "/projects/beamex/beamex_logo.svg",
    alt: "Beamex logo"
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
