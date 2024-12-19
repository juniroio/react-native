/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/index2`; params?: Router.UnknownInputParams; } | { pathname: `/index3`; params?: Router.UnknownInputParams; } | { pathname: `/index4`; params?: Router.UnknownInputParams; } | { pathname: `/index5`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/`; params?: Router.UnknownOutputParams; } | { pathname: `/index2`; params?: Router.UnknownOutputParams; } | { pathname: `/index3`; params?: Router.UnknownOutputParams; } | { pathname: `/index4`; params?: Router.UnknownOutputParams; } | { pathname: `/index5`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/${`?${string}` | `#${string}` | ''}` | `/index2${`?${string}` | `#${string}` | ''}` | `/index3${`?${string}` | `#${string}` | ''}` | `/index4${`?${string}` | `#${string}` | ''}` | `/index5${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/index2`; params?: Router.UnknownInputParams; } | { pathname: `/index3`; params?: Router.UnknownInputParams; } | { pathname: `/index4`; params?: Router.UnknownInputParams; } | { pathname: `/index5`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; };
    }
  }
}
