declare class JSEncryptRSAKey {
  constructor(key: string | object);
  private parseKey(pem: string): void | boolean;
  private getPrivateBaseKey(): string;
  getPrivateBaseKeyB64(): string;
  private getPublicBaseKey(): string;
  getPublicBaseKeyB64(): string;
  private wordwrap(str: string, width: number): string;
  getPrivateKey(): string;
  getPublicKey(): string;
  private hasPublicKeyProperty(obj: object | {}): boolean;
  private hasPrivateKeyProperty(obj: object | {}): boolean;
  private parsePropertiesFrom(obj: object): void;
}

export default class JSEncrypt {
  constructor(options?: object);
  private readonly version: string;
  readonly key: JSEncryptRSAKey | null;
  setKey(key: object | string): void;
  getKey(cb?: Function): JSEncryptRSAKey;
  setPrivateKey(key: object | string): void;
  getPrivateKey(): string;
  getPrivateKeyB64(): string;
  setPublicKey(key: object | string): void;
  getPublicKey(): string;
  getPublicKeyB64(): string;
  encrypt(str: string): string | boolean;
  decrypt(str: string): string | boolean;
  sign(str: string, digestMethod: Function, digestName: string): string | boolean;
  verify(str: string, signature: string, digestMethod: Function): boolean;
}

