import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { gql } from '@apollo/client';
import * as React from 'react';
import * as Apollo from '@apollo/client';
import * as ApolloReactComponents from '@apollo/client/react/components';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Date custom scalar type. This is a direct mapping to the date type in javascript */
  Date: any;
};

export type Insight = {
  financialPotentialFrom?: Maybe<Scalars['Float']>;
  financialPotentialTo?: Maybe<Scalars['Float']>;
  insightCreatedAt: Scalars['Date'];
  insightData: Scalars['String'];
  insightUUID: Scalars['String'];
  projectId: Scalars['Int'];
  typeId: Scalars['Int'];
};

export type InsightTypeDescription = {
  insightDataType: Scalars['String'];
  shortDescription: Scalars['String'];
  text: Scalars['String'];
  title: Scalars['String'];
  typeId: Scalars['Int'];
  typeName: Scalars['String'];
};

export type Mutation = {
  AddProjectUser?: Maybe<Scalars['Boolean']>;
  AlterInsight?: Maybe<Insight>;
  AlterProject?: Maybe<Project>;
  DisconnectQuickbooksFromProject?: Maybe<Scalars['Boolean']>;
};


export type MutationAddProjectUserArgs = {
  projectId: Scalars['Int'];
  userEmail: Scalars['String'];
};


export type MutationAlterInsightArgs = {
  insightUUID: Scalars['String'];
  isCompleted?: InputMaybe<Scalars['Boolean']>;
  isIgnored?: InputMaybe<Scalars['Boolean']>;
  isNotUseful?: InputMaybe<Scalars['Boolean']>;
  typeId: Scalars['Int'];
};


export type MutationAlterProjectArgs = {
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  name?: InputMaybe<Scalars['String']>;
};

export type Project = {
  description: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type Query = {
  AllProjects?: Maybe<Array<Project>>;
  GenerateQuickbooksAuthUri?: Maybe<Scalars['String']>;
  GetInsightTypeDescriptions?: Maybe<Array<Maybe<InsightTypeDescription>>>;
  GetInsights?: Maybe<Array<Maybe<Insight>>>;
  IsProjectConnectedToQuickbooks?: Maybe<Scalars['Boolean']>;
  Me: User;
  SingleProject?: Maybe<Project>;
};


export type QueryGetInsightTypeDescriptionsArgs = {
  typeId?: InputMaybe<Scalars['Int']>;
};


export type QueryGetInsightsArgs = {
  isCompleted?: InputMaybe<Scalars['Boolean']>;
  isIgnored?: InputMaybe<Scalars['Boolean']>;
  isNotUseful?: InputMaybe<Scalars['Boolean']>;
  typeId?: InputMaybe<Scalars['Int']>;
};


export type QuerySingleProjectArgs = {
  id: Scalars['Int'];
};

export type User = {
  defaultProjectId?: Maybe<Scalars['Int']>;
  defaultProjectName?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Insight: ResolverTypeWrapper<Insight>;
  InsightTypeDescription: ResolverTypeWrapper<InsightTypeDescription>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Mutation: ResolverTypeWrapper<{}>;
  Project: ResolverTypeWrapper<Project>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  User: ResolverTypeWrapper<User>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  Date: Scalars['Date'];
  Float: Scalars['Float'];
  Insight: Insight;
  InsightTypeDescription: InsightTypeDescription;
  Int: Scalars['Int'];
  Mutation: {};
  Project: Project;
  Query: {};
  String: Scalars['String'];
  User: User;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type InsightResolvers<ContextType = any, ParentType extends ResolversParentTypes['Insight'] = ResolversParentTypes['Insight']> = {
  financialPotentialFrom?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  financialPotentialTo?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  insightCreatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  insightData?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  insightUUID?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  typeId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InsightTypeDescriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['InsightTypeDescription'] = ResolversParentTypes['InsightTypeDescription']> = {
  insightDataType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  shortDescription?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  typeId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  typeName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  AddProjectUser?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationAddProjectUserArgs, 'projectId' | 'userEmail'>>;
  AlterInsight?: Resolver<Maybe<ResolversTypes['Insight']>, ParentType, ContextType, RequireFields<MutationAlterInsightArgs, 'insightUUID' | 'typeId'>>;
  AlterProject?: Resolver<Maybe<ResolversTypes['Project']>, ParentType, ContextType, RequireFields<MutationAlterProjectArgs, 'id'>>;
  DisconnectQuickbooksFromProject?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
};

export type ProjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['Project'] = ResolversParentTypes['Project']> = {
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  AllProjects?: Resolver<Maybe<Array<ResolversTypes['Project']>>, ParentType, ContextType>;
  GenerateQuickbooksAuthUri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  GetInsightTypeDescriptions?: Resolver<Maybe<Array<Maybe<ResolversTypes['InsightTypeDescription']>>>, ParentType, ContextType, RequireFields<QueryGetInsightTypeDescriptionsArgs, never>>;
  GetInsights?: Resolver<Maybe<Array<Maybe<ResolversTypes['Insight']>>>, ParentType, ContextType, RequireFields<QueryGetInsightsArgs, never>>;
  IsProjectConnectedToQuickbooks?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  Me?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  SingleProject?: Resolver<Maybe<ResolversTypes['Project']>, ParentType, ContextType, RequireFields<QuerySingleProjectArgs, 'id'>>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  defaultProjectId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  defaultProjectName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Date?: GraphQLScalarType;
  Insight?: InsightResolvers<ContextType>;
  InsightTypeDescription?: InsightTypeDescriptionResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Project?: ProjectResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};



export const Teest423Document = gql`
    query teest423($id: Boolean!, $name: String!) {
  GetInsights {
    financialPotentialTo
    financialPotentialFrom
    typeId
    insightData
    insightUUID
    insightCreatedAt
    projectId
  }
  GetInsightTypeDescriptions {
    text
    title
    typeId
    typeName
    insightDataType
    shortDescription
  }
}
    `;
export type Teest423ComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<Teest423Query, Teest423QueryVariables>, 'query'> & ({ variables: Teest423QueryVariables; skip?: boolean; } | { skip: boolean; });

    export const Teest423Component = (props: Teest423ComponentProps) => (
      <ApolloReactComponents.Query<Teest423Query, Teest423QueryVariables> query={Teest423Document} {...props} />
    );
    
export type Teest423Props<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<Teest423Query, Teest423QueryVariables>
    } & TChildProps;
export function withTeest423<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  Teest423Query,
  Teest423QueryVariables,
  Teest423Props<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, Teest423Query, Teest423QueryVariables, Teest423Props<TChildProps, TDataName>>(Teest423Document, {
      alias: 'teest423',
      ...operationOptions
    });
};

/**
 * __useTeest423Query__
 *
 * To run a query within a React component, call `useTeest423Query` and pass it any options that fit your needs.
 * When your component renders, `useTeest423Query` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTeest423Query({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useTeest423Query(baseOptions: Apollo.QueryHookOptions<Teest423Query, Teest423QueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Teest423Query, Teest423QueryVariables>(Teest423Document, options);
      }
export function useTeest423LazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Teest423Query, Teest423QueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Teest423Query, Teest423QueryVariables>(Teest423Document, options);
        }
export type Teest423QueryHookResult = ReturnType<typeof useTeest423Query>;
export type Teest423LazyQueryHookResult = ReturnType<typeof useTeest423LazyQuery>;
export type Teest423QueryResult = Apollo.QueryResult<Teest423Query, Teest423QueryVariables>;
export const DsanjeafDocument = gql`
    query dsanjeaf($id: Boolean!, $name: String!) {
  GetInsights {
    financialPotentialTo
    financialPotentialFrom
    typeId
    insightData
    insightUUID
    insightCreatedAt
    projectId
  }
  GetInsightTypeDescriptions {
    text
    title
    typeId
    typeName
    insightDataType
    shortDescription
  }
}
    `;
export type DsanjeafComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<DsanjeafQuery, DsanjeafQueryVariables>, 'query'> & ({ variables: DsanjeafQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const DsanjeafComponent = (props: DsanjeafComponentProps) => (
      <ApolloReactComponents.Query<DsanjeafQuery, DsanjeafQueryVariables> query={DsanjeafDocument} {...props} />
    );
    
export type DsanjeafProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<DsanjeafQuery, DsanjeafQueryVariables>
    } & TChildProps;
export function withDsanjeaf<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DsanjeafQuery,
  DsanjeafQueryVariables,
  DsanjeafProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, DsanjeafQuery, DsanjeafQueryVariables, DsanjeafProps<TChildProps, TDataName>>(DsanjeafDocument, {
      alias: 'dsanjeaf',
      ...operationOptions
    });
};

/**
 * __useDsanjeafQuery__
 *
 * To run a query within a React component, call `useDsanjeafQuery` and pass it any options that fit your needs.
 * When your component renders, `useDsanjeafQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDsanjeafQuery({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useDsanjeafQuery(baseOptions: Apollo.QueryHookOptions<DsanjeafQuery, DsanjeafQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DsanjeafQuery, DsanjeafQueryVariables>(DsanjeafDocument, options);
      }
export function useDsanjeafLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DsanjeafQuery, DsanjeafQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DsanjeafQuery, DsanjeafQueryVariables>(DsanjeafDocument, options);
        }
export type DsanjeafQueryHookResult = ReturnType<typeof useDsanjeafQuery>;
export type DsanjeafLazyQueryHookResult = ReturnType<typeof useDsanjeafLazyQuery>;
export type DsanjeafQueryResult = Apollo.QueryResult<DsanjeafQuery, DsanjeafQueryVariables>;