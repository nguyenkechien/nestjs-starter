/* tslint:disable */
/* eslint-disable */

export type ValueTypes = {
    ["User"]: AliasType<{
	id?:true,
	provider?:true,
	providerId?:true,
	username?:true,
	name?:true,
	orders?:ValueTypes["Order"],
	created_at?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
["DateTime"]:unknown;
	["Order"]: AliasType<{
	id?:true,
	alias?:true,
	user?:ValueTypes["User"],
	thing?:ValueTypes["Thing"],
	created_at?:true,
	updated_at?:true,
		__typename?: true
}>;
	["Thing"]: AliasType<{
	id?:true,
	name?:true,
	orders?:ValueTypes["Order"],
	created_at?:true,
	updated_at?:true,
		__typename?: true
}>;
	["Attribute"]: AliasType<{
	/** Example field (placeholder) */
	exampleField?:true,
		__typename?: true
}>;
	["Categorise"]: AliasType<{
	/** Example field (placeholder) */
	exampleField?:true,
		__typename?: true
}>;
	["Brand"]: AliasType<{
	/** Example field (placeholder) */
	exampleField?:true,
		__typename?: true
}>;
	["Query"]: AliasType<{
	users?:ValueTypes["User"],
	whoAmI?:ValueTypes["User"],
	things?:ValueTypes["Thing"],
	orders?:ValueTypes["Order"],
	attributes?:ValueTypes["Attribute"],
attribute?: [{	id:number},ValueTypes["Attribute"]],
categorise?: [{	id:number},ValueTypes["Categorise"]],
	brands?:ValueTypes["Brand"],
brand?: [{	id:number},ValueTypes["Brand"]],
		__typename?: true
}>;
	["Mutation"]: AliasType<{
createThing?: [{	name:string},ValueTypes["Thing"]],
createOrder?: [{	alias:string,	thingName:string},ValueTypes["Order"]],
createAttribute?: [{	createAttributeInput:ValueTypes["CreateAttributeInput"]},ValueTypes["Attribute"]],
updateAttribute?: [{	updateAttributeInput:ValueTypes["UpdateAttributeInput"]},ValueTypes["Attribute"]],
removeAttribute?: [{	id:number},ValueTypes["Attribute"]],
createCategorise?: [{	createCategoriseInput:ValueTypes["CreateCategoriseInput"]},ValueTypes["Categorise"]],
updateCategorise?: [{	updateCategoriseInput:ValueTypes["UpdateCategoriseInput"]},ValueTypes["Categorise"]],
removeCategorise?: [{	id:number},ValueTypes["Categorise"]],
createBrand?: [{	createBrandInput:ValueTypes["CreateBrandInput"]},ValueTypes["Brand"]],
updateBrand?: [{	updateBrandInput:ValueTypes["UpdateBrandInput"]},ValueTypes["Brand"]],
removeBrand?: [{	id:number},ValueTypes["Brand"]],
		__typename?: true
}>;
	["CreateAttributeInput"]: {
	/** Example field (placeholder) */
	exampleField:number
};
	["UpdateAttributeInput"]: {
	/** Example field (placeholder) */
	exampleField?:number,
	id:number
};
	["CreateCategoriseInput"]: {
	/** Example field (placeholder) */
	exampleField:number
};
	["UpdateCategoriseInput"]: {
	/** Example field (placeholder) */
	exampleField?:number,
	id:number
};
	["CreateBrandInput"]: {
	/** Example field (placeholder) */
	exampleField:number
};
	["UpdateBrandInput"]: {
	/** Example field (placeholder) */
	exampleField?:number,
	id:number
}
  }

export type PartialObjects = {
    ["User"]: {
		__typename?: "User";
			id?:number,
			provider?:string,
			providerId?:string,
			username?:string,
			name?:string,
			orders?:PartialObjects["Order"][],
			created_at?:PartialObjects["DateTime"],
			updated_at?:PartialObjects["DateTime"]
	},
	/** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
["DateTime"]:any,
	["Order"]: {
		__typename?: "Order";
			id?:number,
			alias?:string,
			user?:PartialObjects["User"],
			thing?:PartialObjects["Thing"],
			created_at?:PartialObjects["DateTime"],
			updated_at?:PartialObjects["DateTime"]
	},
	["Thing"]: {
		__typename?: "Thing";
			id?:number,
			name?:string,
			orders?:PartialObjects["Order"][],
			created_at?:PartialObjects["DateTime"],
			updated_at?:PartialObjects["DateTime"]
	},
	["Attribute"]: {
		__typename?: "Attribute";
			/** Example field (placeholder) */
	exampleField?:number
	},
	["Categorise"]: {
		__typename?: "Categorise";
			/** Example field (placeholder) */
	exampleField?:number
	},
	["Brand"]: {
		__typename?: "Brand";
			/** Example field (placeholder) */
	exampleField?:number
	},
	["Query"]: {
		__typename?: "Query";
			users?:PartialObjects["User"][],
			whoAmI?:PartialObjects["User"],
			things?:PartialObjects["Thing"][],
			orders?:PartialObjects["Order"][],
			attributes?:PartialObjects["Attribute"][],
			attribute?:PartialObjects["Attribute"],
			categorise?:PartialObjects["Categorise"],
			brands?:PartialObjects["Brand"][],
			brand?:PartialObjects["Brand"]
	},
	["Mutation"]: {
		__typename?: "Mutation";
			createThing?:PartialObjects["Thing"],
			createOrder?:PartialObjects["Order"],
			createAttribute?:PartialObjects["Attribute"],
			updateAttribute?:PartialObjects["Attribute"],
			removeAttribute?:PartialObjects["Attribute"],
			createCategorise?:PartialObjects["Categorise"],
			updateCategorise?:PartialObjects["Categorise"],
			removeCategorise?:PartialObjects["Categorise"],
			createBrand?:PartialObjects["Brand"],
			updateBrand?:PartialObjects["Brand"],
			removeBrand?:PartialObjects["Brand"]
	},
	["CreateAttributeInput"]: {
	/** Example field (placeholder) */
	exampleField:number
},
	["UpdateAttributeInput"]: {
	/** Example field (placeholder) */
	exampleField?:number,
	id:number
},
	["CreateCategoriseInput"]: {
	/** Example field (placeholder) */
	exampleField:number
},
	["UpdateCategoriseInput"]: {
	/** Example field (placeholder) */
	exampleField?:number,
	id:number
},
	["CreateBrandInput"]: {
	/** Example field (placeholder) */
	exampleField:number
},
	["UpdateBrandInput"]: {
	/** Example field (placeholder) */
	exampleField?:number,
	id:number
}
  }

// ------------------------------------------------------

// THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)

// ------------------------------------------------------

export type User = {
	__typename?: "User",
	id:number,
	provider:string,
	providerId:string,
	username:string,
	name:string,
	orders?:Order[],
	created_at:DateTime,
	updated_at:DateTime
}

/** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
export type DateTime = any

export type Order = {
	__typename?: "Order",
	id:number,
	alias:string,
	user:User,
	thing:Thing,
	created_at:DateTime,
	updated_at:DateTime
}

export type Thing = {
	__typename?: "Thing",
	id:number,
	name:string,
	orders?:Order[],
	created_at:DateTime,
	updated_at:DateTime
}

export type Attribute = {
	__typename?: "Attribute",
	/** Example field (placeholder) */
	exampleField:number
}

export type Categorise = {
	__typename?: "Categorise",
	/** Example field (placeholder) */
	exampleField:number
}

export type Brand = {
	__typename?: "Brand",
	/** Example field (placeholder) */
	exampleField:number
}

export type Query = {
	__typename?: "Query",
	users:User[],
	whoAmI:User,
	things:Thing[],
	orders:Order[],
	attributes:Attribute[],
	attribute:Attribute,
	categorise:Categorise,
	brands:Brand[],
	brand:Brand
}

export type Mutation = {
	__typename?: "Mutation",
	createThing:Thing,
	createOrder:Order,
	createAttribute:Attribute,
	updateAttribute:Attribute,
	removeAttribute:Attribute,
	createCategorise:Categorise,
	updateCategorise:Categorise,
	removeCategorise:Categorise,
	createBrand:Brand,
	updateBrand:Brand,
	removeBrand:Brand
}

export type CreateAttributeInput = {
		/** Example field (placeholder) */
	exampleField:number
}

export type UpdateAttributeInput = {
		/** Example field (placeholder) */
	exampleField?:number,
	id:number
}

export type CreateCategoriseInput = {
		/** Example field (placeholder) */
	exampleField:number
}

export type UpdateCategoriseInput = {
		/** Example field (placeholder) */
	exampleField?:number,
	id:number
}

export type CreateBrandInput = {
		/** Example field (placeholder) */
	exampleField:number
}

export type UpdateBrandInput = {
		/** Example field (placeholder) */
	exampleField?:number,
	id:number
}

export const AllTypesProps: Record<string,any> = {
	DateTime: "String",
	Query:{
		attribute:{
			id:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		categorise:{
			id:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		brand:{
			id:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:true
			}
		}
	},
	Mutation:{
		createThing:{
			name:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		createOrder:{
			alias:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:true
			},
			thingName:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		createAttribute:{
			createAttributeInput:{
				type:"CreateAttributeInput",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		updateAttribute:{
			updateAttributeInput:{
				type:"UpdateAttributeInput",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		removeAttribute:{
			id:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		createCategorise:{
			createCategoriseInput:{
				type:"CreateCategoriseInput",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		updateCategorise:{
			updateCategoriseInput:{
				type:"UpdateCategoriseInput",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		removeCategorise:{
			id:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		createBrand:{
			createBrandInput:{
				type:"CreateBrandInput",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		updateBrand:{
			updateBrandInput:{
				type:"UpdateBrandInput",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		removeBrand:{
			id:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:true
			}
		}
	},
	CreateAttributeInput:{
		exampleField:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:true
		}
	},
	UpdateAttributeInput:{
		exampleField:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		id:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:true
		}
	},
	CreateCategoriseInput:{
		exampleField:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:true
		}
	},
	UpdateCategoriseInput:{
		exampleField:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		id:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:true
		}
	},
	CreateBrandInput:{
		exampleField:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:true
		}
	},
	UpdateBrandInput:{
		exampleField:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		id:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:true
		}
	}
}

export const ReturnTypes: Record<string,any> = {
	User:{
		id:"Float",
		provider:"String",
		providerId:"String",
		username:"String",
		name:"String",
		orders:"Order",
		created_at:"DateTime",
		updated_at:"DateTime"
	},
	Order:{
		id:"Float",
		alias:"String",
		user:"User",
		thing:"Thing",
		created_at:"DateTime",
		updated_at:"DateTime"
	},
	Thing:{
		id:"Float",
		name:"String",
		orders:"Order",
		created_at:"DateTime",
		updated_at:"DateTime"
	},
	Attribute:{
		exampleField:"Int"
	},
	Categorise:{
		exampleField:"Int"
	},
	Brand:{
		exampleField:"Int"
	},
	Query:{
		users:"User",
		whoAmI:"User",
		things:"Thing",
		orders:"Order",
		attributes:"Attribute",
		attribute:"Attribute",
		categorise:"Categorise",
		brands:"Brand",
		brand:"Brand"
	},
	Mutation:{
		createThing:"Thing",
		createOrder:"Order",
		createAttribute:"Attribute",
		updateAttribute:"Attribute",
		removeAttribute:"Attribute",
		createCategorise:"Categorise",
		updateCategorise:"Categorise",
		removeCategorise:"Categorise",
		createBrand:"Brand",
		updateBrand:"Brand",
		removeBrand:"Brand"
	}
}

export class GraphQLError extends Error {
    constructor(public response: GraphQLResponse) {
      super("");
      console.error(response);
    }
    toString() {
      return "GraphQL Response Error";
    }
  }



export type UnwrapPromise<T> = T extends Promise<infer R> ? R : T;
export type ZeusState<T extends (...args: any[]) => Promise<any>> = NonNullable<
  UnwrapPromise<ReturnType<T>>
>;
export type ZeusHook<
  T extends (
    ...args: any[]
  ) => Record<string, (...args: any[]) => Promise<any>>,
  N extends keyof ReturnType<T>
> = ZeusState<ReturnType<T>[N]>;

type Func<P extends any[], R> = (...args: P) => R;
type AnyFunc = Func<any, any>;

type WithTypeNameValue<T> = T & {
  __typename?: true;
};

type AliasType<T> = WithTypeNameValue<T> & {
  __alias?: Record<string, WithTypeNameValue<T>>;
};

type NotUndefined<T> = T extends undefined ? never : T;

export type ResolverType<F> = NotUndefined<F extends [infer ARGS, any] ? ARGS : undefined>;

export type ArgsType<F extends AnyFunc> = F extends Func<infer P, any> ? P : never;

interface GraphQLResponse {
  data?: Record<string, any>;
  errors?: Array<{
    message: string;
  }>;
}

export type ValuesOf<T> = T[keyof T];

export type MapResolve<SRC, DST> = SRC extends {
    __interface: infer INTERFACE;
    __resolve: Record<string, { __typename?: string }> & infer IMPLEMENTORS;
  }
  ?
  ValuesOf<{
    [k in (keyof SRC['__resolve'] & keyof DST)]: ({
      [rk in (keyof SRC['__resolve'][k] & keyof DST[k])]: LastMapTypeSRCResolver<SRC['__resolve'][k][rk], DST[k][rk]>
    } & {
      __typename: SRC['__resolve'][k]['__typename']
    })
  }>
  :
  never;

export type MapInterface<SRC, DST> = SRC extends {
    __interface: infer INTERFACE;
    __resolve: Record<string, { __typename?: string }> & infer IMPLEMENTORS;
  }
  ?
  (MapResolve<SRC, DST> extends never ? {} : MapResolve<SRC, DST>) & {
  [k in (keyof SRC['__interface'] & keyof DST)]: LastMapTypeSRCResolver<SRC['__interface'][k], DST[k]>
} : never;

export type ValueToUnion<T> = T extends {
  __typename: infer R;
}
  ? {
      [P in keyof Omit<T, '__typename'>]: T[P] & {
        __typename: R;
      };
    }
  : T;

export type ObjectToUnion<T> = {
  [P in keyof T]: T[P];
}[keyof T];

type Anify<T> = { [P in keyof T]?: any };


type LastMapTypeSRCResolver<SRC, DST> = SRC extends undefined
  ? undefined
  : SRC extends Array<infer AR>
  ? LastMapTypeSRCResolver<AR, DST>[]
  : SRC extends { __interface: any; __resolve: any }
  ? MapInterface<SRC, DST>
  : SRC extends { __union: any; __resolve: infer RESOLVE }
  ? ObjectToUnion<MapType<RESOLVE, ValueToUnion<DST>>>
  : DST extends boolean
  ? SRC
  : MapType<SRC, DST>;

export type MapType<SRC extends Anify<DST>, DST> = DST extends boolean
  ? SRC
  : DST extends {
      __alias: any;
    }
  ? {
      [A in keyof DST["__alias"]]: Required<SRC> extends Anify<
        DST["__alias"][A]
      >
        ? MapType<Required<SRC>, DST["__alias"][A]>
        : never;
    } &
      {
        [Key in keyof Omit<DST, "__alias">]: DST[Key] extends [
          any,
          infer PAYLOAD
        ]
          ? LastMapTypeSRCResolver<SRC[Key], PAYLOAD>
          : LastMapTypeSRCResolver<SRC[Key], DST[Key]>;
      }
  : {
      [Key in keyof DST]: DST[Key] extends [any, infer PAYLOAD]
        ? LastMapTypeSRCResolver<SRC[Key], PAYLOAD>
        : LastMapTypeSRCResolver<SRC[Key], DST[Key]>;
    };

type OperationToGraphQL<V, T> = <Z extends V>(o: Z | V, variables?: Record<string, any>) => Promise<MapType<T, Z>>;

type CastToGraphQL<V, T> = (
  resultOfYourQuery: any
) => <Z extends V>(o: Z | V) => MapType<T, Z>;

type fetchOptions = ArgsType<typeof fetch>;

export type SelectionFunction<V> = <T>(t: T | V) => T;
type FetchFunction = (query: string, variables?: Record<string, any>) => Promise<any>;



export const ZeusSelect = <T>() => ((t: any) => t) as SelectionFunction<T>;

export const ScalarResolver = (scalar: string, value: any) => {
  switch (scalar) {
    case 'String':
      return  `${JSON.stringify(value)}`;
    case 'Int':
      return `${value}`;
    case 'Float':
      return `${value}`;
    case 'Boolean':
      return `${value}`;
    case 'ID':
      return `"${value}"`;
    case 'enum':
      return `${value}`;
    case 'scalar':
      return `${value}`;
    default:
      return false;
  }
};


export const TypesPropsResolver = ({
    value,
    type,
    name,
    key,
    blockArrays
}: {
    value: any;
    type: string;
    name: string;
    key?: string;
    blockArrays?: boolean;
}): string => {
    if (value === null) {
        return `null`;
    }
    let resolvedValue = AllTypesProps[type][name];
    if (key) {
        resolvedValue = resolvedValue[key];
    }
    if (!resolvedValue) {
        throw new Error(`Cannot resolve ${type} ${name}${key ? ` ${key}` : ''}`)
    }
    const typeResolved = resolvedValue.type;
    const isArray = resolvedValue.array;
    const isArrayRequired = resolvedValue.arrayRequired;
    if (typeof value === 'string' && value.startsWith(`ZEUS_VAR$`)) {
        const isRequired = resolvedValue.required ? '!' : '';
        let t = `${typeResolved}`;
        if (isArray) {
          if (isRequired) {
              t = `${t}!`;
          }
          t = `[${t}]`;
          if(isArrayRequired){
            t = `${t}!`;
          }
        }else{
          if (isRequired) {
                t = `${t}!`;
          }
        }
        return `\$${value.split(`ZEUS_VAR$`)[1]}__ZEUS_VAR__${t}`;
    }
    if (isArray && !blockArrays) {
        return `[${value
        .map((v: any) => TypesPropsResolver({ value: v, type, name, key, blockArrays: true }))
        .join(',')}]`;
    }
    const reslovedScalar = ScalarResolver(typeResolved, value);
    if (!reslovedScalar) {
        const resolvedType = AllTypesProps[typeResolved];
        if (typeof resolvedType === 'object') {
        const argsKeys = Object.keys(resolvedType);
        return `{${argsKeys
            .filter((ak) => value[ak] !== undefined)
            .map(
            (ak) => `${ak}:${TypesPropsResolver({ value: value[ak], type: typeResolved, name: ak })}`
            )}}`;
        }
        return ScalarResolver(AllTypesProps[typeResolved], value) as string;
    }
    return reslovedScalar;
};


const isArrayFunction = (
  parent: string[],
  a: any[]
) => {
  const [values, r] = a;
  const [mainKey, key, ...keys] = parent;
  const keyValues = Object.keys(values).filter((k) => typeof values[k] !== 'undefined');

  if (!keys.length) {
      return keyValues.length > 0
        ? `(${keyValues
            .map(
              (v) =>
                `${v}:${TypesPropsResolver({
                  value: values[v],
                  type: mainKey,
                  name: key,
                  key: v
                })}`
            )
            .join(',')})${r ? traverseToSeekArrays(parent, r) : ''}`
        : traverseToSeekArrays(parent, r);
    }

  const [typeResolverKey] = keys.splice(keys.length - 1, 1);
  let valueToResolve = ReturnTypes[mainKey][key];
  for (const k of keys) {
    valueToResolve = ReturnTypes[valueToResolve][k];
  }

  const argumentString =
    keyValues.length > 0
      ? `(${keyValues
          .map(
            (v) =>
              `${v}:${TypesPropsResolver({
                value: values[v],
                type: valueToResolve,
                name: typeResolverKey,
                key: v
              })}`
          )
          .join(',')})${r ? traverseToSeekArrays(parent, r) : ''}`
      : traverseToSeekArrays(parent, r);
  return argumentString;
};


const resolveKV = (k: string, v: boolean | string | { [x: string]: boolean | string }) =>
  typeof v === 'boolean' ? k : typeof v === 'object' ? `${k}{${objectToTree(v)}}` : `${k}${v}`;


const objectToTree = (o: { [x: string]: boolean | string }): string =>
  `{${Object.keys(o).map((k) => `${resolveKV(k, o[k])}`).join(' ')}}`;


const traverseToSeekArrays = (parent: string[], a?: any): string => {
  if (!a) return '';
  if (Object.keys(a).length === 0) {
    return '';
  }
  let b: Record<string, any> = {};
  if (Array.isArray(a)) {
    return isArrayFunction([...parent], a);
  } else {
    if (typeof a === 'object') {
      Object.keys(a)
        .filter((k) => typeof a[k] !== 'undefined')
        .map((k) => {
        if (k === '__alias') {
          Object.keys(a[k]).map((aliasKey) => {
            const aliasOperations = a[k][aliasKey];
            const aliasOperationName = Object.keys(aliasOperations)[0];
            const aliasOperation = aliasOperations[aliasOperationName];
            b[
              `${aliasOperationName}__alias__${aliasKey}: ${aliasOperationName}`
            ] = traverseToSeekArrays([...parent, aliasOperationName], aliasOperation);
          });
        } else {
          b[k] = traverseToSeekArrays([...parent, k], a[k]);
        }
      });
    } else {
      return '';
    }
  }
  return objectToTree(b);
};  


const buildQuery = (type: string, a?: Record<any, any>) => 
  traverseToSeekArrays([type], a);


const inspectVariables = (query: string) => {
  const regex = /\$\b\w*__ZEUS_VAR__\[?[^!^\]^\s^,^\)^\}]*[!]?[\]]?[!]?/g;
  let result;
  const AllVariables: string[] = [];
  while ((result = regex.exec(query))) {
    if (AllVariables.includes(result[0])) {
      continue;
    }
    AllVariables.push(result[0]);
  }
  if (!AllVariables.length) {
    return query;
  }
  let filteredQuery = query;
  AllVariables.forEach((variable) => {
    while (filteredQuery.includes(variable)) {
      filteredQuery = filteredQuery.replace(variable, variable.split('__ZEUS_VAR__')[0]);
    }
  });
  return `(${AllVariables.map((a) => a.split('__ZEUS_VAR__'))
    .map(([variableName, variableType]) => `${variableName}:${variableType}`)
    .join(', ')})${filteredQuery}`;
};


const queryConstruct = (t: 'query' | 'mutation' | 'subscription', tName: string) => (o: Record<any, any>) =>
  `${t.toLowerCase()}${inspectVariables(buildQuery(tName, o))}`;
  

const fullChainConstruct = (fn: FetchFunction) => (t: 'query' | 'mutation' | 'subscription', tName: string) => (
  o: Record<any, any>,
  variables?: Record<string, any>,
) => fn(queryConstruct(t, tName)(o), variables).then((r:any) => { 
  seekForAliases(r)
  return r
});


const seekForAliases = (response: any) => {
  const traverseAlias = (value: any) => {
    if (Array.isArray(value)) {
      value.forEach(seekForAliases);
    } else {
      if (typeof value === 'object') {
        seekForAliases(value);
      }
    }
  };
  if (typeof response === 'object' && response) {
    const keys = Object.keys(response);
    if (keys.length < 1) {
      return;
    }
    keys.forEach((k) => {
      const value = response[k];
      if (k.indexOf('__alias__') !== -1) {
        const [operation, alias] = k.split('__alias__');
        response[alias] = {
          [operation]: value,
        };
        delete response[k];
      }
      traverseAlias(value);
    });
  }
};


export const $ = (t: TemplateStringsArray): any => `ZEUS_VAR$${t.join('')}`;


const handleFetchResponse = (
  response: Parameters<Extract<Parameters<ReturnType<typeof fetch>['then']>[0], Function>>[0]
): Promise<GraphQLResponse> => {
  if (!response.ok) {
    return new Promise((_, reject) => {
      response.text().then(text => {
        try { reject(JSON.parse(text)); }
        catch (err) { reject(text); }
      }).catch(reject);
    });
  }
  return response.json();
};

const apiFetch = (options: fetchOptions) => (query: string, variables: Record<string, any> = {}) => {
    let fetchFunction = fetch;
    let queryString = query;
    let fetchOptions = options[1] || {};
    if (fetchOptions.method && fetchOptions.method === 'GET') {
      queryString = encodeURIComponent(query);
      return fetchFunction(`${options[0]}?query=${queryString}`, fetchOptions)
        .then(handleFetchResponse)
        .then((response: GraphQLResponse) => {
          if (response.errors) {
            throw new GraphQLError(response);
          }
          return response.data;
        });
    }
    return fetchFunction(`${options[0]}`, {
      body: JSON.stringify({ query: queryString, variables }),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      ...fetchOptions
    })
      .then(handleFetchResponse)
      .then((response: GraphQLResponse) => {
        if (response.errors) {
          throw new GraphQLError(response);
        }
        return response.data;
      });
  };
  


export const Thunder = (fn: FetchFunction) => ({
  query: ((o: any, variables) =>
    fullChainConstruct(fn)('query', 'Query')(o, variables).then(
      (response: any) => response
    )) as OperationToGraphQL<ValueTypes["Query"],Query>,
mutation: ((o: any, variables) =>
    fullChainConstruct(fn)('mutation', 'Mutation')(o, variables).then(
      (response: any) => response
    )) as OperationToGraphQL<ValueTypes["Mutation"],Mutation>
});

export const Chain = (...options: fetchOptions) => ({
  query: ((o: any, variables) =>
    fullChainConstruct(apiFetch(options))('query', 'Query')(o, variables).then(
      (response: any) => response
    )) as OperationToGraphQL<ValueTypes["Query"],Query>,
mutation: ((o: any, variables) =>
    fullChainConstruct(apiFetch(options))('mutation', 'Mutation')(o, variables).then(
      (response: any) => response
    )) as OperationToGraphQL<ValueTypes["Mutation"],Mutation>
});
export const Zeus = {
  query: (o:ValueTypes["Query"]) => queryConstruct('query', 'Query')(o),
mutation: (o:ValueTypes["Mutation"]) => queryConstruct('mutation', 'Mutation')(o)
};
export const Cast = {
  query: ((o: any) => (_: any) => o) as CastToGraphQL<
  ValueTypes["Query"],
  Query
>,
mutation: ((o: any) => (_: any) => o) as CastToGraphQL<
  ValueTypes["Mutation"],
  Mutation
>
};
export const Selectors = {
  query: ZeusSelect<ValueTypes["Query"]>(),
mutation: ZeusSelect<ValueTypes["Mutation"]>()
};
  