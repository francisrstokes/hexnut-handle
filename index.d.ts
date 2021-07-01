// Type definitions for Hexnut Handle
// Project: https://github.com/francisrstokes/hexnut-handle/
// Definitions by:
//  - Francis Stokes <https://github.com/francisrstokes/

export declare type MiddlewareFn<Ctx> = (ctx: Ctx, next: ()=>void) => void;
export declare type MessageCheckFn = (message: any) => boolean;

declare function connect<Ctx>(connectionHandler: MiddlewareFn<Ctx>): MiddlewareFn<Ctx>;
declare function message<Ctx>(messageHandler: MiddlewareFn<Ctx>): MiddlewareFn<Ctx>;
declare function closing<Ctx>(closingHandler: MiddlewareFn<Ctx>): MiddlewareFn<Ctx>;
declare function matchMessage<Ctx>(messageCheck: MessageCheckFn, messageHandler: MiddlewareFn<Ctx>): MiddlewareFn<Ctx>;

export default {
  connect,
  message,
  closing,
  matchMessage
};
