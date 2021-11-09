// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class transfer extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("owner", Value.fromBytes(Bytes.empty()));
    this.set("_to", Value.fromBytes(Bytes.empty()));
    this.set("_value", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save transfer entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save transfer entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("transfer", id.toString(), this);
    }
  }

  static load(id: string): transfer | null {
    return changetype<transfer | null>(store.get("transfer", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value!.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get _to(): Bytes {
    let value = this.get("_to");
    return value!.toBytes();
  }

  set _to(value: Bytes) {
    this.set("_to", Value.fromBytes(value));
  }

  get _value(): BigInt {
    let value = this.get("_value");
    return value!.toBigInt();
  }

  set _value(value: BigInt) {
    this.set("_value", Value.fromBigInt(value));
  }
}

export class approval extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("owner", Value.fromBytes(Bytes.empty()));
    this.set("_spender", Value.fromBytes(Bytes.empty()));
    this.set("_value", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save approval entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save approval entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("approval", id.toString(), this);
    }
  }

  static load(id: string): approval | null {
    return changetype<approval | null>(store.get("approval", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value!.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get _spender(): Bytes {
    let value = this.get("_spender");
    return value!.toBytes();
  }

  set _spender(value: Bytes) {
    this.set("_spender", Value.fromBytes(value));
  }

  get _value(): BigInt {
    let value = this.get("_value");
    return value!.toBigInt();
  }

  set _value(value: BigInt) {
    this.set("_value", Value.fromBigInt(value));
  }
}
