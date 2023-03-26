import { DirectiveBinding } from "vue";

export default {
  name: "observer",
  mounted(el: HTMLElement, bindings: DirectiveBinding) {
    const callback = (entries: IntersectionObserverEntry[]) => {
      const { cb, currentPage, pageLimit, total } = bindings.value;

      if (
        entries[0].isIntersecting &&
        currentPage <= Math.ceil(total / pageLimit)
      ) {
        cb();
      }
    };
    const observer = new IntersectionObserver(callback);

    observer.observe(el);
  },
};
