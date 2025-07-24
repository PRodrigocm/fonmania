
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model UsuarioAdmin
 * 
 */
export type UsuarioAdmin = $Result.DefaultSelection<Prisma.$UsuarioAdminPayload>
/**
 * Model ProductoGeneral
 * 
 */
export type ProductoGeneral = $Result.DefaultSelection<Prisma.$ProductoGeneralPayload>
/**
 * Model Celular
 * 
 */
export type Celular = $Result.DefaultSelection<Prisma.$CelularPayload>
/**
 * Model Accesorio
 * 
 */
export type Accesorio = $Result.DefaultSelection<Prisma.$AccesorioPayload>
/**
 * Model Pedido
 * 
 */
export type Pedido = $Result.DefaultSelection<Prisma.$PedidoPayload>
/**
 * Model ItemPedido
 * 
 */
export type ItemPedido = $Result.DefaultSelection<Prisma.$ItemPedidoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more UsuarioAdmins
 * const usuarioAdmins = await prisma.usuarioAdmin.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more UsuarioAdmins
   * const usuarioAdmins = await prisma.usuarioAdmin.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.usuarioAdmin`: Exposes CRUD operations for the **UsuarioAdmin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UsuarioAdmins
    * const usuarioAdmins = await prisma.usuarioAdmin.findMany()
    * ```
    */
  get usuarioAdmin(): Prisma.UsuarioAdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productoGeneral`: Exposes CRUD operations for the **ProductoGeneral** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductoGenerals
    * const productoGenerals = await prisma.productoGeneral.findMany()
    * ```
    */
  get productoGeneral(): Prisma.ProductoGeneralDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.celular`: Exposes CRUD operations for the **Celular** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Celulars
    * const celulars = await prisma.celular.findMany()
    * ```
    */
  get celular(): Prisma.CelularDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.accesorio`: Exposes CRUD operations for the **Accesorio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accesorios
    * const accesorios = await prisma.accesorio.findMany()
    * ```
    */
  get accesorio(): Prisma.AccesorioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pedido`: Exposes CRUD operations for the **Pedido** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pedidos
    * const pedidos = await prisma.pedido.findMany()
    * ```
    */
  get pedido(): Prisma.PedidoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.itemPedido`: Exposes CRUD operations for the **ItemPedido** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ItemPedidos
    * const itemPedidos = await prisma.itemPedido.findMany()
    * ```
    */
  get itemPedido(): Prisma.ItemPedidoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    UsuarioAdmin: 'UsuarioAdmin',
    ProductoGeneral: 'ProductoGeneral',
    Celular: 'Celular',
    Accesorio: 'Accesorio',
    Pedido: 'Pedido',
    ItemPedido: 'ItemPedido'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    fonmania?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "usuarioAdmin" | "productoGeneral" | "celular" | "accesorio" | "pedido" | "itemPedido"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      UsuarioAdmin: {
        payload: Prisma.$UsuarioAdminPayload<ExtArgs>
        fields: Prisma.UsuarioAdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioAdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioAdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioAdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioAdminPayload>
          }
          findFirst: {
            args: Prisma.UsuarioAdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioAdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioAdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioAdminPayload>
          }
          findMany: {
            args: Prisma.UsuarioAdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioAdminPayload>[]
          }
          create: {
            args: Prisma.UsuarioAdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioAdminPayload>
          }
          createMany: {
            args: Prisma.UsuarioAdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioAdminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioAdminPayload>[]
          }
          delete: {
            args: Prisma.UsuarioAdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioAdminPayload>
          }
          update: {
            args: Prisma.UsuarioAdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioAdminPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioAdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioAdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioAdminUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioAdminPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioAdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioAdminPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuarioAdmin>
          }
          groupBy: {
            args: Prisma.UsuarioAdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioAdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioAdminCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioAdminCountAggregateOutputType> | number
          }
        }
      }
      ProductoGeneral: {
        payload: Prisma.$ProductoGeneralPayload<ExtArgs>
        fields: Prisma.ProductoGeneralFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductoGeneralFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoGeneralPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductoGeneralFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoGeneralPayload>
          }
          findFirst: {
            args: Prisma.ProductoGeneralFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoGeneralPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductoGeneralFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoGeneralPayload>
          }
          findMany: {
            args: Prisma.ProductoGeneralFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoGeneralPayload>[]
          }
          create: {
            args: Prisma.ProductoGeneralCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoGeneralPayload>
          }
          createMany: {
            args: Prisma.ProductoGeneralCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductoGeneralCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoGeneralPayload>[]
          }
          delete: {
            args: Prisma.ProductoGeneralDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoGeneralPayload>
          }
          update: {
            args: Prisma.ProductoGeneralUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoGeneralPayload>
          }
          deleteMany: {
            args: Prisma.ProductoGeneralDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductoGeneralUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductoGeneralUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoGeneralPayload>[]
          }
          upsert: {
            args: Prisma.ProductoGeneralUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoGeneralPayload>
          }
          aggregate: {
            args: Prisma.ProductoGeneralAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductoGeneral>
          }
          groupBy: {
            args: Prisma.ProductoGeneralGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductoGeneralGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductoGeneralCountArgs<ExtArgs>
            result: $Utils.Optional<ProductoGeneralCountAggregateOutputType> | number
          }
        }
      }
      Celular: {
        payload: Prisma.$CelularPayload<ExtArgs>
        fields: Prisma.CelularFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CelularFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CelularPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CelularFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CelularPayload>
          }
          findFirst: {
            args: Prisma.CelularFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CelularPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CelularFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CelularPayload>
          }
          findMany: {
            args: Prisma.CelularFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CelularPayload>[]
          }
          create: {
            args: Prisma.CelularCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CelularPayload>
          }
          createMany: {
            args: Prisma.CelularCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CelularCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CelularPayload>[]
          }
          delete: {
            args: Prisma.CelularDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CelularPayload>
          }
          update: {
            args: Prisma.CelularUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CelularPayload>
          }
          deleteMany: {
            args: Prisma.CelularDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CelularUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CelularUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CelularPayload>[]
          }
          upsert: {
            args: Prisma.CelularUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CelularPayload>
          }
          aggregate: {
            args: Prisma.CelularAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCelular>
          }
          groupBy: {
            args: Prisma.CelularGroupByArgs<ExtArgs>
            result: $Utils.Optional<CelularGroupByOutputType>[]
          }
          count: {
            args: Prisma.CelularCountArgs<ExtArgs>
            result: $Utils.Optional<CelularCountAggregateOutputType> | number
          }
        }
      }
      Accesorio: {
        payload: Prisma.$AccesorioPayload<ExtArgs>
        fields: Prisma.AccesorioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccesorioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccesorioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccesorioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccesorioPayload>
          }
          findFirst: {
            args: Prisma.AccesorioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccesorioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccesorioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccesorioPayload>
          }
          findMany: {
            args: Prisma.AccesorioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccesorioPayload>[]
          }
          create: {
            args: Prisma.AccesorioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccesorioPayload>
          }
          createMany: {
            args: Prisma.AccesorioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccesorioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccesorioPayload>[]
          }
          delete: {
            args: Prisma.AccesorioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccesorioPayload>
          }
          update: {
            args: Prisma.AccesorioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccesorioPayload>
          }
          deleteMany: {
            args: Prisma.AccesorioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccesorioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccesorioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccesorioPayload>[]
          }
          upsert: {
            args: Prisma.AccesorioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccesorioPayload>
          }
          aggregate: {
            args: Prisma.AccesorioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccesorio>
          }
          groupBy: {
            args: Prisma.AccesorioGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccesorioGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccesorioCountArgs<ExtArgs>
            result: $Utils.Optional<AccesorioCountAggregateOutputType> | number
          }
        }
      }
      Pedido: {
        payload: Prisma.$PedidoPayload<ExtArgs>
        fields: Prisma.PedidoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PedidoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PedidoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          findFirst: {
            args: Prisma.PedidoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PedidoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          findMany: {
            args: Prisma.PedidoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>[]
          }
          create: {
            args: Prisma.PedidoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          createMany: {
            args: Prisma.PedidoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PedidoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>[]
          }
          delete: {
            args: Prisma.PedidoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          update: {
            args: Prisma.PedidoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          deleteMany: {
            args: Prisma.PedidoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PedidoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PedidoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>[]
          }
          upsert: {
            args: Prisma.PedidoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          aggregate: {
            args: Prisma.PedidoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePedido>
          }
          groupBy: {
            args: Prisma.PedidoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PedidoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PedidoCountArgs<ExtArgs>
            result: $Utils.Optional<PedidoCountAggregateOutputType> | number
          }
        }
      }
      ItemPedido: {
        payload: Prisma.$ItemPedidoPayload<ExtArgs>
        fields: Prisma.ItemPedidoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemPedidoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemPedidoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload>
          }
          findFirst: {
            args: Prisma.ItemPedidoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemPedidoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload>
          }
          findMany: {
            args: Prisma.ItemPedidoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload>[]
          }
          create: {
            args: Prisma.ItemPedidoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload>
          }
          createMany: {
            args: Prisma.ItemPedidoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItemPedidoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload>[]
          }
          delete: {
            args: Prisma.ItemPedidoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload>
          }
          update: {
            args: Prisma.ItemPedidoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload>
          }
          deleteMany: {
            args: Prisma.ItemPedidoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemPedidoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ItemPedidoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload>[]
          }
          upsert: {
            args: Prisma.ItemPedidoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload>
          }
          aggregate: {
            args: Prisma.ItemPedidoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItemPedido>
          }
          groupBy: {
            args: Prisma.ItemPedidoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemPedidoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemPedidoCountArgs<ExtArgs>
            result: $Utils.Optional<ItemPedidoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    usuarioAdmin?: UsuarioAdminOmit
    productoGeneral?: ProductoGeneralOmit
    celular?: CelularOmit
    accesorio?: AccesorioOmit
    pedido?: PedidoOmit
    itemPedido?: ItemPedidoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ProductoGeneralCountOutputType
   */

  export type ProductoGeneralCountOutputType = {
    items: number
  }

  export type ProductoGeneralCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | ProductoGeneralCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * ProductoGeneralCountOutputType without action
   */
  export type ProductoGeneralCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoGeneralCountOutputType
     */
    select?: ProductoGeneralCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductoGeneralCountOutputType without action
   */
  export type ProductoGeneralCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemPedidoWhereInput
  }


  /**
   * Count Type PedidoCountOutputType
   */

  export type PedidoCountOutputType = {
    items: number
  }

  export type PedidoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | PedidoCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * PedidoCountOutputType without action
   */
  export type PedidoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoCountOutputType
     */
    select?: PedidoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PedidoCountOutputType without action
   */
  export type PedidoCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemPedidoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model UsuarioAdmin
   */

  export type AggregateUsuarioAdmin = {
    _count: UsuarioAdminCountAggregateOutputType | null
    _avg: UsuarioAdminAvgAggregateOutputType | null
    _sum: UsuarioAdminSumAggregateOutputType | null
    _min: UsuarioAdminMinAggregateOutputType | null
    _max: UsuarioAdminMaxAggregateOutputType | null
  }

  export type UsuarioAdminAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuarioAdminSumAggregateOutputType = {
    id: number | null
  }

  export type UsuarioAdminMinAggregateOutputType = {
    id: number | null
    correo: string | null
    contrasena: string | null
    creadoEn: Date | null
  }

  export type UsuarioAdminMaxAggregateOutputType = {
    id: number | null
    correo: string | null
    contrasena: string | null
    creadoEn: Date | null
  }

  export type UsuarioAdminCountAggregateOutputType = {
    id: number
    correo: number
    contrasena: number
    creadoEn: number
    _all: number
  }


  export type UsuarioAdminAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioAdminSumAggregateInputType = {
    id?: true
  }

  export type UsuarioAdminMinAggregateInputType = {
    id?: true
    correo?: true
    contrasena?: true
    creadoEn?: true
  }

  export type UsuarioAdminMaxAggregateInputType = {
    id?: true
    correo?: true
    contrasena?: true
    creadoEn?: true
  }

  export type UsuarioAdminCountAggregateInputType = {
    id?: true
    correo?: true
    contrasena?: true
    creadoEn?: true
    _all?: true
  }

  export type UsuarioAdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsuarioAdmin to aggregate.
     */
    where?: UsuarioAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsuarioAdmins to fetch.
     */
    orderBy?: UsuarioAdminOrderByWithRelationInput | UsuarioAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsuarioAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsuarioAdmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UsuarioAdmins
    **/
    _count?: true | UsuarioAdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioAdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioAdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioAdminMaxAggregateInputType
  }

  export type GetUsuarioAdminAggregateType<T extends UsuarioAdminAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuarioAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuarioAdmin[P]>
      : GetScalarType<T[P], AggregateUsuarioAdmin[P]>
  }




  export type UsuarioAdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioAdminWhereInput
    orderBy?: UsuarioAdminOrderByWithAggregationInput | UsuarioAdminOrderByWithAggregationInput[]
    by: UsuarioAdminScalarFieldEnum[] | UsuarioAdminScalarFieldEnum
    having?: UsuarioAdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioAdminCountAggregateInputType | true
    _avg?: UsuarioAdminAvgAggregateInputType
    _sum?: UsuarioAdminSumAggregateInputType
    _min?: UsuarioAdminMinAggregateInputType
    _max?: UsuarioAdminMaxAggregateInputType
  }

  export type UsuarioAdminGroupByOutputType = {
    id: number
    correo: string
    contrasena: string
    creadoEn: Date
    _count: UsuarioAdminCountAggregateOutputType | null
    _avg: UsuarioAdminAvgAggregateOutputType | null
    _sum: UsuarioAdminSumAggregateOutputType | null
    _min: UsuarioAdminMinAggregateOutputType | null
    _max: UsuarioAdminMaxAggregateOutputType | null
  }

  type GetUsuarioAdminGroupByPayload<T extends UsuarioAdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioAdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioAdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioAdminGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioAdminGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioAdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    correo?: boolean
    contrasena?: boolean
    creadoEn?: boolean
  }, ExtArgs["result"]["usuarioAdmin"]>

  export type UsuarioAdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    correo?: boolean
    contrasena?: boolean
    creadoEn?: boolean
  }, ExtArgs["result"]["usuarioAdmin"]>

  export type UsuarioAdminSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    correo?: boolean
    contrasena?: boolean
    creadoEn?: boolean
  }, ExtArgs["result"]["usuarioAdmin"]>

  export type UsuarioAdminSelectScalar = {
    id?: boolean
    correo?: boolean
    contrasena?: boolean
    creadoEn?: boolean
  }

  export type UsuarioAdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "correo" | "contrasena" | "creadoEn", ExtArgs["result"]["usuarioAdmin"]>

  export type $UsuarioAdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UsuarioAdmin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      correo: string
      contrasena: string
      creadoEn: Date
    }, ExtArgs["result"]["usuarioAdmin"]>
    composites: {}
  }

  type UsuarioAdminGetPayload<S extends boolean | null | undefined | UsuarioAdminDefaultArgs> = $Result.GetResult<Prisma.$UsuarioAdminPayload, S>

  type UsuarioAdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioAdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioAdminCountAggregateInputType | true
    }

  export interface UsuarioAdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UsuarioAdmin'], meta: { name: 'UsuarioAdmin' } }
    /**
     * Find zero or one UsuarioAdmin that matches the filter.
     * @param {UsuarioAdminFindUniqueArgs} args - Arguments to find a UsuarioAdmin
     * @example
     * // Get one UsuarioAdmin
     * const usuarioAdmin = await prisma.usuarioAdmin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioAdminFindUniqueArgs>(args: SelectSubset<T, UsuarioAdminFindUniqueArgs<ExtArgs>>): Prisma__UsuarioAdminClient<$Result.GetResult<Prisma.$UsuarioAdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UsuarioAdmin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioAdminFindUniqueOrThrowArgs} args - Arguments to find a UsuarioAdmin
     * @example
     * // Get one UsuarioAdmin
     * const usuarioAdmin = await prisma.usuarioAdmin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioAdminFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioAdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioAdminClient<$Result.GetResult<Prisma.$UsuarioAdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UsuarioAdmin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAdminFindFirstArgs} args - Arguments to find a UsuarioAdmin
     * @example
     * // Get one UsuarioAdmin
     * const usuarioAdmin = await prisma.usuarioAdmin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioAdminFindFirstArgs>(args?: SelectSubset<T, UsuarioAdminFindFirstArgs<ExtArgs>>): Prisma__UsuarioAdminClient<$Result.GetResult<Prisma.$UsuarioAdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UsuarioAdmin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAdminFindFirstOrThrowArgs} args - Arguments to find a UsuarioAdmin
     * @example
     * // Get one UsuarioAdmin
     * const usuarioAdmin = await prisma.usuarioAdmin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioAdminFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioAdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioAdminClient<$Result.GetResult<Prisma.$UsuarioAdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UsuarioAdmins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UsuarioAdmins
     * const usuarioAdmins = await prisma.usuarioAdmin.findMany()
     * 
     * // Get first 10 UsuarioAdmins
     * const usuarioAdmins = await prisma.usuarioAdmin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioAdminWithIdOnly = await prisma.usuarioAdmin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioAdminFindManyArgs>(args?: SelectSubset<T, UsuarioAdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioAdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UsuarioAdmin.
     * @param {UsuarioAdminCreateArgs} args - Arguments to create a UsuarioAdmin.
     * @example
     * // Create one UsuarioAdmin
     * const UsuarioAdmin = await prisma.usuarioAdmin.create({
     *   data: {
     *     // ... data to create a UsuarioAdmin
     *   }
     * })
     * 
     */
    create<T extends UsuarioAdminCreateArgs>(args: SelectSubset<T, UsuarioAdminCreateArgs<ExtArgs>>): Prisma__UsuarioAdminClient<$Result.GetResult<Prisma.$UsuarioAdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UsuarioAdmins.
     * @param {UsuarioAdminCreateManyArgs} args - Arguments to create many UsuarioAdmins.
     * @example
     * // Create many UsuarioAdmins
     * const usuarioAdmin = await prisma.usuarioAdmin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioAdminCreateManyArgs>(args?: SelectSubset<T, UsuarioAdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UsuarioAdmins and returns the data saved in the database.
     * @param {UsuarioAdminCreateManyAndReturnArgs} args - Arguments to create many UsuarioAdmins.
     * @example
     * // Create many UsuarioAdmins
     * const usuarioAdmin = await prisma.usuarioAdmin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UsuarioAdmins and only return the `id`
     * const usuarioAdminWithIdOnly = await prisma.usuarioAdmin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioAdminCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioAdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioAdminPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UsuarioAdmin.
     * @param {UsuarioAdminDeleteArgs} args - Arguments to delete one UsuarioAdmin.
     * @example
     * // Delete one UsuarioAdmin
     * const UsuarioAdmin = await prisma.usuarioAdmin.delete({
     *   where: {
     *     // ... filter to delete one UsuarioAdmin
     *   }
     * })
     * 
     */
    delete<T extends UsuarioAdminDeleteArgs>(args: SelectSubset<T, UsuarioAdminDeleteArgs<ExtArgs>>): Prisma__UsuarioAdminClient<$Result.GetResult<Prisma.$UsuarioAdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UsuarioAdmin.
     * @param {UsuarioAdminUpdateArgs} args - Arguments to update one UsuarioAdmin.
     * @example
     * // Update one UsuarioAdmin
     * const usuarioAdmin = await prisma.usuarioAdmin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioAdminUpdateArgs>(args: SelectSubset<T, UsuarioAdminUpdateArgs<ExtArgs>>): Prisma__UsuarioAdminClient<$Result.GetResult<Prisma.$UsuarioAdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UsuarioAdmins.
     * @param {UsuarioAdminDeleteManyArgs} args - Arguments to filter UsuarioAdmins to delete.
     * @example
     * // Delete a few UsuarioAdmins
     * const { count } = await prisma.usuarioAdmin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioAdminDeleteManyArgs>(args?: SelectSubset<T, UsuarioAdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsuarioAdmins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UsuarioAdmins
     * const usuarioAdmin = await prisma.usuarioAdmin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioAdminUpdateManyArgs>(args: SelectSubset<T, UsuarioAdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsuarioAdmins and returns the data updated in the database.
     * @param {UsuarioAdminUpdateManyAndReturnArgs} args - Arguments to update many UsuarioAdmins.
     * @example
     * // Update many UsuarioAdmins
     * const usuarioAdmin = await prisma.usuarioAdmin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UsuarioAdmins and only return the `id`
     * const usuarioAdminWithIdOnly = await prisma.usuarioAdmin.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsuarioAdminUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioAdminUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioAdminPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UsuarioAdmin.
     * @param {UsuarioAdminUpsertArgs} args - Arguments to update or create a UsuarioAdmin.
     * @example
     * // Update or create a UsuarioAdmin
     * const usuarioAdmin = await prisma.usuarioAdmin.upsert({
     *   create: {
     *     // ... data to create a UsuarioAdmin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UsuarioAdmin we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioAdminUpsertArgs>(args: SelectSubset<T, UsuarioAdminUpsertArgs<ExtArgs>>): Prisma__UsuarioAdminClient<$Result.GetResult<Prisma.$UsuarioAdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UsuarioAdmins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAdminCountArgs} args - Arguments to filter UsuarioAdmins to count.
     * @example
     * // Count the number of UsuarioAdmins
     * const count = await prisma.usuarioAdmin.count({
     *   where: {
     *     // ... the filter for the UsuarioAdmins we want to count
     *   }
     * })
    **/
    count<T extends UsuarioAdminCountArgs>(
      args?: Subset<T, UsuarioAdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioAdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UsuarioAdmin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAdminAggregateArgs>(args: Subset<T, UsuarioAdminAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAdminAggregateType<T>>

    /**
     * Group by UsuarioAdmin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAdminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioAdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioAdminGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioAdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioAdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UsuarioAdmin model
   */
  readonly fields: UsuarioAdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UsuarioAdmin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioAdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UsuarioAdmin model
   */
  interface UsuarioAdminFieldRefs {
    readonly id: FieldRef<"UsuarioAdmin", 'Int'>
    readonly correo: FieldRef<"UsuarioAdmin", 'String'>
    readonly contrasena: FieldRef<"UsuarioAdmin", 'String'>
    readonly creadoEn: FieldRef<"UsuarioAdmin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UsuarioAdmin findUnique
   */
  export type UsuarioAdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioAdmin
     */
    select?: UsuarioAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioAdmin
     */
    omit?: UsuarioAdminOmit<ExtArgs> | null
    /**
     * Filter, which UsuarioAdmin to fetch.
     */
    where: UsuarioAdminWhereUniqueInput
  }

  /**
   * UsuarioAdmin findUniqueOrThrow
   */
  export type UsuarioAdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioAdmin
     */
    select?: UsuarioAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioAdmin
     */
    omit?: UsuarioAdminOmit<ExtArgs> | null
    /**
     * Filter, which UsuarioAdmin to fetch.
     */
    where: UsuarioAdminWhereUniqueInput
  }

  /**
   * UsuarioAdmin findFirst
   */
  export type UsuarioAdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioAdmin
     */
    select?: UsuarioAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioAdmin
     */
    omit?: UsuarioAdminOmit<ExtArgs> | null
    /**
     * Filter, which UsuarioAdmin to fetch.
     */
    where?: UsuarioAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsuarioAdmins to fetch.
     */
    orderBy?: UsuarioAdminOrderByWithRelationInput | UsuarioAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsuarioAdmins.
     */
    cursor?: UsuarioAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsuarioAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsuarioAdmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsuarioAdmins.
     */
    distinct?: UsuarioAdminScalarFieldEnum | UsuarioAdminScalarFieldEnum[]
  }

  /**
   * UsuarioAdmin findFirstOrThrow
   */
  export type UsuarioAdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioAdmin
     */
    select?: UsuarioAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioAdmin
     */
    omit?: UsuarioAdminOmit<ExtArgs> | null
    /**
     * Filter, which UsuarioAdmin to fetch.
     */
    where?: UsuarioAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsuarioAdmins to fetch.
     */
    orderBy?: UsuarioAdminOrderByWithRelationInput | UsuarioAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsuarioAdmins.
     */
    cursor?: UsuarioAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsuarioAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsuarioAdmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsuarioAdmins.
     */
    distinct?: UsuarioAdminScalarFieldEnum | UsuarioAdminScalarFieldEnum[]
  }

  /**
   * UsuarioAdmin findMany
   */
  export type UsuarioAdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioAdmin
     */
    select?: UsuarioAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioAdmin
     */
    omit?: UsuarioAdminOmit<ExtArgs> | null
    /**
     * Filter, which UsuarioAdmins to fetch.
     */
    where?: UsuarioAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsuarioAdmins to fetch.
     */
    orderBy?: UsuarioAdminOrderByWithRelationInput | UsuarioAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UsuarioAdmins.
     */
    cursor?: UsuarioAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsuarioAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsuarioAdmins.
     */
    skip?: number
    distinct?: UsuarioAdminScalarFieldEnum | UsuarioAdminScalarFieldEnum[]
  }

  /**
   * UsuarioAdmin create
   */
  export type UsuarioAdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioAdmin
     */
    select?: UsuarioAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioAdmin
     */
    omit?: UsuarioAdminOmit<ExtArgs> | null
    /**
     * The data needed to create a UsuarioAdmin.
     */
    data: XOR<UsuarioAdminCreateInput, UsuarioAdminUncheckedCreateInput>
  }

  /**
   * UsuarioAdmin createMany
   */
  export type UsuarioAdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UsuarioAdmins.
     */
    data: UsuarioAdminCreateManyInput | UsuarioAdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UsuarioAdmin createManyAndReturn
   */
  export type UsuarioAdminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioAdmin
     */
    select?: UsuarioAdminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioAdmin
     */
    omit?: UsuarioAdminOmit<ExtArgs> | null
    /**
     * The data used to create many UsuarioAdmins.
     */
    data: UsuarioAdminCreateManyInput | UsuarioAdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UsuarioAdmin update
   */
  export type UsuarioAdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioAdmin
     */
    select?: UsuarioAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioAdmin
     */
    omit?: UsuarioAdminOmit<ExtArgs> | null
    /**
     * The data needed to update a UsuarioAdmin.
     */
    data: XOR<UsuarioAdminUpdateInput, UsuarioAdminUncheckedUpdateInput>
    /**
     * Choose, which UsuarioAdmin to update.
     */
    where: UsuarioAdminWhereUniqueInput
  }

  /**
   * UsuarioAdmin updateMany
   */
  export type UsuarioAdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UsuarioAdmins.
     */
    data: XOR<UsuarioAdminUpdateManyMutationInput, UsuarioAdminUncheckedUpdateManyInput>
    /**
     * Filter which UsuarioAdmins to update
     */
    where?: UsuarioAdminWhereInput
    /**
     * Limit how many UsuarioAdmins to update.
     */
    limit?: number
  }

  /**
   * UsuarioAdmin updateManyAndReturn
   */
  export type UsuarioAdminUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioAdmin
     */
    select?: UsuarioAdminSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioAdmin
     */
    omit?: UsuarioAdminOmit<ExtArgs> | null
    /**
     * The data used to update UsuarioAdmins.
     */
    data: XOR<UsuarioAdminUpdateManyMutationInput, UsuarioAdminUncheckedUpdateManyInput>
    /**
     * Filter which UsuarioAdmins to update
     */
    where?: UsuarioAdminWhereInput
    /**
     * Limit how many UsuarioAdmins to update.
     */
    limit?: number
  }

  /**
   * UsuarioAdmin upsert
   */
  export type UsuarioAdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioAdmin
     */
    select?: UsuarioAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioAdmin
     */
    omit?: UsuarioAdminOmit<ExtArgs> | null
    /**
     * The filter to search for the UsuarioAdmin to update in case it exists.
     */
    where: UsuarioAdminWhereUniqueInput
    /**
     * In case the UsuarioAdmin found by the `where` argument doesn't exist, create a new UsuarioAdmin with this data.
     */
    create: XOR<UsuarioAdminCreateInput, UsuarioAdminUncheckedCreateInput>
    /**
     * In case the UsuarioAdmin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioAdminUpdateInput, UsuarioAdminUncheckedUpdateInput>
  }

  /**
   * UsuarioAdmin delete
   */
  export type UsuarioAdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioAdmin
     */
    select?: UsuarioAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioAdmin
     */
    omit?: UsuarioAdminOmit<ExtArgs> | null
    /**
     * Filter which UsuarioAdmin to delete.
     */
    where: UsuarioAdminWhereUniqueInput
  }

  /**
   * UsuarioAdmin deleteMany
   */
  export type UsuarioAdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsuarioAdmins to delete
     */
    where?: UsuarioAdminWhereInput
    /**
     * Limit how many UsuarioAdmins to delete.
     */
    limit?: number
  }

  /**
   * UsuarioAdmin without action
   */
  export type UsuarioAdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioAdmin
     */
    select?: UsuarioAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioAdmin
     */
    omit?: UsuarioAdminOmit<ExtArgs> | null
  }


  /**
   * Model ProductoGeneral
   */

  export type AggregateProductoGeneral = {
    _count: ProductoGeneralCountAggregateOutputType | null
    _avg: ProductoGeneralAvgAggregateOutputType | null
    _sum: ProductoGeneralSumAggregateOutputType | null
    _min: ProductoGeneralMinAggregateOutputType | null
    _max: ProductoGeneralMaxAggregateOutputType | null
  }

  export type ProductoGeneralAvgAggregateOutputType = {
    id: number | null
    celularId: number | null
    accesorioId: number | null
  }

  export type ProductoGeneralSumAggregateOutputType = {
    id: number | null
    celularId: number | null
    accesorioId: number | null
  }

  export type ProductoGeneralMinAggregateOutputType = {
    id: number | null
    tipo: string | null
    celularId: number | null
    accesorioId: number | null
  }

  export type ProductoGeneralMaxAggregateOutputType = {
    id: number | null
    tipo: string | null
    celularId: number | null
    accesorioId: number | null
  }

  export type ProductoGeneralCountAggregateOutputType = {
    id: number
    tipo: number
    celularId: number
    accesorioId: number
    _all: number
  }


  export type ProductoGeneralAvgAggregateInputType = {
    id?: true
    celularId?: true
    accesorioId?: true
  }

  export type ProductoGeneralSumAggregateInputType = {
    id?: true
    celularId?: true
    accesorioId?: true
  }

  export type ProductoGeneralMinAggregateInputType = {
    id?: true
    tipo?: true
    celularId?: true
    accesorioId?: true
  }

  export type ProductoGeneralMaxAggregateInputType = {
    id?: true
    tipo?: true
    celularId?: true
    accesorioId?: true
  }

  export type ProductoGeneralCountAggregateInputType = {
    id?: true
    tipo?: true
    celularId?: true
    accesorioId?: true
    _all?: true
  }

  export type ProductoGeneralAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductoGeneral to aggregate.
     */
    where?: ProductoGeneralWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductoGenerals to fetch.
     */
    orderBy?: ProductoGeneralOrderByWithRelationInput | ProductoGeneralOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductoGeneralWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductoGenerals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductoGenerals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductoGenerals
    **/
    _count?: true | ProductoGeneralCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductoGeneralAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductoGeneralSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductoGeneralMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductoGeneralMaxAggregateInputType
  }

  export type GetProductoGeneralAggregateType<T extends ProductoGeneralAggregateArgs> = {
        [P in keyof T & keyof AggregateProductoGeneral]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductoGeneral[P]>
      : GetScalarType<T[P], AggregateProductoGeneral[P]>
  }




  export type ProductoGeneralGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductoGeneralWhereInput
    orderBy?: ProductoGeneralOrderByWithAggregationInput | ProductoGeneralOrderByWithAggregationInput[]
    by: ProductoGeneralScalarFieldEnum[] | ProductoGeneralScalarFieldEnum
    having?: ProductoGeneralScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductoGeneralCountAggregateInputType | true
    _avg?: ProductoGeneralAvgAggregateInputType
    _sum?: ProductoGeneralSumAggregateInputType
    _min?: ProductoGeneralMinAggregateInputType
    _max?: ProductoGeneralMaxAggregateInputType
  }

  export type ProductoGeneralGroupByOutputType = {
    id: number
    tipo: string
    celularId: number | null
    accesorioId: number | null
    _count: ProductoGeneralCountAggregateOutputType | null
    _avg: ProductoGeneralAvgAggregateOutputType | null
    _sum: ProductoGeneralSumAggregateOutputType | null
    _min: ProductoGeneralMinAggregateOutputType | null
    _max: ProductoGeneralMaxAggregateOutputType | null
  }

  type GetProductoGeneralGroupByPayload<T extends ProductoGeneralGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductoGeneralGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductoGeneralGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductoGeneralGroupByOutputType[P]>
            : GetScalarType<T[P], ProductoGeneralGroupByOutputType[P]>
        }
      >
    >


  export type ProductoGeneralSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    celularId?: boolean
    accesorioId?: boolean
    celular?: boolean | ProductoGeneral$celularArgs<ExtArgs>
    accesorio?: boolean | ProductoGeneral$accesorioArgs<ExtArgs>
    items?: boolean | ProductoGeneral$itemsArgs<ExtArgs>
    _count?: boolean | ProductoGeneralCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productoGeneral"]>

  export type ProductoGeneralSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    celularId?: boolean
    accesorioId?: boolean
    celular?: boolean | ProductoGeneral$celularArgs<ExtArgs>
    accesorio?: boolean | ProductoGeneral$accesorioArgs<ExtArgs>
  }, ExtArgs["result"]["productoGeneral"]>

  export type ProductoGeneralSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    celularId?: boolean
    accesorioId?: boolean
    celular?: boolean | ProductoGeneral$celularArgs<ExtArgs>
    accesorio?: boolean | ProductoGeneral$accesorioArgs<ExtArgs>
  }, ExtArgs["result"]["productoGeneral"]>

  export type ProductoGeneralSelectScalar = {
    id?: boolean
    tipo?: boolean
    celularId?: boolean
    accesorioId?: boolean
  }

  export type ProductoGeneralOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tipo" | "celularId" | "accesorioId", ExtArgs["result"]["productoGeneral"]>
  export type ProductoGeneralInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    celular?: boolean | ProductoGeneral$celularArgs<ExtArgs>
    accesorio?: boolean | ProductoGeneral$accesorioArgs<ExtArgs>
    items?: boolean | ProductoGeneral$itemsArgs<ExtArgs>
    _count?: boolean | ProductoGeneralCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductoGeneralIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    celular?: boolean | ProductoGeneral$celularArgs<ExtArgs>
    accesorio?: boolean | ProductoGeneral$accesorioArgs<ExtArgs>
  }
  export type ProductoGeneralIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    celular?: boolean | ProductoGeneral$celularArgs<ExtArgs>
    accesorio?: boolean | ProductoGeneral$accesorioArgs<ExtArgs>
  }

  export type $ProductoGeneralPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductoGeneral"
    objects: {
      celular: Prisma.$CelularPayload<ExtArgs> | null
      accesorio: Prisma.$AccesorioPayload<ExtArgs> | null
      items: Prisma.$ItemPedidoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tipo: string
      celularId: number | null
      accesorioId: number | null
    }, ExtArgs["result"]["productoGeneral"]>
    composites: {}
  }

  type ProductoGeneralGetPayload<S extends boolean | null | undefined | ProductoGeneralDefaultArgs> = $Result.GetResult<Prisma.$ProductoGeneralPayload, S>

  type ProductoGeneralCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductoGeneralFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductoGeneralCountAggregateInputType | true
    }

  export interface ProductoGeneralDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductoGeneral'], meta: { name: 'ProductoGeneral' } }
    /**
     * Find zero or one ProductoGeneral that matches the filter.
     * @param {ProductoGeneralFindUniqueArgs} args - Arguments to find a ProductoGeneral
     * @example
     * // Get one ProductoGeneral
     * const productoGeneral = await prisma.productoGeneral.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductoGeneralFindUniqueArgs>(args: SelectSubset<T, ProductoGeneralFindUniqueArgs<ExtArgs>>): Prisma__ProductoGeneralClient<$Result.GetResult<Prisma.$ProductoGeneralPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductoGeneral that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductoGeneralFindUniqueOrThrowArgs} args - Arguments to find a ProductoGeneral
     * @example
     * // Get one ProductoGeneral
     * const productoGeneral = await prisma.productoGeneral.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductoGeneralFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductoGeneralFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductoGeneralClient<$Result.GetResult<Prisma.$ProductoGeneralPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductoGeneral that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoGeneralFindFirstArgs} args - Arguments to find a ProductoGeneral
     * @example
     * // Get one ProductoGeneral
     * const productoGeneral = await prisma.productoGeneral.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductoGeneralFindFirstArgs>(args?: SelectSubset<T, ProductoGeneralFindFirstArgs<ExtArgs>>): Prisma__ProductoGeneralClient<$Result.GetResult<Prisma.$ProductoGeneralPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductoGeneral that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoGeneralFindFirstOrThrowArgs} args - Arguments to find a ProductoGeneral
     * @example
     * // Get one ProductoGeneral
     * const productoGeneral = await prisma.productoGeneral.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductoGeneralFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductoGeneralFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductoGeneralClient<$Result.GetResult<Prisma.$ProductoGeneralPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductoGenerals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoGeneralFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductoGenerals
     * const productoGenerals = await prisma.productoGeneral.findMany()
     * 
     * // Get first 10 ProductoGenerals
     * const productoGenerals = await prisma.productoGeneral.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productoGeneralWithIdOnly = await prisma.productoGeneral.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductoGeneralFindManyArgs>(args?: SelectSubset<T, ProductoGeneralFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductoGeneralPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductoGeneral.
     * @param {ProductoGeneralCreateArgs} args - Arguments to create a ProductoGeneral.
     * @example
     * // Create one ProductoGeneral
     * const ProductoGeneral = await prisma.productoGeneral.create({
     *   data: {
     *     // ... data to create a ProductoGeneral
     *   }
     * })
     * 
     */
    create<T extends ProductoGeneralCreateArgs>(args: SelectSubset<T, ProductoGeneralCreateArgs<ExtArgs>>): Prisma__ProductoGeneralClient<$Result.GetResult<Prisma.$ProductoGeneralPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductoGenerals.
     * @param {ProductoGeneralCreateManyArgs} args - Arguments to create many ProductoGenerals.
     * @example
     * // Create many ProductoGenerals
     * const productoGeneral = await prisma.productoGeneral.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductoGeneralCreateManyArgs>(args?: SelectSubset<T, ProductoGeneralCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductoGenerals and returns the data saved in the database.
     * @param {ProductoGeneralCreateManyAndReturnArgs} args - Arguments to create many ProductoGenerals.
     * @example
     * // Create many ProductoGenerals
     * const productoGeneral = await prisma.productoGeneral.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductoGenerals and only return the `id`
     * const productoGeneralWithIdOnly = await prisma.productoGeneral.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductoGeneralCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductoGeneralCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductoGeneralPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductoGeneral.
     * @param {ProductoGeneralDeleteArgs} args - Arguments to delete one ProductoGeneral.
     * @example
     * // Delete one ProductoGeneral
     * const ProductoGeneral = await prisma.productoGeneral.delete({
     *   where: {
     *     // ... filter to delete one ProductoGeneral
     *   }
     * })
     * 
     */
    delete<T extends ProductoGeneralDeleteArgs>(args: SelectSubset<T, ProductoGeneralDeleteArgs<ExtArgs>>): Prisma__ProductoGeneralClient<$Result.GetResult<Prisma.$ProductoGeneralPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductoGeneral.
     * @param {ProductoGeneralUpdateArgs} args - Arguments to update one ProductoGeneral.
     * @example
     * // Update one ProductoGeneral
     * const productoGeneral = await prisma.productoGeneral.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductoGeneralUpdateArgs>(args: SelectSubset<T, ProductoGeneralUpdateArgs<ExtArgs>>): Prisma__ProductoGeneralClient<$Result.GetResult<Prisma.$ProductoGeneralPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductoGenerals.
     * @param {ProductoGeneralDeleteManyArgs} args - Arguments to filter ProductoGenerals to delete.
     * @example
     * // Delete a few ProductoGenerals
     * const { count } = await prisma.productoGeneral.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductoGeneralDeleteManyArgs>(args?: SelectSubset<T, ProductoGeneralDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductoGenerals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoGeneralUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductoGenerals
     * const productoGeneral = await prisma.productoGeneral.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductoGeneralUpdateManyArgs>(args: SelectSubset<T, ProductoGeneralUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductoGenerals and returns the data updated in the database.
     * @param {ProductoGeneralUpdateManyAndReturnArgs} args - Arguments to update many ProductoGenerals.
     * @example
     * // Update many ProductoGenerals
     * const productoGeneral = await prisma.productoGeneral.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductoGenerals and only return the `id`
     * const productoGeneralWithIdOnly = await prisma.productoGeneral.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductoGeneralUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductoGeneralUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductoGeneralPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductoGeneral.
     * @param {ProductoGeneralUpsertArgs} args - Arguments to update or create a ProductoGeneral.
     * @example
     * // Update or create a ProductoGeneral
     * const productoGeneral = await prisma.productoGeneral.upsert({
     *   create: {
     *     // ... data to create a ProductoGeneral
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductoGeneral we want to update
     *   }
     * })
     */
    upsert<T extends ProductoGeneralUpsertArgs>(args: SelectSubset<T, ProductoGeneralUpsertArgs<ExtArgs>>): Prisma__ProductoGeneralClient<$Result.GetResult<Prisma.$ProductoGeneralPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductoGenerals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoGeneralCountArgs} args - Arguments to filter ProductoGenerals to count.
     * @example
     * // Count the number of ProductoGenerals
     * const count = await prisma.productoGeneral.count({
     *   where: {
     *     // ... the filter for the ProductoGenerals we want to count
     *   }
     * })
    **/
    count<T extends ProductoGeneralCountArgs>(
      args?: Subset<T, ProductoGeneralCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductoGeneralCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductoGeneral.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoGeneralAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductoGeneralAggregateArgs>(args: Subset<T, ProductoGeneralAggregateArgs>): Prisma.PrismaPromise<GetProductoGeneralAggregateType<T>>

    /**
     * Group by ProductoGeneral.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoGeneralGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductoGeneralGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductoGeneralGroupByArgs['orderBy'] }
        : { orderBy?: ProductoGeneralGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductoGeneralGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductoGeneralGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductoGeneral model
   */
  readonly fields: ProductoGeneralFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductoGeneral.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductoGeneralClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    celular<T extends ProductoGeneral$celularArgs<ExtArgs> = {}>(args?: Subset<T, ProductoGeneral$celularArgs<ExtArgs>>): Prisma__CelularClient<$Result.GetResult<Prisma.$CelularPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    accesorio<T extends ProductoGeneral$accesorioArgs<ExtArgs> = {}>(args?: Subset<T, ProductoGeneral$accesorioArgs<ExtArgs>>): Prisma__AccesorioClient<$Result.GetResult<Prisma.$AccesorioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    items<T extends ProductoGeneral$itemsArgs<ExtArgs> = {}>(args?: Subset<T, ProductoGeneral$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductoGeneral model
   */
  interface ProductoGeneralFieldRefs {
    readonly id: FieldRef<"ProductoGeneral", 'Int'>
    readonly tipo: FieldRef<"ProductoGeneral", 'String'>
    readonly celularId: FieldRef<"ProductoGeneral", 'Int'>
    readonly accesorioId: FieldRef<"ProductoGeneral", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ProductoGeneral findUnique
   */
  export type ProductoGeneralFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoGeneral
     */
    select?: ProductoGeneralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductoGeneral
     */
    omit?: ProductoGeneralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoGeneralInclude<ExtArgs> | null
    /**
     * Filter, which ProductoGeneral to fetch.
     */
    where: ProductoGeneralWhereUniqueInput
  }

  /**
   * ProductoGeneral findUniqueOrThrow
   */
  export type ProductoGeneralFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoGeneral
     */
    select?: ProductoGeneralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductoGeneral
     */
    omit?: ProductoGeneralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoGeneralInclude<ExtArgs> | null
    /**
     * Filter, which ProductoGeneral to fetch.
     */
    where: ProductoGeneralWhereUniqueInput
  }

  /**
   * ProductoGeneral findFirst
   */
  export type ProductoGeneralFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoGeneral
     */
    select?: ProductoGeneralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductoGeneral
     */
    omit?: ProductoGeneralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoGeneralInclude<ExtArgs> | null
    /**
     * Filter, which ProductoGeneral to fetch.
     */
    where?: ProductoGeneralWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductoGenerals to fetch.
     */
    orderBy?: ProductoGeneralOrderByWithRelationInput | ProductoGeneralOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductoGenerals.
     */
    cursor?: ProductoGeneralWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductoGenerals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductoGenerals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductoGenerals.
     */
    distinct?: ProductoGeneralScalarFieldEnum | ProductoGeneralScalarFieldEnum[]
  }

  /**
   * ProductoGeneral findFirstOrThrow
   */
  export type ProductoGeneralFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoGeneral
     */
    select?: ProductoGeneralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductoGeneral
     */
    omit?: ProductoGeneralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoGeneralInclude<ExtArgs> | null
    /**
     * Filter, which ProductoGeneral to fetch.
     */
    where?: ProductoGeneralWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductoGenerals to fetch.
     */
    orderBy?: ProductoGeneralOrderByWithRelationInput | ProductoGeneralOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductoGenerals.
     */
    cursor?: ProductoGeneralWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductoGenerals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductoGenerals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductoGenerals.
     */
    distinct?: ProductoGeneralScalarFieldEnum | ProductoGeneralScalarFieldEnum[]
  }

  /**
   * ProductoGeneral findMany
   */
  export type ProductoGeneralFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoGeneral
     */
    select?: ProductoGeneralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductoGeneral
     */
    omit?: ProductoGeneralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoGeneralInclude<ExtArgs> | null
    /**
     * Filter, which ProductoGenerals to fetch.
     */
    where?: ProductoGeneralWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductoGenerals to fetch.
     */
    orderBy?: ProductoGeneralOrderByWithRelationInput | ProductoGeneralOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductoGenerals.
     */
    cursor?: ProductoGeneralWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductoGenerals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductoGenerals.
     */
    skip?: number
    distinct?: ProductoGeneralScalarFieldEnum | ProductoGeneralScalarFieldEnum[]
  }

  /**
   * ProductoGeneral create
   */
  export type ProductoGeneralCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoGeneral
     */
    select?: ProductoGeneralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductoGeneral
     */
    omit?: ProductoGeneralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoGeneralInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductoGeneral.
     */
    data: XOR<ProductoGeneralCreateInput, ProductoGeneralUncheckedCreateInput>
  }

  /**
   * ProductoGeneral createMany
   */
  export type ProductoGeneralCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductoGenerals.
     */
    data: ProductoGeneralCreateManyInput | ProductoGeneralCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductoGeneral createManyAndReturn
   */
  export type ProductoGeneralCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoGeneral
     */
    select?: ProductoGeneralSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductoGeneral
     */
    omit?: ProductoGeneralOmit<ExtArgs> | null
    /**
     * The data used to create many ProductoGenerals.
     */
    data: ProductoGeneralCreateManyInput | ProductoGeneralCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoGeneralIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductoGeneral update
   */
  export type ProductoGeneralUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoGeneral
     */
    select?: ProductoGeneralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductoGeneral
     */
    omit?: ProductoGeneralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoGeneralInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductoGeneral.
     */
    data: XOR<ProductoGeneralUpdateInput, ProductoGeneralUncheckedUpdateInput>
    /**
     * Choose, which ProductoGeneral to update.
     */
    where: ProductoGeneralWhereUniqueInput
  }

  /**
   * ProductoGeneral updateMany
   */
  export type ProductoGeneralUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductoGenerals.
     */
    data: XOR<ProductoGeneralUpdateManyMutationInput, ProductoGeneralUncheckedUpdateManyInput>
    /**
     * Filter which ProductoGenerals to update
     */
    where?: ProductoGeneralWhereInput
    /**
     * Limit how many ProductoGenerals to update.
     */
    limit?: number
  }

  /**
   * ProductoGeneral updateManyAndReturn
   */
  export type ProductoGeneralUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoGeneral
     */
    select?: ProductoGeneralSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductoGeneral
     */
    omit?: ProductoGeneralOmit<ExtArgs> | null
    /**
     * The data used to update ProductoGenerals.
     */
    data: XOR<ProductoGeneralUpdateManyMutationInput, ProductoGeneralUncheckedUpdateManyInput>
    /**
     * Filter which ProductoGenerals to update
     */
    where?: ProductoGeneralWhereInput
    /**
     * Limit how many ProductoGenerals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoGeneralIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductoGeneral upsert
   */
  export type ProductoGeneralUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoGeneral
     */
    select?: ProductoGeneralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductoGeneral
     */
    omit?: ProductoGeneralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoGeneralInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductoGeneral to update in case it exists.
     */
    where: ProductoGeneralWhereUniqueInput
    /**
     * In case the ProductoGeneral found by the `where` argument doesn't exist, create a new ProductoGeneral with this data.
     */
    create: XOR<ProductoGeneralCreateInput, ProductoGeneralUncheckedCreateInput>
    /**
     * In case the ProductoGeneral was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductoGeneralUpdateInput, ProductoGeneralUncheckedUpdateInput>
  }

  /**
   * ProductoGeneral delete
   */
  export type ProductoGeneralDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoGeneral
     */
    select?: ProductoGeneralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductoGeneral
     */
    omit?: ProductoGeneralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoGeneralInclude<ExtArgs> | null
    /**
     * Filter which ProductoGeneral to delete.
     */
    where: ProductoGeneralWhereUniqueInput
  }

  /**
   * ProductoGeneral deleteMany
   */
  export type ProductoGeneralDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductoGenerals to delete
     */
    where?: ProductoGeneralWhereInput
    /**
     * Limit how many ProductoGenerals to delete.
     */
    limit?: number
  }

  /**
   * ProductoGeneral.celular
   */
  export type ProductoGeneral$celularArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Celular
     */
    select?: CelularSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Celular
     */
    omit?: CelularOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CelularInclude<ExtArgs> | null
    where?: CelularWhereInput
  }

  /**
   * ProductoGeneral.accesorio
   */
  export type ProductoGeneral$accesorioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accesorio
     */
    select?: AccesorioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accesorio
     */
    omit?: AccesorioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccesorioInclude<ExtArgs> | null
    where?: AccesorioWhereInput
  }

  /**
   * ProductoGeneral.items
   */
  export type ProductoGeneral$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    where?: ItemPedidoWhereInput
    orderBy?: ItemPedidoOrderByWithRelationInput | ItemPedidoOrderByWithRelationInput[]
    cursor?: ItemPedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemPedidoScalarFieldEnum | ItemPedidoScalarFieldEnum[]
  }

  /**
   * ProductoGeneral without action
   */
  export type ProductoGeneralDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoGeneral
     */
    select?: ProductoGeneralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductoGeneral
     */
    omit?: ProductoGeneralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoGeneralInclude<ExtArgs> | null
  }


  /**
   * Model Celular
   */

  export type AggregateCelular = {
    _count: CelularCountAggregateOutputType | null
    _avg: CelularAvgAggregateOutputType | null
    _sum: CelularSumAggregateOutputType | null
    _min: CelularMinAggregateOutputType | null
    _max: CelularMaxAggregateOutputType | null
  }

  export type CelularAvgAggregateOutputType = {
    id: number | null
    precio: number | null
    precioPromocion: number | null
    precioDescuento: number | null
  }

  export type CelularSumAggregateOutputType = {
    id: number | null
    precio: number | null
    precioPromocion: number | null
    precioDescuento: number | null
  }

  export type CelularMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    precio: number | null
    imagen: string | null
    marca: string | null
    color: string | null
    modelo: string | null
    pantalla: string | null
    bateria: string | null
    almacenamiento: string | null
    ram: string | null
    camara: string | null
    puertoCarga: string | null
    precioPromocion: number | null
    precioDescuento: number | null
    textoPromocion: string | null
  }

  export type CelularMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    precio: number | null
    imagen: string | null
    marca: string | null
    color: string | null
    modelo: string | null
    pantalla: string | null
    bateria: string | null
    almacenamiento: string | null
    ram: string | null
    camara: string | null
    puertoCarga: string | null
    precioPromocion: number | null
    precioDescuento: number | null
    textoPromocion: string | null
  }

  export type CelularCountAggregateOutputType = {
    id: number
    nombre: number
    precio: number
    imagen: number
    marca: number
    color: number
    modelo: number
    pantalla: number
    bateria: number
    almacenamiento: number
    ram: number
    camara: number
    puertoCarga: number
    precioPromocion: number
    precioDescuento: number
    textoPromocion: number
    _all: number
  }


  export type CelularAvgAggregateInputType = {
    id?: true
    precio?: true
    precioPromocion?: true
    precioDescuento?: true
  }

  export type CelularSumAggregateInputType = {
    id?: true
    precio?: true
    precioPromocion?: true
    precioDescuento?: true
  }

  export type CelularMinAggregateInputType = {
    id?: true
    nombre?: true
    precio?: true
    imagen?: true
    marca?: true
    color?: true
    modelo?: true
    pantalla?: true
    bateria?: true
    almacenamiento?: true
    ram?: true
    camara?: true
    puertoCarga?: true
    precioPromocion?: true
    precioDescuento?: true
    textoPromocion?: true
  }

  export type CelularMaxAggregateInputType = {
    id?: true
    nombre?: true
    precio?: true
    imagen?: true
    marca?: true
    color?: true
    modelo?: true
    pantalla?: true
    bateria?: true
    almacenamiento?: true
    ram?: true
    camara?: true
    puertoCarga?: true
    precioPromocion?: true
    precioDescuento?: true
    textoPromocion?: true
  }

  export type CelularCountAggregateInputType = {
    id?: true
    nombre?: true
    precio?: true
    imagen?: true
    marca?: true
    color?: true
    modelo?: true
    pantalla?: true
    bateria?: true
    almacenamiento?: true
    ram?: true
    camara?: true
    puertoCarga?: true
    precioPromocion?: true
    precioDescuento?: true
    textoPromocion?: true
    _all?: true
  }

  export type CelularAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Celular to aggregate.
     */
    where?: CelularWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Celulars to fetch.
     */
    orderBy?: CelularOrderByWithRelationInput | CelularOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CelularWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Celulars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Celulars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Celulars
    **/
    _count?: true | CelularCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CelularAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CelularSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CelularMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CelularMaxAggregateInputType
  }

  export type GetCelularAggregateType<T extends CelularAggregateArgs> = {
        [P in keyof T & keyof AggregateCelular]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCelular[P]>
      : GetScalarType<T[P], AggregateCelular[P]>
  }




  export type CelularGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CelularWhereInput
    orderBy?: CelularOrderByWithAggregationInput | CelularOrderByWithAggregationInput[]
    by: CelularScalarFieldEnum[] | CelularScalarFieldEnum
    having?: CelularScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CelularCountAggregateInputType | true
    _avg?: CelularAvgAggregateInputType
    _sum?: CelularSumAggregateInputType
    _min?: CelularMinAggregateInputType
    _max?: CelularMaxAggregateInputType
  }

  export type CelularGroupByOutputType = {
    id: number
    nombre: string
    precio: number
    imagen: string
    marca: string | null
    color: string | null
    modelo: string | null
    pantalla: string | null
    bateria: string | null
    almacenamiento: string | null
    ram: string | null
    camara: string | null
    puertoCarga: string | null
    precioPromocion: number | null
    precioDescuento: number | null
    textoPromocion: string | null
    _count: CelularCountAggregateOutputType | null
    _avg: CelularAvgAggregateOutputType | null
    _sum: CelularSumAggregateOutputType | null
    _min: CelularMinAggregateOutputType | null
    _max: CelularMaxAggregateOutputType | null
  }

  type GetCelularGroupByPayload<T extends CelularGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CelularGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CelularGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CelularGroupByOutputType[P]>
            : GetScalarType<T[P], CelularGroupByOutputType[P]>
        }
      >
    >


  export type CelularSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    precio?: boolean
    imagen?: boolean
    marca?: boolean
    color?: boolean
    modelo?: boolean
    pantalla?: boolean
    bateria?: boolean
    almacenamiento?: boolean
    ram?: boolean
    camara?: boolean
    puertoCarga?: boolean
    precioPromocion?: boolean
    precioDescuento?: boolean
    textoPromocion?: boolean
    productoGeneral?: boolean | Celular$productoGeneralArgs<ExtArgs>
  }, ExtArgs["result"]["celular"]>

  export type CelularSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    precio?: boolean
    imagen?: boolean
    marca?: boolean
    color?: boolean
    modelo?: boolean
    pantalla?: boolean
    bateria?: boolean
    almacenamiento?: boolean
    ram?: boolean
    camara?: boolean
    puertoCarga?: boolean
    precioPromocion?: boolean
    precioDescuento?: boolean
    textoPromocion?: boolean
  }, ExtArgs["result"]["celular"]>

  export type CelularSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    precio?: boolean
    imagen?: boolean
    marca?: boolean
    color?: boolean
    modelo?: boolean
    pantalla?: boolean
    bateria?: boolean
    almacenamiento?: boolean
    ram?: boolean
    camara?: boolean
    puertoCarga?: boolean
    precioPromocion?: boolean
    precioDescuento?: boolean
    textoPromocion?: boolean
  }, ExtArgs["result"]["celular"]>

  export type CelularSelectScalar = {
    id?: boolean
    nombre?: boolean
    precio?: boolean
    imagen?: boolean
    marca?: boolean
    color?: boolean
    modelo?: boolean
    pantalla?: boolean
    bateria?: boolean
    almacenamiento?: boolean
    ram?: boolean
    camara?: boolean
    puertoCarga?: boolean
    precioPromocion?: boolean
    precioDescuento?: boolean
    textoPromocion?: boolean
  }

  export type CelularOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "precio" | "imagen" | "marca" | "color" | "modelo" | "pantalla" | "bateria" | "almacenamiento" | "ram" | "camara" | "puertoCarga" | "precioPromocion" | "precioDescuento" | "textoPromocion", ExtArgs["result"]["celular"]>
  export type CelularInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productoGeneral?: boolean | Celular$productoGeneralArgs<ExtArgs>
  }
  export type CelularIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CelularIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CelularPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Celular"
    objects: {
      productoGeneral: Prisma.$ProductoGeneralPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      precio: number
      imagen: string
      marca: string | null
      color: string | null
      modelo: string | null
      pantalla: string | null
      bateria: string | null
      almacenamiento: string | null
      ram: string | null
      camara: string | null
      puertoCarga: string | null
      precioPromocion: number | null
      precioDescuento: number | null
      textoPromocion: string | null
    }, ExtArgs["result"]["celular"]>
    composites: {}
  }

  type CelularGetPayload<S extends boolean | null | undefined | CelularDefaultArgs> = $Result.GetResult<Prisma.$CelularPayload, S>

  type CelularCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CelularFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CelularCountAggregateInputType | true
    }

  export interface CelularDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Celular'], meta: { name: 'Celular' } }
    /**
     * Find zero or one Celular that matches the filter.
     * @param {CelularFindUniqueArgs} args - Arguments to find a Celular
     * @example
     * // Get one Celular
     * const celular = await prisma.celular.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CelularFindUniqueArgs>(args: SelectSubset<T, CelularFindUniqueArgs<ExtArgs>>): Prisma__CelularClient<$Result.GetResult<Prisma.$CelularPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Celular that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CelularFindUniqueOrThrowArgs} args - Arguments to find a Celular
     * @example
     * // Get one Celular
     * const celular = await prisma.celular.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CelularFindUniqueOrThrowArgs>(args: SelectSubset<T, CelularFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CelularClient<$Result.GetResult<Prisma.$CelularPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Celular that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CelularFindFirstArgs} args - Arguments to find a Celular
     * @example
     * // Get one Celular
     * const celular = await prisma.celular.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CelularFindFirstArgs>(args?: SelectSubset<T, CelularFindFirstArgs<ExtArgs>>): Prisma__CelularClient<$Result.GetResult<Prisma.$CelularPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Celular that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CelularFindFirstOrThrowArgs} args - Arguments to find a Celular
     * @example
     * // Get one Celular
     * const celular = await prisma.celular.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CelularFindFirstOrThrowArgs>(args?: SelectSubset<T, CelularFindFirstOrThrowArgs<ExtArgs>>): Prisma__CelularClient<$Result.GetResult<Prisma.$CelularPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Celulars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CelularFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Celulars
     * const celulars = await prisma.celular.findMany()
     * 
     * // Get first 10 Celulars
     * const celulars = await prisma.celular.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const celularWithIdOnly = await prisma.celular.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CelularFindManyArgs>(args?: SelectSubset<T, CelularFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CelularPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Celular.
     * @param {CelularCreateArgs} args - Arguments to create a Celular.
     * @example
     * // Create one Celular
     * const Celular = await prisma.celular.create({
     *   data: {
     *     // ... data to create a Celular
     *   }
     * })
     * 
     */
    create<T extends CelularCreateArgs>(args: SelectSubset<T, CelularCreateArgs<ExtArgs>>): Prisma__CelularClient<$Result.GetResult<Prisma.$CelularPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Celulars.
     * @param {CelularCreateManyArgs} args - Arguments to create many Celulars.
     * @example
     * // Create many Celulars
     * const celular = await prisma.celular.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CelularCreateManyArgs>(args?: SelectSubset<T, CelularCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Celulars and returns the data saved in the database.
     * @param {CelularCreateManyAndReturnArgs} args - Arguments to create many Celulars.
     * @example
     * // Create many Celulars
     * const celular = await prisma.celular.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Celulars and only return the `id`
     * const celularWithIdOnly = await prisma.celular.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CelularCreateManyAndReturnArgs>(args?: SelectSubset<T, CelularCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CelularPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Celular.
     * @param {CelularDeleteArgs} args - Arguments to delete one Celular.
     * @example
     * // Delete one Celular
     * const Celular = await prisma.celular.delete({
     *   where: {
     *     // ... filter to delete one Celular
     *   }
     * })
     * 
     */
    delete<T extends CelularDeleteArgs>(args: SelectSubset<T, CelularDeleteArgs<ExtArgs>>): Prisma__CelularClient<$Result.GetResult<Prisma.$CelularPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Celular.
     * @param {CelularUpdateArgs} args - Arguments to update one Celular.
     * @example
     * // Update one Celular
     * const celular = await prisma.celular.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CelularUpdateArgs>(args: SelectSubset<T, CelularUpdateArgs<ExtArgs>>): Prisma__CelularClient<$Result.GetResult<Prisma.$CelularPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Celulars.
     * @param {CelularDeleteManyArgs} args - Arguments to filter Celulars to delete.
     * @example
     * // Delete a few Celulars
     * const { count } = await prisma.celular.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CelularDeleteManyArgs>(args?: SelectSubset<T, CelularDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Celulars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CelularUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Celulars
     * const celular = await prisma.celular.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CelularUpdateManyArgs>(args: SelectSubset<T, CelularUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Celulars and returns the data updated in the database.
     * @param {CelularUpdateManyAndReturnArgs} args - Arguments to update many Celulars.
     * @example
     * // Update many Celulars
     * const celular = await prisma.celular.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Celulars and only return the `id`
     * const celularWithIdOnly = await prisma.celular.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CelularUpdateManyAndReturnArgs>(args: SelectSubset<T, CelularUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CelularPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Celular.
     * @param {CelularUpsertArgs} args - Arguments to update or create a Celular.
     * @example
     * // Update or create a Celular
     * const celular = await prisma.celular.upsert({
     *   create: {
     *     // ... data to create a Celular
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Celular we want to update
     *   }
     * })
     */
    upsert<T extends CelularUpsertArgs>(args: SelectSubset<T, CelularUpsertArgs<ExtArgs>>): Prisma__CelularClient<$Result.GetResult<Prisma.$CelularPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Celulars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CelularCountArgs} args - Arguments to filter Celulars to count.
     * @example
     * // Count the number of Celulars
     * const count = await prisma.celular.count({
     *   where: {
     *     // ... the filter for the Celulars we want to count
     *   }
     * })
    **/
    count<T extends CelularCountArgs>(
      args?: Subset<T, CelularCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CelularCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Celular.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CelularAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CelularAggregateArgs>(args: Subset<T, CelularAggregateArgs>): Prisma.PrismaPromise<GetCelularAggregateType<T>>

    /**
     * Group by Celular.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CelularGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CelularGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CelularGroupByArgs['orderBy'] }
        : { orderBy?: CelularGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CelularGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCelularGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Celular model
   */
  readonly fields: CelularFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Celular.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CelularClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    productoGeneral<T extends Celular$productoGeneralArgs<ExtArgs> = {}>(args?: Subset<T, Celular$productoGeneralArgs<ExtArgs>>): Prisma__ProductoGeneralClient<$Result.GetResult<Prisma.$ProductoGeneralPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Celular model
   */
  interface CelularFieldRefs {
    readonly id: FieldRef<"Celular", 'Int'>
    readonly nombre: FieldRef<"Celular", 'String'>
    readonly precio: FieldRef<"Celular", 'Float'>
    readonly imagen: FieldRef<"Celular", 'String'>
    readonly marca: FieldRef<"Celular", 'String'>
    readonly color: FieldRef<"Celular", 'String'>
    readonly modelo: FieldRef<"Celular", 'String'>
    readonly pantalla: FieldRef<"Celular", 'String'>
    readonly bateria: FieldRef<"Celular", 'String'>
    readonly almacenamiento: FieldRef<"Celular", 'String'>
    readonly ram: FieldRef<"Celular", 'String'>
    readonly camara: FieldRef<"Celular", 'String'>
    readonly puertoCarga: FieldRef<"Celular", 'String'>
    readonly precioPromocion: FieldRef<"Celular", 'Float'>
    readonly precioDescuento: FieldRef<"Celular", 'Float'>
    readonly textoPromocion: FieldRef<"Celular", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Celular findUnique
   */
  export type CelularFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Celular
     */
    select?: CelularSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Celular
     */
    omit?: CelularOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CelularInclude<ExtArgs> | null
    /**
     * Filter, which Celular to fetch.
     */
    where: CelularWhereUniqueInput
  }

  /**
   * Celular findUniqueOrThrow
   */
  export type CelularFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Celular
     */
    select?: CelularSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Celular
     */
    omit?: CelularOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CelularInclude<ExtArgs> | null
    /**
     * Filter, which Celular to fetch.
     */
    where: CelularWhereUniqueInput
  }

  /**
   * Celular findFirst
   */
  export type CelularFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Celular
     */
    select?: CelularSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Celular
     */
    omit?: CelularOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CelularInclude<ExtArgs> | null
    /**
     * Filter, which Celular to fetch.
     */
    where?: CelularWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Celulars to fetch.
     */
    orderBy?: CelularOrderByWithRelationInput | CelularOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Celulars.
     */
    cursor?: CelularWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Celulars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Celulars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Celulars.
     */
    distinct?: CelularScalarFieldEnum | CelularScalarFieldEnum[]
  }

  /**
   * Celular findFirstOrThrow
   */
  export type CelularFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Celular
     */
    select?: CelularSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Celular
     */
    omit?: CelularOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CelularInclude<ExtArgs> | null
    /**
     * Filter, which Celular to fetch.
     */
    where?: CelularWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Celulars to fetch.
     */
    orderBy?: CelularOrderByWithRelationInput | CelularOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Celulars.
     */
    cursor?: CelularWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Celulars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Celulars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Celulars.
     */
    distinct?: CelularScalarFieldEnum | CelularScalarFieldEnum[]
  }

  /**
   * Celular findMany
   */
  export type CelularFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Celular
     */
    select?: CelularSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Celular
     */
    omit?: CelularOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CelularInclude<ExtArgs> | null
    /**
     * Filter, which Celulars to fetch.
     */
    where?: CelularWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Celulars to fetch.
     */
    orderBy?: CelularOrderByWithRelationInput | CelularOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Celulars.
     */
    cursor?: CelularWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Celulars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Celulars.
     */
    skip?: number
    distinct?: CelularScalarFieldEnum | CelularScalarFieldEnum[]
  }

  /**
   * Celular create
   */
  export type CelularCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Celular
     */
    select?: CelularSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Celular
     */
    omit?: CelularOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CelularInclude<ExtArgs> | null
    /**
     * The data needed to create a Celular.
     */
    data: XOR<CelularCreateInput, CelularUncheckedCreateInput>
  }

  /**
   * Celular createMany
   */
  export type CelularCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Celulars.
     */
    data: CelularCreateManyInput | CelularCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Celular createManyAndReturn
   */
  export type CelularCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Celular
     */
    select?: CelularSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Celular
     */
    omit?: CelularOmit<ExtArgs> | null
    /**
     * The data used to create many Celulars.
     */
    data: CelularCreateManyInput | CelularCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Celular update
   */
  export type CelularUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Celular
     */
    select?: CelularSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Celular
     */
    omit?: CelularOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CelularInclude<ExtArgs> | null
    /**
     * The data needed to update a Celular.
     */
    data: XOR<CelularUpdateInput, CelularUncheckedUpdateInput>
    /**
     * Choose, which Celular to update.
     */
    where: CelularWhereUniqueInput
  }

  /**
   * Celular updateMany
   */
  export type CelularUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Celulars.
     */
    data: XOR<CelularUpdateManyMutationInput, CelularUncheckedUpdateManyInput>
    /**
     * Filter which Celulars to update
     */
    where?: CelularWhereInput
    /**
     * Limit how many Celulars to update.
     */
    limit?: number
  }

  /**
   * Celular updateManyAndReturn
   */
  export type CelularUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Celular
     */
    select?: CelularSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Celular
     */
    omit?: CelularOmit<ExtArgs> | null
    /**
     * The data used to update Celulars.
     */
    data: XOR<CelularUpdateManyMutationInput, CelularUncheckedUpdateManyInput>
    /**
     * Filter which Celulars to update
     */
    where?: CelularWhereInput
    /**
     * Limit how many Celulars to update.
     */
    limit?: number
  }

  /**
   * Celular upsert
   */
  export type CelularUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Celular
     */
    select?: CelularSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Celular
     */
    omit?: CelularOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CelularInclude<ExtArgs> | null
    /**
     * The filter to search for the Celular to update in case it exists.
     */
    where: CelularWhereUniqueInput
    /**
     * In case the Celular found by the `where` argument doesn't exist, create a new Celular with this data.
     */
    create: XOR<CelularCreateInput, CelularUncheckedCreateInput>
    /**
     * In case the Celular was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CelularUpdateInput, CelularUncheckedUpdateInput>
  }

  /**
   * Celular delete
   */
  export type CelularDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Celular
     */
    select?: CelularSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Celular
     */
    omit?: CelularOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CelularInclude<ExtArgs> | null
    /**
     * Filter which Celular to delete.
     */
    where: CelularWhereUniqueInput
  }

  /**
   * Celular deleteMany
   */
  export type CelularDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Celulars to delete
     */
    where?: CelularWhereInput
    /**
     * Limit how many Celulars to delete.
     */
    limit?: number
  }

  /**
   * Celular.productoGeneral
   */
  export type Celular$productoGeneralArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoGeneral
     */
    select?: ProductoGeneralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductoGeneral
     */
    omit?: ProductoGeneralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoGeneralInclude<ExtArgs> | null
    where?: ProductoGeneralWhereInput
  }

  /**
   * Celular without action
   */
  export type CelularDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Celular
     */
    select?: CelularSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Celular
     */
    omit?: CelularOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CelularInclude<ExtArgs> | null
  }


  /**
   * Model Accesorio
   */

  export type AggregateAccesorio = {
    _count: AccesorioCountAggregateOutputType | null
    _avg: AccesorioAvgAggregateOutputType | null
    _sum: AccesorioSumAggregateOutputType | null
    _min: AccesorioMinAggregateOutputType | null
    _max: AccesorioMaxAggregateOutputType | null
  }

  export type AccesorioAvgAggregateOutputType = {
    id: number | null
    precio: number | null
    precioPromocion: number | null
    precioDescuento: number | null
  }

  export type AccesorioSumAggregateOutputType = {
    id: number | null
    precio: number | null
    precioPromocion: number | null
    precioDescuento: number | null
  }

  export type AccesorioMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    precio: number | null
    imagen: string | null
    descripcion: string | null
    compatibilidad: string | null
    dimensiones: string | null
    peso: string | null
    colores: string | null
    precioPromocion: number | null
    precioDescuento: number | null
    textoPromocion: string | null
  }

  export type AccesorioMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    precio: number | null
    imagen: string | null
    descripcion: string | null
    compatibilidad: string | null
    dimensiones: string | null
    peso: string | null
    colores: string | null
    precioPromocion: number | null
    precioDescuento: number | null
    textoPromocion: string | null
  }

  export type AccesorioCountAggregateOutputType = {
    id: number
    nombre: number
    precio: number
    imagen: number
    descripcion: number
    compatibilidad: number
    dimensiones: number
    peso: number
    colores: number
    precioPromocion: number
    precioDescuento: number
    textoPromocion: number
    _all: number
  }


  export type AccesorioAvgAggregateInputType = {
    id?: true
    precio?: true
    precioPromocion?: true
    precioDescuento?: true
  }

  export type AccesorioSumAggregateInputType = {
    id?: true
    precio?: true
    precioPromocion?: true
    precioDescuento?: true
  }

  export type AccesorioMinAggregateInputType = {
    id?: true
    nombre?: true
    precio?: true
    imagen?: true
    descripcion?: true
    compatibilidad?: true
    dimensiones?: true
    peso?: true
    colores?: true
    precioPromocion?: true
    precioDescuento?: true
    textoPromocion?: true
  }

  export type AccesorioMaxAggregateInputType = {
    id?: true
    nombre?: true
    precio?: true
    imagen?: true
    descripcion?: true
    compatibilidad?: true
    dimensiones?: true
    peso?: true
    colores?: true
    precioPromocion?: true
    precioDescuento?: true
    textoPromocion?: true
  }

  export type AccesorioCountAggregateInputType = {
    id?: true
    nombre?: true
    precio?: true
    imagen?: true
    descripcion?: true
    compatibilidad?: true
    dimensiones?: true
    peso?: true
    colores?: true
    precioPromocion?: true
    precioDescuento?: true
    textoPromocion?: true
    _all?: true
  }

  export type AccesorioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accesorio to aggregate.
     */
    where?: AccesorioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accesorios to fetch.
     */
    orderBy?: AccesorioOrderByWithRelationInput | AccesorioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccesorioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accesorios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accesorios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accesorios
    **/
    _count?: true | AccesorioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccesorioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccesorioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccesorioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccesorioMaxAggregateInputType
  }

  export type GetAccesorioAggregateType<T extends AccesorioAggregateArgs> = {
        [P in keyof T & keyof AggregateAccesorio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccesorio[P]>
      : GetScalarType<T[P], AggregateAccesorio[P]>
  }




  export type AccesorioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccesorioWhereInput
    orderBy?: AccesorioOrderByWithAggregationInput | AccesorioOrderByWithAggregationInput[]
    by: AccesorioScalarFieldEnum[] | AccesorioScalarFieldEnum
    having?: AccesorioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccesorioCountAggregateInputType | true
    _avg?: AccesorioAvgAggregateInputType
    _sum?: AccesorioSumAggregateInputType
    _min?: AccesorioMinAggregateInputType
    _max?: AccesorioMaxAggregateInputType
  }

  export type AccesorioGroupByOutputType = {
    id: number
    nombre: string
    precio: number
    imagen: string
    descripcion: string | null
    compatibilidad: string | null
    dimensiones: string | null
    peso: string | null
    colores: string | null
    precioPromocion: number | null
    precioDescuento: number | null
    textoPromocion: string | null
    _count: AccesorioCountAggregateOutputType | null
    _avg: AccesorioAvgAggregateOutputType | null
    _sum: AccesorioSumAggregateOutputType | null
    _min: AccesorioMinAggregateOutputType | null
    _max: AccesorioMaxAggregateOutputType | null
  }

  type GetAccesorioGroupByPayload<T extends AccesorioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccesorioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccesorioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccesorioGroupByOutputType[P]>
            : GetScalarType<T[P], AccesorioGroupByOutputType[P]>
        }
      >
    >


  export type AccesorioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    precio?: boolean
    imagen?: boolean
    descripcion?: boolean
    compatibilidad?: boolean
    dimensiones?: boolean
    peso?: boolean
    colores?: boolean
    precioPromocion?: boolean
    precioDescuento?: boolean
    textoPromocion?: boolean
    productoGeneral?: boolean | Accesorio$productoGeneralArgs<ExtArgs>
  }, ExtArgs["result"]["accesorio"]>

  export type AccesorioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    precio?: boolean
    imagen?: boolean
    descripcion?: boolean
    compatibilidad?: boolean
    dimensiones?: boolean
    peso?: boolean
    colores?: boolean
    precioPromocion?: boolean
    precioDescuento?: boolean
    textoPromocion?: boolean
  }, ExtArgs["result"]["accesorio"]>

  export type AccesorioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    precio?: boolean
    imagen?: boolean
    descripcion?: boolean
    compatibilidad?: boolean
    dimensiones?: boolean
    peso?: boolean
    colores?: boolean
    precioPromocion?: boolean
    precioDescuento?: boolean
    textoPromocion?: boolean
  }, ExtArgs["result"]["accesorio"]>

  export type AccesorioSelectScalar = {
    id?: boolean
    nombre?: boolean
    precio?: boolean
    imagen?: boolean
    descripcion?: boolean
    compatibilidad?: boolean
    dimensiones?: boolean
    peso?: boolean
    colores?: boolean
    precioPromocion?: boolean
    precioDescuento?: boolean
    textoPromocion?: boolean
  }

  export type AccesorioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "precio" | "imagen" | "descripcion" | "compatibilidad" | "dimensiones" | "peso" | "colores" | "precioPromocion" | "precioDescuento" | "textoPromocion", ExtArgs["result"]["accesorio"]>
  export type AccesorioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productoGeneral?: boolean | Accesorio$productoGeneralArgs<ExtArgs>
  }
  export type AccesorioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AccesorioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AccesorioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Accesorio"
    objects: {
      productoGeneral: Prisma.$ProductoGeneralPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      precio: number
      imagen: string
      descripcion: string | null
      compatibilidad: string | null
      dimensiones: string | null
      peso: string | null
      colores: string | null
      precioPromocion: number | null
      precioDescuento: number | null
      textoPromocion: string | null
    }, ExtArgs["result"]["accesorio"]>
    composites: {}
  }

  type AccesorioGetPayload<S extends boolean | null | undefined | AccesorioDefaultArgs> = $Result.GetResult<Prisma.$AccesorioPayload, S>

  type AccesorioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccesorioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccesorioCountAggregateInputType | true
    }

  export interface AccesorioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Accesorio'], meta: { name: 'Accesorio' } }
    /**
     * Find zero or one Accesorio that matches the filter.
     * @param {AccesorioFindUniqueArgs} args - Arguments to find a Accesorio
     * @example
     * // Get one Accesorio
     * const accesorio = await prisma.accesorio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccesorioFindUniqueArgs>(args: SelectSubset<T, AccesorioFindUniqueArgs<ExtArgs>>): Prisma__AccesorioClient<$Result.GetResult<Prisma.$AccesorioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Accesorio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccesorioFindUniqueOrThrowArgs} args - Arguments to find a Accesorio
     * @example
     * // Get one Accesorio
     * const accesorio = await prisma.accesorio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccesorioFindUniqueOrThrowArgs>(args: SelectSubset<T, AccesorioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccesorioClient<$Result.GetResult<Prisma.$AccesorioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Accesorio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccesorioFindFirstArgs} args - Arguments to find a Accesorio
     * @example
     * // Get one Accesorio
     * const accesorio = await prisma.accesorio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccesorioFindFirstArgs>(args?: SelectSubset<T, AccesorioFindFirstArgs<ExtArgs>>): Prisma__AccesorioClient<$Result.GetResult<Prisma.$AccesorioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Accesorio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccesorioFindFirstOrThrowArgs} args - Arguments to find a Accesorio
     * @example
     * // Get one Accesorio
     * const accesorio = await prisma.accesorio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccesorioFindFirstOrThrowArgs>(args?: SelectSubset<T, AccesorioFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccesorioClient<$Result.GetResult<Prisma.$AccesorioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accesorios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccesorioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accesorios
     * const accesorios = await prisma.accesorio.findMany()
     * 
     * // Get first 10 Accesorios
     * const accesorios = await prisma.accesorio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accesorioWithIdOnly = await prisma.accesorio.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccesorioFindManyArgs>(args?: SelectSubset<T, AccesorioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccesorioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Accesorio.
     * @param {AccesorioCreateArgs} args - Arguments to create a Accesorio.
     * @example
     * // Create one Accesorio
     * const Accesorio = await prisma.accesorio.create({
     *   data: {
     *     // ... data to create a Accesorio
     *   }
     * })
     * 
     */
    create<T extends AccesorioCreateArgs>(args: SelectSubset<T, AccesorioCreateArgs<ExtArgs>>): Prisma__AccesorioClient<$Result.GetResult<Prisma.$AccesorioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accesorios.
     * @param {AccesorioCreateManyArgs} args - Arguments to create many Accesorios.
     * @example
     * // Create many Accesorios
     * const accesorio = await prisma.accesorio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccesorioCreateManyArgs>(args?: SelectSubset<T, AccesorioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accesorios and returns the data saved in the database.
     * @param {AccesorioCreateManyAndReturnArgs} args - Arguments to create many Accesorios.
     * @example
     * // Create many Accesorios
     * const accesorio = await prisma.accesorio.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accesorios and only return the `id`
     * const accesorioWithIdOnly = await prisma.accesorio.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccesorioCreateManyAndReturnArgs>(args?: SelectSubset<T, AccesorioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccesorioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Accesorio.
     * @param {AccesorioDeleteArgs} args - Arguments to delete one Accesorio.
     * @example
     * // Delete one Accesorio
     * const Accesorio = await prisma.accesorio.delete({
     *   where: {
     *     // ... filter to delete one Accesorio
     *   }
     * })
     * 
     */
    delete<T extends AccesorioDeleteArgs>(args: SelectSubset<T, AccesorioDeleteArgs<ExtArgs>>): Prisma__AccesorioClient<$Result.GetResult<Prisma.$AccesorioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Accesorio.
     * @param {AccesorioUpdateArgs} args - Arguments to update one Accesorio.
     * @example
     * // Update one Accesorio
     * const accesorio = await prisma.accesorio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccesorioUpdateArgs>(args: SelectSubset<T, AccesorioUpdateArgs<ExtArgs>>): Prisma__AccesorioClient<$Result.GetResult<Prisma.$AccesorioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accesorios.
     * @param {AccesorioDeleteManyArgs} args - Arguments to filter Accesorios to delete.
     * @example
     * // Delete a few Accesorios
     * const { count } = await prisma.accesorio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccesorioDeleteManyArgs>(args?: SelectSubset<T, AccesorioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accesorios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccesorioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accesorios
     * const accesorio = await prisma.accesorio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccesorioUpdateManyArgs>(args: SelectSubset<T, AccesorioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accesorios and returns the data updated in the database.
     * @param {AccesorioUpdateManyAndReturnArgs} args - Arguments to update many Accesorios.
     * @example
     * // Update many Accesorios
     * const accesorio = await prisma.accesorio.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accesorios and only return the `id`
     * const accesorioWithIdOnly = await prisma.accesorio.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccesorioUpdateManyAndReturnArgs>(args: SelectSubset<T, AccesorioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccesorioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Accesorio.
     * @param {AccesorioUpsertArgs} args - Arguments to update or create a Accesorio.
     * @example
     * // Update or create a Accesorio
     * const accesorio = await prisma.accesorio.upsert({
     *   create: {
     *     // ... data to create a Accesorio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Accesorio we want to update
     *   }
     * })
     */
    upsert<T extends AccesorioUpsertArgs>(args: SelectSubset<T, AccesorioUpsertArgs<ExtArgs>>): Prisma__AccesorioClient<$Result.GetResult<Prisma.$AccesorioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accesorios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccesorioCountArgs} args - Arguments to filter Accesorios to count.
     * @example
     * // Count the number of Accesorios
     * const count = await prisma.accesorio.count({
     *   where: {
     *     // ... the filter for the Accesorios we want to count
     *   }
     * })
    **/
    count<T extends AccesorioCountArgs>(
      args?: Subset<T, AccesorioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccesorioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Accesorio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccesorioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccesorioAggregateArgs>(args: Subset<T, AccesorioAggregateArgs>): Prisma.PrismaPromise<GetAccesorioAggregateType<T>>

    /**
     * Group by Accesorio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccesorioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccesorioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccesorioGroupByArgs['orderBy'] }
        : { orderBy?: AccesorioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccesorioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccesorioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Accesorio model
   */
  readonly fields: AccesorioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Accesorio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccesorioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    productoGeneral<T extends Accesorio$productoGeneralArgs<ExtArgs> = {}>(args?: Subset<T, Accesorio$productoGeneralArgs<ExtArgs>>): Prisma__ProductoGeneralClient<$Result.GetResult<Prisma.$ProductoGeneralPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Accesorio model
   */
  interface AccesorioFieldRefs {
    readonly id: FieldRef<"Accesorio", 'Int'>
    readonly nombre: FieldRef<"Accesorio", 'String'>
    readonly precio: FieldRef<"Accesorio", 'Float'>
    readonly imagen: FieldRef<"Accesorio", 'String'>
    readonly descripcion: FieldRef<"Accesorio", 'String'>
    readonly compatibilidad: FieldRef<"Accesorio", 'String'>
    readonly dimensiones: FieldRef<"Accesorio", 'String'>
    readonly peso: FieldRef<"Accesorio", 'String'>
    readonly colores: FieldRef<"Accesorio", 'String'>
    readonly precioPromocion: FieldRef<"Accesorio", 'Float'>
    readonly precioDescuento: FieldRef<"Accesorio", 'Float'>
    readonly textoPromocion: FieldRef<"Accesorio", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Accesorio findUnique
   */
  export type AccesorioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accesorio
     */
    select?: AccesorioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accesorio
     */
    omit?: AccesorioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccesorioInclude<ExtArgs> | null
    /**
     * Filter, which Accesorio to fetch.
     */
    where: AccesorioWhereUniqueInput
  }

  /**
   * Accesorio findUniqueOrThrow
   */
  export type AccesorioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accesorio
     */
    select?: AccesorioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accesorio
     */
    omit?: AccesorioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccesorioInclude<ExtArgs> | null
    /**
     * Filter, which Accesorio to fetch.
     */
    where: AccesorioWhereUniqueInput
  }

  /**
   * Accesorio findFirst
   */
  export type AccesorioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accesorio
     */
    select?: AccesorioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accesorio
     */
    omit?: AccesorioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccesorioInclude<ExtArgs> | null
    /**
     * Filter, which Accesorio to fetch.
     */
    where?: AccesorioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accesorios to fetch.
     */
    orderBy?: AccesorioOrderByWithRelationInput | AccesorioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accesorios.
     */
    cursor?: AccesorioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accesorios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accesorios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accesorios.
     */
    distinct?: AccesorioScalarFieldEnum | AccesorioScalarFieldEnum[]
  }

  /**
   * Accesorio findFirstOrThrow
   */
  export type AccesorioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accesorio
     */
    select?: AccesorioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accesorio
     */
    omit?: AccesorioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccesorioInclude<ExtArgs> | null
    /**
     * Filter, which Accesorio to fetch.
     */
    where?: AccesorioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accesorios to fetch.
     */
    orderBy?: AccesorioOrderByWithRelationInput | AccesorioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accesorios.
     */
    cursor?: AccesorioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accesorios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accesorios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accesorios.
     */
    distinct?: AccesorioScalarFieldEnum | AccesorioScalarFieldEnum[]
  }

  /**
   * Accesorio findMany
   */
  export type AccesorioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accesorio
     */
    select?: AccesorioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accesorio
     */
    omit?: AccesorioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccesorioInclude<ExtArgs> | null
    /**
     * Filter, which Accesorios to fetch.
     */
    where?: AccesorioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accesorios to fetch.
     */
    orderBy?: AccesorioOrderByWithRelationInput | AccesorioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accesorios.
     */
    cursor?: AccesorioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accesorios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accesorios.
     */
    skip?: number
    distinct?: AccesorioScalarFieldEnum | AccesorioScalarFieldEnum[]
  }

  /**
   * Accesorio create
   */
  export type AccesorioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accesorio
     */
    select?: AccesorioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accesorio
     */
    omit?: AccesorioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccesorioInclude<ExtArgs> | null
    /**
     * The data needed to create a Accesorio.
     */
    data: XOR<AccesorioCreateInput, AccesorioUncheckedCreateInput>
  }

  /**
   * Accesorio createMany
   */
  export type AccesorioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accesorios.
     */
    data: AccesorioCreateManyInput | AccesorioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Accesorio createManyAndReturn
   */
  export type AccesorioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accesorio
     */
    select?: AccesorioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Accesorio
     */
    omit?: AccesorioOmit<ExtArgs> | null
    /**
     * The data used to create many Accesorios.
     */
    data: AccesorioCreateManyInput | AccesorioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Accesorio update
   */
  export type AccesorioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accesorio
     */
    select?: AccesorioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accesorio
     */
    omit?: AccesorioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccesorioInclude<ExtArgs> | null
    /**
     * The data needed to update a Accesorio.
     */
    data: XOR<AccesorioUpdateInput, AccesorioUncheckedUpdateInput>
    /**
     * Choose, which Accesorio to update.
     */
    where: AccesorioWhereUniqueInput
  }

  /**
   * Accesorio updateMany
   */
  export type AccesorioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accesorios.
     */
    data: XOR<AccesorioUpdateManyMutationInput, AccesorioUncheckedUpdateManyInput>
    /**
     * Filter which Accesorios to update
     */
    where?: AccesorioWhereInput
    /**
     * Limit how many Accesorios to update.
     */
    limit?: number
  }

  /**
   * Accesorio updateManyAndReturn
   */
  export type AccesorioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accesorio
     */
    select?: AccesorioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Accesorio
     */
    omit?: AccesorioOmit<ExtArgs> | null
    /**
     * The data used to update Accesorios.
     */
    data: XOR<AccesorioUpdateManyMutationInput, AccesorioUncheckedUpdateManyInput>
    /**
     * Filter which Accesorios to update
     */
    where?: AccesorioWhereInput
    /**
     * Limit how many Accesorios to update.
     */
    limit?: number
  }

  /**
   * Accesorio upsert
   */
  export type AccesorioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accesorio
     */
    select?: AccesorioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accesorio
     */
    omit?: AccesorioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccesorioInclude<ExtArgs> | null
    /**
     * The filter to search for the Accesorio to update in case it exists.
     */
    where: AccesorioWhereUniqueInput
    /**
     * In case the Accesorio found by the `where` argument doesn't exist, create a new Accesorio with this data.
     */
    create: XOR<AccesorioCreateInput, AccesorioUncheckedCreateInput>
    /**
     * In case the Accesorio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccesorioUpdateInput, AccesorioUncheckedUpdateInput>
  }

  /**
   * Accesorio delete
   */
  export type AccesorioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accesorio
     */
    select?: AccesorioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accesorio
     */
    omit?: AccesorioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccesorioInclude<ExtArgs> | null
    /**
     * Filter which Accesorio to delete.
     */
    where: AccesorioWhereUniqueInput
  }

  /**
   * Accesorio deleteMany
   */
  export type AccesorioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accesorios to delete
     */
    where?: AccesorioWhereInput
    /**
     * Limit how many Accesorios to delete.
     */
    limit?: number
  }

  /**
   * Accesorio.productoGeneral
   */
  export type Accesorio$productoGeneralArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoGeneral
     */
    select?: ProductoGeneralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductoGeneral
     */
    omit?: ProductoGeneralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoGeneralInclude<ExtArgs> | null
    where?: ProductoGeneralWhereInput
  }

  /**
   * Accesorio without action
   */
  export type AccesorioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accesorio
     */
    select?: AccesorioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accesorio
     */
    omit?: AccesorioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccesorioInclude<ExtArgs> | null
  }


  /**
   * Model Pedido
   */

  export type AggregatePedido = {
    _count: PedidoCountAggregateOutputType | null
    _avg: PedidoAvgAggregateOutputType | null
    _sum: PedidoSumAggregateOutputType | null
    _min: PedidoMinAggregateOutputType | null
    _max: PedidoMaxAggregateOutputType | null
  }

  export type PedidoAvgAggregateOutputType = {
    id: number | null
    total: number | null
  }

  export type PedidoSumAggregateOutputType = {
    id: number | null
    total: number | null
  }

  export type PedidoMinAggregateOutputType = {
    id: number | null
    total: number | null
    estado: string | null
    creadoEn: Date | null
  }

  export type PedidoMaxAggregateOutputType = {
    id: number | null
    total: number | null
    estado: string | null
    creadoEn: Date | null
  }

  export type PedidoCountAggregateOutputType = {
    id: number
    total: number
    estado: number
    creadoEn: number
    _all: number
  }


  export type PedidoAvgAggregateInputType = {
    id?: true
    total?: true
  }

  export type PedidoSumAggregateInputType = {
    id?: true
    total?: true
  }

  export type PedidoMinAggregateInputType = {
    id?: true
    total?: true
    estado?: true
    creadoEn?: true
  }

  export type PedidoMaxAggregateInputType = {
    id?: true
    total?: true
    estado?: true
    creadoEn?: true
  }

  export type PedidoCountAggregateInputType = {
    id?: true
    total?: true
    estado?: true
    creadoEn?: true
    _all?: true
  }

  export type PedidoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pedido to aggregate.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pedidos
    **/
    _count?: true | PedidoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PedidoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PedidoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PedidoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PedidoMaxAggregateInputType
  }

  export type GetPedidoAggregateType<T extends PedidoAggregateArgs> = {
        [P in keyof T & keyof AggregatePedido]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePedido[P]>
      : GetScalarType<T[P], AggregatePedido[P]>
  }




  export type PedidoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoWhereInput
    orderBy?: PedidoOrderByWithAggregationInput | PedidoOrderByWithAggregationInput[]
    by: PedidoScalarFieldEnum[] | PedidoScalarFieldEnum
    having?: PedidoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PedidoCountAggregateInputType | true
    _avg?: PedidoAvgAggregateInputType
    _sum?: PedidoSumAggregateInputType
    _min?: PedidoMinAggregateInputType
    _max?: PedidoMaxAggregateInputType
  }

  export type PedidoGroupByOutputType = {
    id: number
    total: number
    estado: string
    creadoEn: Date
    _count: PedidoCountAggregateOutputType | null
    _avg: PedidoAvgAggregateOutputType | null
    _sum: PedidoSumAggregateOutputType | null
    _min: PedidoMinAggregateOutputType | null
    _max: PedidoMaxAggregateOutputType | null
  }

  type GetPedidoGroupByPayload<T extends PedidoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PedidoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PedidoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PedidoGroupByOutputType[P]>
            : GetScalarType<T[P], PedidoGroupByOutputType[P]>
        }
      >
    >


  export type PedidoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    total?: boolean
    estado?: boolean
    creadoEn?: boolean
    items?: boolean | Pedido$itemsArgs<ExtArgs>
    _count?: boolean | PedidoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedido"]>

  export type PedidoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    total?: boolean
    estado?: boolean
    creadoEn?: boolean
  }, ExtArgs["result"]["pedido"]>

  export type PedidoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    total?: boolean
    estado?: boolean
    creadoEn?: boolean
  }, ExtArgs["result"]["pedido"]>

  export type PedidoSelectScalar = {
    id?: boolean
    total?: boolean
    estado?: boolean
    creadoEn?: boolean
  }

  export type PedidoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "total" | "estado" | "creadoEn", ExtArgs["result"]["pedido"]>
  export type PedidoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | Pedido$itemsArgs<ExtArgs>
    _count?: boolean | PedidoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PedidoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PedidoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PedidoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pedido"
    objects: {
      items: Prisma.$ItemPedidoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      total: number
      estado: string
      creadoEn: Date
    }, ExtArgs["result"]["pedido"]>
    composites: {}
  }

  type PedidoGetPayload<S extends boolean | null | undefined | PedidoDefaultArgs> = $Result.GetResult<Prisma.$PedidoPayload, S>

  type PedidoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PedidoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PedidoCountAggregateInputType | true
    }

  export interface PedidoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pedido'], meta: { name: 'Pedido' } }
    /**
     * Find zero or one Pedido that matches the filter.
     * @param {PedidoFindUniqueArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PedidoFindUniqueArgs>(args: SelectSubset<T, PedidoFindUniqueArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pedido that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PedidoFindUniqueOrThrowArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PedidoFindUniqueOrThrowArgs>(args: SelectSubset<T, PedidoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pedido that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoFindFirstArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PedidoFindFirstArgs>(args?: SelectSubset<T, PedidoFindFirstArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pedido that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoFindFirstOrThrowArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PedidoFindFirstOrThrowArgs>(args?: SelectSubset<T, PedidoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pedidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pedidos
     * const pedidos = await prisma.pedido.findMany()
     * 
     * // Get first 10 Pedidos
     * const pedidos = await prisma.pedido.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pedidoWithIdOnly = await prisma.pedido.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PedidoFindManyArgs>(args?: SelectSubset<T, PedidoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pedido.
     * @param {PedidoCreateArgs} args - Arguments to create a Pedido.
     * @example
     * // Create one Pedido
     * const Pedido = await prisma.pedido.create({
     *   data: {
     *     // ... data to create a Pedido
     *   }
     * })
     * 
     */
    create<T extends PedidoCreateArgs>(args: SelectSubset<T, PedidoCreateArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pedidos.
     * @param {PedidoCreateManyArgs} args - Arguments to create many Pedidos.
     * @example
     * // Create many Pedidos
     * const pedido = await prisma.pedido.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PedidoCreateManyArgs>(args?: SelectSubset<T, PedidoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pedidos and returns the data saved in the database.
     * @param {PedidoCreateManyAndReturnArgs} args - Arguments to create many Pedidos.
     * @example
     * // Create many Pedidos
     * const pedido = await prisma.pedido.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pedidos and only return the `id`
     * const pedidoWithIdOnly = await prisma.pedido.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PedidoCreateManyAndReturnArgs>(args?: SelectSubset<T, PedidoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pedido.
     * @param {PedidoDeleteArgs} args - Arguments to delete one Pedido.
     * @example
     * // Delete one Pedido
     * const Pedido = await prisma.pedido.delete({
     *   where: {
     *     // ... filter to delete one Pedido
     *   }
     * })
     * 
     */
    delete<T extends PedidoDeleteArgs>(args: SelectSubset<T, PedidoDeleteArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pedido.
     * @param {PedidoUpdateArgs} args - Arguments to update one Pedido.
     * @example
     * // Update one Pedido
     * const pedido = await prisma.pedido.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PedidoUpdateArgs>(args: SelectSubset<T, PedidoUpdateArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pedidos.
     * @param {PedidoDeleteManyArgs} args - Arguments to filter Pedidos to delete.
     * @example
     * // Delete a few Pedidos
     * const { count } = await prisma.pedido.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PedidoDeleteManyArgs>(args?: SelectSubset<T, PedidoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pedidos
     * const pedido = await prisma.pedido.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PedidoUpdateManyArgs>(args: SelectSubset<T, PedidoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pedidos and returns the data updated in the database.
     * @param {PedidoUpdateManyAndReturnArgs} args - Arguments to update many Pedidos.
     * @example
     * // Update many Pedidos
     * const pedido = await prisma.pedido.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pedidos and only return the `id`
     * const pedidoWithIdOnly = await prisma.pedido.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PedidoUpdateManyAndReturnArgs>(args: SelectSubset<T, PedidoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pedido.
     * @param {PedidoUpsertArgs} args - Arguments to update or create a Pedido.
     * @example
     * // Update or create a Pedido
     * const pedido = await prisma.pedido.upsert({
     *   create: {
     *     // ... data to create a Pedido
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pedido we want to update
     *   }
     * })
     */
    upsert<T extends PedidoUpsertArgs>(args: SelectSubset<T, PedidoUpsertArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoCountArgs} args - Arguments to filter Pedidos to count.
     * @example
     * // Count the number of Pedidos
     * const count = await prisma.pedido.count({
     *   where: {
     *     // ... the filter for the Pedidos we want to count
     *   }
     * })
    **/
    count<T extends PedidoCountArgs>(
      args?: Subset<T, PedidoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PedidoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PedidoAggregateArgs>(args: Subset<T, PedidoAggregateArgs>): Prisma.PrismaPromise<GetPedidoAggregateType<T>>

    /**
     * Group by Pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PedidoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PedidoGroupByArgs['orderBy'] }
        : { orderBy?: PedidoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PedidoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPedidoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pedido model
   */
  readonly fields: PedidoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pedido.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PedidoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    items<T extends Pedido$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Pedido$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pedido model
   */
  interface PedidoFieldRefs {
    readonly id: FieldRef<"Pedido", 'Int'>
    readonly total: FieldRef<"Pedido", 'Float'>
    readonly estado: FieldRef<"Pedido", 'String'>
    readonly creadoEn: FieldRef<"Pedido", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Pedido findUnique
   */
  export type PedidoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido findUniqueOrThrow
   */
  export type PedidoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido findFirst
   */
  export type PedidoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pedidos.
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pedidos.
     */
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Pedido findFirstOrThrow
   */
  export type PedidoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pedidos.
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pedidos.
     */
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Pedido findMany
   */
  export type PedidoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedidos to fetch.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pedidos.
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Pedido create
   */
  export type PedidoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * The data needed to create a Pedido.
     */
    data: XOR<PedidoCreateInput, PedidoUncheckedCreateInput>
  }

  /**
   * Pedido createMany
   */
  export type PedidoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pedidos.
     */
    data: PedidoCreateManyInput | PedidoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pedido createManyAndReturn
   */
  export type PedidoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * The data used to create many Pedidos.
     */
    data: PedidoCreateManyInput | PedidoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pedido update
   */
  export type PedidoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * The data needed to update a Pedido.
     */
    data: XOR<PedidoUpdateInput, PedidoUncheckedUpdateInput>
    /**
     * Choose, which Pedido to update.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido updateMany
   */
  export type PedidoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pedidos.
     */
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyInput>
    /**
     * Filter which Pedidos to update
     */
    where?: PedidoWhereInput
    /**
     * Limit how many Pedidos to update.
     */
    limit?: number
  }

  /**
   * Pedido updateManyAndReturn
   */
  export type PedidoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * The data used to update Pedidos.
     */
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyInput>
    /**
     * Filter which Pedidos to update
     */
    where?: PedidoWhereInput
    /**
     * Limit how many Pedidos to update.
     */
    limit?: number
  }

  /**
   * Pedido upsert
   */
  export type PedidoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * The filter to search for the Pedido to update in case it exists.
     */
    where: PedidoWhereUniqueInput
    /**
     * In case the Pedido found by the `where` argument doesn't exist, create a new Pedido with this data.
     */
    create: XOR<PedidoCreateInput, PedidoUncheckedCreateInput>
    /**
     * In case the Pedido was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PedidoUpdateInput, PedidoUncheckedUpdateInput>
  }

  /**
   * Pedido delete
   */
  export type PedidoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter which Pedido to delete.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido deleteMany
   */
  export type PedidoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pedidos to delete
     */
    where?: PedidoWhereInput
    /**
     * Limit how many Pedidos to delete.
     */
    limit?: number
  }

  /**
   * Pedido.items
   */
  export type Pedido$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    where?: ItemPedidoWhereInput
    orderBy?: ItemPedidoOrderByWithRelationInput | ItemPedidoOrderByWithRelationInput[]
    cursor?: ItemPedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemPedidoScalarFieldEnum | ItemPedidoScalarFieldEnum[]
  }

  /**
   * Pedido without action
   */
  export type PedidoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
  }


  /**
   * Model ItemPedido
   */

  export type AggregateItemPedido = {
    _count: ItemPedidoCountAggregateOutputType | null
    _avg: ItemPedidoAvgAggregateOutputType | null
    _sum: ItemPedidoSumAggregateOutputType | null
    _min: ItemPedidoMinAggregateOutputType | null
    _max: ItemPedidoMaxAggregateOutputType | null
  }

  export type ItemPedidoAvgAggregateOutputType = {
    id: number | null
    pedidoId: number | null
    productoGeneralId: number | null
    cantidad: number | null
    precio: number | null
  }

  export type ItemPedidoSumAggregateOutputType = {
    id: number | null
    pedidoId: number | null
    productoGeneralId: number | null
    cantidad: number | null
    precio: number | null
  }

  export type ItemPedidoMinAggregateOutputType = {
    id: number | null
    pedidoId: number | null
    productoGeneralId: number | null
    cantidad: number | null
    precio: number | null
  }

  export type ItemPedidoMaxAggregateOutputType = {
    id: number | null
    pedidoId: number | null
    productoGeneralId: number | null
    cantidad: number | null
    precio: number | null
  }

  export type ItemPedidoCountAggregateOutputType = {
    id: number
    pedidoId: number
    productoGeneralId: number
    cantidad: number
    precio: number
    _all: number
  }


  export type ItemPedidoAvgAggregateInputType = {
    id?: true
    pedidoId?: true
    productoGeneralId?: true
    cantidad?: true
    precio?: true
  }

  export type ItemPedidoSumAggregateInputType = {
    id?: true
    pedidoId?: true
    productoGeneralId?: true
    cantidad?: true
    precio?: true
  }

  export type ItemPedidoMinAggregateInputType = {
    id?: true
    pedidoId?: true
    productoGeneralId?: true
    cantidad?: true
    precio?: true
  }

  export type ItemPedidoMaxAggregateInputType = {
    id?: true
    pedidoId?: true
    productoGeneralId?: true
    cantidad?: true
    precio?: true
  }

  export type ItemPedidoCountAggregateInputType = {
    id?: true
    pedidoId?: true
    productoGeneralId?: true
    cantidad?: true
    precio?: true
    _all?: true
  }

  export type ItemPedidoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemPedido to aggregate.
     */
    where?: ItemPedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemPedidos to fetch.
     */
    orderBy?: ItemPedidoOrderByWithRelationInput | ItemPedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemPedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemPedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemPedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ItemPedidos
    **/
    _count?: true | ItemPedidoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemPedidoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemPedidoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemPedidoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemPedidoMaxAggregateInputType
  }

  export type GetItemPedidoAggregateType<T extends ItemPedidoAggregateArgs> = {
        [P in keyof T & keyof AggregateItemPedido]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItemPedido[P]>
      : GetScalarType<T[P], AggregateItemPedido[P]>
  }




  export type ItemPedidoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemPedidoWhereInput
    orderBy?: ItemPedidoOrderByWithAggregationInput | ItemPedidoOrderByWithAggregationInput[]
    by: ItemPedidoScalarFieldEnum[] | ItemPedidoScalarFieldEnum
    having?: ItemPedidoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemPedidoCountAggregateInputType | true
    _avg?: ItemPedidoAvgAggregateInputType
    _sum?: ItemPedidoSumAggregateInputType
    _min?: ItemPedidoMinAggregateInputType
    _max?: ItemPedidoMaxAggregateInputType
  }

  export type ItemPedidoGroupByOutputType = {
    id: number
    pedidoId: number
    productoGeneralId: number
    cantidad: number
    precio: number
    _count: ItemPedidoCountAggregateOutputType | null
    _avg: ItemPedidoAvgAggregateOutputType | null
    _sum: ItemPedidoSumAggregateOutputType | null
    _min: ItemPedidoMinAggregateOutputType | null
    _max: ItemPedidoMaxAggregateOutputType | null
  }

  type GetItemPedidoGroupByPayload<T extends ItemPedidoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemPedidoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemPedidoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemPedidoGroupByOutputType[P]>
            : GetScalarType<T[P], ItemPedidoGroupByOutputType[P]>
        }
      >
    >


  export type ItemPedidoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pedidoId?: boolean
    productoGeneralId?: boolean
    cantidad?: boolean
    precio?: boolean
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    producto?: boolean | ProductoGeneralDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemPedido"]>

  export type ItemPedidoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pedidoId?: boolean
    productoGeneralId?: boolean
    cantidad?: boolean
    precio?: boolean
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    producto?: boolean | ProductoGeneralDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemPedido"]>

  export type ItemPedidoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pedidoId?: boolean
    productoGeneralId?: boolean
    cantidad?: boolean
    precio?: boolean
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    producto?: boolean | ProductoGeneralDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemPedido"]>

  export type ItemPedidoSelectScalar = {
    id?: boolean
    pedidoId?: boolean
    productoGeneralId?: boolean
    cantidad?: boolean
    precio?: boolean
  }

  export type ItemPedidoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pedidoId" | "productoGeneralId" | "cantidad" | "precio", ExtArgs["result"]["itemPedido"]>
  export type ItemPedidoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    producto?: boolean | ProductoGeneralDefaultArgs<ExtArgs>
  }
  export type ItemPedidoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    producto?: boolean | ProductoGeneralDefaultArgs<ExtArgs>
  }
  export type ItemPedidoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    producto?: boolean | ProductoGeneralDefaultArgs<ExtArgs>
  }

  export type $ItemPedidoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ItemPedido"
    objects: {
      pedido: Prisma.$PedidoPayload<ExtArgs>
      producto: Prisma.$ProductoGeneralPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      pedidoId: number
      productoGeneralId: number
      cantidad: number
      precio: number
    }, ExtArgs["result"]["itemPedido"]>
    composites: {}
  }

  type ItemPedidoGetPayload<S extends boolean | null | undefined | ItemPedidoDefaultArgs> = $Result.GetResult<Prisma.$ItemPedidoPayload, S>

  type ItemPedidoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemPedidoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemPedidoCountAggregateInputType | true
    }

  export interface ItemPedidoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ItemPedido'], meta: { name: 'ItemPedido' } }
    /**
     * Find zero or one ItemPedido that matches the filter.
     * @param {ItemPedidoFindUniqueArgs} args - Arguments to find a ItemPedido
     * @example
     * // Get one ItemPedido
     * const itemPedido = await prisma.itemPedido.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemPedidoFindUniqueArgs>(args: SelectSubset<T, ItemPedidoFindUniqueArgs<ExtArgs>>): Prisma__ItemPedidoClient<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ItemPedido that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemPedidoFindUniqueOrThrowArgs} args - Arguments to find a ItemPedido
     * @example
     * // Get one ItemPedido
     * const itemPedido = await prisma.itemPedido.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemPedidoFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemPedidoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemPedidoClient<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemPedido that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPedidoFindFirstArgs} args - Arguments to find a ItemPedido
     * @example
     * // Get one ItemPedido
     * const itemPedido = await prisma.itemPedido.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemPedidoFindFirstArgs>(args?: SelectSubset<T, ItemPedidoFindFirstArgs<ExtArgs>>): Prisma__ItemPedidoClient<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemPedido that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPedidoFindFirstOrThrowArgs} args - Arguments to find a ItemPedido
     * @example
     * // Get one ItemPedido
     * const itemPedido = await prisma.itemPedido.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemPedidoFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemPedidoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemPedidoClient<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ItemPedidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPedidoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ItemPedidos
     * const itemPedidos = await prisma.itemPedido.findMany()
     * 
     * // Get first 10 ItemPedidos
     * const itemPedidos = await prisma.itemPedido.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemPedidoWithIdOnly = await prisma.itemPedido.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ItemPedidoFindManyArgs>(args?: SelectSubset<T, ItemPedidoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ItemPedido.
     * @param {ItemPedidoCreateArgs} args - Arguments to create a ItemPedido.
     * @example
     * // Create one ItemPedido
     * const ItemPedido = await prisma.itemPedido.create({
     *   data: {
     *     // ... data to create a ItemPedido
     *   }
     * })
     * 
     */
    create<T extends ItemPedidoCreateArgs>(args: SelectSubset<T, ItemPedidoCreateArgs<ExtArgs>>): Prisma__ItemPedidoClient<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ItemPedidos.
     * @param {ItemPedidoCreateManyArgs} args - Arguments to create many ItemPedidos.
     * @example
     * // Create many ItemPedidos
     * const itemPedido = await prisma.itemPedido.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemPedidoCreateManyArgs>(args?: SelectSubset<T, ItemPedidoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ItemPedidos and returns the data saved in the database.
     * @param {ItemPedidoCreateManyAndReturnArgs} args - Arguments to create many ItemPedidos.
     * @example
     * // Create many ItemPedidos
     * const itemPedido = await prisma.itemPedido.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ItemPedidos and only return the `id`
     * const itemPedidoWithIdOnly = await prisma.itemPedido.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItemPedidoCreateManyAndReturnArgs>(args?: SelectSubset<T, ItemPedidoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ItemPedido.
     * @param {ItemPedidoDeleteArgs} args - Arguments to delete one ItemPedido.
     * @example
     * // Delete one ItemPedido
     * const ItemPedido = await prisma.itemPedido.delete({
     *   where: {
     *     // ... filter to delete one ItemPedido
     *   }
     * })
     * 
     */
    delete<T extends ItemPedidoDeleteArgs>(args: SelectSubset<T, ItemPedidoDeleteArgs<ExtArgs>>): Prisma__ItemPedidoClient<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ItemPedido.
     * @param {ItemPedidoUpdateArgs} args - Arguments to update one ItemPedido.
     * @example
     * // Update one ItemPedido
     * const itemPedido = await prisma.itemPedido.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemPedidoUpdateArgs>(args: SelectSubset<T, ItemPedidoUpdateArgs<ExtArgs>>): Prisma__ItemPedidoClient<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ItemPedidos.
     * @param {ItemPedidoDeleteManyArgs} args - Arguments to filter ItemPedidos to delete.
     * @example
     * // Delete a few ItemPedidos
     * const { count } = await prisma.itemPedido.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemPedidoDeleteManyArgs>(args?: SelectSubset<T, ItemPedidoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemPedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPedidoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ItemPedidos
     * const itemPedido = await prisma.itemPedido.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemPedidoUpdateManyArgs>(args: SelectSubset<T, ItemPedidoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemPedidos and returns the data updated in the database.
     * @param {ItemPedidoUpdateManyAndReturnArgs} args - Arguments to update many ItemPedidos.
     * @example
     * // Update many ItemPedidos
     * const itemPedido = await prisma.itemPedido.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ItemPedidos and only return the `id`
     * const itemPedidoWithIdOnly = await prisma.itemPedido.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ItemPedidoUpdateManyAndReturnArgs>(args: SelectSubset<T, ItemPedidoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ItemPedido.
     * @param {ItemPedidoUpsertArgs} args - Arguments to update or create a ItemPedido.
     * @example
     * // Update or create a ItemPedido
     * const itemPedido = await prisma.itemPedido.upsert({
     *   create: {
     *     // ... data to create a ItemPedido
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ItemPedido we want to update
     *   }
     * })
     */
    upsert<T extends ItemPedidoUpsertArgs>(args: SelectSubset<T, ItemPedidoUpsertArgs<ExtArgs>>): Prisma__ItemPedidoClient<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ItemPedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPedidoCountArgs} args - Arguments to filter ItemPedidos to count.
     * @example
     * // Count the number of ItemPedidos
     * const count = await prisma.itemPedido.count({
     *   where: {
     *     // ... the filter for the ItemPedidos we want to count
     *   }
     * })
    **/
    count<T extends ItemPedidoCountArgs>(
      args?: Subset<T, ItemPedidoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemPedidoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ItemPedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPedidoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemPedidoAggregateArgs>(args: Subset<T, ItemPedidoAggregateArgs>): Prisma.PrismaPromise<GetItemPedidoAggregateType<T>>

    /**
     * Group by ItemPedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPedidoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ItemPedidoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemPedidoGroupByArgs['orderBy'] }
        : { orderBy?: ItemPedidoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ItemPedidoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemPedidoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ItemPedido model
   */
  readonly fields: ItemPedidoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ItemPedido.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemPedidoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pedido<T extends PedidoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PedidoDefaultArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    producto<T extends ProductoGeneralDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductoGeneralDefaultArgs<ExtArgs>>): Prisma__ProductoGeneralClient<$Result.GetResult<Prisma.$ProductoGeneralPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ItemPedido model
   */
  interface ItemPedidoFieldRefs {
    readonly id: FieldRef<"ItemPedido", 'Int'>
    readonly pedidoId: FieldRef<"ItemPedido", 'Int'>
    readonly productoGeneralId: FieldRef<"ItemPedido", 'Int'>
    readonly cantidad: FieldRef<"ItemPedido", 'Int'>
    readonly precio: FieldRef<"ItemPedido", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * ItemPedido findUnique
   */
  export type ItemPedidoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    /**
     * Filter, which ItemPedido to fetch.
     */
    where: ItemPedidoWhereUniqueInput
  }

  /**
   * ItemPedido findUniqueOrThrow
   */
  export type ItemPedidoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    /**
     * Filter, which ItemPedido to fetch.
     */
    where: ItemPedidoWhereUniqueInput
  }

  /**
   * ItemPedido findFirst
   */
  export type ItemPedidoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    /**
     * Filter, which ItemPedido to fetch.
     */
    where?: ItemPedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemPedidos to fetch.
     */
    orderBy?: ItemPedidoOrderByWithRelationInput | ItemPedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemPedidos.
     */
    cursor?: ItemPedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemPedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemPedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemPedidos.
     */
    distinct?: ItemPedidoScalarFieldEnum | ItemPedidoScalarFieldEnum[]
  }

  /**
   * ItemPedido findFirstOrThrow
   */
  export type ItemPedidoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    /**
     * Filter, which ItemPedido to fetch.
     */
    where?: ItemPedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemPedidos to fetch.
     */
    orderBy?: ItemPedidoOrderByWithRelationInput | ItemPedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemPedidos.
     */
    cursor?: ItemPedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemPedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemPedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemPedidos.
     */
    distinct?: ItemPedidoScalarFieldEnum | ItemPedidoScalarFieldEnum[]
  }

  /**
   * ItemPedido findMany
   */
  export type ItemPedidoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    /**
     * Filter, which ItemPedidos to fetch.
     */
    where?: ItemPedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemPedidos to fetch.
     */
    orderBy?: ItemPedidoOrderByWithRelationInput | ItemPedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ItemPedidos.
     */
    cursor?: ItemPedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemPedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemPedidos.
     */
    skip?: number
    distinct?: ItemPedidoScalarFieldEnum | ItemPedidoScalarFieldEnum[]
  }

  /**
   * ItemPedido create
   */
  export type ItemPedidoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    /**
     * The data needed to create a ItemPedido.
     */
    data: XOR<ItemPedidoCreateInput, ItemPedidoUncheckedCreateInput>
  }

  /**
   * ItemPedido createMany
   */
  export type ItemPedidoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ItemPedidos.
     */
    data: ItemPedidoCreateManyInput | ItemPedidoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ItemPedido createManyAndReturn
   */
  export type ItemPedidoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * The data used to create many ItemPedidos.
     */
    data: ItemPedidoCreateManyInput | ItemPedidoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemPedido update
   */
  export type ItemPedidoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    /**
     * The data needed to update a ItemPedido.
     */
    data: XOR<ItemPedidoUpdateInput, ItemPedidoUncheckedUpdateInput>
    /**
     * Choose, which ItemPedido to update.
     */
    where: ItemPedidoWhereUniqueInput
  }

  /**
   * ItemPedido updateMany
   */
  export type ItemPedidoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ItemPedidos.
     */
    data: XOR<ItemPedidoUpdateManyMutationInput, ItemPedidoUncheckedUpdateManyInput>
    /**
     * Filter which ItemPedidos to update
     */
    where?: ItemPedidoWhereInput
    /**
     * Limit how many ItemPedidos to update.
     */
    limit?: number
  }

  /**
   * ItemPedido updateManyAndReturn
   */
  export type ItemPedidoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * The data used to update ItemPedidos.
     */
    data: XOR<ItemPedidoUpdateManyMutationInput, ItemPedidoUncheckedUpdateManyInput>
    /**
     * Filter which ItemPedidos to update
     */
    where?: ItemPedidoWhereInput
    /**
     * Limit how many ItemPedidos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemPedido upsert
   */
  export type ItemPedidoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    /**
     * The filter to search for the ItemPedido to update in case it exists.
     */
    where: ItemPedidoWhereUniqueInput
    /**
     * In case the ItemPedido found by the `where` argument doesn't exist, create a new ItemPedido with this data.
     */
    create: XOR<ItemPedidoCreateInput, ItemPedidoUncheckedCreateInput>
    /**
     * In case the ItemPedido was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemPedidoUpdateInput, ItemPedidoUncheckedUpdateInput>
  }

  /**
   * ItemPedido delete
   */
  export type ItemPedidoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    /**
     * Filter which ItemPedido to delete.
     */
    where: ItemPedidoWhereUniqueInput
  }

  /**
   * ItemPedido deleteMany
   */
  export type ItemPedidoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemPedidos to delete
     */
    where?: ItemPedidoWhereInput
    /**
     * Limit how many ItemPedidos to delete.
     */
    limit?: number
  }

  /**
   * ItemPedido without action
   */
  export type ItemPedidoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsuarioAdminScalarFieldEnum: {
    id: 'id',
    correo: 'correo',
    contrasena: 'contrasena',
    creadoEn: 'creadoEn'
  };

  export type UsuarioAdminScalarFieldEnum = (typeof UsuarioAdminScalarFieldEnum)[keyof typeof UsuarioAdminScalarFieldEnum]


  export const ProductoGeneralScalarFieldEnum: {
    id: 'id',
    tipo: 'tipo',
    celularId: 'celularId',
    accesorioId: 'accesorioId'
  };

  export type ProductoGeneralScalarFieldEnum = (typeof ProductoGeneralScalarFieldEnum)[keyof typeof ProductoGeneralScalarFieldEnum]


  export const CelularScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    precio: 'precio',
    imagen: 'imagen',
    marca: 'marca',
    color: 'color',
    modelo: 'modelo',
    pantalla: 'pantalla',
    bateria: 'bateria',
    almacenamiento: 'almacenamiento',
    ram: 'ram',
    camara: 'camara',
    puertoCarga: 'puertoCarga',
    precioPromocion: 'precioPromocion',
    precioDescuento: 'precioDescuento',
    textoPromocion: 'textoPromocion'
  };

  export type CelularScalarFieldEnum = (typeof CelularScalarFieldEnum)[keyof typeof CelularScalarFieldEnum]


  export const AccesorioScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    precio: 'precio',
    imagen: 'imagen',
    descripcion: 'descripcion',
    compatibilidad: 'compatibilidad',
    dimensiones: 'dimensiones',
    peso: 'peso',
    colores: 'colores',
    precioPromocion: 'precioPromocion',
    precioDescuento: 'precioDescuento',
    textoPromocion: 'textoPromocion'
  };

  export type AccesorioScalarFieldEnum = (typeof AccesorioScalarFieldEnum)[keyof typeof AccesorioScalarFieldEnum]


  export const PedidoScalarFieldEnum: {
    id: 'id',
    total: 'total',
    estado: 'estado',
    creadoEn: 'creadoEn'
  };

  export type PedidoScalarFieldEnum = (typeof PedidoScalarFieldEnum)[keyof typeof PedidoScalarFieldEnum]


  export const ItemPedidoScalarFieldEnum: {
    id: 'id',
    pedidoId: 'pedidoId',
    productoGeneralId: 'productoGeneralId',
    cantidad: 'cantidad',
    precio: 'precio'
  };

  export type ItemPedidoScalarFieldEnum = (typeof ItemPedidoScalarFieldEnum)[keyof typeof ItemPedidoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioAdminWhereInput = {
    AND?: UsuarioAdminWhereInput | UsuarioAdminWhereInput[]
    OR?: UsuarioAdminWhereInput[]
    NOT?: UsuarioAdminWhereInput | UsuarioAdminWhereInput[]
    id?: IntFilter<"UsuarioAdmin"> | number
    correo?: StringFilter<"UsuarioAdmin"> | string
    contrasena?: StringFilter<"UsuarioAdmin"> | string
    creadoEn?: DateTimeFilter<"UsuarioAdmin"> | Date | string
  }

  export type UsuarioAdminOrderByWithRelationInput = {
    id?: SortOrder
    correo?: SortOrder
    contrasena?: SortOrder
    creadoEn?: SortOrder
  }

  export type UsuarioAdminWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    correo?: string
    AND?: UsuarioAdminWhereInput | UsuarioAdminWhereInput[]
    OR?: UsuarioAdminWhereInput[]
    NOT?: UsuarioAdminWhereInput | UsuarioAdminWhereInput[]
    contrasena?: StringFilter<"UsuarioAdmin"> | string
    creadoEn?: DateTimeFilter<"UsuarioAdmin"> | Date | string
  }, "id" | "correo">

  export type UsuarioAdminOrderByWithAggregationInput = {
    id?: SortOrder
    correo?: SortOrder
    contrasena?: SortOrder
    creadoEn?: SortOrder
    _count?: UsuarioAdminCountOrderByAggregateInput
    _avg?: UsuarioAdminAvgOrderByAggregateInput
    _max?: UsuarioAdminMaxOrderByAggregateInput
    _min?: UsuarioAdminMinOrderByAggregateInput
    _sum?: UsuarioAdminSumOrderByAggregateInput
  }

  export type UsuarioAdminScalarWhereWithAggregatesInput = {
    AND?: UsuarioAdminScalarWhereWithAggregatesInput | UsuarioAdminScalarWhereWithAggregatesInput[]
    OR?: UsuarioAdminScalarWhereWithAggregatesInput[]
    NOT?: UsuarioAdminScalarWhereWithAggregatesInput | UsuarioAdminScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UsuarioAdmin"> | number
    correo?: StringWithAggregatesFilter<"UsuarioAdmin"> | string
    contrasena?: StringWithAggregatesFilter<"UsuarioAdmin"> | string
    creadoEn?: DateTimeWithAggregatesFilter<"UsuarioAdmin"> | Date | string
  }

  export type ProductoGeneralWhereInput = {
    AND?: ProductoGeneralWhereInput | ProductoGeneralWhereInput[]
    OR?: ProductoGeneralWhereInput[]
    NOT?: ProductoGeneralWhereInput | ProductoGeneralWhereInput[]
    id?: IntFilter<"ProductoGeneral"> | number
    tipo?: StringFilter<"ProductoGeneral"> | string
    celularId?: IntNullableFilter<"ProductoGeneral"> | number | null
    accesorioId?: IntNullableFilter<"ProductoGeneral"> | number | null
    celular?: XOR<CelularNullableScalarRelationFilter, CelularWhereInput> | null
    accesorio?: XOR<AccesorioNullableScalarRelationFilter, AccesorioWhereInput> | null
    items?: ItemPedidoListRelationFilter
  }

  export type ProductoGeneralOrderByWithRelationInput = {
    id?: SortOrder
    tipo?: SortOrder
    celularId?: SortOrderInput | SortOrder
    accesorioId?: SortOrderInput | SortOrder
    celular?: CelularOrderByWithRelationInput
    accesorio?: AccesorioOrderByWithRelationInput
    items?: ItemPedidoOrderByRelationAggregateInput
  }

  export type ProductoGeneralWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    celularId?: number
    accesorioId?: number
    AND?: ProductoGeneralWhereInput | ProductoGeneralWhereInput[]
    OR?: ProductoGeneralWhereInput[]
    NOT?: ProductoGeneralWhereInput | ProductoGeneralWhereInput[]
    tipo?: StringFilter<"ProductoGeneral"> | string
    celular?: XOR<CelularNullableScalarRelationFilter, CelularWhereInput> | null
    accesorio?: XOR<AccesorioNullableScalarRelationFilter, AccesorioWhereInput> | null
    items?: ItemPedidoListRelationFilter
  }, "id" | "celularId" | "accesorioId">

  export type ProductoGeneralOrderByWithAggregationInput = {
    id?: SortOrder
    tipo?: SortOrder
    celularId?: SortOrderInput | SortOrder
    accesorioId?: SortOrderInput | SortOrder
    _count?: ProductoGeneralCountOrderByAggregateInput
    _avg?: ProductoGeneralAvgOrderByAggregateInput
    _max?: ProductoGeneralMaxOrderByAggregateInput
    _min?: ProductoGeneralMinOrderByAggregateInput
    _sum?: ProductoGeneralSumOrderByAggregateInput
  }

  export type ProductoGeneralScalarWhereWithAggregatesInput = {
    AND?: ProductoGeneralScalarWhereWithAggregatesInput | ProductoGeneralScalarWhereWithAggregatesInput[]
    OR?: ProductoGeneralScalarWhereWithAggregatesInput[]
    NOT?: ProductoGeneralScalarWhereWithAggregatesInput | ProductoGeneralScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProductoGeneral"> | number
    tipo?: StringWithAggregatesFilter<"ProductoGeneral"> | string
    celularId?: IntNullableWithAggregatesFilter<"ProductoGeneral"> | number | null
    accesorioId?: IntNullableWithAggregatesFilter<"ProductoGeneral"> | number | null
  }

  export type CelularWhereInput = {
    AND?: CelularWhereInput | CelularWhereInput[]
    OR?: CelularWhereInput[]
    NOT?: CelularWhereInput | CelularWhereInput[]
    id?: IntFilter<"Celular"> | number
    nombre?: StringFilter<"Celular"> | string
    precio?: FloatFilter<"Celular"> | number
    imagen?: StringFilter<"Celular"> | string
    marca?: StringNullableFilter<"Celular"> | string | null
    color?: StringNullableFilter<"Celular"> | string | null
    modelo?: StringNullableFilter<"Celular"> | string | null
    pantalla?: StringNullableFilter<"Celular"> | string | null
    bateria?: StringNullableFilter<"Celular"> | string | null
    almacenamiento?: StringNullableFilter<"Celular"> | string | null
    ram?: StringNullableFilter<"Celular"> | string | null
    camara?: StringNullableFilter<"Celular"> | string | null
    puertoCarga?: StringNullableFilter<"Celular"> | string | null
    precioPromocion?: FloatNullableFilter<"Celular"> | number | null
    precioDescuento?: FloatNullableFilter<"Celular"> | number | null
    textoPromocion?: StringNullableFilter<"Celular"> | string | null
    productoGeneral?: XOR<ProductoGeneralNullableScalarRelationFilter, ProductoGeneralWhereInput> | null
  }

  export type CelularOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    precio?: SortOrder
    imagen?: SortOrder
    marca?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    modelo?: SortOrderInput | SortOrder
    pantalla?: SortOrderInput | SortOrder
    bateria?: SortOrderInput | SortOrder
    almacenamiento?: SortOrderInput | SortOrder
    ram?: SortOrderInput | SortOrder
    camara?: SortOrderInput | SortOrder
    puertoCarga?: SortOrderInput | SortOrder
    precioPromocion?: SortOrderInput | SortOrder
    precioDescuento?: SortOrderInput | SortOrder
    textoPromocion?: SortOrderInput | SortOrder
    productoGeneral?: ProductoGeneralOrderByWithRelationInput
  }

  export type CelularWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CelularWhereInput | CelularWhereInput[]
    OR?: CelularWhereInput[]
    NOT?: CelularWhereInput | CelularWhereInput[]
    nombre?: StringFilter<"Celular"> | string
    precio?: FloatFilter<"Celular"> | number
    imagen?: StringFilter<"Celular"> | string
    marca?: StringNullableFilter<"Celular"> | string | null
    color?: StringNullableFilter<"Celular"> | string | null
    modelo?: StringNullableFilter<"Celular"> | string | null
    pantalla?: StringNullableFilter<"Celular"> | string | null
    bateria?: StringNullableFilter<"Celular"> | string | null
    almacenamiento?: StringNullableFilter<"Celular"> | string | null
    ram?: StringNullableFilter<"Celular"> | string | null
    camara?: StringNullableFilter<"Celular"> | string | null
    puertoCarga?: StringNullableFilter<"Celular"> | string | null
    precioPromocion?: FloatNullableFilter<"Celular"> | number | null
    precioDescuento?: FloatNullableFilter<"Celular"> | number | null
    textoPromocion?: StringNullableFilter<"Celular"> | string | null
    productoGeneral?: XOR<ProductoGeneralNullableScalarRelationFilter, ProductoGeneralWhereInput> | null
  }, "id">

  export type CelularOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    precio?: SortOrder
    imagen?: SortOrder
    marca?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    modelo?: SortOrderInput | SortOrder
    pantalla?: SortOrderInput | SortOrder
    bateria?: SortOrderInput | SortOrder
    almacenamiento?: SortOrderInput | SortOrder
    ram?: SortOrderInput | SortOrder
    camara?: SortOrderInput | SortOrder
    puertoCarga?: SortOrderInput | SortOrder
    precioPromocion?: SortOrderInput | SortOrder
    precioDescuento?: SortOrderInput | SortOrder
    textoPromocion?: SortOrderInput | SortOrder
    _count?: CelularCountOrderByAggregateInput
    _avg?: CelularAvgOrderByAggregateInput
    _max?: CelularMaxOrderByAggregateInput
    _min?: CelularMinOrderByAggregateInput
    _sum?: CelularSumOrderByAggregateInput
  }

  export type CelularScalarWhereWithAggregatesInput = {
    AND?: CelularScalarWhereWithAggregatesInput | CelularScalarWhereWithAggregatesInput[]
    OR?: CelularScalarWhereWithAggregatesInput[]
    NOT?: CelularScalarWhereWithAggregatesInput | CelularScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Celular"> | number
    nombre?: StringWithAggregatesFilter<"Celular"> | string
    precio?: FloatWithAggregatesFilter<"Celular"> | number
    imagen?: StringWithAggregatesFilter<"Celular"> | string
    marca?: StringNullableWithAggregatesFilter<"Celular"> | string | null
    color?: StringNullableWithAggregatesFilter<"Celular"> | string | null
    modelo?: StringNullableWithAggregatesFilter<"Celular"> | string | null
    pantalla?: StringNullableWithAggregatesFilter<"Celular"> | string | null
    bateria?: StringNullableWithAggregatesFilter<"Celular"> | string | null
    almacenamiento?: StringNullableWithAggregatesFilter<"Celular"> | string | null
    ram?: StringNullableWithAggregatesFilter<"Celular"> | string | null
    camara?: StringNullableWithAggregatesFilter<"Celular"> | string | null
    puertoCarga?: StringNullableWithAggregatesFilter<"Celular"> | string | null
    precioPromocion?: FloatNullableWithAggregatesFilter<"Celular"> | number | null
    precioDescuento?: FloatNullableWithAggregatesFilter<"Celular"> | number | null
    textoPromocion?: StringNullableWithAggregatesFilter<"Celular"> | string | null
  }

  export type AccesorioWhereInput = {
    AND?: AccesorioWhereInput | AccesorioWhereInput[]
    OR?: AccesorioWhereInput[]
    NOT?: AccesorioWhereInput | AccesorioWhereInput[]
    id?: IntFilter<"Accesorio"> | number
    nombre?: StringFilter<"Accesorio"> | string
    precio?: FloatFilter<"Accesorio"> | number
    imagen?: StringFilter<"Accesorio"> | string
    descripcion?: StringNullableFilter<"Accesorio"> | string | null
    compatibilidad?: StringNullableFilter<"Accesorio"> | string | null
    dimensiones?: StringNullableFilter<"Accesorio"> | string | null
    peso?: StringNullableFilter<"Accesorio"> | string | null
    colores?: StringNullableFilter<"Accesorio"> | string | null
    precioPromocion?: FloatNullableFilter<"Accesorio"> | number | null
    precioDescuento?: FloatNullableFilter<"Accesorio"> | number | null
    textoPromocion?: StringNullableFilter<"Accesorio"> | string | null
    productoGeneral?: XOR<ProductoGeneralNullableScalarRelationFilter, ProductoGeneralWhereInput> | null
  }

  export type AccesorioOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    precio?: SortOrder
    imagen?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    compatibilidad?: SortOrderInput | SortOrder
    dimensiones?: SortOrderInput | SortOrder
    peso?: SortOrderInput | SortOrder
    colores?: SortOrderInput | SortOrder
    precioPromocion?: SortOrderInput | SortOrder
    precioDescuento?: SortOrderInput | SortOrder
    textoPromocion?: SortOrderInput | SortOrder
    productoGeneral?: ProductoGeneralOrderByWithRelationInput
  }

  export type AccesorioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AccesorioWhereInput | AccesorioWhereInput[]
    OR?: AccesorioWhereInput[]
    NOT?: AccesorioWhereInput | AccesorioWhereInput[]
    nombre?: StringFilter<"Accesorio"> | string
    precio?: FloatFilter<"Accesorio"> | number
    imagen?: StringFilter<"Accesorio"> | string
    descripcion?: StringNullableFilter<"Accesorio"> | string | null
    compatibilidad?: StringNullableFilter<"Accesorio"> | string | null
    dimensiones?: StringNullableFilter<"Accesorio"> | string | null
    peso?: StringNullableFilter<"Accesorio"> | string | null
    colores?: StringNullableFilter<"Accesorio"> | string | null
    precioPromocion?: FloatNullableFilter<"Accesorio"> | number | null
    precioDescuento?: FloatNullableFilter<"Accesorio"> | number | null
    textoPromocion?: StringNullableFilter<"Accesorio"> | string | null
    productoGeneral?: XOR<ProductoGeneralNullableScalarRelationFilter, ProductoGeneralWhereInput> | null
  }, "id">

  export type AccesorioOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    precio?: SortOrder
    imagen?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    compatibilidad?: SortOrderInput | SortOrder
    dimensiones?: SortOrderInput | SortOrder
    peso?: SortOrderInput | SortOrder
    colores?: SortOrderInput | SortOrder
    precioPromocion?: SortOrderInput | SortOrder
    precioDescuento?: SortOrderInput | SortOrder
    textoPromocion?: SortOrderInput | SortOrder
    _count?: AccesorioCountOrderByAggregateInput
    _avg?: AccesorioAvgOrderByAggregateInput
    _max?: AccesorioMaxOrderByAggregateInput
    _min?: AccesorioMinOrderByAggregateInput
    _sum?: AccesorioSumOrderByAggregateInput
  }

  export type AccesorioScalarWhereWithAggregatesInput = {
    AND?: AccesorioScalarWhereWithAggregatesInput | AccesorioScalarWhereWithAggregatesInput[]
    OR?: AccesorioScalarWhereWithAggregatesInput[]
    NOT?: AccesorioScalarWhereWithAggregatesInput | AccesorioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Accesorio"> | number
    nombre?: StringWithAggregatesFilter<"Accesorio"> | string
    precio?: FloatWithAggregatesFilter<"Accesorio"> | number
    imagen?: StringWithAggregatesFilter<"Accesorio"> | string
    descripcion?: StringNullableWithAggregatesFilter<"Accesorio"> | string | null
    compatibilidad?: StringNullableWithAggregatesFilter<"Accesorio"> | string | null
    dimensiones?: StringNullableWithAggregatesFilter<"Accesorio"> | string | null
    peso?: StringNullableWithAggregatesFilter<"Accesorio"> | string | null
    colores?: StringNullableWithAggregatesFilter<"Accesorio"> | string | null
    precioPromocion?: FloatNullableWithAggregatesFilter<"Accesorio"> | number | null
    precioDescuento?: FloatNullableWithAggregatesFilter<"Accesorio"> | number | null
    textoPromocion?: StringNullableWithAggregatesFilter<"Accesorio"> | string | null
  }

  export type PedidoWhereInput = {
    AND?: PedidoWhereInput | PedidoWhereInput[]
    OR?: PedidoWhereInput[]
    NOT?: PedidoWhereInput | PedidoWhereInput[]
    id?: IntFilter<"Pedido"> | number
    total?: FloatFilter<"Pedido"> | number
    estado?: StringFilter<"Pedido"> | string
    creadoEn?: DateTimeFilter<"Pedido"> | Date | string
    items?: ItemPedidoListRelationFilter
  }

  export type PedidoOrderByWithRelationInput = {
    id?: SortOrder
    total?: SortOrder
    estado?: SortOrder
    creadoEn?: SortOrder
    items?: ItemPedidoOrderByRelationAggregateInput
  }

  export type PedidoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PedidoWhereInput | PedidoWhereInput[]
    OR?: PedidoWhereInput[]
    NOT?: PedidoWhereInput | PedidoWhereInput[]
    total?: FloatFilter<"Pedido"> | number
    estado?: StringFilter<"Pedido"> | string
    creadoEn?: DateTimeFilter<"Pedido"> | Date | string
    items?: ItemPedidoListRelationFilter
  }, "id">

  export type PedidoOrderByWithAggregationInput = {
    id?: SortOrder
    total?: SortOrder
    estado?: SortOrder
    creadoEn?: SortOrder
    _count?: PedidoCountOrderByAggregateInput
    _avg?: PedidoAvgOrderByAggregateInput
    _max?: PedidoMaxOrderByAggregateInput
    _min?: PedidoMinOrderByAggregateInput
    _sum?: PedidoSumOrderByAggregateInput
  }

  export type PedidoScalarWhereWithAggregatesInput = {
    AND?: PedidoScalarWhereWithAggregatesInput | PedidoScalarWhereWithAggregatesInput[]
    OR?: PedidoScalarWhereWithAggregatesInput[]
    NOT?: PedidoScalarWhereWithAggregatesInput | PedidoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Pedido"> | number
    total?: FloatWithAggregatesFilter<"Pedido"> | number
    estado?: StringWithAggregatesFilter<"Pedido"> | string
    creadoEn?: DateTimeWithAggregatesFilter<"Pedido"> | Date | string
  }

  export type ItemPedidoWhereInput = {
    AND?: ItemPedidoWhereInput | ItemPedidoWhereInput[]
    OR?: ItemPedidoWhereInput[]
    NOT?: ItemPedidoWhereInput | ItemPedidoWhereInput[]
    id?: IntFilter<"ItemPedido"> | number
    pedidoId?: IntFilter<"ItemPedido"> | number
    productoGeneralId?: IntFilter<"ItemPedido"> | number
    cantidad?: IntFilter<"ItemPedido"> | number
    precio?: FloatFilter<"ItemPedido"> | number
    pedido?: XOR<PedidoScalarRelationFilter, PedidoWhereInput>
    producto?: XOR<ProductoGeneralScalarRelationFilter, ProductoGeneralWhereInput>
  }

  export type ItemPedidoOrderByWithRelationInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    productoGeneralId?: SortOrder
    cantidad?: SortOrder
    precio?: SortOrder
    pedido?: PedidoOrderByWithRelationInput
    producto?: ProductoGeneralOrderByWithRelationInput
  }

  export type ItemPedidoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ItemPedidoWhereInput | ItemPedidoWhereInput[]
    OR?: ItemPedidoWhereInput[]
    NOT?: ItemPedidoWhereInput | ItemPedidoWhereInput[]
    pedidoId?: IntFilter<"ItemPedido"> | number
    productoGeneralId?: IntFilter<"ItemPedido"> | number
    cantidad?: IntFilter<"ItemPedido"> | number
    precio?: FloatFilter<"ItemPedido"> | number
    pedido?: XOR<PedidoScalarRelationFilter, PedidoWhereInput>
    producto?: XOR<ProductoGeneralScalarRelationFilter, ProductoGeneralWhereInput>
  }, "id">

  export type ItemPedidoOrderByWithAggregationInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    productoGeneralId?: SortOrder
    cantidad?: SortOrder
    precio?: SortOrder
    _count?: ItemPedidoCountOrderByAggregateInput
    _avg?: ItemPedidoAvgOrderByAggregateInput
    _max?: ItemPedidoMaxOrderByAggregateInput
    _min?: ItemPedidoMinOrderByAggregateInput
    _sum?: ItemPedidoSumOrderByAggregateInput
  }

  export type ItemPedidoScalarWhereWithAggregatesInput = {
    AND?: ItemPedidoScalarWhereWithAggregatesInput | ItemPedidoScalarWhereWithAggregatesInput[]
    OR?: ItemPedidoScalarWhereWithAggregatesInput[]
    NOT?: ItemPedidoScalarWhereWithAggregatesInput | ItemPedidoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ItemPedido"> | number
    pedidoId?: IntWithAggregatesFilter<"ItemPedido"> | number
    productoGeneralId?: IntWithAggregatesFilter<"ItemPedido"> | number
    cantidad?: IntWithAggregatesFilter<"ItemPedido"> | number
    precio?: FloatWithAggregatesFilter<"ItemPedido"> | number
  }

  export type UsuarioAdminCreateInput = {
    correo: string
    contrasena: string
    creadoEn?: Date | string
  }

  export type UsuarioAdminUncheckedCreateInput = {
    id?: number
    correo: string
    contrasena: string
    creadoEn?: Date | string
  }

  export type UsuarioAdminUpdateInput = {
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioAdminUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioAdminCreateManyInput = {
    id?: number
    correo: string
    contrasena: string
    creadoEn?: Date | string
  }

  export type UsuarioAdminUpdateManyMutationInput = {
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioAdminUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductoGeneralCreateInput = {
    tipo: string
    celular?: CelularCreateNestedOneWithoutProductoGeneralInput
    accesorio?: AccesorioCreateNestedOneWithoutProductoGeneralInput
    items?: ItemPedidoCreateNestedManyWithoutProductoInput
  }

  export type ProductoGeneralUncheckedCreateInput = {
    id?: number
    tipo: string
    celularId?: number | null
    accesorioId?: number | null
    items?: ItemPedidoUncheckedCreateNestedManyWithoutProductoInput
  }

  export type ProductoGeneralUpdateInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    celular?: CelularUpdateOneWithoutProductoGeneralNestedInput
    accesorio?: AccesorioUpdateOneWithoutProductoGeneralNestedInput
    items?: ItemPedidoUpdateManyWithoutProductoNestedInput
  }

  export type ProductoGeneralUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    celularId?: NullableIntFieldUpdateOperationsInput | number | null
    accesorioId?: NullableIntFieldUpdateOperationsInput | number | null
    items?: ItemPedidoUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type ProductoGeneralCreateManyInput = {
    id?: number
    tipo: string
    celularId?: number | null
    accesorioId?: number | null
  }

  export type ProductoGeneralUpdateManyMutationInput = {
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type ProductoGeneralUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    celularId?: NullableIntFieldUpdateOperationsInput | number | null
    accesorioId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CelularCreateInput = {
    nombre: string
    precio: number
    imagen: string
    marca?: string | null
    color?: string | null
    modelo?: string | null
    pantalla?: string | null
    bateria?: string | null
    almacenamiento?: string | null
    ram?: string | null
    camara?: string | null
    puertoCarga?: string | null
    precioPromocion?: number | null
    precioDescuento?: number | null
    textoPromocion?: string | null
    productoGeneral?: ProductoGeneralCreateNestedOneWithoutCelularInput
  }

  export type CelularUncheckedCreateInput = {
    id?: number
    nombre: string
    precio: number
    imagen: string
    marca?: string | null
    color?: string | null
    modelo?: string | null
    pantalla?: string | null
    bateria?: string | null
    almacenamiento?: string | null
    ram?: string | null
    camara?: string | null
    puertoCarga?: string | null
    precioPromocion?: number | null
    precioDescuento?: number | null
    textoPromocion?: string | null
    productoGeneral?: ProductoGeneralUncheckedCreateNestedOneWithoutCelularInput
  }

  export type CelularUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    imagen?: StringFieldUpdateOperationsInput | string
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    pantalla?: NullableStringFieldUpdateOperationsInput | string | null
    bateria?: NullableStringFieldUpdateOperationsInput | string | null
    almacenamiento?: NullableStringFieldUpdateOperationsInput | string | null
    ram?: NullableStringFieldUpdateOperationsInput | string | null
    camara?: NullableStringFieldUpdateOperationsInput | string | null
    puertoCarga?: NullableStringFieldUpdateOperationsInput | string | null
    precioPromocion?: NullableFloatFieldUpdateOperationsInput | number | null
    precioDescuento?: NullableFloatFieldUpdateOperationsInput | number | null
    textoPromocion?: NullableStringFieldUpdateOperationsInput | string | null
    productoGeneral?: ProductoGeneralUpdateOneWithoutCelularNestedInput
  }

  export type CelularUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    imagen?: StringFieldUpdateOperationsInput | string
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    pantalla?: NullableStringFieldUpdateOperationsInput | string | null
    bateria?: NullableStringFieldUpdateOperationsInput | string | null
    almacenamiento?: NullableStringFieldUpdateOperationsInput | string | null
    ram?: NullableStringFieldUpdateOperationsInput | string | null
    camara?: NullableStringFieldUpdateOperationsInput | string | null
    puertoCarga?: NullableStringFieldUpdateOperationsInput | string | null
    precioPromocion?: NullableFloatFieldUpdateOperationsInput | number | null
    precioDescuento?: NullableFloatFieldUpdateOperationsInput | number | null
    textoPromocion?: NullableStringFieldUpdateOperationsInput | string | null
    productoGeneral?: ProductoGeneralUncheckedUpdateOneWithoutCelularNestedInput
  }

  export type CelularCreateManyInput = {
    id?: number
    nombre: string
    precio: number
    imagen: string
    marca?: string | null
    color?: string | null
    modelo?: string | null
    pantalla?: string | null
    bateria?: string | null
    almacenamiento?: string | null
    ram?: string | null
    camara?: string | null
    puertoCarga?: string | null
    precioPromocion?: number | null
    precioDescuento?: number | null
    textoPromocion?: string | null
  }

  export type CelularUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    imagen?: StringFieldUpdateOperationsInput | string
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    pantalla?: NullableStringFieldUpdateOperationsInput | string | null
    bateria?: NullableStringFieldUpdateOperationsInput | string | null
    almacenamiento?: NullableStringFieldUpdateOperationsInput | string | null
    ram?: NullableStringFieldUpdateOperationsInput | string | null
    camara?: NullableStringFieldUpdateOperationsInput | string | null
    puertoCarga?: NullableStringFieldUpdateOperationsInput | string | null
    precioPromocion?: NullableFloatFieldUpdateOperationsInput | number | null
    precioDescuento?: NullableFloatFieldUpdateOperationsInput | number | null
    textoPromocion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CelularUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    imagen?: StringFieldUpdateOperationsInput | string
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    pantalla?: NullableStringFieldUpdateOperationsInput | string | null
    bateria?: NullableStringFieldUpdateOperationsInput | string | null
    almacenamiento?: NullableStringFieldUpdateOperationsInput | string | null
    ram?: NullableStringFieldUpdateOperationsInput | string | null
    camara?: NullableStringFieldUpdateOperationsInput | string | null
    puertoCarga?: NullableStringFieldUpdateOperationsInput | string | null
    precioPromocion?: NullableFloatFieldUpdateOperationsInput | number | null
    precioDescuento?: NullableFloatFieldUpdateOperationsInput | number | null
    textoPromocion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccesorioCreateInput = {
    nombre: string
    precio: number
    imagen: string
    descripcion?: string | null
    compatibilidad?: string | null
    dimensiones?: string | null
    peso?: string | null
    colores?: string | null
    precioPromocion?: number | null
    precioDescuento?: number | null
    textoPromocion?: string | null
    productoGeneral?: ProductoGeneralCreateNestedOneWithoutAccesorioInput
  }

  export type AccesorioUncheckedCreateInput = {
    id?: number
    nombre: string
    precio: number
    imagen: string
    descripcion?: string | null
    compatibilidad?: string | null
    dimensiones?: string | null
    peso?: string | null
    colores?: string | null
    precioPromocion?: number | null
    precioDescuento?: number | null
    textoPromocion?: string | null
    productoGeneral?: ProductoGeneralUncheckedCreateNestedOneWithoutAccesorioInput
  }

  export type AccesorioUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    imagen?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    compatibilidad?: NullableStringFieldUpdateOperationsInput | string | null
    dimensiones?: NullableStringFieldUpdateOperationsInput | string | null
    peso?: NullableStringFieldUpdateOperationsInput | string | null
    colores?: NullableStringFieldUpdateOperationsInput | string | null
    precioPromocion?: NullableFloatFieldUpdateOperationsInput | number | null
    precioDescuento?: NullableFloatFieldUpdateOperationsInput | number | null
    textoPromocion?: NullableStringFieldUpdateOperationsInput | string | null
    productoGeneral?: ProductoGeneralUpdateOneWithoutAccesorioNestedInput
  }

  export type AccesorioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    imagen?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    compatibilidad?: NullableStringFieldUpdateOperationsInput | string | null
    dimensiones?: NullableStringFieldUpdateOperationsInput | string | null
    peso?: NullableStringFieldUpdateOperationsInput | string | null
    colores?: NullableStringFieldUpdateOperationsInput | string | null
    precioPromocion?: NullableFloatFieldUpdateOperationsInput | number | null
    precioDescuento?: NullableFloatFieldUpdateOperationsInput | number | null
    textoPromocion?: NullableStringFieldUpdateOperationsInput | string | null
    productoGeneral?: ProductoGeneralUncheckedUpdateOneWithoutAccesorioNestedInput
  }

  export type AccesorioCreateManyInput = {
    id?: number
    nombre: string
    precio: number
    imagen: string
    descripcion?: string | null
    compatibilidad?: string | null
    dimensiones?: string | null
    peso?: string | null
    colores?: string | null
    precioPromocion?: number | null
    precioDescuento?: number | null
    textoPromocion?: string | null
  }

  export type AccesorioUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    imagen?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    compatibilidad?: NullableStringFieldUpdateOperationsInput | string | null
    dimensiones?: NullableStringFieldUpdateOperationsInput | string | null
    peso?: NullableStringFieldUpdateOperationsInput | string | null
    colores?: NullableStringFieldUpdateOperationsInput | string | null
    precioPromocion?: NullableFloatFieldUpdateOperationsInput | number | null
    precioDescuento?: NullableFloatFieldUpdateOperationsInput | number | null
    textoPromocion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccesorioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    imagen?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    compatibilidad?: NullableStringFieldUpdateOperationsInput | string | null
    dimensiones?: NullableStringFieldUpdateOperationsInput | string | null
    peso?: NullableStringFieldUpdateOperationsInput | string | null
    colores?: NullableStringFieldUpdateOperationsInput | string | null
    precioPromocion?: NullableFloatFieldUpdateOperationsInput | number | null
    precioDescuento?: NullableFloatFieldUpdateOperationsInput | number | null
    textoPromocion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PedidoCreateInput = {
    total: number
    estado: string
    creadoEn?: Date | string
    items?: ItemPedidoCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUncheckedCreateInput = {
    id?: number
    total: number
    estado: string
    creadoEn?: Date | string
    items?: ItemPedidoUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUpdateInput = {
    total?: FloatFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ItemPedidoUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ItemPedidoUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoCreateManyInput = {
    id?: number
    total: number
    estado: string
    creadoEn?: Date | string
  }

  export type PedidoUpdateManyMutationInput = {
    total?: FloatFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PedidoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemPedidoCreateInput = {
    cantidad: number
    precio: number
    pedido: PedidoCreateNestedOneWithoutItemsInput
    producto: ProductoGeneralCreateNestedOneWithoutItemsInput
  }

  export type ItemPedidoUncheckedCreateInput = {
    id?: number
    pedidoId: number
    productoGeneralId: number
    cantidad: number
    precio: number
  }

  export type ItemPedidoUpdateInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precio?: FloatFieldUpdateOperationsInput | number
    pedido?: PedidoUpdateOneRequiredWithoutItemsNestedInput
    producto?: ProductoGeneralUpdateOneRequiredWithoutItemsNestedInput
  }

  export type ItemPedidoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
    productoGeneralId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precio?: FloatFieldUpdateOperationsInput | number
  }

  export type ItemPedidoCreateManyInput = {
    id?: number
    pedidoId: number
    productoGeneralId: number
    cantidad: number
    precio: number
  }

  export type ItemPedidoUpdateManyMutationInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precio?: FloatFieldUpdateOperationsInput | number
  }

  export type ItemPedidoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
    productoGeneralId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precio?: FloatFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UsuarioAdminCountOrderByAggregateInput = {
    id?: SortOrder
    correo?: SortOrder
    contrasena?: SortOrder
    creadoEn?: SortOrder
  }

  export type UsuarioAdminAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioAdminMaxOrderByAggregateInput = {
    id?: SortOrder
    correo?: SortOrder
    contrasena?: SortOrder
    creadoEn?: SortOrder
  }

  export type UsuarioAdminMinOrderByAggregateInput = {
    id?: SortOrder
    correo?: SortOrder
    contrasena?: SortOrder
    creadoEn?: SortOrder
  }

  export type UsuarioAdminSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CelularNullableScalarRelationFilter = {
    is?: CelularWhereInput | null
    isNot?: CelularWhereInput | null
  }

  export type AccesorioNullableScalarRelationFilter = {
    is?: AccesorioWhereInput | null
    isNot?: AccesorioWhereInput | null
  }

  export type ItemPedidoListRelationFilter = {
    every?: ItemPedidoWhereInput
    some?: ItemPedidoWhereInput
    none?: ItemPedidoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ItemPedidoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductoGeneralCountOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    celularId?: SortOrder
    accesorioId?: SortOrder
  }

  export type ProductoGeneralAvgOrderByAggregateInput = {
    id?: SortOrder
    celularId?: SortOrder
    accesorioId?: SortOrder
  }

  export type ProductoGeneralMaxOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    celularId?: SortOrder
    accesorioId?: SortOrder
  }

  export type ProductoGeneralMinOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    celularId?: SortOrder
    accesorioId?: SortOrder
  }

  export type ProductoGeneralSumOrderByAggregateInput = {
    id?: SortOrder
    celularId?: SortOrder
    accesorioId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type ProductoGeneralNullableScalarRelationFilter = {
    is?: ProductoGeneralWhereInput | null
    isNot?: ProductoGeneralWhereInput | null
  }

  export type CelularCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    precio?: SortOrder
    imagen?: SortOrder
    marca?: SortOrder
    color?: SortOrder
    modelo?: SortOrder
    pantalla?: SortOrder
    bateria?: SortOrder
    almacenamiento?: SortOrder
    ram?: SortOrder
    camara?: SortOrder
    puertoCarga?: SortOrder
    precioPromocion?: SortOrder
    precioDescuento?: SortOrder
    textoPromocion?: SortOrder
  }

  export type CelularAvgOrderByAggregateInput = {
    id?: SortOrder
    precio?: SortOrder
    precioPromocion?: SortOrder
    precioDescuento?: SortOrder
  }

  export type CelularMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    precio?: SortOrder
    imagen?: SortOrder
    marca?: SortOrder
    color?: SortOrder
    modelo?: SortOrder
    pantalla?: SortOrder
    bateria?: SortOrder
    almacenamiento?: SortOrder
    ram?: SortOrder
    camara?: SortOrder
    puertoCarga?: SortOrder
    precioPromocion?: SortOrder
    precioDescuento?: SortOrder
    textoPromocion?: SortOrder
  }

  export type CelularMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    precio?: SortOrder
    imagen?: SortOrder
    marca?: SortOrder
    color?: SortOrder
    modelo?: SortOrder
    pantalla?: SortOrder
    bateria?: SortOrder
    almacenamiento?: SortOrder
    ram?: SortOrder
    camara?: SortOrder
    puertoCarga?: SortOrder
    precioPromocion?: SortOrder
    precioDescuento?: SortOrder
    textoPromocion?: SortOrder
  }

  export type CelularSumOrderByAggregateInput = {
    id?: SortOrder
    precio?: SortOrder
    precioPromocion?: SortOrder
    precioDescuento?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type AccesorioCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    precio?: SortOrder
    imagen?: SortOrder
    descripcion?: SortOrder
    compatibilidad?: SortOrder
    dimensiones?: SortOrder
    peso?: SortOrder
    colores?: SortOrder
    precioPromocion?: SortOrder
    precioDescuento?: SortOrder
    textoPromocion?: SortOrder
  }

  export type AccesorioAvgOrderByAggregateInput = {
    id?: SortOrder
    precio?: SortOrder
    precioPromocion?: SortOrder
    precioDescuento?: SortOrder
  }

  export type AccesorioMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    precio?: SortOrder
    imagen?: SortOrder
    descripcion?: SortOrder
    compatibilidad?: SortOrder
    dimensiones?: SortOrder
    peso?: SortOrder
    colores?: SortOrder
    precioPromocion?: SortOrder
    precioDescuento?: SortOrder
    textoPromocion?: SortOrder
  }

  export type AccesorioMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    precio?: SortOrder
    imagen?: SortOrder
    descripcion?: SortOrder
    compatibilidad?: SortOrder
    dimensiones?: SortOrder
    peso?: SortOrder
    colores?: SortOrder
    precioPromocion?: SortOrder
    precioDescuento?: SortOrder
    textoPromocion?: SortOrder
  }

  export type AccesorioSumOrderByAggregateInput = {
    id?: SortOrder
    precio?: SortOrder
    precioPromocion?: SortOrder
    precioDescuento?: SortOrder
  }

  export type PedidoCountOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    estado?: SortOrder
    creadoEn?: SortOrder
  }

  export type PedidoAvgOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
  }

  export type PedidoMaxOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    estado?: SortOrder
    creadoEn?: SortOrder
  }

  export type PedidoMinOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    estado?: SortOrder
    creadoEn?: SortOrder
  }

  export type PedidoSumOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
  }

  export type PedidoScalarRelationFilter = {
    is?: PedidoWhereInput
    isNot?: PedidoWhereInput
  }

  export type ProductoGeneralScalarRelationFilter = {
    is?: ProductoGeneralWhereInput
    isNot?: ProductoGeneralWhereInput
  }

  export type ItemPedidoCountOrderByAggregateInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    productoGeneralId?: SortOrder
    cantidad?: SortOrder
    precio?: SortOrder
  }

  export type ItemPedidoAvgOrderByAggregateInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    productoGeneralId?: SortOrder
    cantidad?: SortOrder
    precio?: SortOrder
  }

  export type ItemPedidoMaxOrderByAggregateInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    productoGeneralId?: SortOrder
    cantidad?: SortOrder
    precio?: SortOrder
  }

  export type ItemPedidoMinOrderByAggregateInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    productoGeneralId?: SortOrder
    cantidad?: SortOrder
    precio?: SortOrder
  }

  export type ItemPedidoSumOrderByAggregateInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    productoGeneralId?: SortOrder
    cantidad?: SortOrder
    precio?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CelularCreateNestedOneWithoutProductoGeneralInput = {
    create?: XOR<CelularCreateWithoutProductoGeneralInput, CelularUncheckedCreateWithoutProductoGeneralInput>
    connectOrCreate?: CelularCreateOrConnectWithoutProductoGeneralInput
    connect?: CelularWhereUniqueInput
  }

  export type AccesorioCreateNestedOneWithoutProductoGeneralInput = {
    create?: XOR<AccesorioCreateWithoutProductoGeneralInput, AccesorioUncheckedCreateWithoutProductoGeneralInput>
    connectOrCreate?: AccesorioCreateOrConnectWithoutProductoGeneralInput
    connect?: AccesorioWhereUniqueInput
  }

  export type ItemPedidoCreateNestedManyWithoutProductoInput = {
    create?: XOR<ItemPedidoCreateWithoutProductoInput, ItemPedidoUncheckedCreateWithoutProductoInput> | ItemPedidoCreateWithoutProductoInput[] | ItemPedidoUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: ItemPedidoCreateOrConnectWithoutProductoInput | ItemPedidoCreateOrConnectWithoutProductoInput[]
    createMany?: ItemPedidoCreateManyProductoInputEnvelope
    connect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
  }

  export type ItemPedidoUncheckedCreateNestedManyWithoutProductoInput = {
    create?: XOR<ItemPedidoCreateWithoutProductoInput, ItemPedidoUncheckedCreateWithoutProductoInput> | ItemPedidoCreateWithoutProductoInput[] | ItemPedidoUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: ItemPedidoCreateOrConnectWithoutProductoInput | ItemPedidoCreateOrConnectWithoutProductoInput[]
    createMany?: ItemPedidoCreateManyProductoInputEnvelope
    connect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
  }

  export type CelularUpdateOneWithoutProductoGeneralNestedInput = {
    create?: XOR<CelularCreateWithoutProductoGeneralInput, CelularUncheckedCreateWithoutProductoGeneralInput>
    connectOrCreate?: CelularCreateOrConnectWithoutProductoGeneralInput
    upsert?: CelularUpsertWithoutProductoGeneralInput
    disconnect?: CelularWhereInput | boolean
    delete?: CelularWhereInput | boolean
    connect?: CelularWhereUniqueInput
    update?: XOR<XOR<CelularUpdateToOneWithWhereWithoutProductoGeneralInput, CelularUpdateWithoutProductoGeneralInput>, CelularUncheckedUpdateWithoutProductoGeneralInput>
  }

  export type AccesorioUpdateOneWithoutProductoGeneralNestedInput = {
    create?: XOR<AccesorioCreateWithoutProductoGeneralInput, AccesorioUncheckedCreateWithoutProductoGeneralInput>
    connectOrCreate?: AccesorioCreateOrConnectWithoutProductoGeneralInput
    upsert?: AccesorioUpsertWithoutProductoGeneralInput
    disconnect?: AccesorioWhereInput | boolean
    delete?: AccesorioWhereInput | boolean
    connect?: AccesorioWhereUniqueInput
    update?: XOR<XOR<AccesorioUpdateToOneWithWhereWithoutProductoGeneralInput, AccesorioUpdateWithoutProductoGeneralInput>, AccesorioUncheckedUpdateWithoutProductoGeneralInput>
  }

  export type ItemPedidoUpdateManyWithoutProductoNestedInput = {
    create?: XOR<ItemPedidoCreateWithoutProductoInput, ItemPedidoUncheckedCreateWithoutProductoInput> | ItemPedidoCreateWithoutProductoInput[] | ItemPedidoUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: ItemPedidoCreateOrConnectWithoutProductoInput | ItemPedidoCreateOrConnectWithoutProductoInput[]
    upsert?: ItemPedidoUpsertWithWhereUniqueWithoutProductoInput | ItemPedidoUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: ItemPedidoCreateManyProductoInputEnvelope
    set?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    disconnect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    delete?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    connect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    update?: ItemPedidoUpdateWithWhereUniqueWithoutProductoInput | ItemPedidoUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: ItemPedidoUpdateManyWithWhereWithoutProductoInput | ItemPedidoUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: ItemPedidoScalarWhereInput | ItemPedidoScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ItemPedidoUncheckedUpdateManyWithoutProductoNestedInput = {
    create?: XOR<ItemPedidoCreateWithoutProductoInput, ItemPedidoUncheckedCreateWithoutProductoInput> | ItemPedidoCreateWithoutProductoInput[] | ItemPedidoUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: ItemPedidoCreateOrConnectWithoutProductoInput | ItemPedidoCreateOrConnectWithoutProductoInput[]
    upsert?: ItemPedidoUpsertWithWhereUniqueWithoutProductoInput | ItemPedidoUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: ItemPedidoCreateManyProductoInputEnvelope
    set?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    disconnect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    delete?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    connect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    update?: ItemPedidoUpdateWithWhereUniqueWithoutProductoInput | ItemPedidoUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: ItemPedidoUpdateManyWithWhereWithoutProductoInput | ItemPedidoUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: ItemPedidoScalarWhereInput | ItemPedidoScalarWhereInput[]
  }

  export type ProductoGeneralCreateNestedOneWithoutCelularInput = {
    create?: XOR<ProductoGeneralCreateWithoutCelularInput, ProductoGeneralUncheckedCreateWithoutCelularInput>
    connectOrCreate?: ProductoGeneralCreateOrConnectWithoutCelularInput
    connect?: ProductoGeneralWhereUniqueInput
  }

  export type ProductoGeneralUncheckedCreateNestedOneWithoutCelularInput = {
    create?: XOR<ProductoGeneralCreateWithoutCelularInput, ProductoGeneralUncheckedCreateWithoutCelularInput>
    connectOrCreate?: ProductoGeneralCreateOrConnectWithoutCelularInput
    connect?: ProductoGeneralWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductoGeneralUpdateOneWithoutCelularNestedInput = {
    create?: XOR<ProductoGeneralCreateWithoutCelularInput, ProductoGeneralUncheckedCreateWithoutCelularInput>
    connectOrCreate?: ProductoGeneralCreateOrConnectWithoutCelularInput
    upsert?: ProductoGeneralUpsertWithoutCelularInput
    disconnect?: ProductoGeneralWhereInput | boolean
    delete?: ProductoGeneralWhereInput | boolean
    connect?: ProductoGeneralWhereUniqueInput
    update?: XOR<XOR<ProductoGeneralUpdateToOneWithWhereWithoutCelularInput, ProductoGeneralUpdateWithoutCelularInput>, ProductoGeneralUncheckedUpdateWithoutCelularInput>
  }

  export type ProductoGeneralUncheckedUpdateOneWithoutCelularNestedInput = {
    create?: XOR<ProductoGeneralCreateWithoutCelularInput, ProductoGeneralUncheckedCreateWithoutCelularInput>
    connectOrCreate?: ProductoGeneralCreateOrConnectWithoutCelularInput
    upsert?: ProductoGeneralUpsertWithoutCelularInput
    disconnect?: ProductoGeneralWhereInput | boolean
    delete?: ProductoGeneralWhereInput | boolean
    connect?: ProductoGeneralWhereUniqueInput
    update?: XOR<XOR<ProductoGeneralUpdateToOneWithWhereWithoutCelularInput, ProductoGeneralUpdateWithoutCelularInput>, ProductoGeneralUncheckedUpdateWithoutCelularInput>
  }

  export type ProductoGeneralCreateNestedOneWithoutAccesorioInput = {
    create?: XOR<ProductoGeneralCreateWithoutAccesorioInput, ProductoGeneralUncheckedCreateWithoutAccesorioInput>
    connectOrCreate?: ProductoGeneralCreateOrConnectWithoutAccesorioInput
    connect?: ProductoGeneralWhereUniqueInput
  }

  export type ProductoGeneralUncheckedCreateNestedOneWithoutAccesorioInput = {
    create?: XOR<ProductoGeneralCreateWithoutAccesorioInput, ProductoGeneralUncheckedCreateWithoutAccesorioInput>
    connectOrCreate?: ProductoGeneralCreateOrConnectWithoutAccesorioInput
    connect?: ProductoGeneralWhereUniqueInput
  }

  export type ProductoGeneralUpdateOneWithoutAccesorioNestedInput = {
    create?: XOR<ProductoGeneralCreateWithoutAccesorioInput, ProductoGeneralUncheckedCreateWithoutAccesorioInput>
    connectOrCreate?: ProductoGeneralCreateOrConnectWithoutAccesorioInput
    upsert?: ProductoGeneralUpsertWithoutAccesorioInput
    disconnect?: ProductoGeneralWhereInput | boolean
    delete?: ProductoGeneralWhereInput | boolean
    connect?: ProductoGeneralWhereUniqueInput
    update?: XOR<XOR<ProductoGeneralUpdateToOneWithWhereWithoutAccesorioInput, ProductoGeneralUpdateWithoutAccesorioInput>, ProductoGeneralUncheckedUpdateWithoutAccesorioInput>
  }

  export type ProductoGeneralUncheckedUpdateOneWithoutAccesorioNestedInput = {
    create?: XOR<ProductoGeneralCreateWithoutAccesorioInput, ProductoGeneralUncheckedCreateWithoutAccesorioInput>
    connectOrCreate?: ProductoGeneralCreateOrConnectWithoutAccesorioInput
    upsert?: ProductoGeneralUpsertWithoutAccesorioInput
    disconnect?: ProductoGeneralWhereInput | boolean
    delete?: ProductoGeneralWhereInput | boolean
    connect?: ProductoGeneralWhereUniqueInput
    update?: XOR<XOR<ProductoGeneralUpdateToOneWithWhereWithoutAccesorioInput, ProductoGeneralUpdateWithoutAccesorioInput>, ProductoGeneralUncheckedUpdateWithoutAccesorioInput>
  }

  export type ItemPedidoCreateNestedManyWithoutPedidoInput = {
    create?: XOR<ItemPedidoCreateWithoutPedidoInput, ItemPedidoUncheckedCreateWithoutPedidoInput> | ItemPedidoCreateWithoutPedidoInput[] | ItemPedidoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: ItemPedidoCreateOrConnectWithoutPedidoInput | ItemPedidoCreateOrConnectWithoutPedidoInput[]
    createMany?: ItemPedidoCreateManyPedidoInputEnvelope
    connect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
  }

  export type ItemPedidoUncheckedCreateNestedManyWithoutPedidoInput = {
    create?: XOR<ItemPedidoCreateWithoutPedidoInput, ItemPedidoUncheckedCreateWithoutPedidoInput> | ItemPedidoCreateWithoutPedidoInput[] | ItemPedidoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: ItemPedidoCreateOrConnectWithoutPedidoInput | ItemPedidoCreateOrConnectWithoutPedidoInput[]
    createMany?: ItemPedidoCreateManyPedidoInputEnvelope
    connect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
  }

  export type ItemPedidoUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<ItemPedidoCreateWithoutPedidoInput, ItemPedidoUncheckedCreateWithoutPedidoInput> | ItemPedidoCreateWithoutPedidoInput[] | ItemPedidoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: ItemPedidoCreateOrConnectWithoutPedidoInput | ItemPedidoCreateOrConnectWithoutPedidoInput[]
    upsert?: ItemPedidoUpsertWithWhereUniqueWithoutPedidoInput | ItemPedidoUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: ItemPedidoCreateManyPedidoInputEnvelope
    set?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    disconnect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    delete?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    connect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    update?: ItemPedidoUpdateWithWhereUniqueWithoutPedidoInput | ItemPedidoUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: ItemPedidoUpdateManyWithWhereWithoutPedidoInput | ItemPedidoUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: ItemPedidoScalarWhereInput | ItemPedidoScalarWhereInput[]
  }

  export type ItemPedidoUncheckedUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<ItemPedidoCreateWithoutPedidoInput, ItemPedidoUncheckedCreateWithoutPedidoInput> | ItemPedidoCreateWithoutPedidoInput[] | ItemPedidoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: ItemPedidoCreateOrConnectWithoutPedidoInput | ItemPedidoCreateOrConnectWithoutPedidoInput[]
    upsert?: ItemPedidoUpsertWithWhereUniqueWithoutPedidoInput | ItemPedidoUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: ItemPedidoCreateManyPedidoInputEnvelope
    set?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    disconnect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    delete?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    connect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    update?: ItemPedidoUpdateWithWhereUniqueWithoutPedidoInput | ItemPedidoUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: ItemPedidoUpdateManyWithWhereWithoutPedidoInput | ItemPedidoUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: ItemPedidoScalarWhereInput | ItemPedidoScalarWhereInput[]
  }

  export type PedidoCreateNestedOneWithoutItemsInput = {
    create?: XOR<PedidoCreateWithoutItemsInput, PedidoUncheckedCreateWithoutItemsInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutItemsInput
    connect?: PedidoWhereUniqueInput
  }

  export type ProductoGeneralCreateNestedOneWithoutItemsInput = {
    create?: XOR<ProductoGeneralCreateWithoutItemsInput, ProductoGeneralUncheckedCreateWithoutItemsInput>
    connectOrCreate?: ProductoGeneralCreateOrConnectWithoutItemsInput
    connect?: ProductoGeneralWhereUniqueInput
  }

  export type PedidoUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<PedidoCreateWithoutItemsInput, PedidoUncheckedCreateWithoutItemsInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutItemsInput
    upsert?: PedidoUpsertWithoutItemsInput
    connect?: PedidoWhereUniqueInput
    update?: XOR<XOR<PedidoUpdateToOneWithWhereWithoutItemsInput, PedidoUpdateWithoutItemsInput>, PedidoUncheckedUpdateWithoutItemsInput>
  }

  export type ProductoGeneralUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<ProductoGeneralCreateWithoutItemsInput, ProductoGeneralUncheckedCreateWithoutItemsInput>
    connectOrCreate?: ProductoGeneralCreateOrConnectWithoutItemsInput
    upsert?: ProductoGeneralUpsertWithoutItemsInput
    connect?: ProductoGeneralWhereUniqueInput
    update?: XOR<XOR<ProductoGeneralUpdateToOneWithWhereWithoutItemsInput, ProductoGeneralUpdateWithoutItemsInput>, ProductoGeneralUncheckedUpdateWithoutItemsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type CelularCreateWithoutProductoGeneralInput = {
    nombre: string
    precio: number
    imagen: string
    marca?: string | null
    color?: string | null
    modelo?: string | null
    pantalla?: string | null
    bateria?: string | null
    almacenamiento?: string | null
    ram?: string | null
    camara?: string | null
    puertoCarga?: string | null
    precioPromocion?: number | null
    precioDescuento?: number | null
    textoPromocion?: string | null
  }

  export type CelularUncheckedCreateWithoutProductoGeneralInput = {
    id?: number
    nombre: string
    precio: number
    imagen: string
    marca?: string | null
    color?: string | null
    modelo?: string | null
    pantalla?: string | null
    bateria?: string | null
    almacenamiento?: string | null
    ram?: string | null
    camara?: string | null
    puertoCarga?: string | null
    precioPromocion?: number | null
    precioDescuento?: number | null
    textoPromocion?: string | null
  }

  export type CelularCreateOrConnectWithoutProductoGeneralInput = {
    where: CelularWhereUniqueInput
    create: XOR<CelularCreateWithoutProductoGeneralInput, CelularUncheckedCreateWithoutProductoGeneralInput>
  }

  export type AccesorioCreateWithoutProductoGeneralInput = {
    nombre: string
    precio: number
    imagen: string
    descripcion?: string | null
    compatibilidad?: string | null
    dimensiones?: string | null
    peso?: string | null
    colores?: string | null
    precioPromocion?: number | null
    precioDescuento?: number | null
    textoPromocion?: string | null
  }

  export type AccesorioUncheckedCreateWithoutProductoGeneralInput = {
    id?: number
    nombre: string
    precio: number
    imagen: string
    descripcion?: string | null
    compatibilidad?: string | null
    dimensiones?: string | null
    peso?: string | null
    colores?: string | null
    precioPromocion?: number | null
    precioDescuento?: number | null
    textoPromocion?: string | null
  }

  export type AccesorioCreateOrConnectWithoutProductoGeneralInput = {
    where: AccesorioWhereUniqueInput
    create: XOR<AccesorioCreateWithoutProductoGeneralInput, AccesorioUncheckedCreateWithoutProductoGeneralInput>
  }

  export type ItemPedidoCreateWithoutProductoInput = {
    cantidad: number
    precio: number
    pedido: PedidoCreateNestedOneWithoutItemsInput
  }

  export type ItemPedidoUncheckedCreateWithoutProductoInput = {
    id?: number
    pedidoId: number
    cantidad: number
    precio: number
  }

  export type ItemPedidoCreateOrConnectWithoutProductoInput = {
    where: ItemPedidoWhereUniqueInput
    create: XOR<ItemPedidoCreateWithoutProductoInput, ItemPedidoUncheckedCreateWithoutProductoInput>
  }

  export type ItemPedidoCreateManyProductoInputEnvelope = {
    data: ItemPedidoCreateManyProductoInput | ItemPedidoCreateManyProductoInput[]
    skipDuplicates?: boolean
  }

  export type CelularUpsertWithoutProductoGeneralInput = {
    update: XOR<CelularUpdateWithoutProductoGeneralInput, CelularUncheckedUpdateWithoutProductoGeneralInput>
    create: XOR<CelularCreateWithoutProductoGeneralInput, CelularUncheckedCreateWithoutProductoGeneralInput>
    where?: CelularWhereInput
  }

  export type CelularUpdateToOneWithWhereWithoutProductoGeneralInput = {
    where?: CelularWhereInput
    data: XOR<CelularUpdateWithoutProductoGeneralInput, CelularUncheckedUpdateWithoutProductoGeneralInput>
  }

  export type CelularUpdateWithoutProductoGeneralInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    imagen?: StringFieldUpdateOperationsInput | string
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    pantalla?: NullableStringFieldUpdateOperationsInput | string | null
    bateria?: NullableStringFieldUpdateOperationsInput | string | null
    almacenamiento?: NullableStringFieldUpdateOperationsInput | string | null
    ram?: NullableStringFieldUpdateOperationsInput | string | null
    camara?: NullableStringFieldUpdateOperationsInput | string | null
    puertoCarga?: NullableStringFieldUpdateOperationsInput | string | null
    precioPromocion?: NullableFloatFieldUpdateOperationsInput | number | null
    precioDescuento?: NullableFloatFieldUpdateOperationsInput | number | null
    textoPromocion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CelularUncheckedUpdateWithoutProductoGeneralInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    imagen?: StringFieldUpdateOperationsInput | string
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    pantalla?: NullableStringFieldUpdateOperationsInput | string | null
    bateria?: NullableStringFieldUpdateOperationsInput | string | null
    almacenamiento?: NullableStringFieldUpdateOperationsInput | string | null
    ram?: NullableStringFieldUpdateOperationsInput | string | null
    camara?: NullableStringFieldUpdateOperationsInput | string | null
    puertoCarga?: NullableStringFieldUpdateOperationsInput | string | null
    precioPromocion?: NullableFloatFieldUpdateOperationsInput | number | null
    precioDescuento?: NullableFloatFieldUpdateOperationsInput | number | null
    textoPromocion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccesorioUpsertWithoutProductoGeneralInput = {
    update: XOR<AccesorioUpdateWithoutProductoGeneralInput, AccesorioUncheckedUpdateWithoutProductoGeneralInput>
    create: XOR<AccesorioCreateWithoutProductoGeneralInput, AccesorioUncheckedCreateWithoutProductoGeneralInput>
    where?: AccesorioWhereInput
  }

  export type AccesorioUpdateToOneWithWhereWithoutProductoGeneralInput = {
    where?: AccesorioWhereInput
    data: XOR<AccesorioUpdateWithoutProductoGeneralInput, AccesorioUncheckedUpdateWithoutProductoGeneralInput>
  }

  export type AccesorioUpdateWithoutProductoGeneralInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    imagen?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    compatibilidad?: NullableStringFieldUpdateOperationsInput | string | null
    dimensiones?: NullableStringFieldUpdateOperationsInput | string | null
    peso?: NullableStringFieldUpdateOperationsInput | string | null
    colores?: NullableStringFieldUpdateOperationsInput | string | null
    precioPromocion?: NullableFloatFieldUpdateOperationsInput | number | null
    precioDescuento?: NullableFloatFieldUpdateOperationsInput | number | null
    textoPromocion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccesorioUncheckedUpdateWithoutProductoGeneralInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    imagen?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    compatibilidad?: NullableStringFieldUpdateOperationsInput | string | null
    dimensiones?: NullableStringFieldUpdateOperationsInput | string | null
    peso?: NullableStringFieldUpdateOperationsInput | string | null
    colores?: NullableStringFieldUpdateOperationsInput | string | null
    precioPromocion?: NullableFloatFieldUpdateOperationsInput | number | null
    precioDescuento?: NullableFloatFieldUpdateOperationsInput | number | null
    textoPromocion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ItemPedidoUpsertWithWhereUniqueWithoutProductoInput = {
    where: ItemPedidoWhereUniqueInput
    update: XOR<ItemPedidoUpdateWithoutProductoInput, ItemPedidoUncheckedUpdateWithoutProductoInput>
    create: XOR<ItemPedidoCreateWithoutProductoInput, ItemPedidoUncheckedCreateWithoutProductoInput>
  }

  export type ItemPedidoUpdateWithWhereUniqueWithoutProductoInput = {
    where: ItemPedidoWhereUniqueInput
    data: XOR<ItemPedidoUpdateWithoutProductoInput, ItemPedidoUncheckedUpdateWithoutProductoInput>
  }

  export type ItemPedidoUpdateManyWithWhereWithoutProductoInput = {
    where: ItemPedidoScalarWhereInput
    data: XOR<ItemPedidoUpdateManyMutationInput, ItemPedidoUncheckedUpdateManyWithoutProductoInput>
  }

  export type ItemPedidoScalarWhereInput = {
    AND?: ItemPedidoScalarWhereInput | ItemPedidoScalarWhereInput[]
    OR?: ItemPedidoScalarWhereInput[]
    NOT?: ItemPedidoScalarWhereInput | ItemPedidoScalarWhereInput[]
    id?: IntFilter<"ItemPedido"> | number
    pedidoId?: IntFilter<"ItemPedido"> | number
    productoGeneralId?: IntFilter<"ItemPedido"> | number
    cantidad?: IntFilter<"ItemPedido"> | number
    precio?: FloatFilter<"ItemPedido"> | number
  }

  export type ProductoGeneralCreateWithoutCelularInput = {
    tipo: string
    accesorio?: AccesorioCreateNestedOneWithoutProductoGeneralInput
    items?: ItemPedidoCreateNestedManyWithoutProductoInput
  }

  export type ProductoGeneralUncheckedCreateWithoutCelularInput = {
    id?: number
    tipo: string
    accesorioId?: number | null
    items?: ItemPedidoUncheckedCreateNestedManyWithoutProductoInput
  }

  export type ProductoGeneralCreateOrConnectWithoutCelularInput = {
    where: ProductoGeneralWhereUniqueInput
    create: XOR<ProductoGeneralCreateWithoutCelularInput, ProductoGeneralUncheckedCreateWithoutCelularInput>
  }

  export type ProductoGeneralUpsertWithoutCelularInput = {
    update: XOR<ProductoGeneralUpdateWithoutCelularInput, ProductoGeneralUncheckedUpdateWithoutCelularInput>
    create: XOR<ProductoGeneralCreateWithoutCelularInput, ProductoGeneralUncheckedCreateWithoutCelularInput>
    where?: ProductoGeneralWhereInput
  }

  export type ProductoGeneralUpdateToOneWithWhereWithoutCelularInput = {
    where?: ProductoGeneralWhereInput
    data: XOR<ProductoGeneralUpdateWithoutCelularInput, ProductoGeneralUncheckedUpdateWithoutCelularInput>
  }

  export type ProductoGeneralUpdateWithoutCelularInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    accesorio?: AccesorioUpdateOneWithoutProductoGeneralNestedInput
    items?: ItemPedidoUpdateManyWithoutProductoNestedInput
  }

  export type ProductoGeneralUncheckedUpdateWithoutCelularInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    accesorioId?: NullableIntFieldUpdateOperationsInput | number | null
    items?: ItemPedidoUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type ProductoGeneralCreateWithoutAccesorioInput = {
    tipo: string
    celular?: CelularCreateNestedOneWithoutProductoGeneralInput
    items?: ItemPedidoCreateNestedManyWithoutProductoInput
  }

  export type ProductoGeneralUncheckedCreateWithoutAccesorioInput = {
    id?: number
    tipo: string
    celularId?: number | null
    items?: ItemPedidoUncheckedCreateNestedManyWithoutProductoInput
  }

  export type ProductoGeneralCreateOrConnectWithoutAccesorioInput = {
    where: ProductoGeneralWhereUniqueInput
    create: XOR<ProductoGeneralCreateWithoutAccesorioInput, ProductoGeneralUncheckedCreateWithoutAccesorioInput>
  }

  export type ProductoGeneralUpsertWithoutAccesorioInput = {
    update: XOR<ProductoGeneralUpdateWithoutAccesorioInput, ProductoGeneralUncheckedUpdateWithoutAccesorioInput>
    create: XOR<ProductoGeneralCreateWithoutAccesorioInput, ProductoGeneralUncheckedCreateWithoutAccesorioInput>
    where?: ProductoGeneralWhereInput
  }

  export type ProductoGeneralUpdateToOneWithWhereWithoutAccesorioInput = {
    where?: ProductoGeneralWhereInput
    data: XOR<ProductoGeneralUpdateWithoutAccesorioInput, ProductoGeneralUncheckedUpdateWithoutAccesorioInput>
  }

  export type ProductoGeneralUpdateWithoutAccesorioInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    celular?: CelularUpdateOneWithoutProductoGeneralNestedInput
    items?: ItemPedidoUpdateManyWithoutProductoNestedInput
  }

  export type ProductoGeneralUncheckedUpdateWithoutAccesorioInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    celularId?: NullableIntFieldUpdateOperationsInput | number | null
    items?: ItemPedidoUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type ItemPedidoCreateWithoutPedidoInput = {
    cantidad: number
    precio: number
    producto: ProductoGeneralCreateNestedOneWithoutItemsInput
  }

  export type ItemPedidoUncheckedCreateWithoutPedidoInput = {
    id?: number
    productoGeneralId: number
    cantidad: number
    precio: number
  }

  export type ItemPedidoCreateOrConnectWithoutPedidoInput = {
    where: ItemPedidoWhereUniqueInput
    create: XOR<ItemPedidoCreateWithoutPedidoInput, ItemPedidoUncheckedCreateWithoutPedidoInput>
  }

  export type ItemPedidoCreateManyPedidoInputEnvelope = {
    data: ItemPedidoCreateManyPedidoInput | ItemPedidoCreateManyPedidoInput[]
    skipDuplicates?: boolean
  }

  export type ItemPedidoUpsertWithWhereUniqueWithoutPedidoInput = {
    where: ItemPedidoWhereUniqueInput
    update: XOR<ItemPedidoUpdateWithoutPedidoInput, ItemPedidoUncheckedUpdateWithoutPedidoInput>
    create: XOR<ItemPedidoCreateWithoutPedidoInput, ItemPedidoUncheckedCreateWithoutPedidoInput>
  }

  export type ItemPedidoUpdateWithWhereUniqueWithoutPedidoInput = {
    where: ItemPedidoWhereUniqueInput
    data: XOR<ItemPedidoUpdateWithoutPedidoInput, ItemPedidoUncheckedUpdateWithoutPedidoInput>
  }

  export type ItemPedidoUpdateManyWithWhereWithoutPedidoInput = {
    where: ItemPedidoScalarWhereInput
    data: XOR<ItemPedidoUpdateManyMutationInput, ItemPedidoUncheckedUpdateManyWithoutPedidoInput>
  }

  export type PedidoCreateWithoutItemsInput = {
    total: number
    estado: string
    creadoEn?: Date | string
  }

  export type PedidoUncheckedCreateWithoutItemsInput = {
    id?: number
    total: number
    estado: string
    creadoEn?: Date | string
  }

  export type PedidoCreateOrConnectWithoutItemsInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutItemsInput, PedidoUncheckedCreateWithoutItemsInput>
  }

  export type ProductoGeneralCreateWithoutItemsInput = {
    tipo: string
    celular?: CelularCreateNestedOneWithoutProductoGeneralInput
    accesorio?: AccesorioCreateNestedOneWithoutProductoGeneralInput
  }

  export type ProductoGeneralUncheckedCreateWithoutItemsInput = {
    id?: number
    tipo: string
    celularId?: number | null
    accesorioId?: number | null
  }

  export type ProductoGeneralCreateOrConnectWithoutItemsInput = {
    where: ProductoGeneralWhereUniqueInput
    create: XOR<ProductoGeneralCreateWithoutItemsInput, ProductoGeneralUncheckedCreateWithoutItemsInput>
  }

  export type PedidoUpsertWithoutItemsInput = {
    update: XOR<PedidoUpdateWithoutItemsInput, PedidoUncheckedUpdateWithoutItemsInput>
    create: XOR<PedidoCreateWithoutItemsInput, PedidoUncheckedCreateWithoutItemsInput>
    where?: PedidoWhereInput
  }

  export type PedidoUpdateToOneWithWhereWithoutItemsInput = {
    where?: PedidoWhereInput
    data: XOR<PedidoUpdateWithoutItemsInput, PedidoUncheckedUpdateWithoutItemsInput>
  }

  export type PedidoUpdateWithoutItemsInput = {
    total?: FloatFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PedidoUncheckedUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductoGeneralUpsertWithoutItemsInput = {
    update: XOR<ProductoGeneralUpdateWithoutItemsInput, ProductoGeneralUncheckedUpdateWithoutItemsInput>
    create: XOR<ProductoGeneralCreateWithoutItemsInput, ProductoGeneralUncheckedCreateWithoutItemsInput>
    where?: ProductoGeneralWhereInput
  }

  export type ProductoGeneralUpdateToOneWithWhereWithoutItemsInput = {
    where?: ProductoGeneralWhereInput
    data: XOR<ProductoGeneralUpdateWithoutItemsInput, ProductoGeneralUncheckedUpdateWithoutItemsInput>
  }

  export type ProductoGeneralUpdateWithoutItemsInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    celular?: CelularUpdateOneWithoutProductoGeneralNestedInput
    accesorio?: AccesorioUpdateOneWithoutProductoGeneralNestedInput
  }

  export type ProductoGeneralUncheckedUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    celularId?: NullableIntFieldUpdateOperationsInput | number | null
    accesorioId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ItemPedidoCreateManyProductoInput = {
    id?: number
    pedidoId: number
    cantidad: number
    precio: number
  }

  export type ItemPedidoUpdateWithoutProductoInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precio?: FloatFieldUpdateOperationsInput | number
    pedido?: PedidoUpdateOneRequiredWithoutItemsNestedInput
  }

  export type ItemPedidoUncheckedUpdateWithoutProductoInput = {
    id?: IntFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precio?: FloatFieldUpdateOperationsInput | number
  }

  export type ItemPedidoUncheckedUpdateManyWithoutProductoInput = {
    id?: IntFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precio?: FloatFieldUpdateOperationsInput | number
  }

  export type ItemPedidoCreateManyPedidoInput = {
    id?: number
    productoGeneralId: number
    cantidad: number
    precio: number
  }

  export type ItemPedidoUpdateWithoutPedidoInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precio?: FloatFieldUpdateOperationsInput | number
    producto?: ProductoGeneralUpdateOneRequiredWithoutItemsNestedInput
  }

  export type ItemPedidoUncheckedUpdateWithoutPedidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    productoGeneralId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precio?: FloatFieldUpdateOperationsInput | number
  }

  export type ItemPedidoUncheckedUpdateManyWithoutPedidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    productoGeneralId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precio?: FloatFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}