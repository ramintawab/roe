/// <reference types="chai" />

declare module 'chai-jest-snapshot' {
  export = chaiJestSnapshot;

  function chaiJestSnapshot(chai: any, utils: any): void;

  namespace chaiJestSnapshot {
    function configureUsingMochaContext(context: any): void;
    function setFilename(snapshotFilename: string): void;
    function setTestName(snapshotName: string): void;
  }

  global {
    namespace Chai {
      // tslint:disable-next-line:interface-name
      interface Assertion {
        matchSnapshot(snapshotFilename?: string | boolean, snapshotName?: string, update?: boolean): Assertion;
      }
    }
  }

}
