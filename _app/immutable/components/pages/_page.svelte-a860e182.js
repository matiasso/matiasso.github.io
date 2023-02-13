import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, q as text, a as space, l as claim_element, m as children, r as claim_text, h as detach, c as claim_space, n as attr, J as src_url_equal, b as insert_hydration, E as append_hydration, C as noop } from "../../chunks/index-7668a465.js";
const _page_svelte_svelte_type_style_lang = "";
function create_fragment(ctx) {
  let div4;
  let div3;
  let div0;
  let h1;
  let t0;
  let t1;
  let h2;
  let t2;
  let t3;
  let div1;
  let img0;
  let img0_src_value;
  let t4;
  let p0;
  let t5;
  let br0;
  let br1;
  let t6;
  let br2;
  let br3;
  let t7;
  let t8;
  let div2;
  let p1;
  let t9;
  let t10;
  let a0;
  let img1;
  let img1_src_value;
  let t11;
  let a1;
  let img2;
  let img2_src_value;
  return {
    c() {
      div4 = element("div");
      div3 = element("div");
      div0 = element("div");
      h1 = element("h1");
      t0 = text("Matias Södersved");
      t1 = space();
      h2 = element("h2");
      t2 = text("Student from Aalto-University");
      t3 = space();
      div1 = element("div");
      img0 = element("img");
      t4 = space();
      p0 = element("p");
      t5 = text("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ornare suscipit lectus,\n			vitae pharetra massa. Aenean ligula eros, sagittis a molestie a, lobortis id quam. Fusce\n			rhoncus dolor in tempor pulvinar. Fusce in ipsum vestibulum, venenatis orci nec, auctor ante.\n			Ut nisl quam, tristique ut feugiat non, commodo ac felis. Mauris vulputate molestie massa ac\n			auctor. Etiam semper finibus felis, nec luctus nunc facilisis nec. Vivamus tristique arcu quis\n			tincidunt sollicitudin. Aliquam dignissim, justo in malesuada mollis, lacus libero eleifend\n			velit, in convallis elit tortor et leo. Maecenas efficitur erat urna, eget cursus enim\n			interdum ac. Donec quam purus, maximus ut viverra quis, bibendum non leo. Cras vulputate diam\n			in volutpat finibus. Curabitur vehicula varius risus, sit amet elementum arcu tempor\n			facilisis. Fusce fermentum malesuada leo. Duis id auctor justo, ac sodales nulla. Donec neque\n			ante, aliquet vitae erat quis, placerat imperdiet risus.\n			");
      br0 = element("br");
      br1 = element("br");
      t6 = text("\n			Suspendisse volutpat sagittis urna, sed sagittis velit venenatis a. Praesent aliquam orci non finibus\n			auctor. Maecenas quis turpis vulputate, luctus ligula sed, rhoncus quam. Aliquam erat volutpat.\n			Maecenas id orci blandit, interdum enim eu, elementum purus. Nullam varius nisi venenatis, dignissim\n			ipsum ac, molestie nulla. Nulla lacinia orci ut tincidunt vestibulum. Proin fermentum placerat\n			posuere. Morbi mattis a diam quis faucibus.\n			");
      br2 = element("br");
      br3 = element("br");
      t7 = text("\n			Etiam interdum placerat dolor nec iaculis. Aenean dapibus finibus nibh eu placerat. Sed finibus\n			metus vitae orci semper, et consectetur dui hendrerit. Maecenas consequat augue ante, ut scelerisque\n			leo ornare vitae. Praesent sit amet magna dictum, tempus est ac, vulputate ipsum. Proin congue\n			mattis consectetur. Ut aliquet ante ex, sed sodales tellus lacinia consequat. Quisque iaculis,\n			augue sed auctor aliquam, erat quam ultricies ligula, eu convallis ipsum sapien id tellus. Donec\n			elementum consectetur libero, sed tempor orci. Curabitur bibendum mi ex, quis vulputate ligula\n			pharetra et. Morbi semper tortor ac dui malesuada pretium at vitae erat. Nulla quis nulla dui.\n			Duis ac augue nec nisl suscipit tempor.");
      t8 = space();
      div2 = element("div");
      p1 = element("p");
      t9 = text("You can find me here:");
      t10 = space();
      a0 = element("a");
      img1 = element("img");
      t11 = space();
      a1 = element("a");
      img2 = element("img");
      this.h();
    },
    l(nodes) {
      div4 = claim_element(nodes, "DIV", { class: true });
      var div4_nodes = children(div4);
      div3 = claim_element(div4_nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      div0 = claim_element(div3_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      h1 = claim_element(div0_nodes, "H1", { class: true });
      var h1_nodes = children(h1);
      t0 = claim_text(h1_nodes, "Matias Södersved");
      h1_nodes.forEach(detach);
      t1 = claim_space(div0_nodes);
      h2 = claim_element(div0_nodes, "H2", { class: true });
      var h2_nodes = children(h2);
      t2 = claim_text(h2_nodes, "Student from Aalto-University");
      h2_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      t3 = claim_space(div3_nodes);
      div1 = claim_element(div3_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      img0 = claim_element(div1_nodes, "IMG", {
        id: true,
        src: true,
        alt: true,
        class: true
      });
      div1_nodes.forEach(detach);
      t4 = claim_space(div3_nodes);
      p0 = claim_element(div3_nodes, "P", { id: true, class: true });
      var p0_nodes = children(p0);
      t5 = claim_text(p0_nodes, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ornare suscipit lectus,\n			vitae pharetra massa. Aenean ligula eros, sagittis a molestie a, lobortis id quam. Fusce\n			rhoncus dolor in tempor pulvinar. Fusce in ipsum vestibulum, venenatis orci nec, auctor ante.\n			Ut nisl quam, tristique ut feugiat non, commodo ac felis. Mauris vulputate molestie massa ac\n			auctor. Etiam semper finibus felis, nec luctus nunc facilisis nec. Vivamus tristique arcu quis\n			tincidunt sollicitudin. Aliquam dignissim, justo in malesuada mollis, lacus libero eleifend\n			velit, in convallis elit tortor et leo. Maecenas efficitur erat urna, eget cursus enim\n			interdum ac. Donec quam purus, maximus ut viverra quis, bibendum non leo. Cras vulputate diam\n			in volutpat finibus. Curabitur vehicula varius risus, sit amet elementum arcu tempor\n			facilisis. Fusce fermentum malesuada leo. Duis id auctor justo, ac sodales nulla. Donec neque\n			ante, aliquet vitae erat quis, placerat imperdiet risus.\n			");
      br0 = claim_element(p0_nodes, "BR", {});
      br1 = claim_element(p0_nodes, "BR", {});
      t6 = claim_text(p0_nodes, "\n			Suspendisse volutpat sagittis urna, sed sagittis velit venenatis a. Praesent aliquam orci non finibus\n			auctor. Maecenas quis turpis vulputate, luctus ligula sed, rhoncus quam. Aliquam erat volutpat.\n			Maecenas id orci blandit, interdum enim eu, elementum purus. Nullam varius nisi venenatis, dignissim\n			ipsum ac, molestie nulla. Nulla lacinia orci ut tincidunt vestibulum. Proin fermentum placerat\n			posuere. Morbi mattis a diam quis faucibus.\n			");
      br2 = claim_element(p0_nodes, "BR", {});
      br3 = claim_element(p0_nodes, "BR", {});
      t7 = claim_text(p0_nodes, "\n			Etiam interdum placerat dolor nec iaculis. Aenean dapibus finibus nibh eu placerat. Sed finibus\n			metus vitae orci semper, et consectetur dui hendrerit. Maecenas consequat augue ante, ut scelerisque\n			leo ornare vitae. Praesent sit amet magna dictum, tempus est ac, vulputate ipsum. Proin congue\n			mattis consectetur. Ut aliquet ante ex, sed sodales tellus lacinia consequat. Quisque iaculis,\n			augue sed auctor aliquam, erat quam ultricies ligula, eu convallis ipsum sapien id tellus. Donec\n			elementum consectetur libero, sed tempor orci. Curabitur bibendum mi ex, quis vulputate ligula\n			pharetra et. Morbi semper tortor ac dui malesuada pretium at vitae erat. Nulla quis nulla dui.\n			Duis ac augue nec nisl suscipit tempor.");
      p0_nodes.forEach(detach);
      t8 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      p1 = claim_element(div2_nodes, "P", {});
      var p1_nodes = children(p1);
      t9 = claim_text(p1_nodes, "You can find me here:");
      p1_nodes.forEach(detach);
      t10 = claim_space(div2_nodes);
      a0 = claim_element(div2_nodes, "A", { href: true });
      var a0_nodes = children(a0);
      img1 = claim_element(a0_nodes, "IMG", {
        class: true,
        src: true,
        alt: true,
        height: true
      });
      a0_nodes.forEach(detach);
      t11 = claim_space(div2_nodes);
      a1 = claim_element(div2_nodes, "A", { href: true });
      var a1_nodes = children(a1);
      img2 = claim_element(a1_nodes, "IMG", {
        class: true,
        src: true,
        alt: true,
        height: true
      });
      a1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      div3_nodes.forEach(detach);
      div4_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(h1, "class", "svelte-oxunom");
      attr(h2, "class", "svelte-oxunom");
      attr(div0, "class", "nameContainer svelte-oxunom");
      attr(img0, "id", "avatar");
      if (!src_url_equal(img0.src, img0_src_value = "https://us.123rf.com/450wm/happyvector071/happyvector0711904/happyvector071190415714/happyvector071190415714.jpg?ver=6"))
        attr(img0, "src", img0_src_value);
      attr(img0, "alt", "Avatar template");
      attr(img0, "class", "svelte-oxunom");
      attr(div1, "class", "imageContainer svelte-oxunom");
      attr(p0, "id", "contentText");
      attr(p0, "class", "svelte-oxunom");
      attr(img1, "class", "socialImg svelte-oxunom");
      if (!src_url_equal(img1.src, img1_src_value = "https://cdn-icons-png.flaticon.com/512/25/25231.png"))
        attr(img1, "src", img1_src_value);
      attr(img1, "alt", "Github logo");
      attr(img1, "height", "50px");
      attr(a0, "href", "https://github.com/matiasso");
      attr(img2, "class", "socialImg svelte-oxunom");
      if (!src_url_equal(img2.src, img2_src_value = "https://cdn-icons-png.flaticon.com/512/174/174857.png"))
        attr(img2, "src", img2_src_value);
      attr(img2, "alt", "LinkedIn logo");
      attr(img2, "height", "50px");
      attr(a1, "href", "https://www.linkedin.com/in/matias-sodersved/");
      attr(div2, "class", "footerContainer svelte-oxunom");
      attr(div3, "class", "infoBoxContainer svelte-oxunom");
      attr(div4, "class", "fullscreenContainer svelte-oxunom");
    },
    m(target, anchor) {
      insert_hydration(target, div4, anchor);
      append_hydration(div4, div3);
      append_hydration(div3, div0);
      append_hydration(div0, h1);
      append_hydration(h1, t0);
      append_hydration(div0, t1);
      append_hydration(div0, h2);
      append_hydration(h2, t2);
      append_hydration(div3, t3);
      append_hydration(div3, div1);
      append_hydration(div1, img0);
      append_hydration(div3, t4);
      append_hydration(div3, p0);
      append_hydration(p0, t5);
      append_hydration(p0, br0);
      append_hydration(p0, br1);
      append_hydration(p0, t6);
      append_hydration(p0, br2);
      append_hydration(p0, br3);
      append_hydration(p0, t7);
      append_hydration(div3, t8);
      append_hydration(div3, div2);
      append_hydration(div2, p1);
      append_hydration(p1, t9);
      append_hydration(div2, t10);
      append_hydration(div2, a0);
      append_hydration(a0, img1);
      append_hydration(div2, t11);
      append_hydration(div2, a1);
      append_hydration(a1, img2);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div4);
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
