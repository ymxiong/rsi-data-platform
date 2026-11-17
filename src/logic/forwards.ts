type Query = Record<string, string | string[] | null | undefined>;
type State = Record<string, unknown>;
type ForwardParams = { query?: Query; state?: State };
type RouterLike = { push: (href: string) => void };

let router: RouterLike | undefined;

export const setForwardRouter = (nextRouter: RouterLike | undefined) => {
  router = nextRouter;
};

const buildHref = (pathname: string, params?: ForwardParams) => {
  const searchParams = new URLSearchParams();

  Object.entries(params?.query ?? {}).forEach(([key, value]) => {
    if (value == null) {
      return;
    }

    if (Array.isArray(value)) {
      value.forEach((item) => searchParams.append(key, item));
      return;
    }

    searchParams.set(key, value);
  });

  const queryString = searchParams.toString();
  return queryString ? `${pathname}?${queryString}` : pathname;
};

const push = (pathname: string, params?: ForwardParams) => {
  const href = buildHref(pathname, params);

  if (typeof window === 'undefined') {
    return;
  }

  if (params?.state) {
    window.sessionStorage.setItem(`forward-state:${href}`, JSON.stringify(params.state));
  }

  if (router) {
    router.push(href);
    return;
  }

  window.location.assign(href);
};
export const forward_ = (params?: ForwardParams) => {
  push("/", params);
};

